let counter =0;

function decrease() {
    if(counter > 0) {
         counter-- ; 
    } 

    document.getElementById("counter").textContent = counter;
}

function increase() {
  counter++ ;  
  document.getElementById("counter").textContent = counter;
 
}

function reset() {
    counter =0 ;  
    document.getElementById("counter").textContent = counter;
   
  }