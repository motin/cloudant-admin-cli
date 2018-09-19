require("dotenv").load();

// Load the Cloudant library.
var Cloudant = require("@cloudant/cloudant");

// Initialize Cloudant with settings from .env
var username = process.env.cloudant_username || "admin";
var password = process.env.cloudant_password || "pass";

// Initialize the library with my account.
var cloudant = Cloudant(
  {
    /*
    // Does not help accessing admin resources:
    account: username,
    username: username,
    password: password,
     */
    url: `http://${username}:${password}@localhost:8080`,
  },
  function(err, cloudant, reply) {
    if (err) {
      throw err;
    }
    console.log("Connected. reply: ", reply);
  },
);

cloudant.db.list(function(err, allDbs) {
  if (err) {
    throw err;
  }
  if (!allDbs) {
    console.log("No databases available");
  } else {
    console.log("All my databases: %s", allDbs.join(", "));
  }
});
