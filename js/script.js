var dado1 = 0;
var dado2 = 0;
var soma = 0;
var total=0;
var giro1=0;
var giro2=0;


document.getElementById("btn_passar").disabled = true;
function lancar_dados()
{
  girar_dados_vc()
  setTimeout(jogar_dado1, 1600)
  setTimeout(jogar_dado2, 1600)
  setTimeout(somar_dados, 2000)
}

function girar_dados_vc()
{
  var i = 1;
  var temp1 = setInterval(function()
  {
    i++;
    girar_dado1()
    girar_dado2()

    if (i==15)
      {
        clearInterval(temp1);
      }
  }, 100);
}

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
  var soma_dados=document.getElementById("soma_dados").innerHTML;

  if(valor1==1 && valor2==1)
  {
    alert("\n\n\nVocê perdeu todos os seus Pontos! \n\n\n\n\nHá dois dados com o número 1.");
    total = 0;
    document.getElementById("total_vc").innerHTML = "Pontuação = "+ total;
    document.getElementById("btn_lancar").disabled = true;
    document.getElementById("turno").innerHTML = "Turno do Computador";

    lancar_dados_pc();
  }
  else if(valor1==1 || valor2==1)
  {
    alert("\n\n\nVocê perdeu a vez! \n\n\n\n\nHá um dado com número 1."); 
    document.getElementById("btn_lancar").disabled = true;
    document.getElementById("turno").innerHTML = "Turno do Computador";
    lancar_dados_pc();
  }
  else
  {
    soma = valor1 + valor2;
    soma_dados=Number(soma);
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

  if(total >= 100)
    {
      alert("\n\n\n\nParabéns! Você ganhou o jogo!\n\n\n");
      window.location.reload();
    }
  
  lancar_dados_pc();
}


//****************************************  VEZ DO PC ****************************************************


var dado3=0;
var dado4=0;
var soma2=0;
var total2=0;
var giro3=0;
var giro4=0;

function lancar_dados_pc()
{ 
  setTimeout(girar_dados_pc, 1000)
  setTimeout(jogar_dado3, 2700);
  setTimeout(jogar_dado4, 2700);
  setTimeout(somar_dados2, 3700);
  document.getElementById("btn_passar").disabled = true;
}
function girar_dados_pc()
{
  var i = 1;
  var temp = setInterval(function()
  {
    i++;
    girar_dado3()
    girar_dado4()

    if (i==15)
      {
        clearInterval(temp);
      }
  }, 100);
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

function somar_dados2()//Escolha do PC
{ 
  var valor3 = Number(dado3);
  var valor4 = Number(dado4);

  if(valor3==1 && valor4==1)
  {
    alert("\n\n\nO Computador perdeu todos os pontos! \n\n\n\nHá dois dados com o número 1.");
    total2=0;
    document.getElementById("total_pc").innerHTML = "Total = "+ total2;
    document.getElementById("btn_lancar").disabled = false;
    document.getElementById("turno").innerHTML = "Seu Turno";
  }
  else if(valor3==1 || valor4==1)
  {
    alert("\n\n\nO Computador perdeu a vez! \n\n\n\nPois jogou um dado com número 1.");
    document.getElementById("btn_lancar").disabled = false;
    document.getElementById("turno").innerHTML = "Seu Turno";
  }
  else
  {
    soma2 = valor3 + valor4;
    /*document.getElementById("soma2").innerHTML = "Soma do PC: "+soma2;*/
    var resposta_pc = getRndInteger(1,2);
    
    if(resposta_pc == 1)
    {
      if (soma2<9)
      {
        alert("\n\n\n\nO computador vai lançar novamente para tentar uma soma maior\n\n\n");
        lancar_dados_pc();        
      }
      else
      {
        total2 = total2 + soma2;
        document.getElementById("total_pc").innerHTML = "Pontuação = "+ total2;

        if(total2 >= 100)
        {
          alert("\n\n\n\nQue pena, não foi dessa vez! O Computador chegou aos 100 pontos e ganhou o jogo!\n\n\n");
          window.location.reload();
        }  
        else
        {
          alert("\n\n\nSua vez!\n\nO computador decidiu passar a vez e somar "+soma2+" a sua pontuação");       
          document.getElementById("btn_lancar").disabled = false;
          document.getElementById("turno").innerHTML = "Seu Turno";
        }
      }
    }
    else
    {
      total2 = total2 + soma2;
      document.getElementById("total_pc").innerHTML = "Total = "+ total2;

      if(total2 >= 100)
        {
          alert("\n\n\nQue pena, não foi dessa vez! \n\n\nO Computador chegou aos 100 pontos e ganhou o jogo!\n\n");
          window.location.reload();
        }  
      else
        {
          alert("\n\n\nO computador decidiu somar "+soma2+" a sua pontuação e passar a vez"\n\n\n");       
          document.getElementById("btn_lancar").disabled = false;
          document.getElementById("turno").innerHTML = "Seu Turno";
        }
    } 
  }
}



// ***************************************   GIRAR DADOS   ***************************************


function girar_dado1()
{
  girar1 = document.querySelector('div#figura1');
   
  var img = document.createElement('img');
  img.setAttribute('id','dado');
  img.setAttribute('width',200);
  img.setAttribute('height',200);

  giro1 = getRndInteger(1,6);
  girar1.innerHTML = "";
  img.setAttribute('src', 'img/' + giro1 + '.png');
  girar1.appendChild(img);
}

function girar_dado2()
{
  girar2 = document.querySelector('div#figura2');
   
  var img = document.createElement('img');
  img.setAttribute('id','dado');
  img.setAttribute('width',200);
  img.setAttribute('height',200);

  giro2 = getRndInteger(1,6);
  girar2.innerHTML = "";
  img.setAttribute('src', 'img/' + giro2 + '.png');
  girar2.appendChild(img);
}

function girar_dado3()
{
  girar3 = document.querySelector('div#figura3');
   
  var img = document.createElement('img');
  img.setAttribute('id','dado');
  img.setAttribute('width',200);
  img.setAttribute('height',200);

  giro3 = getRndInteger(1,6);
  girar3.innerHTML = "";
  img.setAttribute('src', 'img/' + giro3 + '.png');
  girar3.appendChild(img);
}

function girar_dado4()
{
  girar4 = document.querySelector('div#figura4');
   
  var img = document.createElement('img');
  img.setAttribute('id','dado');
  img.setAttribute('width',200);
  img.setAttribute('height',200);

  giro4 = getRndInteger(1,6);
  girar4.innerHTML = "";
  img.setAttribute('src', 'img/' + giro4 + '.png');
  girar4.appendChild(img);
}



