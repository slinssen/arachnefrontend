# Arachne 4 Frontend     

## Development

The repository includes a [gulp](http://gulpjs.com/) configuration for setting up a local server, preconfigured with:
* proxying to the backend running on the development server
* url rewriting for AngularJS' HTML5 mode
* live reloading

### Prerequisites

You need the following components in order for the local server to work:
* [NodeJS](https://nodejs.org/)
* [gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)

To install the necessary dependencies for the app run the following command in the working directory:
```
npm install
npm install -g bower gulp
bower install
```

To install the testing tools run

```
npm install -g karma
npm install -g karma-jasmine
npm install -g karma-ng-html2js-preprocessor
npm install -g karma@canary phantomjs karma-phantomjs-launcher
```

You may need root permissions on your machine in order to perform these commands successfully.

On Debian-based systems, if you have trouble installing dependencies use the 'nodejs-legacy'-package instead of 'nodejs'. Also gulp needs to be installed globally to run 'gulp server'.

```
sudo apt-get install nodejs-legacy
sudo npm install -g gulp
```

### Running the tests

To run the unit tests, call

```bash
gulp test
```

This will run all tests matching the filename pattern test/*_spec.js. Jasmine is used as the testing framework here.

### con10t submodule

The static files representing the project pages are stored in the directory `con10t`. The repository comes preconfigured with the Arachne project pages configured as a git submodule.

In order to set up the submodule you have to run the following commands after the initial checkout:
```
git submodule init
git submodule update
git checkout master
```

Subsequent updates can be loaded by running `git pull origin master` inside the directory `con10t`.

#### Updating the submodule con10t

Within the folder of the submodule execute
```
git pull origin master
```
to get the latest con10t version.

Then go to the root directory of Arachne 4 Frontend and run 
```
git status
```
to ensure that you're now using the right version. After that execute
```
git add con10t
git commit -m "Submodule con10t updated"
git push origin master
```
to use the latest con10t version in Arachne 4 Frontend.

### Running the development server

In order to run the frontend in the development server use the following command:
```
gulp server
```

After that you should be able to access the frontend under [http://localhost:1234/](http://localhost:1234/).

Any changes made to HTML, SCSS or JS files should automatically trigger a browser reload.

## Deployment

Build the application by running

```
gulp
```

In order for AngularJS' HTML5 mode to work use the following configurations:

### nginx
```
server {
        listen   80;
        root /usr/share/nginx/www;
        try_files $uri $uri/ /index.html =404;
}
```

### Apache

```
<IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteBase /
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond $1#%{REQUEST_URI} ([^#]*)#(.*)\1$
	RewriteRule ^(.*)$ %2index.html [QSA,L]
</IfModule>
```
