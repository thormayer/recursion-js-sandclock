(function(){
  
  var maxStar = 5,
      minStar = 0;

  var functionHolder = function (counter) {
    output(counter);
    if (counter > 1) {
      functionHolder(counter -1)
    }
    output(counter);
  }
  
  function output(c){
    for(var i = 0; i < c; i++){
      document.write('*');
    }
    document.write('<br/>')
  } 
   
  functionHolder(maxStar);
})();
