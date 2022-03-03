const pool = require("../db");

const getbiciUrbana = async () => {
  try {
    const query = "select * from bici_urbana";
    const rows = await pool.query(query);
    return rows;
  } catch (error) {
    console.log(error);
  }
};
module.exports = {getbiciUrbana};