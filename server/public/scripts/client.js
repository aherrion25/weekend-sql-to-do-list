console.log('scripts sourced');

$(readyNow);

// readyNow function that have click handlers
function readyNow() {
    console.log('in readyNow');
    $('#add-button').on('click', honeyDo);
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
            $('#table-body').append(`
                <tr>
                    <td>${list.honey_do}</td>
                    <td>${list.completed}<td>
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
