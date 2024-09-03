import express from "express";
import bodyParser from "body-parser";
import { getAllIngredients } from "./controllers/get-all-ingredients";
import { postNewIngredients } from "./controllers/post-ingredients";

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/ingredients", getAllIngredients);
app.post("/ingredients", postNewIngredients);


app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
