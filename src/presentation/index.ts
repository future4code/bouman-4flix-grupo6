import express, { Request, Response } from "express";
import knex from "knex";

const app = express();
app.use(express.json());

app.post("/movie", async(req: Request, res: Response) => {
    try {
        if(!req.body) {
            throw new Error ("must send a body")
        }
    
        const db = knex({
            client: "mysql",
            connection: {
                host: "ec2-18-229-236-15.sa-east-1.compute.amazonaws.com",
                port: 3306,
                user: "christhopher",
                password: "rJm2rCNmZL8sDBPSwpgv",
                database: "bouman-christhopher"
            }
        });
    
        await db.raw(
            `
            INSERT INTO movies (id, title, date, length, synopsis, picture, link)
            VALUES (
                "002",
                "${req.body.title}",
                "${req.body.date}",
                ${0},
                "${req.body.synopsis}",
                "${req.body.pictute}",
                "${req.body.link}"
            );
            `
        );
    
        res.status(200).send({
            message: "Movie created successfully"
        })

    } catch (err) {
        res.status(400).send({
            message: err.message
        })
    }
});

export default app;