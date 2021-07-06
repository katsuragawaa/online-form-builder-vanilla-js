const express = require('express');
const path = require('path');

const app = express();

const forms = [
  {
    id: 1,
    title: 'Test Form Title',
    questions: [
      {
        question: 'Test question',
        answer:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis tellus id felis venenatis ullamcorper. Praesent sit amet aliquam libero. ',
      },
      {
        question: 'Test question 2',
        answer:
          'Test answer 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut velit odio, lacinia vel ipsum vel, viverra gravida turpis. Sed nec mi et orci tincidunt tristique. Suspendisse gravida elit eros, vitae. ',
      },
    ],
  },
  {
    id: 2,
    title: 'Test 2 Form Title',
    questions: [
      {
        question: 'Test question',
        answer: 'Test answer',
      },
      {
        question: 'Test question 2',
        answer:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut velit odio, lacinia vel ipsum vel, viverra gravida turpis. Sed nec mi et orci tincidunt tristique. Suspendisse gravida elit eros, vitae. ',
      },
    ],
  },
];

app.use('/static', express.static(path.resolve(__dirname, 'client', 'static')));

app.get('/api/forms', (req, res) => {
  res.json(forms);
});

app.get('/api/forms/:id', (req, res) => {
  const id = Number(req.params.id);
  const form = forms.find(form => form.id === id);
  res.json(form);
});

app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'index.html'));
});

app.get('/forms/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'index.html'));
});

PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
