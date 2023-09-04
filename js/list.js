function addTask() {
    const list = document.querySelector('.list')
    const task = document.querySelector('#task').value;
    const deleteBtn = document.createElement('input');
    const checkBox = document.createElement('input');
    deleteBtn.setAttribute('type', 'button');
    deleteBtn.setAttribute('value', 'Delete');
    deleteBtn.setAttribute('class', 'delete-btn');
    checkBox.setAttribute('type', 'checkbox');
    checkBox.setAttribute('class', 'check-box');

    if(task == '') {
        alert('Please enter a task');
        return;
    }

    id = task.toString();
    id = id.replace(/\s/g, '');
    id = id.replace(/\W/g, '');
    id = id.toLowerCase();

    li = document.createElement('li');
    div = document.createElement('div');

    div.setAttribute('class', 'btn-div');

    li.setAttribute('id','list-task');
    li.setAttribute('class', id);
    checkBox.setAttribute('id', id);
    checkBox.setAttribute('onclick', `taskrealizada('${id}')`);
    deleteBtn.setAttribute('id', id);
    deleteBtn.setAttribute('onclick', `deleteTask('${id}')`);
    
    div.append(checkBox);
    div.append(deleteBtn);
    li.append(task);
    li.append(div);

    list.append(li);
    document.querySelector('#task').value = ''; 
}

function deleteTask(id) {
    task = document.querySelector(`.${id}`);
    task.remove();

    alert(`La tarea ha sido eliminada!`);
}

function taskrealizada(id){
    task = document.querySelector(`.${id}`);
    task.remove();

    alert(`La tarea ha sido realizada!`);
}
