const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const bodyParser = require('body-parser');
const adapter = new FileSync('db.json')
const db = low(adapter)

const path = require('path');
const cors = require('cors');


db.defaults({ posts: [] })
    .write();

io.on('connection', (client) => {
    console.log('Client Connected');
})
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, 'build')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.post('/understanding', (req, res) => {
    const { understanding } = req.body;
    db.get('posts')
        .push({ understanding })
        .write();
    io.emit('update', { understanding });
    res.sendStatus(200);
    res.end();
});
app.get('/understandings', (_, res) => {
    res.send(db.get('posts'));
})
server.listen(8001, () => {
    console.log("Server Started");
});