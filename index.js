var express = require('express');
var app = express();

app.use(express.static(__dirname));
app.use(express.urlencoded({
    extended: false
}))
app.use(express.json())

//设置跨域访问
app.all('*', function (_req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', '*')
    next();
});

app.use("/", function (req, res) {

    console.log("url:", req.method, req.url);
    console.log("querystring:", req.query);
    console.log("headers:", req.headers);
    console.log("body:", req.body);

    res.json({
        code: 0,
        content: "ok"
    })

});

app.listen(99);