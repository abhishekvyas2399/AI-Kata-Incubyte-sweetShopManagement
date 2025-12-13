import "./env"
import app from "./app"

// used injected envirnment variable port and listen to user request on that port
app.listen(process.env.PORT,()=>{
    console.log(`server running in port ${process.env.PORT}`)
});