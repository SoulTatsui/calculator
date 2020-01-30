const buttons = document.querySelectorAll('.number');
const currentInput = document.querySelector('.inputContainer')
const currentPath = document.querySelector('.pathContainer');
const equal = document.querySelector('#equal');
const clearButton = document.querySelector('.clearbutton');
let cell;

buttons.forEach(button => button.addEventListener('click', count));

function count() {
    let input = this.value;

    currentInput.innerHTML = `${input}`;

    //creates a span element and adds input value to it, so it can show multiple values
    cell = document.createElement('span');
    cell.innerHTML = input;
    let path = currentPath.appendChild(cell).className = 'pathy';

}

function machineWork() {
    let result = 0;
}

equal.addEventListener('click', machineWork);

clearButton.addEventListener('click', function () {
    currentPath.innerHTML = '';
    currentInput.innerHTML = 0;
});