
import{Client} from './Models/Client.js';

export class Settings
{
   clientImg = document.getElementById('client-img');
   clientName = document.getElementById('client-name');
   clientJob = document.getElementById('client-job');
   clientDesc = document.getElementById('client-desc');
   index = 0;

 Clients = [
    new Client ('https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg','Aya Abd El-Rahman',
    'Web Developer' , '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto dolor, consequuntur alias, aperiam praesentium error corporis veritatis consectetur vitae reprehenderit omnis dignissimos'),
  
    new Client ('https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg','anna johnson',
    'Web Designer' , '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto dolor, consequuntur alias, aperiam praesentium error corporis veritatis consectetur vitae reprehenderit omnis dignissimos'),
  
    new Client ('https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj','Intern',
    'peter jones' , '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto dolor, consequuntur alias, aperiam praesentium error corporis veritatis consectetur vitae reprehenderit omnis dignissimos'),
  
    new Client ('https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg','bill anderson',
    'the boss' , '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto dolor, consequuntur alias, aperiam praesentium error corporis veritatis consectetur vitae reprehenderit omnis dignissimos')
]
    constructor()
    {
        this.showData(this.index);
        this.onload()

    }
  
    showData(index) {
        this.clientImg.setAttribute('src',this.Clients[index].img);
        this.clientJob.innerHTML  = this.Clients[index].jobTitle;
        this.clientDesc.innerHTML  = this.Clients[index].desc;
        this.clientName.innerHTML  = this.Clients[index].name;
        
    }

   onload()
   {
       document.addEventListener('DOMContentLoaded',()=>
       {
           this.eventBehavior('left-arrow' , ()=>
           {
              this.index > 0 ?  this.showData(--this.index) :  this.showData(0)
              
           });

           this.eventBehavior('right-arrow' , ()=>
           {
              this.index < this.Clients.length - 1 ?  this.showData(++this.index) :  this.showData(this.Clients.length - 1)
          
           });

           this.eventBehavior('random' , ()=>
           {
             
               this.showData( Math.round(Math.random()*3) );
            
           })
       })
   }
    

   eventBehavior(id , behavior)
   {
       document.getElementById(`${id}`).addEventListener('click', behavior)
   }
}