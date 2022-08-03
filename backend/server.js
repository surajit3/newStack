const app = require('./app')
const dotenv = require('dotenv')
const DBconfig = require('./config/db-config')

dotenv.config({path: './config/env.env'})
const PORT = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;

// Database connection
DBconfig.connect(DATABASE_URL);

app.listen(PORT, () => {
    console.log(`Server is running at: http://localhost:${PORT}`);
})