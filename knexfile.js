require("dotenv").config();
module.exports = {
  production: {
    client: "mysql",
    connection: {
      port: process.env.DATABASE_PORT,
      host: process.env.DATABASE_HOST_PRODUCTION,
      database: process.env.DATABASE_NAME,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_ACCESS_KEY
    },
    pool: {
      min: 2,
      max: 10
    }
  }
};
