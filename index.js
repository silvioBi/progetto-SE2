//express lib
var express = require('express');
//general lib
var app = express();

var headers = {};
    headers["Access-Control-Allow-Origin"] = "*"; //for cross enviroment request
    headers["Access-Control-Allow-Methods"] = "GET";//methods allowed to responce
    headers["Access-Control-Allow-Credentials"] = false;
    headers["Access-Control-Max-Age"] = '86400'; // 24 hours
    headers["Access-Control-Allow-Headers"] = "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept"; //type of headers
    

//set port 5000 to be listened
app.set('port', (process.env.PORT || 5000));

// set the view engine to ejs
app.set('view engine', 'ejs');

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

//setting data variables to simulate database interaction
var days = [{name: 'Mon'},{name: 'Tue'},{name: 'Wed'},{name: 'Thu'},{name: 'Fry'},{name: 'Sat'},{name: 'Sun'}];

var btns_img = [{path: '/images/weekly-calendar.svg'},{path: '/images/star.svg'},{path: '/images/stethoscope.svg'},{path: '/images/settings.svg'}];

var daily_menus = [
    {
        monday: {
            name: 'Pasta al sugo',
            description: 'Simple and plain pasta with sugo from datterini tomatoes',
            img: '/images/pasta-al-sugo.jpg'
        },
        tuesday: {
            name: 'Pasta with pesto',
            description: 'Amazing pasta with fresh pesto with basil and parmesan',
            img: '/images/pasta-pesto.jpg'
        }
    }
    ];

// set the behaviour for incoming requests to the main page
app.get('/', function (req, res) {
    console.log("[*] Incoming request to main page");
    //rendering page with data
    res.render('index', {
        daily_menus: daily_menus,
        days: days,
        btns_img: btns_img
    });
    console.log("[*] Page rendered");
});

app.get('/menu', function (req, res) {
    res.writeHead(200, headers);
    console.log("[*] Incoming request to menu");
    res.end(JSON.stringify(daily_menus));
    console.log("[*] Menu sent");
});

//make the app listen on previoused choosen port
app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'));
});
