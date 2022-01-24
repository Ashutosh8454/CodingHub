const express = require('express');
const path = require("path");
const port = 80;
// mongoose.connect('mongodb://localhost/ashutoshkart', { useNewUrlParser: true });

const app = express();
app.use('/css', express.static('css'));
app.use('/img', express.static('img'));
app.use(express.urlencoded());


app.use(express.static(path.join(__dirname, 'css')));
app.use(express.static(path.join(__dirname, 'img')));

app.get('/', (req, res, next) => {

    res.sendFile(path.join(__dirname, "./my website.html", ))

})
app.get('*', (req, res) => {
    res.status(404).send("404")
})

app.listen(port, (req, res) => {

    console.log(`servering at ${port}`);
})