const fs = require('fs')
// eslint-disable-next-line import/no-extraneous-dependencies
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const Tour = require("../../models/tourModel")
const Review = require("../../models/reviewModel");
const User = require("../../models/userModel");

dotenv.config({ path: './config.env' })


const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD)
// eslint-disable-next-line no-undef
mongoose.connect(DB, {
}).then(() => console.log('DB connected successfully!'))

//READ JSON FILE 
const tours = JSON.parse(fs.readFileSync(`${__dirname}/tours.json`, 'utf-8'))
const users = JSON.parse(fs.readFileSync(`${__dirname}/users.json`, 'utf-8'))
const reviews = JSON.parse(fs.readFileSync(`${__dirname}/reviews.json`, 'utf-8'))

//IMPORT DATA INTO DATABASE
const importData = async () => {
    try{
        await Tour.create(tours)
        await User.create(users, { validateBeforeSave: false });
        await Review.create(reviews);
        console.log('Data successfully loaded!')
    } catch (err) {
        console.log(err)
    }
    process.exit()
}

//DELETE ALL THE DATA FROM DATABASE
const deleteData = async () => {
    try{
        await Tour.deleteMany()
        await User.deleteMany();
        await Review.deleteMany();
        console.log('Data Successfully deleted!')
    } catch (err) {
        console.log(err)
    }
    process.exit()
}

if (process.argv[2] === '--import') {
    importData()
} else if (process.argv[2] === '--delete') {
    deleteData()
}

console.log(process.argv)