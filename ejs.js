// run in terminal via: node ejs_demo.js which makes new index.htmls
// run via: node fs.js in terminal
const fs = require('fs');
const ejs = require('ejs');

let data_info = fs.readFileSync('compiled.json', 'utf8');
let index_template = fs.readFileSync('views/index.ejs', 'utf8');
let macro_template = fs.readFileSync('views/main_index.ejs', 'utf8');
/*for(let a of JSON.parse(data_info)){
  console.log(a)
}*/
//console.log(JSON.parse(data_info)[1])
for(let a = 1; a < JSON.parse(data_info).length; a++){

// put in for loop that goes 10 times and makes 10 identical pages for now
let index_html = ejs.render(index_template, {
  filename: __dirname + '/views/index.ejs',
  data: JSON.parse(data_info)[a]
});

//only thing in here that would have to change is like build/[new name].html for each round of loop
fs.writeFileSync('build/micro'+a+'.html', index_html, 'utf8');

}

let macro_html = ejs.render(macro_template, {
  filename: __dirname + '/views/main_index.ejs',
  data: JSON.parse(data_info)
});

fs.writeFileSync('build/macro.html', macro_html, 'utf8');

//end of for loop