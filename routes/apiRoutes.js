const noteData = require('../db/db');

module.exports = (app) => {
    app.get('/api/notes', (req, res) => res.json(noteData));

    app.post('/api/notes', (req, res) => {
        noteData.push(req.body);
        res.json(true);
    })

    app.delete('/api/notes', (req, res) => {
        for (let i =0; i < noteData.length; i++) {
            if (noteData[i] == req.body) {
                noteData.pop(noteData[i]);
            }
        }
    })
}