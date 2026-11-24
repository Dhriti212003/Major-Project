const mongoose = require("mongoose");
const data = require("./data");
const Listing = require("../models/listing");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

async function main() {
  await mongoose.connect(MONGO_URL);
  console.log("connected to DB");
}

const initDB = async () => {
  await Listing.deleteMany({});
  await Listing.insertMany(data.data);
  console.log("data was initialized");
};

main()
  .then(initDB)
  .catch((err) => {
    console.log(err);
  });
