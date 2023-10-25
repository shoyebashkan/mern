import Todo from '../moddel/Todos.js'


export const addTodo = async (request, response) => {

    try {
        const newTodo = await Todo.create({

            data: request.body.data,
            createdAt: Date.now()
        })

        await newTodo.save();
        return response.status(200).json(newTodo);
    } catch (error) {
        return response.status(500).json(error.message);
    }

}

export const getAlltodos = async (request, response) => {
    try {
          const todos =  await Todo.find({}).sort({'createdAT':-1})
       
        return response.status(200).json(todos);
    } catch (error) {
        return response.status(500).json(error.message);
    }
}

export const toggleTodoDone = async (request, response) => {
    try {
          const todoref =  await Todo.findById(request.params.id);
          const todo =  await Todo.findOneAndUpdate(
            {_id: request.params.id},
            {done:!todoref.done});

            await todo.save();
        return response.status(200).json(todo);
    } catch (error) {
        return response.status(500).json(error.message);
    }
}