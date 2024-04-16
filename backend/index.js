const express  = require("express");
const app = express(); 
const {createTodo, updateTodo} = require("./types")


app.use(express.json());

app.post("/todo",async function(res,req){
    const createPayload = req.body; 
    const parsePayload = createTodo.safeParse(createPayload); 
    if (!parsePayload.success) {
        res.statusCode(411).json({
            msg : "You sent the wrong inputs"
        })
        return;
    }

    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
    })

    res.json({
        msg: "Todo created"
    })

})

app.get("/todos", async function(res,req){
    const todos = await todo.find({});
    
    res.json({
        title: "gonna be a gr8 day",
        description: "it is gonna be good day"
    })

})

app.put("/completed", async function(res,req){
    const createPayload = req.body; 
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if (!parsedPayload.success) {
        res.statusCode(411).json({
            msg: "You sent the wrong inputs"
        })
        return
    }
    await todo.update({
        _id: req.body.id
    }, {
        completed: true 
    })
    res.json({
        msg: "todo updated"
    })

})

app.listen(3000)