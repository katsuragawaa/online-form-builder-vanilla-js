const express = require("express");
const path = require("path");

const app = express();

const forms = [
  {
    id: 1,
    title: "Test Form Title",
    questions: [
      {
        question: "Test question",
        answers: "Test answer",
      },
      { question: "Test question 2", answers: "Test answer 2" },
    ],
  },
  {
    id: 2,
    title: "Test 2 Form Title",
    questions: [
      {
        question: "Test question",
        answers: "Test answer",
      },
      { question: "Test question 2", answers: "Test answer 2" },
    ],
  },
];

app.use("/static", express.static(path.resolve(__dirname, "client", "static")));

app.get("/api/forms", (req, res) => {
  res.json(forms);
});

app.get("/api/forms/:id", (req, res) => {
  const id = Number(req.params.id);
  const form = forms.find((form) => form.id === id);
  res.json(form);
});

app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "index.html"));
});

app.get("/forms/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "index.html"));
});

PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
