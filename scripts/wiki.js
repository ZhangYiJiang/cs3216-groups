var css = document.createElement('style'); 
css.innerHTML = `
#bodyContent .student-name {
  text-decoration: underline; 
}

#bodyContent .student-name:hover + .student-card {
  display: block; 
}

#bodyContent .student-card {
  position: absolute; 
  margin-top: 1em; 
  display: none; 
}

#bodyContent .student-card img {
  display: block; 
  max-width: 200px;
}
`; 

document.getElementsByTagName('head')[0].appendChild(css); 

fetch('https://meebleforp.com/projects/cs3216-groups/json/students.json')
.then((response) => response.json())
.then((students) => {
  const paragraphs = Array.from(document.querySelectorAll('#bodyContent p')); 
  students.forEach((s) => {
    for (let p of paragraphs) {
      if (p.textContent.indexOf(s.name) !== -1) {
        p.innerHTML = p.innerHTML.replace(s.name, `
        <a href="${s.blog}" class="student-name">${s.name}</a> (${s.faculty})
        <div class="student-card">
          <img src="${s.photo}" alt="">          
        </div>
        `);
        break;
      }
    }
  });  
});
