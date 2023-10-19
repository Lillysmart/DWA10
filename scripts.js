//global const
const MAX_NUMBER = 15;
const MIN_NUMBER = -10;
const STEP_AMOUNT = 1;

let number = document.querySelector('[data-key="number"]');

const subtract = document.querySelector('[data-key="subtract"]');
const add = document.querySelector('[data-key="add"]');
const resetButton = document.querySelector('[data-key="reset"]')

/**
 * a handler for the rest button
 */
const resetHandler=()=>{
 
  //const newValue=  parseInt(number.value)- parseInt(number.value)
  number.value= 0 
   alert(" the counter has been reset")

}
resetButton.addEventListener("click", resetHandler)



//Say this second
const subtractHandler = () => {
  const newValue = parseInt(number.value) - STEP_AMOUNT; //changing string to a number
  number.value = newValue;

  if (add.disabled === true) {
    add.disabled = false;
  }

  if (newValue <= MIN_NUMBER) {
    subtract.disabled = true;
  }
};
const addHandler = () => {
  const newValue = parseInt(number.value) + STEP_AMOUNT;  
  number.value = newValue; 

  if (subtract.disabled === true) {
    subtract.disabled = false;
  }

  if (newValue >= MAX_NUMBER) {
    add.disabled = true;
  }
};

// say this first
subtract.addEventListener("click", subtractHandler);
add.addEventListener("click", addHandler);

