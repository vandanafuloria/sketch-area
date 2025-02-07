const sketchEl = document.querySelector('.sketch-area');

const boardEl = document.querySelector('#board-form');
const clearEl = document.querySelector('#clear');

const eraseEl = document.querySelector('#eraser')
const rainbowEl = document.querySelector('#rainbow');





// function sketchBoardForm(){ // the board lenght can decide by use/
   




// }



let isDraw = false;

function sketchDraw(){
    // isdraw prevent excess number of blocks;
    if(isDraw == false){
        for(let i = 0; i < 2500 ; i++)
            {
                 dotEl = document.createElement('div');
                
                dotEl.classList.add('dots');
                sketchEl.appendChild(dotEl);
            }
            isDraw = true;
    }
    
    
   


        const dots = document.querySelectorAll('.dots');
        dots.forEach(dot => {
        dot.addEventListener('mouseover', ()=> {
            dot.style.backgroundColor = "black";
        });
    
    });
}

function rainbowColor(){
    const dots = document.querySelectorAll('.dots');
    dots.forEach(dot => {
    dot.addEventListener('mouseover', ()=> {
        
            let red = Math.random() * (255 - 0) + 1;
            red = Math.trunc(red);
            let green = Math.random() * (255 - 0) + 1;
            green = Math.trunc(green);
            let blue = Math.random() * (255 - 0) + 1;
            blue = Math.trunc(blue);

            const color = `rgb(${red}, ${green}, ${blue})`;
            console.log(color);
        
            dot.style.backgroundColor = color;
        
    });

});
}

function eraseSketch(){
    const dots = document.querySelectorAll('.dots');
        dots.forEach(dot => {
        dot.addEventListener('mouseover', ()=> {
            dot.style.backgroundColor = "";
        });
    
    });
}



function clearBoard(){
    let dots = document.querySelectorAll('.dots');
    
    dots.forEach(dot => {
       
            dot.style.background = ""; 
        } )
       
    }

   
     
     
 
 
boardEl.addEventListener('click', sketchDraw);
clearEl.addEventListener('click', clearBoard);
eraseEl.addEventListener('click', eraseSketch);
rainbowEl.addEventListener('click', rainbowColor);

