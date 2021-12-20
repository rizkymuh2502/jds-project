const express = require('express')

const app=express()

app.get('/', async (req, res) => {
    res.json({
        status : "ok"
    })
})

var server = app.listen(3000, function () {
    var port = server.address().port
    console.log("Example app listening at http://localhost:%s", port)
 })
