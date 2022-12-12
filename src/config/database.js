const mongoose = require('mongoose');
const { DB_URL } = require('./environments');

function connectToDB(){
    mongoose.set('strictQuery', true);
    return new Promise((resolve, reject) => {
        mongoose.connect(DB_URL, (err)=>{
            if (err) {
                reject(err)
            }
            resolve('Database Connected Successfully');
        });
    });
}

module.exports = connectToDB