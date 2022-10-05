const foreCast = require('./utils/forecast');
const geoCode = require('./utils/geoCode');
const yargs = require('yargs');

// Customize yargs version
// yargs.version('1.1.0')

// yargs.command({
//     command: 'addName',
//     describe: "adding name",
//     builder:{
//         title: {
//             describe: 'add',
//             demandOption: true,
//             type: 'string'
//         }
//     },
//     handler(argv){
       
//     }
// })

// yargs.parse();
const name = process.argv[2];
if(!name){
    return console.log("enter name in cmd");
}
geoCode(name, ({langitude, latitude})=>{
    foreCast(langitude, latitude, (error, data)=>{
        console.log(error, "error");
        console.log(data, "data");
    })
})



