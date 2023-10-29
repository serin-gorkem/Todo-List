import express from "express";
import bodyParser from "body-parser";
const app = express();
const port = 3000;


app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
const todoElements = [];
const todoElementsWork = [];

app.get("/", (req, res) => {
  res.render("index.ejs", { todoElements });
});
app.get("/work", (req, res) => {
  res.render("work.ejs", { todoElementsWork });
});

app.post("/", (req, res) => {
  switch (req.body["list"]) {
    case "work":
      CreateToDo(todoElementsWork);
      res.render("work.ejs", { todoElementsWork });
      break;
    case "Sunday":
      CreateToDo(todoElements);
      res.render("index.ejs", { todoElements });
      break;
    case "Monday":
      CreateToDo(todoElements);
      res.render("index.ejs", { todoElements });
      break;
    case "Tuesday":
      CreateToDo(todoElements);
      res.render("index.ejs", { todoElements });
      break;
    case "Wednesday":
      CreateToDo(todoElements);
      res.render("index.ejs", { todoElements });
      break;
    case "Thursday":
      CreateToDo(todoElements);
      res.render("index.ejs", { todoElements });
      break;
    case "Friday":
      CreateToDo(todoElements);
      res.render("index.ejs", { todoElements });
      break;
    case "Saturday":
      CreateToDo(todoElements);
      res.render("index.ejs", { todoElements });
      break;
    default:
      break;
  }

  function CreateToDo(arrayType) {
    const todo = req.body["newTask"];
    const element = {
      htmlContent: `
      <div class="todo-item">
      <input type="checkbox">
      <p>${todo}</p>
      </div>
      `,
    };
    arrayType.push(element);
  }
});
app.listen(port, () => {
  console.log(`Started on port ${port} `);
});
