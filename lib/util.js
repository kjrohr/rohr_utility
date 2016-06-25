// Exports the debug method to anything that has the util file included
exports.debug = (title, obj) => {
  const ts = new Date();
  // added colors
  const colors = require('colors');
  colors.setTheme({
    silly: 'rainbow',
    input: 'grey',
    verbose: 'cyan',
    prompt: 'grey',
    info: 'green',
    data: 'grey',
    help: 'cyan',
    warn: 'yellow',
    debug: 'blue',
    error: 'red',
  });
  // A seperator to keep clean logging.
  const seperator = '\n====================================\n';
  // This is the total output of everything.
  const output = colors.debug(seperator) + colors.verbose(title) + colors.info(ts) + colors.debug(seperator);
  // if the DEBUG environmental variable is true
  if (process.env.DEBUG) {
    // Console log out the output, object, and status.
    console.log(output, obj);
  }
};

// Exports the userProperties method to anything that has the util file included
exports.userProperties = (title, obj) => {
  // A seperator to keep cleaning logging.
  const seperator = '\n====================================\n';
  // This is the output of everything
  const output = seperator + title + seperator;
  if (process.env.DEBUG) {
    // console.log(output, obj.id, '\n', obj.name, '\n', obj.hobby, '\n', status);
    // Should show undefined on delete
    // Should show correct data by looking by id
    console.log(output, obj.id, '\n', obj.name, '\n', obj.age, '\n', obj.hobby, '\n');
  }
};
// This will display all the users
exports.userReadAll = (title, obj) => {
  // A seperator to keep cleaning logging.
  const seperator = '\n====================================\n';
  // This is the output of everything
  const output = seperator + title + seperator;
  if (process.env.DEBUG) {
    console.log(output);
    // Should show undefined on delete
    // Should show correct data by looking by id
    for (let index = 0; index < obj.length; index++) {
      console.log('ID: ' + obj[index].id + '\n Name: ' + obj[index].name
      + '\n Age: ' + obj[index].age
      + '\n Hobby: ' + obj[index].hobby);
    }
  }
};

// Shows the apps properties
exports.appProperties = (title, obj) => {
  // A seperator to keep cleaning logging.
  const seperator = '\n====================================\n';
  // This is the output of everything
  const output = seperator + title + seperator;
  if (process.env.DEBUG) {
    // console.log(output, obj.id, '\n', obj.name, '\n', obj.hobby, '\n', status);
    // Should show undefined on delete
    // Should show correct data by looking by id
    console.log(output, obj.id, '\n', obj.name, '\n', obj.code);
  }
};
// Shows all apps and their properties
exports.appReadAll = (title, obj) => {
  // A seperator to keep cleaning logging.
  const seperator = '\n====================================\n';
  // This is the output of everything
  const output = seperator + title + seperator;
  if (process.env.DEBUG) {
    console.log(output);
    // Should show undefined on delete
    // Should show correct data by looking by id
    for (let index = 0; index < obj.length; index++) {
      console.log('ID: ' + obj[index].id + '\n Name: ' + obj[index].name
      + '\n Code: ' + obj[index].code);
    }
  }
};

exports.increaser = (thisVersion, semVersion) => {
  let patches = thisVersion.patch;
  let minor = thisVersion.minor;
  let major = thisVersion.major;
  if (typeof semVersion) {
    if (semVersion === 'patches') {
      patches += 1;
      console.warn('You have made a patch');
      // the if statement for patches
    }
    if (semVersion === 'minor') {
      minor += 1;
      console.warn('You have made a minor change');
      // the if statement for the minor fixes
    }
    if (semVersion === 'major') {
      patches = 0;
      minor = 0;
      major += 1;
      console.warn('This is a very serious change please be sure that this is working');
      // this is the  if statement for the major fixes.
    }
  }
};

console.log(pajson.version);
// This is going to be used to tell you the current version of you package.json
