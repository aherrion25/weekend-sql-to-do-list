console.log('scripts sourced');

$(readyNow);

// readyNow function that have click handlers
function readyNow() {
    console.log('in readyNow');
    $('#add-button').on('click', honeyDo);
} // End readyNow

// function for POST request
function honeyDo () {
    console.log('in honeyDo');
    // A object 'newTask'
    let newTask = {
        task: $('task-input').val(),

    }
    console.log('new task', newTask);
} // End newTask
