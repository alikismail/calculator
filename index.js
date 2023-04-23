const result=document.querySelector('#result');
const result1=document.querySelector('#result1');
const result2=document.querySelector('#result2');
const input=document.querySelector('#input');
const input1=document.querySelector('#input1');
const input2=document.querySelector('#input2');
const btn=document.querySelector('#bot');
const adv=document.querySelector('#adv');
const adv1=document.querySelector('#adv1');
const adv2=document.querySelector('#adv2');
var x=new Date();

 function getvalue(){
     if(input.value>Number  (x.getFullYear.value)||input1.value>12||input2.value>31){
         if(input.value>Number(x.getFullYear.value)){
            adv.textContent="must be in the past";}
            if(input1.value>12){
               adv1.textContent="must be avalid month";}
                 if(input2.value>31){
                    adv2.textContent= "must be avalid day";
                          }

         result.textContent ="- -" ;
result1.textContent = "- -";
result2.textContent = "- -"
    }
    else{
         adv.textContent="";
          adv1.textContent="";
             adv2.textContent= "";
    if(Number(input2.value)>24||Number(input1.value)>4){
        result.textContent = 2023- Number(input.value)-1;
        result1.textContent=12-Number (input1.value)+4;
        if(30-Number(input2.value)+24>=30){
            result1.textContent=12-Number (input1.value)+4+1;  
            result2.textContent=30-Number(input2.value)+24-30; 
        }
        else{
           result2.textContent=30-Number(input2.value) ;
        }

    }
    else{
    result.textContent = 2023- Number(input.value);
    result1.textContent=4-Number(input1.value);
    result2.textContent=24-Number(input2.value);
}}}
btn.addEventListener('click',getvalue);