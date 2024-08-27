const express = require('express');
const app = express();
const port = 5000 || 5001;
// In-memory data structure to store tasks
const tasks = [];

app.use(express.json());

// Create a new task
app.post('/tasks', (req, res) => {
  const { title, description, dueDate, status } = req.body;

  // Validate input
  if (!title || !description || !dueDate || !status) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const newTask = {
    id: tasks.length + 1,
    title,
    description,
    dueDate,
    status,
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Retrieve all tasks
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// Retrieve a single task by ID
app.get('/tasks/:id', (req, res) => {
  const task = tasks.find(t => t.id === parseInt(req.params.id));
  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }
  res.json(task);
});

// Update a task
app.put('/tasks/:id', (req, res) => {
  const task = tasks.find(t => t.id === parseInt(req.params.id));
  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }

  // Update task properties
  task.title = req.body.title || task.title;
  task.description = req.body.description || task.description;
  task.dueDate = req.body.dueDate || task.dueDate;
  task.status = req.body.status || task.status;

  res.json(task);
});

// Delete a task
app.delete('/tasks/:id', (req, res) => {
  const taskIndex = tasks.findIndex(t => t.id === parseInt(req.params.id));
  if (taskIndex === -1) {
    return res.status(404).json({ error: 'Task not found' });
  }

  tasks.splice(taskIndex, 1);
  res.sendStatus(204);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});