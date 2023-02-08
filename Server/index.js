const express  = require("express");
const app = express();
const cors = require("cors");
app.use(
    cors({
        origin: "*",
    })
);

app.listen(3000);
app.get("/sendMessage", function (req,res) {
    res.send();
});