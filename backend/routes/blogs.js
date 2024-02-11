const express = require('express')
const {
    createBlog,
    getBlogs,
    getBlog,
    updateBlog,
    deleteBlog
} = require('../controllers/blogsController')
const router = express.Router()
// get blogs
router.get('/', getBlogs)

//get one blog 
router.get('/:id', getBlog)

// post new blog 
router.post('/', createBlog)

// delete new blog 
router.delete('/:id',deleteBlog)
// update new blog 
router.patch('/:id',updateBlog)


module.exports = router