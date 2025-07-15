// eslint-disable-next-line import/no-extraneous-dependencies
const mongoose = require('mongoose')
const dotenv = require('dotenv')

process.on('uncaughtException', err => {
  console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  process.exit(1);
});
  //Loads environment variables from .env file
dotenv.config({ path: './config.env' })
const app = require('./app')
// console.log(app.get('env'))  //environment variables are global variables that is used to define the environment in which the node app is running
// // console.log(app.get('env')) in an Express.js application is used to log the current Node.js environment.
// console.log(process.env)

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD)
// eslint-disable-next-line no-undef
mongoose.connect(DB, {
}).then(() => console.log('DB connected successfully!'))

// 4) START SERVER
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`app running on port ${port}...`);
})

//this is for all promise unhandled rejection...(Errors Outside Express: Unhandled Rejections)
process.on('unhandledRejection', err => {
  console.log(err.name, err.message)
  console.log('UNHANDLED REJECTION! 💥 shutting down...')
  server.close(() => {process.exit(1)})
})