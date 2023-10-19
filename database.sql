-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data
CREATE TABLE "shoppinglist" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR(50) NOT NULL,
	"quantity" INTEGER DEFAULT 1,
	"unit" VARCHAR(50),
	"purchased" BOOLEAN DEFAULT false
);

INSERT INTO "shoppinglist" 
    ("name", "quantity", "unit")
VALUES 
    ('apples', 5, 'lbs'),
    ('bread', 1, 'loaf'),
    ('carrots', 1, 'bag'),
    ('Lucky Charms', 2, 'boxes'),
    ('Eggs', 1, 'dozen'),
    ('Cheese', 1, 'lbs');