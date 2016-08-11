	
$.getJSON('https://meebleforp.com/projects/cs3216-groups/json/facebook.json', (d) => {
  let students = {}; 
  $('#2016 + .row .thumbnail').each((i, e) => {
    students[$(e).find('.student-name').text().trim()] = $(e).parent();
  });
  
  let gElement = $('#2016');
  $('#2016 + .row').prepend('<div class="col-sm-12"><h4>Ungrouped</h4></div>'); 
  d.groups.forEach((g) => {
    gElement = $('<div class="row">').insertAfter(gElement);
    let headingContainer = $('<div class="col-sm-12">').appendTo(gElement);
    $('<h4>', { text: g[0] }).appendTo(headingContainer); 
	g[1].forEach((n) => {
	  if (students.hasOwnProperty(n)) {
      	students[n].appendTo(gElement);
      } else {
        console.warn(`'${n}' should be in ${g[0]} but unable to find matching name in unmatched students`); 
      }
    });
  }); 
});
