### Open Cosmics: cosmic-ray physics for everyone

It is a project for CERN WebFest. You can find more info about the project [here](https://webfest.web.cern.ch/content/open-cosmics-cosmic-ray-physics-everyone)

This repository includes only NodeJS/Express based web app that communicates with MongoDB by using Mongoose and serves REST API & some generated (by using Jade templates) web pages and home page that is built with WebGL Earth.

##### RESULT: the project was selected as "Best Innovative Project of CERN WebFest 2015"

### Running 

- Change dbName and connectionString in **app.js** if you are using different dbName or a remotely hosted mongodb.
- `$node bin/www.js` then it will run on your host and will use 8000 port which can be changed in **bin/www.js**

### API

- GET /api/stations returns array of all stations
- GET /api/stations/station_id returns details of the station
- POST /api/stations posts new station to DB

#### Station Data Format

~~~  
  {
    "_id": "55be1ec25770e66e74d4504e",
    "status": "alive",
    "picture": "https://lh6.googleusercontent.com/-qenZ6u0yZsI/VAirkDh-KNI/AAAAAAAAAD4/0ijIOEjnX1M/w559-h558-no/photo.jpg",
    "name": "Toy Cloud Chamber",
    "country": "United States",
    "cluster": "Siena College, New York",
    "subcluster": "Physics Department",
    "livetime": "2015-07-31T18:43:33.004Z",
    "events": [
      {
        "window": false,
        "filePath": "1069318.fits",
        "taskid": 1069318,
        "time": [
          "2015-08-02T14:14:14.568Z"
        ],
        "images": {
          "thumb": "https://farm4.staticflickr.com/3811/20219163732_4e3e0e479d_m.jpg",
          "original": "https://farm4.staticflickr.com/3811/20219163732_4e3e0e479d_b.jpg"
        }
      },
      {
        "window": false,
        "filePath": "1069319.fits",
        "taskid": 1069319,
        "time": [
          "2015-08-02T14:14:14.568Z"
        ],
        "images": {
          "thumb": "https://farm1.staticflickr.com/446/20219164662_549932d032_m.jpg",
          "original": "https://farm1.staticflickr.com/446/20219164662_549932d032_b.jpg"
        }
      }
    ],
    "free": [],
    "location": {
      "latitude": 42.7184305,
      "altitude": 11.6,
      "longitude": -73.7516675
    }
  }
~~~

### Roadmap and long term TODOs

- Port project to ES6
- Host the project (probably on Heroku) 
