const app = require('./api/server.js');


const PORT = 5000;

app.listen(PORT, () => {
    console.log(`bk: index.js: app.listen: \n*** listening on http://localhost:${PORT} ***\n`);
});