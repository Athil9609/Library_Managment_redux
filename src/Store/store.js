import { configureStore } from "@reduxjs/toolkit";
import BookSlice from "./Slice/BookSlice";

const BookStore=configureStore({
    reducer:{
        bookReducer:BookSlice
    }
})

export default BookStore