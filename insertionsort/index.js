const constainer=document.querySelector(".data-container"); 
let bars=document.getElementsByClassName('bar');

// this is function which will generate all the bar with randon values
function createbars(num)
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

async function sort(delay = 300) 
{       
 
            let num=bars.length;

            for(let i=0;i<num;i++)
            {
                let speed=document.getElementById('speed').value;
                for(let j=i;j>0;j--)
                {

                    let first=parseInt(bars[j].innerHTML);
                    let second=parseInt(bars[j-1].innerHTML);
                    bars[j].style.backgroundColor='#FFE400'; 
                    speed=document.getElementById('speed').value;
                    await new Promise((resolve) =>
                    setTimeout(() => {
                        resolve();
                    },  2000/speed)
                    );
                    if(first<second)
                    {
                        swap(j,j-1);  
                        
                        bars[j].style.backgroundColor='#06FF00'; 

                     }
                   else
                   { 
                        
                    bars[j].style.backgroundColor='#06FF00'; 
                    break;
                   }
                }
                speed=document.getElementById('speed').value;
                
                bars[i].style.backgroundColor='#06FF00'; 
                await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                },  2000/speed)
                ); 
            }
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