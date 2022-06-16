// let window= ('users', 'todos')
let userid= prompt('your ID')
let todo= prompt('What do you need to do')
let users= ['Amer', 'Nico', 'Elsi', 'Ed']
let todolist= ['clean', 'kill', 'program', 'work on a project']
let ID= ['Amer', 'Nico', 'Elsi', 'Ed']
    if(userid === 'Amer'){
        console.log(ID[0] + ' ' + 'you will' + ' ' + todo);
    }
    else if(userid === 'Nico'){
        console.log(ID[1] + ' ' + 'you will' + ' ' + todo);
    }
    else if(userid === 'Elsi'){
        console.log(ID[2] + ' ' + 'you will' + ' ' + todo);
    }
    else if(userid === 'Ed'){
        console.log(ID[3] + ' ' + 'you will' + ' ' + todo);
    }
    if(todo=true){
        todolist.push({todolist: todo})
        console.log('this is the todo list' + ' ' + todolist)
    }
    alert('Warning');
    if (alert=true){
        console.log ('users list' + ' ' + users)
    console.log ('users id' + ' ' + ID)
    }
    
    
    // console.log("users: ", window.users);

    // console.log("todos: ", window.todos);


