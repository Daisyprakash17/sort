const constainer = document.querySelector(".data-container");
const tempcontainer = document.querySelector('.temp-container');
let bars = document.getElementsByClassName('bar');
let speed=document.getElementById('speed').value;

// this is function which will generate all the bar with randon values
function createbars(num ) {
     num=Math.pow(2,num);
    constainer.style.width=`${num*20}px`;
    
    tempcontainer.style.width=`${num*20}px`;
    for (let i = 0; i < num; i += 1) {
        const value = Math.floor((Math.random() * 100) + 1);
        const bar = document.createElement("div");
        const bar2 = document.createElement('div');

        bar.className = "bar";
        bar2.className = "bar2";

        bar.style.height = `${value * 3}px`;
        bar2.style.height = `0px`;

        bar.style.transform = `translateX(${i * 20}px)`;
        bar2.style.transform = `translateX(${i * 20}px)`

        bar.innerHTML = value;
        bar2.innerHTML;

        constainer.appendChild(bar);
        tempcontainer.appendChild(bar2); 

    }
    
}
function swap(i, j) {
    let t_height = bars[j].style.height;
    let t_value = bars[j].innerText;

    bars[j].style.height = bars[i].style.height;
    bars[j].innerText = bars[i].innerText;

    bars[i].style.height = t_height;
    bars[i].innerText = t_value;
}
document.getElementById('elements').addEventListener("change",function(){
     let num=document.getElementById('elements').value;
    constainer.innerHTML="";
    tempcontainer.innerHTML="";
    createbars(num);
     
})


createbars(document.getElementById('elements').value);

async function sort(delay = 300) {
     let bars = document.getElementsByClassName('bar');
    let bars2 = document.getElementsByClassName('bar2');

     for (let l = 1; l < bars.length; l *= 2) {
         for (let j = 0; j < bars.length; j += 2 * l) {

            let first = j;
            let second = j + l;
            let ind = j;
           
            for (let indi = j; indi < j + 2 * l; indi++) {

                bars[indi].style.backgroundColor = 'red';
                
            }
            speed=document.getElementById('speed').value;
            await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, 3750/speed)
            );
             while (first < j + l || second < j + l + l) {
                
                speed=document.getElementById('speed').value;
                if (first < j + l) {
                    bars[first].style.backgroundColor = 'yellow';
                    
                }
                await new Promise((resolve) =>
                    setTimeout(() => {
                        resolve();
                    }, 750/speed)
                );
                if (second < j + l + l) {
                    bars[second].style.backgroundColor = 'green';
                }
                await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, 2500/speed)
            );  
                if (first === j + l) {
                    bars2[ind].style.height = bars[second].style.height;
                    bars2[ind].innerHTML = bars[second].innerHTML;
                    bars[second].style.backgroundColor = 'blue'; 
                    await new Promise((resolve) =>
                    setTimeout(() => {
                        resolve();
                    }, 1000/speed)
                );  
 
                    bars[second].style.backgroundColor = 'aqua';
                    bars[second].style.height = '0px';
                    bars[second].innerHTML = '';
                    second++;
                }
                else if (second == j + 2 * l) {

                    bars2[ind].style.height = bars[first].style.height;
                    bars2[ind].innerHTML = bars[first].innerHTML;
                    bars[first].style.backgroundColor = 'blue'; 
                    await new Promise((resolve) =>
                    setTimeout(() => {
                        resolve();
                    }, 1000/speed)
                );  
                    bars[first].style.backgroundColor = 'aqua';
                    bars[first].style.height = '0px';
                    bars[first].innerHTML = '';
                    first++;
                }
                else {
                    let val1 = parseInt(bars[first].innerHTML);
                    let val2 = parseInt(bars[second].innerHTML);
                    if (val1 < val2) {
                        bars2[ind].style.height = bars[first].style.height;
                        bars2[ind].innerHTML = bars[first].innerHTML;
                        bars[first].style.backgroundColor = 'blue'; 
                        await new Promise((resolve) =>
                        setTimeout(() => {
                            resolve();
                        }, 1000/speed)
                    );  
                        bars[first].style.backgroundColor = 'aqua';
                        bars[first].style.height = '0px';
                        bars[first].innerHTML = '';

                        first++;
                    }
                    else {
                        bars2[ind].style.height = bars[second].style.height;
                        bars2[ind].innerHTML = bars[second].innerHTML;
                        bars[second].style.backgroundColor = 'blue'; 
                        await new Promise((resolve) =>
                        setTimeout(() => {
                            resolve();
                        }, 1000/speed)
                    );  
                        bars[second].style.backgroundColor = 'aqua';
                        bars[second].style.height = '0px';
                        bars[second].innerHTML = '';
                        second++;
                    }
                }
                ind++;
            }

            for (let t = j; t < j + 2 * l; t++) {
                speed=document.getElementById('speed').value;
                await new Promise((resolve) =>
                    setTimeout(() => {
                        resolve();
                    }, 2500/speed)
                );
                bars[t].style.height = bars2[t].style.height;
                bars[t].innerHTML = bars2[t].innerHTML;
                bars2[t].innerHTML = "";
                bars2[t].style.height = "0px";

            }
            await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, 2500/speed)
        );
              


        }

    }


    /*
        for(let t=j;t<j+2*l;t++)
        {
            bars[t].style.height=`${4*arr[t]}`;
            bars[t].innerHTML=`${arr[t]}`;
        }
    */
    
    enable();

    document.querySelector('.temp-container').style.display = "none";
}


function generate() {
    constainer.innerHTML="";
    createbars(document.getElementById('elements').value);
}
function enable() {
    
    document.getElementById('button1').disabled = false;
    document.getElementById('button1').style.backgroundColor = "white";

    document.getElementById('button2').disabled = false;
    document.getElementById('button2').style.backgroundColor = "white";

    document.getElementById('elements').disabled=false; 
}
function run() {

   
    sort();

    
    document.querySelector('.temp-container').style.display = "block";
    
    document.getElementById('button1').disabled = true;
    document.getElementById('button1').style.backgroundColor = "gray";

    document.getElementById('button2').disabled = true;
    document.getElementById('button2').style.backgroundColor = "gray";

    document.getElementById('elements').disabled=true; 

}