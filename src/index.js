const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
// // // const bcrypt = require('bcryptjs')
// const jwt = require('jsonwebtoken')
// // const myFunction = async () => {
// //     const password = 'Red12345!'
// //     const hashedPassword = await bcrypt.hash(password, 8)

// //     console.log(password)
// //     console.log(hashedPassword)

// //     const isMatch = await bcrypt.compare('red12345!', hashedPassword)
// //     console.log(isMatch)
// // }
// const myFunction = async ()=>{
//      const token = jwt.sign({_id: 'Bhaba1' }, 'thisismycourse')
//      console.log(token)
// }
// myFunction()
// // const Task = require('./models/task')
// // const x = async ()=>{
// //      const task = await Task.findById('645e081f81adf0ac880025c4')
// //      await task.populate('owner')
// //      console.log(task.owner)
// // }
// // x()
