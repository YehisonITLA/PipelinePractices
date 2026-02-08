const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hola CI/CD con GitHub Actions 🚀");
});

module.exports = app;

if (require.main === module) {
  app.listen(3000, () => {
    console.log("Servidor corriendo en puerto 3000");
  });
}
