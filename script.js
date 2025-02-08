const sketchEl = document.querySelector('.sketch-area');

const boardEl = document.querySelector('#board-form');
const clearEl = document.querySelector('#clear');

const eraseEl = document.querySelector('#eraser')
const rainbowEl = document.querySelector('#rainbow');
const promptEl = document.querySelector('.h1')
const smilyEl = document.querySelector('.smile');

const red = document.querySelector('.red');





// function sketchBoardForm(){ // the board lenght can decide by use/
   


let activeCursor;

// }




let isDraw = false;

function sketchDraw(){
    // isdraw prevent excess number of blocks;
  
    // sketchEl.remove(promptEl);
    promptEl.remove();
   
    activeCursor ="pencil";
    sketchEl.style.display = "grid";
    if(isDraw == false){
        for(let i = 0; i < 10000; i++)
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
            dot.style.backgroundColor = "white";
            if(activeCursor == "pencil"){

                dot.style.cursor = "url('images/pencil.png') 10 10, auto";
             }  
        });
    
    });
}

function rainbowColor(){
    activeCursor = "pencil";
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
            if(activeCursor == "pencil"){

                dot.style.cursor = "url('images/pencil.png') 10 10, auto";
             }  
    });

});
}

function eraseSketch(){
   activeCursor = "eraser";
    const dots = document.querySelectorAll('.dots');
        dots.forEach(dot => {
        dot.addEventListener('mouseover', ()=> {
            dot.style.backgroundColor = "";
            if(activeCursor == "eraser"){

                dot.style.cursor = "url('images/eraser.png') 10 10, auto";
             }  
           
            
        });
    
    });
}



function clearBoard(){
    let dots = document.querySelectorAll('.dots');
    
    dots.forEach(dot => {
       
            dot.style.background = ""; 
        } )
       
    }

    function oneColorDraw(){
        let dots = document.querySelectorAll('.dots');
        let activeColor
        console.log(activeColor);

        activeCursor = "pencil";
        dots.forEach(dot => {
        dot.addEventListener('mouseover', ()=> {
            switch(activeColor){
                case "red":
                    dot.style.backgroundColor = "red";
            }
           
        });
           
            
        });
    

        
    }

   
     
     
 
 
boardEl.addEventListener('click', sketchDraw);
clearEl.addEventListener('click', clearBoard);
eraseEl.addEventListener('click', eraseSketch);
rainbowEl.addEventListener('click', rainbowColor);
red.addEventListener('click', oneColorDraw);
