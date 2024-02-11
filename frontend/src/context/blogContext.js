import { createContext, useReducer } from "react";

export const BlogsContext = createContext()

export const blogsReducer = (state, action) => {
    switch(action.type) {
        case 'SET_BLOGS':
            return {
                blogs: action.payload
            };
        case 'CREATE_BLOGS':
            return {
                blogs: [action.payload, ...state.blogs]
            };
        case 'DELETE_BLOG':
            return {
                ...state,
                blogs: state.blogs.filter((b) => b._id !== action.payload._id)
            };
            
        default:
            return state;
    }
};


export const BlogsContextProvider =({children})=>{

    const [state, dispatch] = useReducer(blogsReducer, {
        blogs: null
    })

    // dispatch({type: 'SET_BLOGS', payload: [{}, {}]})
    return(
        <BlogsContext.Provider value={{...state, dispatch}}>
            { children }
        </BlogsContext.Provider>
    )
}