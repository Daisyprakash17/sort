const constainer=document.querySelector(".data-container"); 
let bars=document.getElementsByClassName('bar');
let speed=document.getElementById('speed').value;
// this is function which will generate all the bar with randon values
function createbars(num )
{
    
   constainer.style.width=`${num*20}px`
    for(let i=0;i<num;i+=1)
    {
        const value=Math.floor((Math.random() * 100) + 1);
        const bar=document.createElement("div");
        bar.className="bar";
        bar.style.height=`${value*4}px`;
        bar.style.transform=`translateX(${i * 20}px)`;
        bar.innerHTML=value;
        constainer.appendChild(bar);  
    }
}
document.getElementById('elements').addEventListener("change",function(){
     let num=document.getElementById('elements').value;
    constainer.innerHTML="";
    createbars(num);
    
 })


createbars(document.getElementById('elements').value);


function swap(i,j){
    let t_height=bars[j].style.height;
    let t_value=bars[j].innerText;

    bars[j].style.height=bars[i].style.height;
    bars[j].innerText=bars[i].innerText;
    
    bars[i].style.height=t_height;
    bars[i].innerText=t_value;
} 

 
 async function quick(  start,end)
{
    if(start>=end)
    return true;

    let p=start+1;
    let q=end;
     let val=parseInt(bars[start].innerHTML);
    for(let i=0;i<bars.length;i++)
    {
        if(i>=start && i<=end)
        {
            bars[i].style.backgroundColor='aqua'; // blue
        }
        else
        {
            bars[i].style.backgroundColor='#F9F2ED'; // white
        }
    }
    speed=document.getElementById("speed").value;
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                },  1500/speed)
                );
    bars[start].style.backgroundColor='#EB1D36'; // red
    bars[p].style.backgroundColor='#06FF00'; // green
    bars[q].style.backgroundColor='#F7EC09'; // yellow
    while(p<=q)
    { 
        while(p<=end && parseInt(bars[p].innerHTML)<=val)
        {
            bars[p].style.backgroundColor='aqua'; // blue
            p++; 
            if(p<=end)
            bars[p].style.backgroundColor='#06FF00'; // green
            speed=document.getElementById("speed").value;
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                },  1500/speed)
                );
        }
        while(q>=start && parseInt(bars[q].innerHTML)>val)
        {
            bars[q].style.backgroundColor='aqua'; // blue
            q--; 
            if(q>=start)
            bars[q].style.backgroundColor='#F7EC09'; // yellow
            speed=document.getElementById("speed").value;
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                },  1500/speed)
                );

         }
        
         speed=document.getElementById("speed").value;
         await new Promise((resolve) =>
             setTimeout(() => {
                 resolve();
             },  1500/speed)
             );
             if(p>=start && p<=end)
             bars[p].style.backgroundColor='aqua'; // blue
             
             if(q>=start && q<=end)
             bars[q].style.backgroundColor='aqua'; // blue
        if(p<=q)
        {
            swap(p,q);
            p++;
            q--;
               
        }
      
    }
    
    swap(start,q); 
    
    
    await quick(start,q-1)
    await quick(q+1,end); 
    
    
}
 async function sort() 
{   
    // disable the button


        disable(); 
          let len=bars.length; 
          await quick(0,len-1) 

        // changing the color of the bars as they are already sorted
       
 
        for(let i=0;i<bars.length;i++)
        { 
            bars[i].style.backgroundColor='#06FF00';
         
        }

            // enable the button
        enable();
}

 
function generate()
{
    constainer.innerHTML="";
    createbars(document.getElementById('elements').value);
}
function enable()
{
    document.getElementById('button1').disabled=false;
          document.getElementById('button1').style.backgroundColor="white";
      
          document.getElementById('button2').disabled=false;
          document.getElementById('button2').style.backgroundColor="white";
          document.getElementById('elements').disabled=false; 
}
function disable(){
    document.getElementById('button1').disabled=true;
    document.getElementById('button1').style.backgroundColor="gray";

    document.getElementById('button2').disabled=true;
    document.getElementById('button2').style.backgroundColor="gray";

    
    document.getElementById('elements').disabled=true; 
    
}