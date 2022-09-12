const express = require("express");
const { type } = require("os");
const app = express();
const detabaseconnection = require("./dbconnection/connection")
// we need to tell the server that we will recirvr deta in form of json from frontend
app.use(express.json());
const Content_Model = require("./Models/content");

// writing post api
app.post('/api/post', async (req, res) => {
    try {
        const { name, category, headline, description } = req.body;
        const new_post = new Content_Model({ name, category, headline, description });
        await new_post.save();
       
        res.json({ success: true, message: "your deta is saved in detabase" }) 
    } catch (error) {
        console.log(error);
        res.status(404).json({ success: false, error: error.message });
    }
});
// api to get the deta
app.get('/api/getnews', async (req, res) => {
    try {
        const data =await Content_Model.find({category:"Latest_News"}).sort({ createdAt: -1 });
        res.json({ success: true, data });
    } catch (error) {
        res.status(404).json({ success: false, error: error.message });
    }
});
app.get('/api/getsocialmedia', async (req, res) => {
    try {
        const data =await Content_Model.find({category:"Social_Media_Trending"}).sort({ createdAt: -1 });
        res.json({ success: true, data });
    } catch (error) {
        res.status(404).json({ success: false, error: error.message });
    }
});
app.get('/api/jokes', async (req, res) => {
    try {
        const data =await Content_Model.find({category:"Jokes"}).sort({ createdAt: -1 });
        res.json({ success: true, data });
    } catch (error) {
        res.status(404).json({ success: false, error: error.message });
    }
});
// .then(fat arrow function)
detabaseconnection().then( ()=>
    {
    let port = 5000;
        app.listen(port, () => { console.log("Server is running at 5000 port") })
    }

);



















