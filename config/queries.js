const connection = require("./connection");

function getAllDepartments(callback) {
    const query = `SELECT * FROM department;`;
    connection.query(query, (error, results) => {
        if (error) {
            callback(error, null);
        } else {
            callback(null, results);
        }
    });
};

function getAllRoles(callback) {
    const query = `SELECT * FROM role;`;
    connection.query(query, (error, results) => {
      if (error) {
        callback(error, null);
      } else {
        callback(null, results);
      }
    });
  }
  
module.exports = {
    getAllDepartments,
    getAllRoles
};