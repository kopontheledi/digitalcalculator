//@ts-check


/**
 * Represents the current input value.
 * @type {string}
 */
let input = '';

/**
 * Appends the given value to the input.
 * @param {number|string} value - The value to append.
 */
function appendInput(value) {
  input += value;
  document.getElementById('display').value = input;
}

/**
 * Clears the input and display.
 */
function clearDisplay() {
  input = '';
  document.getElementById('display').value = '';
}

/**
 * Evaluates the input and displays the result.
 */
function calculate() {
  try {
    const result = eval(input);
    document.getElementById('display').value = result;
    input = '';
  } catch (error) {
    document.getElementById('display').value = 'Error';
  }
}
