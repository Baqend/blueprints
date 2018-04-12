/*
Description: Downloads a file from a web URL and saves it as a Baqend file.
Required npm modules: 
Maintained by: Baqend, support@baqend.com
*/

download = require('./download');
//Create a new Baqend file in the www folder by downloading an image from the web
download.toFile(db, "http://...test.jpg", "/www/image.jpg", 0);
