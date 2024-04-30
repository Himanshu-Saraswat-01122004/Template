import express from 'express';
import { connect } from 'mongoose';
import bodyParser from 'body-parser';


const app = express();

app.set('views', 'views');
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

connect('mongodb://localhost:27017/express', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to the database');
}).catch((error) => {
    console.log('Error connecting to the database');
    console.error(error);
});

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});