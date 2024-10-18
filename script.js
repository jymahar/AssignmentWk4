let counter =0;

let maxLimit = 10;

function decrease() {
    if(counter > 0) {
         counter-- ; 
    } 

    document.getElementById("counter").textContent = counter;
}

function increase() {
  if (counter < maxLimit ) {
  counter++ ;  
  document.getElementById("counter").textContent = counter;
  } else {
    alert("You have reached maximum counter limit");
  }
 
}

function reset() {
    counter =0 ;  
    document.getElementById("counter").textContent = counter;
   
  }