$(function(){
  var curDown = false,
      curYPos = 0,
      curXPos = 0;

  $(" #LISTA ").mousemove(function(m){
    if(curDown === true){
      $( this ).scrollLeft( $(this).scrollLeft() + (curXPos - m.clientX)*0.0822 );
    
    }
  });
  
  $(" #LISTA ").mousedown(function(m){
    curDown = true;
    curXPos = m.clientX;
  });
  
  $(" #LISTA ").mouseup(function(){
    curDown = false;
  });
})