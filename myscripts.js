var ex1 = 0;
var ex2 = 0;
var ex3 = 0;
var ex4 = 0;
var ex5 = 0;
var ex6 = 0;
var ex7 = 0;
var ex8 = 0;
var ex9 = 0;
var e10 = 0;
var eonze = 0;
var edoze = 0;
var etreze = 0;
var equatorze = 0;
var equinze = 0;
var edezesseis = 0;
var edezessete = 0;
var edezoito = 0;
var edezenove = 0;
var evinte = 0;
var count = 0;
function radio_n_preenchido(nome){
  var opcoes = document.getElementsByName(nome);
  for(var i=0;i<opcoes.length;i++){
     if(!(opcoes[i].checked)){
         return true;
    }
  }
  return false;
};
function enviar(){
  count = 0;
  if(radio_n_preenchido('ex1') && radio_n_preenchido('ex2') && radio_n_preenchido('ex3') && radio_n_preenchido('ex4')
&& radio_n_preenchido('ex5') ){
   alert('Responda a todas as perguntas!');
 }else{
    if (document.getElementById("s1").checked == true ){
      //count = 0;
  	}else{
      count = count+5;
    }
    if (document.getElementById("s2").checked == true ){
        count = count+5;
  	}else{
        //ex2 = 0;
    }
    if (document.getElementById("s3").checked == true ){
        count = count+5;
  	}else{
        //ex3 = 0;
    }
    if (document.getElementById("s4").checked == true ){
        count = count+5;
  	}else{
        //ex4 = 0;
    }
    if (document.getElementById("s5").checked == true ){
        count = count+5;
  	}else{
        //ex5 = 0;
    }
    if (document.getElementById("s6").checked == true ){
        count = count+5;
  	}else{
        //ex6 = 0;
    }
    if (document.getElementById("s7").checked == true ){
        count = count+5;
  	}else{
        //ex7 = 0;
    }
    if (document.getElementById("s8").checked == true ){
        count = count+5;
  	}else{
        //ex8 = 0;
    }
    if (document.getElementById("s9").checked == true ){
        count =count+ 5;
  	}else{
        //ex9 = 0;
    }
    if (document.getElementById("sdez").checked == true ){
        //edez = 0;
  	}else{
        count = count+5;
    }
    if (document.getElementById("sonze").checked == true ){
        //eonze = 0;
  	}else{
        count = count+5;
    }
    if (document.getElementById("sdoze").checked == true ){
        //edoze = 0;
  	}else{
        count =count+ 5;
    }
    if (document.getElementById("streze").checked == true ){
        count =count+ 5;
  	}else{
        //etreze = 0;
    }
    if (document.getElementById("squatorze").checked == true ){
        count =count+ 5;
  	}else{
        //equatorze = 0;
    }
    if (document.getElementById("squinze").checked == true ){
        //equinze = 0;
  	}else{
        count =count+ 5;
    }
    if (document.getElementById("sdezesseis").checked == true ){
        //count = 0;
  	}else{
        count =count+ 5;
    }
    if (document.getElementById("sdezessete").checked == true ){
      //  edezessete = 0;
  	}else{
        count =count+ 5;
    }
    if (document.getElementById("sdezoito").checked == true ){
        count =count+ 5;
  	}else{
        //edezoito = 0;
    }
    if (document.getElementById("sdezenove").checked == true ){
        count =count+ 5;
    }else{
        //edezenove = 0;
    }
    if (document.getElementById("svinte").checked == true ){
        count =count+ 5;
  	}else{
        //evinte = 0;
    }
  }
  //count = ex1+ex2+ex3+ex4+ex5+ex6+ex7+ex8+ex9+edez+eonze+edoze+etreze+equatorze+equinze+edezesseis+edezessete+edezoito+edezenove+evinte;
  alert( 'ooooooooooooooook.' + 'count = ' + count);
};
