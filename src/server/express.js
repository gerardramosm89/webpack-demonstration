import express from "express";
import path from "path";

const server = express();

const staticMiddleware = express.static("dist");
server.use(staticMiddleware);
const port = 8080;

server.listen(port, () => {
  console.log(`server is running on port ${port}`)
});