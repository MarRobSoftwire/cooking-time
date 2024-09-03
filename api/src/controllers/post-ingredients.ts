import { Request, Response } from "express";
import { insertIngredientIntoDb } from "../repositories/ingredients";

export const postNewIngredients = async (req: Request, res: Response) => {
  console.log({ body: req.body});
  await insertIngredientIntoDb(req.body.names);

  res.sendStatus(201);
};
