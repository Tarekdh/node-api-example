const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({ name: 'string' });

module.exports.TaskModel = mongoose.models.Tasks || mongoose.model('Tasks', TaskSchema);
