// run in terminal via: node ejs_demo.js which makes new index.htmls
// run via: node fs.js in terminal
const fs = require('fs');
const ejs = require('ejs');

let data_info = fs.readFileSync('compiled.json', 'utf8');
let micro_template = fs.readFileSync('views/micro.ejs', 'utf8');
let macro_template = fs.readFileSync('views/index.ejs', 'utf8');
let about_template = fs.readFileSync('views/about.ejs', 'utf8');

/*for(let a of JSON.parse(data_info)){
  console.log(a)
}*/
//console.log(JSON.parse(data_info)[1])



for(let a = 1; a < JSON.parse(data_info).length-1; a++){

  let data1 = JSON.parse(data_info)
  data1["page"] = a
// put in for loop that goes 10 times and makes 10 identical pages for now
let micro_html = ejs.render(micro_template, {
  filename: __dirname + '/views/micro.ejs',
  //data: JSON.parse(data_info)[a]
  data: data1
});

//only thing in here that would have to change is like build/[new name].html for each round of loop
fs.writeFileSync('build/micro'+a+'.html', micro_html, 'utf8');

}

let macro_html = ejs.render(macro_template, {
  filename: __dirname + '/views/index.ejs',
  data: JSON.parse(data_info)
});

fs.writeFileSync('build/index.html', macro_html, 'utf8');

let about_html = ejs.render(about_template, {
  filename: __dirname + '/views/about.ejs',
  data: JSON.parse(data_info)
});

fs.writeFileSync('build/about.html', about_html, 'utf8');

//end of for loop
