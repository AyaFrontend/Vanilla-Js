let counter = document.getElementById('counter'),
btnIncrease = document.getElementById('btnIncrease'),
btnDecrease = document.getElementById('btnDecrease'),
btnReset = document.getElementById('btnReset'),
result = 0;


function writeIntoHtml(res)
{
    
   counter.innerHTML =  res;
   changeColor('black');

   if(result != 0)
   {
      result > 0 ? changeColor('green') : changeColor('red');
   }

}

btnIncrease.addEventListener('click',()=> writeIntoHtml(++result));
btnDecrease.addEventListener('click',()=> writeIntoHtml(--result));
btnReset.addEventListener('click',()=> writeIntoHtml(result = 0));


let changeColor = color=> counter.style.color = color;