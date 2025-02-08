const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const users = [{ username: "student1", password: "password123" }];

app.post("/login", (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});
app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});
