const express = require('express');

const app = express();
const PORT = 3000;

app.use("/test",(req, res) => {
    res.send("Hello from the test server");
})

app.use("/hello",(req, res) => {
    res.send("Namaste!");
})

app.use("/", (req, res) => {
    res.send("Hello World");
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
    console.log(`App live on server http://localhost:${PORT}`);
});