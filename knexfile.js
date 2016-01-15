require('dotenv').load();
// Update with your config settings.
//TODO require dot env and run load function on it
module.exports = {

  development: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      tableName: ''
    }
  }

};
