
// partial:index.partial.html
//  
//   CSS Blossoming Flowers at Magical Night.
//   I've taken some inspiration by Yup Nguyen's Artwork: https://dribbble.com/shots/11096994-Virtual-Garden.
//   Made with Pure CSS & ♥
//   Original Code by Md Usman Ansari.
//   Source: https://codepen.io/mdusmanansari/pen/BamepLe
//   License: MIT (see LICENSE file for details)
//


onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};