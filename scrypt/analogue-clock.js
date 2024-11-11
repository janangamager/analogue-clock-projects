
secondHand = document.getElementById('second')
minuteHand = document.getElementById('minute')
hourHand= document.getElementById('hour')
wrapper = document.getElementById('wrapper')      

const displayTime =() =>{
   
    let toDay = new Date();
   
        sec =( toDay.getSeconds()/60)*360,

         min =( toDay.getMinutes()/60)*360,
         
         hr =( toDay.getHours()/12) *360,
        wr =(toDay.getSeconds()/60)*360, 
      
      
       
   secondHand.style.transform = `rotate(${sec}deg)`;
   minuteHand.style.transform = `rotate(${min}deg)`;
   hourHand.style.transform = `rotate(${hr}deg`; 
   wrapper.style.transform = `rotate(${wr}deg)`;   
   
   
   }
   setInterval(displayTime,1000);


   
   
     var secCount= document.getElementById('second-count');
     var minCount= document.getElementById('minute-count');
     var  hrCount= document.getElementById('hour-count');
     
     setInterval(()=>{ 
       let dateTime = new Date();
   
   
    var seconds = dateTime.getSeconds();
    var minutes = dateTime.getMinutes();
    var hours = dateTime.getHours();
    
    
     
    seconds = seconds <10?'0'+seconds:seconds;

    

    
    
    secCount= document.getElementById('second-count').innerHTML = seconds;
    minCount= document.getElementById('minute-count').innerHTML = minutes;
      hrCount= document.getElementById('hour-count').innerHTML = hours;
      




  








  
 


  
  },1000)
  
  
   
   
  
      
      
   
   
   
   
