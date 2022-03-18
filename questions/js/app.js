const ques = document.querySelectorAll('.question');


ques.forEach((q)=>{
   btn = q.querySelector('.question button');
   btn.addEventListener('click',(()=>
   {
    document.querySelectorAll('.question p').forEach((t)=> t.classList.add('d-none'));

     q.querySelector('.question p').classList.remove('d-none');
     
   }))
   
});