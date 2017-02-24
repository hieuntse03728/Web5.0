let fileUntils = require('./FileUtils');
let argv = process.argv.slice(2);
let fileInput = argv[0];
let fileOutput = argv[0];

fileUntils.readfile(fileInput) ;
//fileUntils.writefile(fileOutput);

// var myArgs = process.argv.slice(2);
// console.log('myArgs: ', myArgs);

//console.log(process.argv);
