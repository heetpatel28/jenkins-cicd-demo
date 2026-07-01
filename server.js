const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Jenkins CI/CD Pipeline Working Successfully");
});

app.listen(PORT, () => {
    console.log(`Server Running On Port ${PORT}`);
});