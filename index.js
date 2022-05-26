const expess = require("express");
const mongoose = require("mongoose");

const app = expess();

app.use(expess.json());
app.use(require("./routes/categories.route"));
app.use(require('./routes/commentaries.route'));
app.use(require('./routes/news.route'));

mongoose
  .connect("mongodb+srv://mvdjabrail:1221@cluster0.5s8s8.mongodb.net/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Успешно соединились с сервером MongoDB"))
  .catch(() => console.log("Ошибка при соединении с сервером MongoDB"));

app.listen(5000, () => {
  console.log("Сервер запущен");
});
