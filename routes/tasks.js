
module.exports = app => {
    const Tasks = app.models.tasks;
    app.get('/tasks', async(req,res)=>{
        return res.json(await Tasks.findAll({}));
    });
    app.post('/tasks',async(req,res)=>{
        const task = { name: req.body.name };
        return res.json( await Tasks.save(task));
    });
    app.get('/tasks/:id', async(req,res)=>{
        return res.json(await Tasks.findById(req.params['id']))
    });
    app.put('/tasks/:id',async(req,res)=>{
        const task = { name: req.body.name };
        return res.json( await Tasks.updateOne(req.params['id'], task));
    });
    app.delete('/tasks/:id',async(req,res)=>{
        return res.json( await Tasks.deleteOne(req.params['id']));
    });
}