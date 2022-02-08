set_100vh()
window.onresize = function(){ set_100vh() }
function set_100vh(){
  let vh_100 = window.innerHeight;
  document.documentElement.style.setProperty('--100vh', `${vh_100}px`);
}


function _uuid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

function deepClone(obj){
  return JSON.parse(JSON.stringify(obj))
}