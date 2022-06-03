const express = require("express");
const Quest = require("../quest");
const router = express.Router();
const fs = require("fs");
const readData = (filePath) => {
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
};

router.post("/input", async (req, res) => {
    try {
        const data = readData("./tmp.json").data;
        data.map(async (question) => {
            console.log(question);
            const quest = await Quest.create({
                question: question.question,
                answer: question.answer,
                optionA: question.arr[0],
                optionB: question.arr[1],
                optionC: question.arr[2],
                optionD: question.arr[3],
            });
        });

        res.send(data);
    } catch (error) {
        console.log(error.message());
    }
});

router.get("/questions", (req, res) => {
    Quest.find((err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    });
    // res.status(201).send("Welcome to mongodb API");
});

module.exports = router;
