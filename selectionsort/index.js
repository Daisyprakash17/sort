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
        var re=bar.getBoundingClientRect(); 
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
        let min=i;
        // making the current as darkblue
        bars[i].style.backgroundColor='#FFE400'
        let speed=document.getElementById("speed").value;
            for(let j=i+1;j<num;j++)
            {
                // first making all the bars ahead of the current as red
                bars[j].style.backgroundColor="#FF1818";
                
                speed=document.getElementById("speed").value;
                await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                },  1500/speed)
                );


                let val1=parseInt(bars[j].innerHTML);
                let val2=parseInt(bars[min].innerHTML);
                if(val1<val2)
                {
                    if(min!=i)
                    {
                        bars[min].style.backgroundColor='aqua';
                    }
                    min=j;
                }
                else
                {
                    bars[j].style.backgroundColor="aqua";
                }
            }
            // now here we have to swap the values of the min and current  index

            

            speed=document.getElementById("speed").value;
            await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            },  3000/speed)
            );
            
            //swaping the values
            swap(min,i);

            // changing the color after swaping the values
            bars[min].style.backgroundColor="aqua";
            bars[i].style.backgroundColor="#06FF00"; // green color(final)
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