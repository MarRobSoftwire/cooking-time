import { Request, Response } from "express";
import { getAllIngredientsFromDb } from "../repositories/ingredients";

export const getAllIngredients = async (req: Request, res: Response) => {
  const stuff = await getAllIngredientsFromDb();
  res.status(200).send(stuff);
};
