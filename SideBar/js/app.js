const btnClose = document.getElementById('close');
const btnToggle = document.getElementById('toggle');

btnClose.addEventListener('click' , ()=>
{
     
 
    document.getElementById('sidebar').classList.add('translate')
});

btnToggle.addEventListener('click' , ()=>
{
    document.getElementById('sidebar').setAttribute('style' , 'transition: transform 1s;')
    document.getElementById('sidebar').classList.toggle('translate')
})

