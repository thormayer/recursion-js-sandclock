(function(){
  
  var maxStar = 5,
      minStar = 0,
      direction = true;
  
  var functionHolder = function (counter) {
    output(counter);
    spacing();

    if(getDirection(direction, counter)){
      if(counter > 1)
        functionHolder(counter - 1);      
      else{
        direction = false;
        functionHolder(counter + 1);  
      }  
    }else{
      if(counter < maxStar)
        functionHolder(counter + 1);  
    }
  }
  
  function output(c){
    for(var i = 0; i < c; i++){
      document.write('*');
    }
  }
  
  function getDirection(dirDesc, currentCounter){
    return dirDesc ? true : false;
  }
  
  function spacing(){
    document.write('<br/>')
  }
  
  functionHolder(maxStar);
  
})();
