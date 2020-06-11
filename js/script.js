var dado1 = 0;
var dado2 = 0;
var soma = 0;
var total=0;
document.getElementById("btn_passar").disabled = true;
function lancar_dados()
{
  jogar_dado1()
  jogar_dado2()
  somar_dados()
}
  
/*{
  var i = 1;
  var temp1 = setInterval(function()
  {
    i++;
    jogar_dado1()
    jogar_dado2()

    if (i==40)
      {
        clearInterval(temp1);
      }

  }, 100);

}*/

function jogar_dado1()
{
    res1 = document.querySelector('div#figura1');
   
  var img = document.createElement('img');
  img.setAttribute('id','dado');
  img.setAttribute('width',200);
  img.setAttribute('height',200);

  dado1 = getRndInteger(1,6);
  res1.innerHTML = "";
  img.setAttribute('src', 'img/' + dado1 + '.png');
  res1.appendChild(img);
 
}

function jogar_dado2()
{
    res2 = document.querySelector('div#figura2');
   
  var img = document.createElement('img');
  img.setAttribute('id','dado');
  img.setAttribute('width',200);
  img.setAttribute('height',200);

  dado2 = getRndInteger(1,6);
  res2.innerHTML = "";
  img.setAttribute('src', 'img/' + dado2 + '.png');
  res2.appendChild(img);
}

function getRndInteger(min, max) 
{
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function somar_dados()
{ 
  var valor1 = Number(dado1);
  var valor2 = Number(dado2);

  if(valor1==1 && valor2==1)
  {
    alert("Você perdeu todos os seus Pontos! \nHá dois dados com o número 1.");
    total = 0;
    document.getElementById("total_vc").innerHTML = "Total = "+ total;

    lancar_dados_pc();
  }
  else if(valor1==1 || valor2==1)
  {
    alert("Você perdeu a vez! \nHá um número igual a 1."); 
    document.getElementById("btn_lancar").disabled = true;
    document.getElementById("turno").innerHTML = "Turno do Computador";
    lancar_dados_pc();
  }
  else
  {
    soma = valor1 + valor2;
    document.getElementById("soma").innerHTML = soma;
    document.getElementById("btn_passar").disabled = false;
  }
}

function passar_vez_somar()
{   
  total = total + soma;
  document.getElementById("total_vc").innerHTML = "Total = "+ total;
  document.getElementById("btn_lancar").disabled = true;
  document.getElementById("btn_passar").disabled = true;
  document.getElementById("turno").innerHTML = "Turno do Computador";
  
  lancar_dados_pc();
}

// VEZ DO PC
var dado3=0;
var dado4=0;
var soma2=0;
var total2=0;

function lancar_dados_pc()
{ 
  setTimeout(jogar_dado3, 2000);
  setTimeout(jogar_dado4, 2000);
  setTimeout(somar_dados2, 2000);
  document.getElementById("btn_passar").disabled = true;
}
function jogar_dado3()
{
  res3 = document.querySelector('div#figura3');
   
  var img = document.createElement('img');
  img.setAttribute('id','dado');
  img.setAttribute('width',200);
  img.setAttribute('height',200);

  dado3 = getRndInteger(1,6);
  res3.innerHTML = "";
  img.setAttribute('src', 'img/' + dado3 + '.png');
  res3.appendChild(img);
 
}

function jogar_dado4()
{
    res4 = document.querySelector('div#figura4');
   
  var img = document.createElement('img');
  img.setAttribute('id','dado');
  img.setAttribute('width',200);
  img.setAttribute('height',200);

  dado4 = getRndInteger(1,6);
  res4.innerHTML = "";
  img.setAttribute('src', 'img/' + dado4 + '.png');
  res4.appendChild(img);
  
}

function somar_dados2()
{ 
  var valor3 = Number(dado3);
  var valor4 = Number(dado4);

   
  if(valor3==1 || valor4==1)
  {
    alert("O Computador perdeu a vez! \nPois jogou um número igual a 1.");
    document.getElementById("btn_lancar").disabled = false;
    document.getElementById("turno").innerHTML = "Seu Turno";
  }
  else
  {
    soma2 = valor3 + valor4;
    document.getElementById("soma2").innerHTML = soma2;
    total2 = total2 + soma2;
    document.getElementById("total_pc").innerHTML = "Total = "+ total2;
    document.getElementById("btn_lancar").disabled = false;
    document.getElementById("turno").innerHTML = "Seu Turno";
  }

}





