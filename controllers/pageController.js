import fs from "fs";

const homeHtmlContent = fs.readFileSync("./pages/home.html", "utf-8");
const infoHtmlContent = fs.readFileSync("./pages/info.html", "utf-8");
const historyHtmlContent = fs.readFileSync("./pages/history.html", "utf-8");
const errorHtmlContent = fs.readFileSync("./pages/error.html", "utf-8");

export async function homePage(req, res) {
  res.setHeader("Content-Type", "text/html");
  res.send(homeHtmlContent);
}

export async function infoPage(req, res) {
  res.setHeader("Content-Type", "text/html");
  res.send(infoHtmlContent);
}

export async function historyPage(req, res) {
  res.setHeader("Content-Type", "text/html");
  res.send(historyHtmlContent);
}

export async function errorPage(req, res) {
  res.setHeader("Content-Type", "text/html");
  res.send(errorHtmlContent);
}
