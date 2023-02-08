// console.log('hello') ;
// setInterval(()=>{
//     console.log('hello world')
// },100000);

// console.warn('don');
// console.log();
// console.log(module);
// const sayhi = require('./app')
// sayhi('name shiv')
// const os = require('os')

// const user = os.userInfo()
// console.log(user);

// const user1 = os.uptime()
// console.log(user1);

// const currentos = {
//     platform: os.platform(),
//     name: os.release(),
//     version: os.version(),
//     arch: os.arch(),
//     uptime: os.uptime(),
//     loadavg: os.loadavg(),
//     totalMem:os.totalmem(),
//     freeMem:os.freemem(),

// }
// console.log(currentos);


// const path = require('path')
// console.log(path.sep);


//   const  filepath= path.join('/content','subfolder','text.txt')
//   console.log(filepath);
//   const  base= path.basename(filepath)
//   console.log(base);
//   const  absolute=path.resolve(__dirname,'content','subfolder','text.txt')

// console.log(absolute)





// fs---------------
// const  { readFileSync, writeFileSync }= require('fs')

// const first = readFileSync('./content/text.txt',  {encoding:'utf8', flag:'r'})
// const second = readFileSync('./content/second.txt',  {encoding:'utf8', flag:'r'})
// console.log(first,second);

// writeFileSync('./content/reult-syn.txt',`here is the result:${first}, ${second}`,{flag:'a'})


// const{readFile} = require('fs')

// const{writeFile} = require('fs')

// readFile('./content/subfolder/text.txt','utf8', (error,result)=>{

// if (error){
//     console.log(error)
//     return;
// }
// console.log(result)
    
// })


// const http =require('http')
// const server = http.createServer((req,res)=>{
//     if (req.url ==='/') {
//         res.end('welcome to page')
//     }
//     if (req.url ==='/about') {
//         res.end('here is our about')
        
//     }
//     res.end( `
//         <h1>Oop</h1>
//         <p>we can't seem to find our page you are looking for</p>
//         <a href="/">back home</a>
//         `
//     )
// })
// server.listen(5000)


const _ = require('lodash')

const iteems = [1, [2, [3,[4]]]]
const newItem = _.flattenDeep(iteems)
console.log(newItem);