const express = require("express");
const app = express();
const port = 3000;

// quiz1
app.get("/chocolate", (req, res) => {
    const { q } = req.query;
    res.send(`your query: ${q}`);
});

// quiz2
app.get("/multiply", (req, res) => {
    const { value1, value2 } = req.query;
    res.send(`${value1} * ${value2} = ${value1 * value2}`);
});

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
