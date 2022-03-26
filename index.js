const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const multer = require("multer");
const path = require("path");
//added for mmailer
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");
//added for mmailer

////MAILER PORTION////

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

app.post("/send_mail", cors(), async (req, res) => {
    let { text } = req.body
    const transport = nodemailer.createTransport({
        service: 'SendGrid',
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS
        }
    })

    await transport.sendMail({
        from: process.env.MAIL_FROM,
        to: "support@argistech.com",
        subject: "test email",
        html: `<div className="email" style="
                border: 1px solid black;
                padding: 20px;
                font-family: sans-serif;
                line-height: 2;
                font-size: 20px;
                ">
                <h2>Here is your email from one of your users!</h2>
                <p>${text}</p>
                
                <p>All the best, Don</p>
                </div>
            `
    })
})

// app.listen(
//     (process.env.PORT || 4000),
//     () => {
//         console.log('Server is listening on port 4000"')
//     }
// )

/////added for mailer above///

dotenv.config();

app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")))

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
 
})
.then(console.log("Connected to MONGOdB"))
.catch(err => console.log(err));

const storage = multer.diskStorage({
    destination:( req, file, cb) => {
        cb(null, "images");
    },
    filename:(req, file, cb)=> {
        cb(null, req.body.name);
    },
});

const upload = multer({storage:storage});
app.post("/api/upload", upload.single("file"),(req, res) =>{
    res.status(200).json("File has been uploaded")
});

app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/posts', postRoute);
app.use('/api/categories', categoryRoute);

app.use(express.static(path.join(__dirname, "/client/build")));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/build','index.html'));
});

app.listen(process.env.PORT || 5001, () =>{
    console.log("Server is running");
});
