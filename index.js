const express = require('express');
const app = express();

let wrap = function(inner) {
    return `<!DOCTYPE html><html><body>${inner}</body></html>`
}

app.get('/body', (req, res) => {
    console.log('getting body');
    console.log(req.query);

    let s = '<div style="background: lightblue;"><p>Body content</p></div>';
    res.send(wrap(s));
});

app.get('/header', (req, res) => {
    console.log('getting header');
    console.log(req.query);

    let s = '<div style="background: palegreen;"><p>Header content</p></div>'
    res.send(wrap(s));
});

app.get('/footer', (req, res) => {
    console.log('getting footer');
    console.log(req.query);
    
    let page = req.query.page;
    let topage = req.query.topage;
    let s = `<div style="background: palegreen;"><p>Page ${page} of ${topage}</p></div>`
    res.send(wrap(s));
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))