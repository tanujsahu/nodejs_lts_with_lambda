// app.js
import express from 'express';
import morgan from 'morgan';
import itemsRouter from './routes/items.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // For parsing application/json
app.use(morgan('tiny'));

// Use the aggregated routes
app.use('/items', itemsRouter);

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

export default app;
