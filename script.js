//selecteur 

const keys= document.querySelectorAll(".keys")
const op = document.querySelector(".operation")
const result =document.querySelector(".final-result")


const suprrimerTous =document.querySelector(".key-CE")
const suprimmer = document.querySelector(".clear")

const equal= document.querySelector(".equal")


var tab="";



keys.forEach(element => {
 
    element.addEventListener("click",operation)
});


equal.addEventListener("click",resultat)
suprrimerTous.addEventListener("click",clearAll)
suprimmer.addEventListener("click",clear)
/***********funcions ***** ****/
function clearAll(event)

{
    console.log("the boutton 0 is pressed");
    tab=" "
    result.innerHTML="0"
    op.innerHTML= " "
    console.log("the calculator is clear")
}


function clear(event)
{
    console.log("the boutton clear is pressed");
    if (tab!== "" && result.innerHTML.value != "0")
    {
        tab=tab.slice(0,-1);
       
        
    }
}



function operation(event)
{
    const key=event.target
  
    if (key.classList[1]=="number")
    {
        console.log(key)
        switch(key.classList[2])
     {
        
        case "key-0":
            console.log("the boutton 0 is pressed");
            tab=tab+"0";
            
        break;
        case "key-1" :
            console.log("the boutton 1 is pressed");
            tab=tab+"1"
        break;
        case "key-2" :
            tab=tab+"2"
        break;

        case "key-3" :
            tab=tab+"3"
        break;
        case"key-4" :
            tab=tab+"4"
        break;
        case "key-5":
            tab=tab+"5"
        break;
        case "key-6":
           tab=tab+"6"
        break;
        case "key-7":
            tab=tab+"7"
        break;
        case "key-8":
           tab=tab+"7"
        break;
        case "key-9":
           tab=tab+"9"
        break;
     }   
     
    }
     if(key.classList[1]=="op" && tab!=="")
    {
        console.log(key.classList[1])
        switch(key.classList[2])
     {
        
        case"key+" :
        tab=tab+"+"
        
        break;
        case  "key-":
            tab=tab+"-"
            
          
        break;
        case "key*" :
            tab=tab+"*"
            
        break;
        case "key/":
            tab=tab+"/"
            
        break;
        case  "key%":
            tab=tab+"%"
         
        break;
        case "keypoint":
         tab=tab+"."
        break ;

   
     
      }
 

      }
      

 op.innerHTML=tab  
  


}
function resultat(event)
{    
    var a;
    a=String(eval(tab));
   
    //alert(eval(tab))
   //alert(result.innerHTML="25")
      
        result.innerHTML= a
   
if (result.innerHTML !=="")
    {
     
        tab=result.innerHTML
       op.innerHTML="0"
    }
}


