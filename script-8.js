 var i=3;
 var b=36; 
 count1=0;  
 count2=0;  

 
 var result = prompt("Введіть ваше ім'я");
 var imgs=new Array('6C.png','7C.png','8C.png','9C.png','10C.png','AC.png','JC.png','KC.png','QC.png','6D.png','7D.png','8D.png','9D.png','10D.png','AD.png','JD.png','KD.png','QD.png','6S.png','7S.png','8S.png','9Spng','10S.png','AS.png','JS.png','KS.png','QS.png','6H.png','7H.png','8H.png','9H.png','10H.png','AH.png','JH.png','KH.png','QH.png'); 
 var text=document.getElementById("pl8");
 text.innerHTML=result;
 function timme(){ 
   
    if(i==3)
    {    imgs=new Array('6C.png','7C.png','8C.png','9C.png','10C.png','AC.png','JC.png','KC.png','QC.png','6D.png','7D.png','8D.png','9D.png','10D.png','AD.png','JD.png','KD.png','QD.png','6S.png','7S.png','8S.png','9Spng','10S.png','AS.png','JS.png','KS.png','QS.png','6H.png','7H.png','8H.png','9H.png','10H.png','AH.png','JH.png','KH.png','QH.png'); 
        document.getElementById('pl3').innerHTML= '0';
        document.getElementById('p77').innerHTML= ':';
        document.getElementById('pl4').innerHTML= '0';   
    }
    let ran1=Math.floor(Math.random()* (b - 1) + 0);
    var image3=document.getElementById("image1");
    image3.src=imgs[Number(ran1)];
  
    if(i!=0){
    switch (imgs[ran1][0]) {
        case '6':
            count2=count2+6;
            break;
        case '7':
            count2=count2+7;
            break;
        case '8':
            count2=count2+8;
            break;
        case '9':
            count2=count2+9;
            break;
        case '10':
            count2=count2+10;
            break;
        case 'A':
            count2=count2+11;
            break;
        case 'J':
            count2=count2+2;
            break;
        case 'K':
            count2=count2+4;
            break;
        case 'Q':
            count2=count2+3;
            break;
                                                                                                        
    }
  
     imgs.splice(ran1, 1);  
     b=b-1; 


    document.getElementById('pl3').innerHTML= count2;  
    let ran2=Math.floor(Math.random()* (b - 1) + 0);
    var image2=document.getElementById("image");
    
    image2.src=imgs[Number(ran2)];
   
   
    switch (imgs[ran2][0]) {
        case '6':
            count1=count1+6;
            break;
        case '7':
            count1=count1+7;
            break;
        case '8':
            count1=count1+8;
            break;
        case '9':
            count1=count1+9;
            break;
        case '10':
            count1=count1+10;
            break;
        case 'A':
            count1=count1+11;
            break;
        case 'J':
            count1=count1+2;
            break;
        case 'K':
            count1=count1+4;
            break;
        case 'Q':
            count1=count1+3;
            break;
            
                                                                                                             
    }
  
    document.getElementById('pl4').innerHTML= count1; 
     imgs.splice(ran2, 1);  
     b=b-1; 
    i=i-1;
    document.getElementById('aa').innerHTML= i; 
}
if(i==0){
    if(count1==count2){
    document.getElementById('pl3').innerHTML= "Tie game";
    document.getElementById('p77').innerHTML= '';
    document.getElementById('pl4').innerHTML= '';
     i=3;
     b=36; 
    count1=0;  
    count2=0;  
   
    }
    if(count1>count2){
        document.getElementById('pl3').innerHTML= "win  "+result;
        document.getElementById('p77').innerHTML= '';
        document.getElementById('pl4').innerHTML= '';
         i=3;
         b=36; 
        count1=0;  
        count2=0;  
       
        }
        if(count1<count2){
            document.getElementById('pl3').innerHTML= 'win computer';
            document.getElementById('p77').innerHTML= '';
            document.getElementById('pl4').innerHTML= '';
            i=3;
             b=36; 
            count1=0;  
            count2=0;
           
            }
}  

}   
