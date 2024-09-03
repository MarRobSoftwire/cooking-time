CREATE TABLE ingredients (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE recipes (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE ingredients_recipes_xref (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  ingredient_id INT NOT NULL,
  recipe_id INT NOT NULL,
  is_optional BOOLEAN,
  FOREIGN KEY (ingredient_id) REFERENCES ingredients(id),
  FOREIGN KEY (recipe_id) REFERENCES recipes(id)
);

INSERT INTO ingredients (name) VALUES ('hummus'), ('falafels'), ('pickles'), ('veggie sosig'), ('potato'), ('gravy'), ('pitta'), ('butter');

INSERT INTO recipes (name) VALUES ('sosig n mash'), ('falaffy wrap');

INSERT INTO ingredients_recipes_xref (ingredient_id, recipe_id, is_optional) VALUES (1, 2, 0), (2, 2, 0), (3, 2, 1), (4,1,0), (5,1, 0), (6, 1, 0), (7, 2, 0), (8, 1, 1);

SELECT ingredients.name AS ingredient, ingredients_recipes_xref.recipe_id AS recipe_id
  FROM ingredients_recipes_xref INNER JOIN ingredients ON ingredients_recipes_xref.ingredient_id = ingredients.id;
