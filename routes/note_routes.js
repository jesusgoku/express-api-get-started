const ObjectID = require('mongodb').ObjectID;
const mongoose = require('mongoose');
const Note = mongoose.model('Notes');

module.exports = function(app, db) {
    app.get('/notes/:id', (req, res) => {
        Note.findById(req.params.id, (err, result) => {
            if (err) {
                res
                    .status(500)
                    .json({ error: 'An error has ocurred' })
                ;
            } else {
                res
                    .status(result ? 200 : 404)
                    .json(result)
                ;
            } 
        });

        // const query = { '_id': new ObjectID(req.params.id) };
        // db.collection('notes').findOne(query, (err, result) => {
        //     if (err) {
        //         res
        //             .status(500)
        //             .json({ error: 'An error has ocurred' })
        //         ;
        //     } else {
        //         res
        //             .status(result ? 200 : 404)
        //             .json(result)
        //         ;
        //     }
        // });
    });

    app.delete('/notes/:id', (req, res) => {
        Note.remove({ _id: req.params.id }, (err, result) => {
            if (err) {
                res
                    .status(500)
                    .json({ error: 'An error has ocurred' });
            } else {
                res
                    .sendStatus(204);
            }
        });

        // const query = { '_id': new ObjectID(req.params.id) };
        // db.collection('notes').remove(query, (err, result) => {
        //     if (err) {
        //         res
        //             .status(500)
        //             .json({ error: 'An error has ocurred' });
        //     } else {
        //         res
        //             .sendStatus(204);
        //     }
        // });
    });

    app.put('/notes/:id', (req, res) => {
        Note.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, result) => {
            if (err) {
                res
                    .status(500)
                    .json({ error: 'An error has ocurred' })
                ;
            } else {
                res
                    .status(200)
                    .json(result)
                ;
            }
        });

        // const query = { '_id': new ObjectID(req.params.id) };
        // const note = req.body;
        // db.collection('notes').update(query, note, (err, result) => {
        //     if (err) {
        //         res
        //             .status(500)
        //             .json({ error: 'An error has ocurred' })
        //         ;
        //     } else {
        //         res
        //             .status(200)
        //             .json(note)
        //         ;
        //     }
        // });
    });

    app.post('/notes', (req, res) => {
        (new Note(req.body))
            .save((err, result) => {
                if (err) {
                    res
                        .status(500)
                        .json({ 'error': 'An error has ocurred' })
                    ;
                } else {
                    res
                        .status(201)
                        .json(result)
                    ;
                }
            })
        ;

        // const note = req.body;
        // db.collection('notes').insert(note, (err, results) => {
        //     if (err) {
        //         res
        //             .status(500)
        //             .json({ 'error': 'An error has ocurred' })
        //         ;
        //     } else {
        //         res
        //             .status(201)
        //             .json(results.ops[0])
        //         ;
        //     }
        // });
    });
}