import express from "express";
import {
  errorPage,
  historyPage,
  homePage,
  infoPage,
} from "./controllers/pageController.js";
import dbInit from "./database/dbinit.js";

const app = express();

const port = 8080;

// make public folder accessible
app.use(express.static("public"));
app.use(express.static("database"));

// initiate database
dbInit();

app.get("/", homePage);
app.get("/info", infoPage);
app.get("/history", historyPage);
app.get("*", errorPage);

app.listen(port, () => {
  console.log("Server is running on port" + " " + port);
});
