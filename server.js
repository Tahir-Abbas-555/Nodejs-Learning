const dotenv = require('dotenv');
const express = require("express")
const connectDB = require('./config/db');
const chatRoutes = require('./routes/chatRoutes');


dotenv.config();
connectDB();
const app = express();
app.use(express.json());
app.use('/api', chatRoutes);


const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
    console.log(`Server running on port ${PORT}`);
});

