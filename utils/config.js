const mongoServerAddress = "mongodb://127.0.0.1:27017/newsexplorer_db";

const { JWT_SECRET = "dev-secret" } = process.env;

module.exports = { mongoServerAddress, JWT_SECRET };
