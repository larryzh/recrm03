// import AppDAO from "./AppDAO.js";
const AppDAO = require('./AppDAO.js');

class work_record extends AppDAO {
  table_name = 'work_record';

  keys = ['id', 'user_id', 'content'];

  user_id;

  constructor(uid) {
    super(uid);
    super.setTableNameAndKeys(this.table_name, this.keys);
    this.user_id = uid;
  }

  setByResult(result) {
    super.data = result;
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

  getall() {
    return new Promise((resolve, reject) => {
      // console.log("getall:",this.user_id)
      this.getall_by_user_id(this.user_id).then(result => {
        this.setByResult(result);
        resolve(this);
        // console.log(this.data)
      });
    });
  }
}

wr = new work_record(1);
wr.getall().then(wr => {
  // console.log(wr)
  // console.log("err=",err)
});
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
module.exports = work_record;
