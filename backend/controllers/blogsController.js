const Blog = require('../models/blogs')
const mongoose = require('mongoose')
// get all blogs
const getBlogs = async(req,res) => {
    const blogs =  await Blog.find({}).sort({createdAt: -1})
    res.status(200).json(blogs)
}
// get one blog 
const getBlog = async(req,res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such blog id'})
    }
    const blog =  await Blog.findById(id)
    if(!blog){
        return res.status(400).json({error: 'No such blog '})
    }

    res.status(200).json(blog)
}
// create blog 
const createBlog =  async(req,res) => {
    const { title, load, repos} =req.body

    try{
        const blog = await Blog.create({title,load,repos})
        res.status(200).json(blog)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}



// update blog 
const updateBlog = async(req,res)=>{
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such blog id'})
    }

    const blog = await Blog.findOneAndUpdate({_id:id}, {
        ...req.body
    })
    if(!blog){
        return res.status(400).json({error: 'No such blog '})
    }
    res.status(200).json(blog)
}

// delete blog 
const deleteBlog = async (req,res)=>{
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such blog id'})
    }
    const blog = await Blog.findOneAndDelete({_id: id})
    if(!blog){
        return res.status(400).json({error: 'No such blog '})
    }
    res.status(200).json(blog)



}

module.exports= {
    createBlog,
    getBlogs,
    getBlog,
    deleteBlog,
    updateBlog
}