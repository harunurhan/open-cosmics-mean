### Open Cosmics: cosmic-ray physics for everyone

It is a project for CERN WebFest. You can find more info about the project [here](https://webfest.web.cern.ch/content/open-cosmics-cosmic-ray-physics-everyone)

This repository includes only NodeJS/Express based web app that communicates with MongoDB by using Mongoose and serves REST API & some generated (by using Jade templates) web pages.

### Running 

- Change dbName and connectionString in **app.js** if you are using different dbName or a remotely hosted mongodb.
- `$node bin/www.js` then it will run on your host and will use 8000 port which can be changed in **bin/www.js**

### TODO (Not requires Javascript, NodeJS, ExpressJS knowledge)

- Find cool looking html templates for station and event page
- Learn about [Jade Template Engine](http://jade-lang.com/)
- Convert those cool looking html templates to jade templates and change **views/*.jade.**
