const mongoose = require("mongoose");

const dbConnection = async () => {
  const conn = await mongoose.connect(
    `mongodb://${process.env.MONGOPASS}/${process.env.DATABASE_NAME}`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  );
  console.log(
    `Connected to a MongoDataBase at host ${conn.connection.host} on port ${conn.connection.port}`
  );
};

module.exports = dbConnection;
