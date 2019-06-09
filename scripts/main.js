// var myHeading = document.querySelector('h1');
// //myHeading.textContent = 'Hello World!';
// myHeading.onclick = function() {
//     alert('What are you doing!?')
// }

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/itsukushima-shrine.JPG') {
        myImage.setAttribute('src', 'images/hiroshima.JPG');
    }
    else {
        myImage.setAttribute('src', 'images/itsukushima-shrine.JPG');
    }
}

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if (!localStorage.getItem('name')) {
    setUserName();
}
else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}

