const fs = require('fs');
const sqlite3 = require('sqlite3').verbose();

const FILE_PATH = './fish.db';

const errorCallBack = (error) => {
  if (error) {
    return console.error(error.message); 
  }
}

function createDbConnection() {
  const db = new sqlite3.Database(FILE_PATH, errorCallBack);

  if (fs.existsSync(FILE_PATH)) {
    return db;
  } 

  createTable(db);
  console.log('Connection with SQLite has been established');

  return db;
}

function createTable(db) {
  db.exec(`
    CREATE TABLE sharks
    (
      ID INTEGER PRIMARY KEY AUTOINCREMENT,
      name VARCHAR(50) NOT NULL,
      color VARCHAR(50) NOT NULL,
      weight INTEGER NOT NULL
    )
  `)
}

module.exports = createDbConnection();