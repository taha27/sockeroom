const app = require('express')();
const http = require('http').createServer(app);

app.get('/', (req, res) => {
    // res.send('<h1>Hello World</h1>');
    res.sendFile(__dirname + '/public/index.html');
})
app.listen(3000, () => {
    console.log('listening on *:3000');
})
