//express lib
var express = require('express');
//general lib
var app = express();

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

// set the sample behaviour for incoming requests
app.use('/', function (req, res) {
    console.log("[*] Incoming request");
    //rendering page with data
    res.render('index', {
        daily_menus: daily_menus,
        days: days,
        btns_img: btns_img
    });
    console.log("[*] Page rendered");
});

//make the app listen on previoused choosen port
app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'));
});
