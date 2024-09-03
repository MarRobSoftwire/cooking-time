import { Ingredient } from "../types/ingredient";
import { connection } from "./create-connection";

export const getAllIngredientsFromDb = async (): Promise<Ingredient[]> =>
  new Promise<Ingredient[]>((resolve, reject) => {
    connection.query("SELECT * FROM ingredients", (error, results) => {
      if (error) reject(error);

      resolve(results);
    });
  });

export const insertIngredientIntoDb = async (names: string[]): Promise<void> =>
  new Promise<void>((resolve, reject) => {
    connection.query(
      `INSERT INTO ingredients (name) VALUES ('${names.join("'), ('")}');`,
      (error) => {
        if (error) reject(error);

        resolve();
      }
    );
  });
