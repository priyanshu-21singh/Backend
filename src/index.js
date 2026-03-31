import dotenv from "dotenv"
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
import connectDB from "./db/index.js";

dotenv.config( {
    path: './.env'
})

// when async method is completed than a promise is return 
connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`server is running at port : $
            {process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO DB connection failed !!!" , err);

})
