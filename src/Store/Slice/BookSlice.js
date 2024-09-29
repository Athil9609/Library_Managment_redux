import { createSlice } from "@reduxjs/toolkit";

const BookSlice=createSlice({
    name:"Book",
    initialState:{
        Books:[]
    },
    reducers:{
        addBook(state,action){
            state.Books.push(action.payload)
        },
        removeBook(state,action){
            state.Books=state.Books.filter(item=>item.isnb!=action.payload)
        },
        editBooks(state,action){
            state.Books=state.Books.filter(item=>item.isnb!=action.payload.isnb)
            state.Books.push(action.payload)
        }
    }
})
export default BookSlice.reducer
export const {addBook,removeBook,editBooks}=BookSlice.actions