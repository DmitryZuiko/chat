import express from 'express';
import io from 'socket.io'
import path from "path";

const app = express();

const port = 8080;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '/index.html'));
})

const start = async() => {
    try {
        app.listen(port, () => {
            console.log(`Example app listening at http://localhost:${ port }`);
        });
    } catch (e) {
        console.log(e);
    }
};

start();



