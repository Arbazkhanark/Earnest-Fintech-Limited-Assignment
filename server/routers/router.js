const express = require("express");
const router = express.Router();
const dbConnection = require("../database");

router.post("/addTask", async (req, res) => {
    const { title, description, completed } = req.body;
    try {
        const db = await dbConnection(); // Get a connected database object
        const [result] = await db.query(`INSERT INTO tasks (title, description, completed) VALUES (?, ?, ?)`, [title, description, completed]);
        console.log(result)
        res.status(201).send({ success: true, data: result });
    } catch (error) {
        console.log(error);
        res.status(500).send({ success: false, error: "Internal Server error" });
    }
});





//GET
router.get("/tasks", async (req, res) => {
    try {
        const db = await dbConnection(); // Get a connected database object
        const [tasks] = await db.query(`SELECT * FROM tasks`);
        res.status(200).send({ success: true, data: tasks });
    } catch (error) {
        console.log(error);
        res.status(500).send({ success: false, error: "Internal Server error" });
    }
});



//UPDATE
router.put("/updateTask/:id", async (req, res) => {
    const taskId = req.params.id;
    const { title, description, completed } = req.body;
    try {
        const db = await dbConnection(); // Get a connected database object
        const [result] = await db.query(`UPDATE tasks SET title=?, description=?, completed=? WHERE id=?`, [title, description, completed, taskId]);
        res.status(200).send({ success: true, data: result });
    } catch (error) {
        console.log(error);
        res.status(500).send({ success: false, error: "Internal Server error" });
    }
});


//DELETE
router.delete("/deleteTask/:id", async (req, res) => {
    const taskId = req.params.id;
    try {
        const db = await dbConnection(); // Get a connected database object
        const [result] = await db.query(`DELETE FROM tasks WHERE id=?`, [taskId]);
        res.status(200).send({ success: true, data: result });
    } catch (error) {
        console.log(error);
        res.status(500).send({ success: false, error: "Internal Server error" });
    }
});


module.exports = router;
