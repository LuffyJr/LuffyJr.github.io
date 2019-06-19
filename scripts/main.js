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

/* Formatting function for row details - modify as you need */
function format () {
    // `d` is the original data object for the row
    return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">'+
        '<tr>'+
            '<td>Full name: Kevin Jamoke Layos</td>' +
        '</tr>'+
        '<tr>'+
            '<td>Extension number: 1337</td>'+
        '</tr>'+
        '<tr>'+
            '<td>Extra info:</td>'+
            '<td>And any further details here (images etc)...</td>'+
        '</tr>'+
    '</table>';
}

// var mytable = $("#mytable").DataTable();

var myCell = document.querySelector(".clickthis");

myCell.onclick = function() {
    // alert("You clicked your name!");
    var mytable = $("#mytable").DataTable();

    var tr = $(this).closest('tr');
    var row = mytable.row( tr );

    if ( row.child.isShown() ) {
        // This row is already open - close it
        row.child.hide();
        tr.removeClass('shown');
    }
    else {
        // Open this row
        row.child("Hello World!").show();
        tr.addClass('shown');
    }

}

$(document).ready(function() {

    var mytable = $("#mytable").DataTable();

    // Add event listener for opening and closing details
    $('#mytable tbody').on('click', 'td.onclick', function () {

        alert('What are you doing!?')

        var tr = $(this).closest('tr');
        var row = mytable.row( tr );

        row.child("hello world").show();

        // if ( row.child.isShown() ) {
        //     // This row is already open - close it
        //     row.child.hide();
        //     tr.removeClass('shown');
        // }
        // else {
        //     // Open this row
        //     row.child("Hello World!").show();
        //     tr.addClass('shown');
        // }
    } );
 
    // mytable.rows().every( function () {
    //     this
    //         .child(
    //             $(
    //                 '<tr>'+
    //                     '<td>.1</td>'+
    //                     '<td>.2</td>'+
    //                     '<td>.3</td>'+
    //                     '<td>.4</td>'+
    //                 '</tr>'
    //             )
    //         )
    //         .show();
    // } );
} );
