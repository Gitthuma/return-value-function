/*First of all, make a local copy of the function-library.html file from GitHub. This is a simple HTML page containing a text <input> field and a paragraph. There's also a <script> element, in which we have stored a reference to both HTML elements in two variables. This little page will allow you to enter a number into the text box, and display different numbers related to it in the paragraph below.*/

const input = document.querySelector('.numberInput');
const para = document.querySelector('p');

/*Returns squared number*/

function squared(num){
    return num * num;
}