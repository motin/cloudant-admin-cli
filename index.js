require("dotenv").load();

// Parse cli arguments
var ArgumentParser = require("argparse").ArgumentParser;
var parser = new ArgumentParser({
  version: "0.0.1",
  addHelp: true,
  description: "cloud-admin",
});
parser.addArgument(["-cdb", "--create-db"], {
  help: "Create new database",
});
parser.addArgument(["-rdb", "--reset-db"], {
  help: "Delete and re-create database",
});
var args = parser.parseArgs();
console.dir(args);

// Load the Cloudant library.
var Cloudant = require("@cloudant/cloudant");

// Initialize Cloudant with settings from .env
var username = process.env.cloudant_username || "admin";
var password = process.env.cloudant_password || "pass";

// Initialize the library with my account.
var nano = Cloudant(
  {
    /*
    // Does not help accessing admin resources:
    account: username,
    username: username,
    password: password,
     */
    url: `http://${username}:${password}@localhost:8080`,
    plugins: "promises",
  },
  function(err, cloudant, reply) {
    if (err) {
      throw err;
    }
    console.log("Connected. reply: ", reply);
  },
);

const run = async () => {
  const allDbs = await nano.db.list();

  if (!allDbs) {
    console.log("No databases available");
  } else {
    console.log("All my databases: %s", allDbs.join(", "));
  }

  if (args.reset_db) {
    const body = await nano.db.destroy(args.reset_db);
    console.log(`Database ${args.reset_db} deleted!`, body);
    args.create_db = args.reset_db;
  }

  if (args.create_db) {
    const body = await nano.db.create(args.create_db);
    console.log(`Database ${args.create_db} created!`, body);
  }
};

run();
