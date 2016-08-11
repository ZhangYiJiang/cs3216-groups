const fs = require('fs'); 
const path = require('path'); 

const config = {
  input: './data', 
  output: './json', 
};

const rename = {
  'Louie Tan': 'Louie Tan Yi Jie', 
  'Kent Nguyen': 'Nguyen Anh Quan', 
};

fs.readdirSync(config.input).forEach((f) => {
  const inFile = path.join(config.input, f); 
  const outFile = path.join(config.output, f); 
  let groups = require('./' + inFile);
  
  groups.forEach((group) => {
    group[1].forEach((n, i) => {
  	  if (rename.hasOwnProperty(n))
  	    group[1][i] = rename[n]; 
    });
  });
  
  fs.writeFileSync(outFile, JSON.stringify({ 
  	groups, 
  	ts: fs.statSync(inFile).mtime.getTime(), 
  })); 
}); 
