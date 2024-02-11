import { useState } from 'react'
import { useBlogsContext } from '../hooks/useBlogsContext'

const BlogForm = () => {
    const { dispatch }= useBlogsContext()
    const [title, setTitle] = useState('')
    const [load, setLoad] = useState('')
    const [repos, setRepos] = useState('')
    const [error, setError] = useState('')

    const handleSubmit= async (e) => {
        e.preventDefault()

        const blog = {title, load, repos}
        const response = await fetch('/api/blogs', {
            method: 'POST',
            body: JSON.stringify(blog),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
            setTitle('')
            setLoad('')
            setRepos('')
            setError(null)
            console.log('blog added ')
            dispatch({type: 'CREATE_BLOGS', payload: json})
        }
    }


    return(
        <form className='create' onSubmit={handleSubmit}>
            <h3>Add a new blog</h3>

            <label>Blog Title :</label>
            <input 
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            />

            <label>Load  :</label>
            <input 
                type="number"
                onChange={(e) => setLoad(e.target.value)}
                value={load}
            />

            <label>Repos  :</label>
            <input 
                type="number"
                onChange={(e) => setRepos(e.target.value)}
                value={repos}
            />

            <button>Add Blog</button>
            {error && <div className='error'>{error}</div>}
        </form>
    )
}

export default BlogForm