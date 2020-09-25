// import AppDAO from "./AppDAO.js";
const AppDAO = require('./AppDAO.js');

class user extends AppDAO {
  table_name = 'user';

  keys = ['id', 'username', 'password'];

  construct() {
    this.setTableNameAndKeys(this.table_name, this.keys);
  }

  setByResult(result) {
    super.data = result;
    // console.log('Inside setByResult')
    // resolve(result)
  }

  setById(id) {
    return new Promise((resolve, reject) => {
      this.getById(id).then(result => {
        this.setByResult(result);
        resolve(this);
        // console.log(this.data)
      });
    });
  }
}

// u=new user()
/*
u0=u.getById("1")
  .then((u0)=>{
      console.log(u0)
  })
*/
/*
u.setById("1")
  .then((u)=>{
    console.log(u)
  })
*/
module.exports = user;
