A simple set of userscripts to add info from the CS3216 students page to the wiki, and some info from the wiki to the student page. 

## Userscripts 

- `wiki.user.js` ([**Install**][3] / [**Source**][4]) - Turns student names on the wiki to links to their blog, adds faculty behind their names, and adds profile image on hover. 
- `groups.user.js` ([**Install**][1] / [**Source**][2]) - Adds student groupings to the CS3216 students page 

## Data scraping tools 

- `scrape.js` - run this inside the browser console on the Wiki to pull grouping data to the clipboard. Copy this into the `.json` files in the `data` directory 
- `build.js` - run this using node.js (requires 6.x) to package the 'raw' data into the format accepted by the scripts in the `json` directory 

[1]: https://github.com/ZhangYiJiang/cs3216-groups/raw/master/scripts/groups.user.js
[2]: https://github.com/ZhangYiJiang/cs3216-groups/blob/master/scripts/groups.user.js
[3]: https://github.com/ZhangYiJiang/cs3216-groups/raw/master/scripts/wiki.user.js
[4]: https://github.com/ZhangYiJiang/cs3216-groups/blob/master/scripts/wiki.user.js
