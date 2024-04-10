// Question Write the name of tables and their columns that need to be created in the DB to store
following relationship(DO NOT draw ER diagrams, Only basic columns and relationship
need to be shown)
There are many hotels, each hotel can have multiple menus, each menu can have
multiple food items, food items can belong to multiple menus.

  
// SQL Queries for the Hotel-Menu-FoodItem Relationship
  
// 1. Get all hotels and their menus:
  
SELECT h.hotel_name, m.menu_name
FROM Hotels h
INNER JOIN Menus m ON h.hotel_id = m.hotel_id;

// 2. Get all food items in a specific menu:

SELECT f.food_name
FROM FoodItems f
INNER JOIN MenuItems mi ON f.food_item_id = mi.food_item_id
WHERE mi.menu_id = <menu_id>;

// 3. Create a new menu for a hotel:

INSERT INTO Menus (hotel_id, menu_name)
VALUES (<hotel_id>, '<menu_name>');


// 4. Add a food item to a menu (assuming a separate MenuItems table exists):

INSERT INTO MenuItems (menu_id, food_item_id)
VALUES (<menu_id>, <food_item_id>);


