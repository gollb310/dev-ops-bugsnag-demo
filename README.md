# Dev Ops Bug Snag Demo: SÜT

## Configuring the application

copy config.template.js to config.js (can do this in file system too)

```bash
$ cp config.template.js config.js
```

Members of the project can see the firebase values needed by adding this path to the end of your firebase console url `/project/web-engineering-spring-2019/settings/general/`

You can also find these values on the Firebase console in "Project Settings" under the "General" tab

**Config Key Breakdown**

| Config Key      | Description                                                  |
| --------------- | ------------------------------------------------------------ |
| API_KEY         | The property called "Web API Key" in the Firebase settings general tab |
| AUTH_DOMAIN     | Your "Project ID" from the Firebase settings general tab appended with ".firebaseapp.com", i.e. `your-project-id.firebaseapp.com` |
| DATABASE_URL    | Found by going to "Database" then "Realtime Database" in the Firebase console, should be near the top of the page next to a link icon, takes the format of  `https://your-project-id.firebaseio.com/` |
| BUGSNAG_KEY    | The key bugsnag gives you to track your errors |

**Environment Variables**

You can also pass these values in as environment variables to the Node application like so

``` bash
# run the project locally
$ API_KEY='<YOUR_API_KEY_HERE>' AUTH_DOMAIN='<YOUR_AUTH_DOMAIN_HERE>' npm run start
# ...or build the project
$ API_KEY='<YOUR_API_KEY_HERE>' AUTH_DOMAIN='<YOUR_AUTH_DOMAIN_HERE>' npm run build
```

## Running the application

Run these commands in the base directory of the application

**Install the dependencies**

``` bash
$ npm install
```

**Run the application locally**

``` bash
$ npm run start
```