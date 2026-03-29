import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials : true
    // allow cookies/auth headers 
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))

app.use(express.static("public"))
app.use(cookieParser())



export { app } 



// Cookies = small data stored in browser 
// in js  = res.cookies("token", "abc123");
// Browser stores = token = abc123
// Authentication(login)   ,session tracking  , User preferences


// client ==> Middleware ==> server logic ==> Response 
// what Middleware can Do 
// 1]Authentication
// 2]Logging 
//3]validate 
// 4]Error handling 
// 5]Modify Request/Response
