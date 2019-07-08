// Declare the variables
var noteInput, noteName, textEntered, target;

// Get elements that hold the note
noteName = document.getElementById('noteName');
noteInput = document.getElementById('noteInput');

// Funciton the rewrites the note name is the text input and check for IE
function writeLable(event) {
    if (!event) {
        event = window.event;
    }
    target = event.target || event.srcElement
    textEntered = target.value;
    noteName.textContent = textEntered;
}

// Pause and record funcitons
// Checking against addEventlistener support
if (document.addEventListener) {
    document.addEventListener('click', function(event) {
        recorderControls(event);
        console.log(event);
    }, false);
    noteInput.addEventListener('input', writeLable, false);
} else {
    document.attachEvent('onclick', function(event) {
        recorderControls(event);
    });
    noteInput.attachEvent('onkeyup', writeLable);
}

// Declare recorederControls

function recorderControls(event) {
    if(!event) {
        event = window.event
    }
    target = event.target || event.srcElement;
    if (event.preventDefault) {
        event.preventDefault();
    } else {
        event.returnValue = false;
    }

    switch(target.getAttribute('data-state')) {
        case 'record':
            record(target);
            break;
        case 'stop':
            stop(target);
            break;
    }
}

function record(target) {
    target.setAttribute('data-state', 'stop');
    target.textContent = 'stop';
}

function stop(target) {
    target.setAttribute('data-state', 'record');
    target.textContent = 'record';
}