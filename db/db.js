const { Client } = require('pg');

const client = new Client({
    host: 'localhost',
    user: 'postgres',
    port: '5432',
    password: '1020',
    database: 'postgres'
});

client.connect();

module.export = client