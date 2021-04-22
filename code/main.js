/*First of all, make a local copy of the function-library.html file from GitHub. This is a simple HTML page containing a text <input> field and a paragraph. There's also a <script> element, in which we have stored a reference to both HTML elements in two variables. This little page will allow you to enter a number into the text box, and display different numbers related to it in the paragraph below.*/

const input = document.querySelector('.numberInput');
const para = document.querySelector('p');

/*Returns squared number*/

function squared(num){
    return num * num;
}

/*Returns cubed number*/

function cubed(num) {
    return num * num * num;
}

/*Returns factorial*/

function factorial(num) {

    if (num < 0) return undefined;
    if (num === 0) return 1;
    let x = num - 1;
    
    while (x > 1) {
        num *= x;
        x--;
    }

    return num;

}

/*Include a way to print out information about the number entered into the text input.*/

/*Creat an onchange event handler. It runs whenever the change event fires on the text input — that is, when a new value is entered into the text input, and submitted (e.g., enter a value, then unfocus the input by pressing Tab or Return). When this anonymous function runs, the value in the input is stored in the num constant.*/

/*Do a conditional test. If the entered value is not a number, an error message is printed to the paragraph. The test looks at whether the expression isNaN(num) returns true. The isNaN() function to test whether the num value is not a number — if so, it returns true, and if not, it returns false.*/

input.onchange = function() {
    const num = input.value;
    
    if(isNaN(num)) {
        para.textContent = 'You need to enter a number!';
    }
}

