var dado1 = 0;
var dado2 = 0;
var soma = 0;

function lancar_dados()
{
  var i = 1;
  var temp1 = setInterval(function()
  {
    i++;
    res = document.querySelector('div#figura1');
   
     var img = document.createElement('img');
      img.setAttribute('id','dado');
      img.setAttribute('width',200);
      img.setAttribute('height',200);

    var girar = getRndInteger(1,6);
    res.innerHTML = "";
    img.setAttribute('src', 'img/' + girar + '.png');
    res.appendChild(img);

    jogar_dado1()
    jogar_dado2()

    if (i==40)
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

  somar_dados()
 
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

  somar_dados()

}

function getRndInteger(min, max) 
{
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function somar_dados()
{ 
  var valor1 = Number(dado1);
  var valor2 = Number(dado2);
  soma = valor1 + valor2;


  document.getElementById("soma").innerHTML = soma;
}

function total()
{
  if (dado1 > 1 && dado2>1)
  {
    
  }


}




