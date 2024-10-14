// Budget API

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const budgetModel = require('./models/myBudget_Schema'); 

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json()); 


const url = "mongodb://localhost:27017/Budget";


mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });


app.get('/budget', (req, res) => {
  budgetModel
    .find({})
    .then((data) => {
     
      res.json({ myBudget: data });  
    })
    .catch((error) => {
      console.error('Error fetching budget data:', error);
      res.status(500).send('Error fetching budget data');
    });
});

// Endpoint to add new budget data entry
app.post('/budget', (req, res) => {
  const { title, budget, color } = req.body; 

  // Create a new budget data document
  const newBudgetData = new budgetModel({
    title,
    budget,  
    color
  });

 
  newBudgetData
    .save()
    .then((result) => {
      res.status(201).json({
        message: 'New budget data entry added successfully!',
        data: result
      });
    })
    .catch((error) => {
      console.error('Error adding new budget data entry:', error);
      res.status(500).send('Error adding new budget data entry');
    });
});


app.use('/', express.static('public'));


app.listen(port, () => {
  console.log(`API served at http://localhost:${port}`);
});
