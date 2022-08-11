CREATE TABLE "task"(
	"id" serial primary key,
	"honey_do" varchar (200) not null,
	"completed" boolean default false
);

INSERT INTO "task" ("honey_do", "completed")
VALUES ('Do laundry', false),('mow lawn', false);

SELECT * FROM "task" ORDER BY "completed";