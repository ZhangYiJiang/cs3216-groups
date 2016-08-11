// ==UserScript==
// @name        CS3216 Wiki Profile
// @namespace   yijiang
// @description Adds links to student blog and photo in CS3216 wiki
// @include     https://mysoc.nus.edu.sg/~wiki/index.php/CS3216_*
// @version     1
// @grant       none
// ==/UserScript==

// Define students 
const students = [{"name":"Bui Do Hiep","faculty":"Computing","blog":"https://medium.com/@buidohiep","photo":"https://cs3216.github.io/img/students/2016/bui-do-hiep.jpg"},{"name":"Chua Yao Hui","faculty":"Yale","blog":"https://superburrito.wordpress.com/","photo":"https://cs3216.github.io/img/students/2016/chua-yao-hui.jpg"},{"name":"Dinh Viet Thang","faculty":"Computing","blog":"http://thang207-cs3216.blogspot.com/","photo":"https://cs3216.github.io/img/students/2016/dinh-viet-thang.jpg"},{"name":"Emmanuel Yien Goh","faculty":"Science","blog":"http://my-cs3216-journey.blogspot.sg/","photo":"https://cs3216.github.io/img/students/2016/emmanuel-yien-goh.jpg"},{"name":"Huang Bohan","faculty":"Computing","blog":"http://huangbohan.blogspot.sg/","photo":"https://cs3216.github.io/img/students/2016/huang-bohan.jpg"},{"name":"Huang Lie Jun","faculty":"Computing","blog":"https://wakeupmyidea.wordpress.com/","photo":"https://cs3216.github.io/img/students/2016/huang-lie-jun.jpg"},{"name":"Irvin Lim Wei Quan","faculty":"Computing","blog":"http://blog.irvinlim.com/","photo":"https://cs3216.github.io/img/students/2016/irvin-lim-wei-quan.jpg"},{"name":"Jiang Sheng","faculty":"Computing","blog":"http://blog.gisonrg.me/","photo":"https://cs3216.github.io/img/students/2016/jiang-sheng.jpg"},{"name":"Ken Oung Yong Quan","faculty":"Computing","blog":"https://kenoung.github.io/","photo":"https://cs3216.github.io/img/students/2016/ken-oung-yong-quan.jpg"},{"name":"Lam Chi Thanh","faculty":"Computing","blog":"https://chithanhblog.wordpress.com/","photo":"https://cs3216.github.io/img/students/2016/lam-chi-thanh.jpg"},{"name":"Le Xuan Manh","faculty":"Computing","blog":"https://blog.nus.edu.sg/noyethug3006/","photo":"https://cs3216.github.io/img/students/2016/le-xuan-manh.jpg"},{"name":"Lee Kai Yi","faculty":"Engineering","blog":"https://kaikaiyi.wordpress.com/","photo":"https://cs3216.github.io/img/students/2016/lee-kai-yi.jpg"},{"name":"Leon Mak An Sheng","faculty":"Computing","blog":"http://leonmak.me/","photo":"https://cs3216.github.io/img/students/2016/leon-mak-an-sheng.jpg"},{"name":"Li Jia'En Nicholette","faculty":"Computing","blog":"https://nekonekonik.github.io/","photo":"https://cs3216.github.io/img/students/2016/li-jiaen-nicholette.jpg"},{"name":"Louie Tan","faculty":"Computing","blog":"https://louietyjcs3216.wordpress.com/","photo":"https://cs3216.github.io/img/students/2016/louie-tan-yi-jie.jpg"},{"name":"Melvin Tan Jun Keong","faculty":"Computing, Science","blog":"http://melvin-cs3216.blogspot.sg/","photo":"https://cs3216.github.io/img/students/2016/melvin-tan-jun-keong.jpg"},{"name":"Nam Jun Jie Derek","faculty":"Computing","blog":"https://dereknam.wordpress.com/","photo":"https://cs3216.github.io/img/students/2016/nam-jun-jie-derek.jpg"},{"name":"Ng Chuen Weng Eugene","faculty":"Business","blog":"https://lifeofasingaporeanboy.wordpress.com/","photo":"https://cs3216.github.io/img/students/2016/ng-chuen-weng-eugene.jpg"},{"name":"Ng Xu Jie","faculty":"Business","blog":"https://thedreamyfactory.wordpress.com/","photo":"https://cs3216.github.io/img/students/2016/ng-xu-jie.jpg"},{"name":"Ng Zhi An","faculty":"Computing","blog":"https://medium.com/@ngzhian/","photo":"https://cs3216.github.io/img/students/2016/ng-zhi-an.jpg"},{"name":"Kent Nguyen","faculty":"Computing","blog":"https://medium.com/kent3216","photo":"https://cs3216.github.io/img/students/2016/nguyen-anh-quan.jpg"},{"name":"Nguyen Huu Thanh","faculty":"Computing","blog":"http://giongto35.blogspot.com/","photo":"https://cs3216.github.io/img/students/2016/nguyen-huu-thanh.jpg"},{"name":"Nguyen Tuong Van","faculty":"Computing","blog":"http://smokinclove.my-free.website/my-cs3216-journal","photo":"https://cs3216.github.io/img/students/2016/nguyen-tuong-van.jpg"},{"name":"Patrick Cho Chung Ting","faculty":"Computing","blog":"https://blog.nus.edu.sg/patrickcho/","photo":"https://cs3216.github.io/img/students/2016/patrick-cho-chung-ting.jpg"},{"name":"Piyush Varanjani","faculty":"Computing","blog":"https://medium.com/@piyushvjani","photo":"https://cs3216.github.io/img/students/2016/piyush-varanjani.jpg"},{"name":"Ryan Heng Rui Yan","faculty":"Computing","blog":"https://ryanheng92.wordpress.com/","photo":"https://cs3216.github.io/img/students/2016/ryan-heng-rui-yan.jpg"},{"name":"Shen Yichen","faculty":"Computing","blog":"https://yc3216.wordpress.com/","photo":"https://cs3216.github.io/img/students/2016/shen-yichen.jpg"},{"name":"Si Junke","faculty":"Computing","blog":"http://ashley-si.github.io/","photo":"https://cs3216.github.io/img/students/2016/si-junke.jpg"},{"name":"Tan Jia Min Michelle","faculty":"Computing","blog":"http://cs3216aspirations.blogspot.com/","photo":"https://cs3216.github.io/img/students/2016/tan-jia-min-michelle.jpg"},{"name":"Ten Zhi-Yang","faculty":"Computing","blog":"https://tzyinc.wordpress.com/","photo":"https://cs3216.github.io/img/students/2016/ten-zhi-yang.jpg"},{"name":"Tran Cong Thien","faculty":"Computing","blog":"http://thientran1707.blogspot.com/","photo":"https://cs3216.github.io/img/students/2016/tran-cong-thien.jpg"},{"name":"Varun Kumar Patro","faculty":"Computing, Business","blog":"https://medium.com/@varunpatro","photo":"https://cs3216.github.io/img/students/2016/varun-kumar-patro.jpg"},{"name":"Wang Jinghan","faculty":"Computing","blog":"http://jinghan-cs3216.tumblr.com/","photo":"https://cs3216.github.io/img/students/2016/wang-jinghan.jpg"},{"name":"Wang Yanhao","faculty":"Computing, Science","blog":"https://yanhaoblog.wordpress.com/","photo":"https://cs3216.github.io/img/students/2016/wang-yanhao.jpg"},{"name":"Yang Zhuohan","faculty":"Computing","blog":"https://yangzhuohan.wordpress.com/","photo":"https://cs3216.github.io/img/students/2016/yang-zhuohan.jpg"},{"name":"You Jing","faculty":"Computing","blog":"https://yucca3217.wordpress.com/","photo":"https://cs3216.github.io/img/students/2016/you-jing.jpg"},{"name":"Yuan Yu Chuan","faculty":"Computing","blog":"https://yyc.github.io/blog/","photo":"https://cs3216.github.io/img/students/2016/yuan-yu-chuan.jpg"},{"name":"Zhang Hanming","faculty":"Computing","blog":"http://hanmingz.xyz/","photo":"https://cs3216.github.io/img/students/2016/zhang-hanming.jpg"},{"name":"Zhang Yijiang","faculty":"Computing","blog":"https://meebleforp.com/archive/cs3216","photo":"https://cs3216.github.io/img/students/2016/zhang-yijiang.jpg"},{"name":"Zhu Liang","faculty":"Computing","blog":"https://paradite.com/","photo":"https://cs3216.github.io/img/students/2016/zhu-liang.jpg"}];

// Inject CSS 
let css = document.createElement('style'); 
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
