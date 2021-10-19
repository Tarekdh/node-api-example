var Task = require("../schema/task");
var TaskModel = Task.TaskModel;
module.exports = app =>  {
    return {
        findAll: (params)=> {
            return TaskModel.find(params);
        },
        findById: (id)=> {
            return TaskModel.findById(id);
        },
        save: (task) => {
            const taskTosave = new TaskModel(task)
            return  taskTosave.save();
        },
        updateOne: (id,task) => {
            return TaskModel.where({ _id: id }).updateOne({ name: task.name })
        },
        deleteOne: (id) => {
            return TaskModel.where({ _id: id}).deleteOne();
        },
    }
}