import { api } from './api.path.js';
import fs from 'fs';


const db = {};

api.routes.forEach(({ path, output }) => {
    const example = fs.readFileSync('./api-example/' + path + '/' + output.example);
    db[path] = JSON.parse(example);
});

fs.writeFileSync("db.json", JSON.stringify(db));
