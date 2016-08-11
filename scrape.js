var groups = $$('#bodyContent h2')
.filter((e) => e.textContent.trim().indexOf('Group') === 0)
.map((e) => {
  let p = e.nextElementSibling; 
  while (p.tagName.toUpperCase() === 'P' && p.textContent.toLowerCase().indexOf('group member') === -1)
    p = p.nextElementSibling;
  return [e.textContent.trim(), p.textContent.split(/group member/i)[1].split(':')[1].trim()]; 
})
.filter((e) => e[1])
.map((g) => {
  g[1] = g[1].split('\n').map((n) => n.trim().split(/\s+/).slice(0, -1).join(' '));
  return g; 
});

copy(JSON.stringify(groups));
