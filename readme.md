## rohr_karl_utility

### A proprietary debugging utility for the Deployment of Web Applications class.

## Installation

npm install --save-dev rohr_karl_utility

## Implementing rohr_karl_utility

Please add this line to any file that you wish to use this utility file in.

``` javascript
  const util = require('rohr_karl_utility');
```

## Code Examples

### util.debug

On your server file add the util.debug method. It takes two parameters, a title, and the object.
``` javascript
const server = app.listen(port, () => {
  util.debug('Server is running on port: ', port);
});
```

### util.userProperties
On any route file that you wish to see a users properties you would call the util.userProperties method. It takes two parameters, a title and the object.

``` javascript
router.get('/users/:id', (req, res) => {
  // URL id will override any preexisting id
  const userData = { id: req.params.id };
  // x.id = req.params.id;
  user.find(userData, (err) => {
    res.status(500).json(err);
    util.debug('/users/:id Read one user by id error', err);
  }, (data) => {
    res.status(200).json(data);
    util.userProperties('/users/:id Read one user by id success', data);
  });
});
```

### util.userReadAll
On any route file where you would access all of the users you would use the util.userReadAll method. It takes two parameters, a title, and an object.

``` javascript
router.get('/users', (req, res) => {
  user.findAll((err) => {
    res.status(500).json(err);
    util.debug('/users Read All error', err);
  }, (data) => {
    res.status(200).json(data);
    util.userReadAll('/users Read all success', data);
  });
});
```

### util.appProperties
On any route file where you would access the properties of an app you would use util.appProperties. It takes two parameters, a title, and an object.

``` javascript
router.get('/apps/:id', (req, res) => {
  // URL id will override any preexisting id
  const appData = { id: req.params.id };
  apps.find(appData, (err) => {
    res.status(500).json(err);
    util.debug('/apps/:id Read one app by id error', err);
  }, (data) => {
    res.status(200).json(data);
    util.appProperties('/apps/:id Read one app by id success', data);
  });
});
```

### util.appReadAll
On any route file where you would want to get the information for all of the apps you would use util.appReadAll. It takes two parameters, a title, and an object.

``` javascript
router.get('/apps', (req, res) => {
  apps.findAll((err) => {
    res.status(500).json(err);
    util.debug('/apps Read all apps error', err);
  }, (data) => {
    res.status(200).json(data);
    util.appReadAll('/apps Read all apps success', data);
  });
});
```
