import express from 'express';
import routes from './services';

const app = express();
const port = process.env.port || 3000;
const apiVersion = "/api/v1";

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(`${apiVersion}`, routes);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}${apiVersion}`);
});