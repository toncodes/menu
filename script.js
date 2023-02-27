function menuToggle(){
  let menuArea = document.querySelector('#menu-area')
  
  /*if (menuArea.classList.contains('menu-opened') == true){
    menuArea.classList.remove('menu-opened')
  } else {
    menuArea.classList.add('menu-opened')
  }*/

  if(menuArea.style.width == '0px'){
    menuArea.style.width = '200px'
  } else {
    menuArea.style.width = '0px'
  }
}