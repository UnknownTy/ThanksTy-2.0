import express, {Request, Response, Application} from 'express';
import {start} from "./bot/main"
const app: Application = express();

app.get('/', (req: Request, res: Response) => {
    res.send("Hello");
});

app.listen(5000, () => console.log("Server running"))
console.log("Inital text!")
start()