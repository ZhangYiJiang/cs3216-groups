const fs = require('fs'); 
const path = require('path'); 

const config = {
  input: './data', 
  output: './json', 
};

fs.readdirSync(config.input).forEach((f) => {
  const inFile = path.join(config.input, f); 
  const outFile = path.join(config.output, f); 
  let groups = JSON.parse(fs.readFileSync(inFile, { encoding: 'utf-8' })); 
  
  fs.writeFileSync(outFile, JSON.stringify({ 
  	groups, 
  	ts: fs.statSync(inFile).mtime.getTime(), 
  })); 
}); 
