const express = require("express");

import("node-fetch")
  .then(({ default: fetch }) => {
    // ваш код с использованием fetch
  })
  .catch((error) => {
    console.error("Ошибка загрузки модуля:", error);
  });

const app = express();

const PORT = 3000;

const DATE_SERVER_HOST = process.env.DATE_SERVER_HOST || "http://date:3005";

app.get("/", (req, res) => {
  fetch(DATE_SERVER_HOST)
    .then((res) => res.json())
    .then((date) => {
      res.send(`Hello World! Current date: ${date}`);
    });
});

app.listen(PORT, () => {
  console.log(`Ready app listening on port ${PORT}`);
});
