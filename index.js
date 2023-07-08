import express from "express";
import { readAll as readAllPosts } from "dbmod";

const app = express();
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get("/posts", readAllPosts);

app.listen(process.env.PORT || 3000);
