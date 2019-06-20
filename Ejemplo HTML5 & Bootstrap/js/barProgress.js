
var progreso = 0;
var idIterval = setInterval(function(){
  // Aumento en 10 el progeso
  progreso +=10;
  $('#bar').css('width', progreso + '%');
     
  //Si llegó a 100 elimino el interval
  if(progreso == 100){
    progreso=0;
  }
},2000);

var progreso1 = 0;
var idIterval1 = setInterval(function(){
  // Aumento en 10 el progeso
  progreso1 +=10;
  $('#bar2').css('width', progreso1 + '%');
     
  //Si llegó a 100 elimino el interval
  if(progreso1 == 100){
    progreso1=0;
  }
},2000);