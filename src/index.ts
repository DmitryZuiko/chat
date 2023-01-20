import express from 'express';
import io from 'socket.io'

const app = express();

const port = 8080;

const start = async() => {
    try {
        app.listen(port, () => {
            console.log(`Example app listening at http://localhost:${port}`);
        });
    } catch (e) {
        console.log(e);
    }
};

start();



