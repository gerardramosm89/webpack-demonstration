import express from "express";
import path from "path";

const server = express();

const staticMiddleware = express.static("dist");
server.use(staticMiddleware);
const port = 8082;

server.get('*', function(req, res) {
  console.log('hit the catchall');
  res.sendFile(path.join(__dirname, '../../dist/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

server.listen(port, () => {
  console.log(`server is running on port ${port}`)
});