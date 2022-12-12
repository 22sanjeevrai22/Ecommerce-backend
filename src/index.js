const { default: mongoose } = require("mongoose");
const connectToDB = require("./config/database");
const { PORT, DB_URL } = require("./config/environments");
const app = require("./config/express");

// mongoose.connect(DB_URL, {
//     useNewParser:true,
//     useCreateIndex:true,
//     useUnifiedTopology:true,
//     useFindAndModify:false
// }).then(()=>
// app.listen(PORT, () => console.log(`App is running at port ${PORT}`))
// ).catch((err) => {
//     console.log(err)
// });

 connectToDB()
  .then(() =>
    app.listen(PORT, () => console.log(`App running at PORT ${PORT}`))
  )
  .catch((err) => console.log(err));
