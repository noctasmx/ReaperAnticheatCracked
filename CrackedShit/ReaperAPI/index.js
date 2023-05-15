const express = require('express');
const app = express();
const port = 3000;
const versioncheck = require('./version');
const response = require('./response');

app.post('/api/v3/auth', (req, res) => {
    console.log('Auth requested');
    res.send(response);
});

app.get('/api/v3/versionCheck', (req, res) => {
    console.log('Version check requested');
    res.send(versioncheck);
});

app.listen(port, () => console.log(`ReaperAC Crack API listening on port ${port}!`));