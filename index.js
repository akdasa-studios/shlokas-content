const express = require('express');
const multer = require('multer');
const cors = require('cors')

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.use('/', express.static('content'));


const storage = multer.diskStorage({
    destination: 'content',
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})
const upload = multer({ storage: storage })


app.post('/', upload.single('file'), function (req, res, next) {
    console.log(req.file);
    res.json({success: true})
})


app.listen(80, () => {
    console.log(`Server started...`);
});