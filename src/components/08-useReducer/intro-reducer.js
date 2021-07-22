
const initialState = [{
    id: 1,
    todo: 'comprar pan',
    done: false
}]


const todoReducer = (state = initialState, action) => {
    //aca seria defeniria el nuevo stado
    if (action?.type === 'agregar') {
        return [...state, action.payload]  //operador spred para esparcir y agregar los demas objetos 
    }
    return state
}

let todos = todoReducer()

const newTodo = {
    id: 2,
    todo: 'comprar leche',
    done: false
}

// Le indica al reducer con action que accion hacer
//el nombre action puede ser cualquier otro nombre
const addTodoAction = {
    type: 'agregar',
    payload: newTodo //Opcional a payload pero esto lo que vamos a enviar
}

todos = todoReducer(todos, addTodoAction)
console.log(todos);