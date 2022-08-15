console.log('scripts sourced');

$(readyNow);

// readyNow function that have click handlers
function readyNow() {
    console.log('in readyNow');
    $('#add-button').on('click', honeyDo);
    $('body').on('click', '.task-delete', deleteTask);
    $('body').on('click','.complete-button',getTask)
    getTask();
} // End readyNow

// function for GET request
function getTask() {
    $.ajax({
        type: 'GET',
        url: '/honeyList'
    }).then(function (response) {
        console.log(response);
        $('#table-body').empty();
        for(let list of response) {
            let taskDone = 'task-delete';
            let taskCompleted = 'complete-button'
            if(list.completed === true){
                $('#table-body').append(`
                    <tr>
                        <td>${list.honey_do}</td>
                        <td>
                       ${list.completed} <button class="${taskCompleted}" data-id="${list.id}">Completed</button>
                        </td>
                    
                    </tr>
                
                `)
            }
            else if(list.completed === false){
                taskDone = 'hidden';
            }
            $('#table-body').append(`
                <tr>
                    <td>${list.honey_do}</td>
                    <td>${list.completed}<td>
                    
                        <button class="${taskDone}" data-id="${list.id}"> Remove task</button>
                </tr>
            
            `)
        }
    }).catch(function(error){
        console.log(error);
        alert('Something went wrong!')
    })
} // End getTask

// function for POST request
function honeyDo () {
    console.log('in honeyDo');
    $.ajax({
        type: 'POST',
        url: '/honeylist',
        data: {
            honey_do: $('#task-input').val(),
            completed: false,
        }
    }).then(function(response) {
        getTask();
    }).catch(function(error) {
        console.log(error);
        alert('Something went wrong!')
    });
} // End honeyDo


// function for PUT request
function taskDone() {
    const taskId = $(this).data('id')
    $.ajax({
        type: 'PUT',
        url:`/honeyList/${taskId}`,
        data:{completed: true}
    }).then(function(response){
        getTask();
    }).catch(function(error){
        console.log(error);
        alert('Something went wrong!')
    })
    
}

// function for DELETE request
function deleteTask() {
    const taskId = $(this).data('id');
    console.log('deleteTask', taskId);
    $.ajax({
        type: 'DELETE',
        url: `/honeyList/${taskId}`,
    }).then(function(response){
        getTask();
    }).catch(function(error){
        console.log(error);
        alert('Something went wrong!')
    });
}

