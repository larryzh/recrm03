const sqlite3 = require('sqlite3').verbose();
const Promise = require('bluebird');
const path = require('path');

// module.exports =class AppDAO {
class AppDAO {
  //dbname='../db/lazynote.db'
  dbname = path.join(__dirname, '../db/lazynote.db');
  table_name;
  keys;
  data;

  constructor() {
      // const dbPath = path.resolve(__dirname, dbname)
      // const xpath=path.join(__dirname,'../db/lazynote.db')
      // const path = `${__dirname}/server/db/lazynote.db`;
      this.db = new sqlite3.Database(this.dbname, (err) => {
        if (err) {
          // console.error("error:" + err.message+" "+this.dbname);
        }
        else console.log('Connected to the lazynote database.');
      });
  }

  setTableNameAndKeys(table_name, keys) {
      this.table_name=table_name;
      this.keys=keys;
  }

  run(sql, params = []) {
      return new Promise((resolve, reject) => {
        this.db.run(sql, params, function (err) {
          if (err) {
            // console.log('Error running sql ' + sql)
            // console.log(err)
            reject(err)
          } else {
            resolve({ id: this.lastID })
          }
        })
      })
  }

  delete(id) {
      return this.run(
        'DELETE FROM '+this.table_name+' WHERE id = ?',
        [id]
      )
  }

  insert(values) {
      sql=`INSERT INTO ${this.table_name } id= ${values['id']}`  
      return this.run(sql)
  }

  update(values) {
      sql=`UPDATE ${this.table_name } SET `
      for (const [ key, value ] of values){
        sql+=`${key} = ${value },`
      }
      sql+=` where id = ${values[id]}`
      return this.run(sql);
  }

  get(sql, params = []) {
      return new Promise((resolve, reject) => {
        this.db.get(sql, params, (err, result) => {
          if (err) {
            // console.log('Error running sql: ' + sql)
            // console.log(err)
            reject(err)
          } else {
            resolve(result)
          }
        })
      })
  }

  all(sql, params = []) {
      return new Promise((resolve, reject) => {
        this.db.all(sql, params, (err, rows) => {
          if (err) {
            // console.log('Error running sql: ' + sql)
            // console.log(err)
            reject(err)
          } else {
            resolve(rows)
          }
        })
      })
    }    

  getall_by_user_id(user_id) {
      // console.log('SELECT * FROM '+this.table_name+' WHERE user_id = ?',user_id)
      return this.get(
        'SELECT * FROM '+this.table_name+' WHERE user_id = ?',
        user_id);
    
  }

  getById(id) {
      return this.get(
        'SELECT * FROM '+this.table_name+' WHERE id = ?',
        [id])
  }
}

module.exports = AppDAO;
