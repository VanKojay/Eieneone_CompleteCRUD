import { Sequelize } from "sequelize";

const db = new Sequelize("crud2_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
