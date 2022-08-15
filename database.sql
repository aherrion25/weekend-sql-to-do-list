CREATE TABLE "task"(
	"id" serial primary key,
	"honey_do" varchar (200) not null,
	"completed" boolean default false
);

-- POST
INSERT INTO "task" ("honey_do", "completed")
VALUES ('Do laundry', false),('mow lawn', false);

-- GET
SELECT * FROM "task" ORDER BY "completed";

-- PUT
UPDATE "task" SET "completed" = true WHERE "id" = 1;

-- DELETE
DELETE FROM "task" WHERE "id" = 5;