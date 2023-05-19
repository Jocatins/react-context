import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const BookContext = createContext();

const BookContextProvider = (props) => {
	const [books, setBooks] = useState([
		{ title: "name of the wind", id: 1, author: "Jocatins" },
		{ title: "the way of kings", id: 2, author: "Jocatins" },
		{ title: "the final empire", id: 3, author: "Jocatins" },
		{ title: "the hero of ages", id: 4, author: "Jocatins" },
	]);
	const addBook = (title, author) => {
		setBooks([...books, { title, author, id: uuidv4() }]);
	};
	const removeBook = (id) => {
		setBooks(books.filter((book) => book.id !== id));
	};
	return (
		<BookContext.Provider value={{ books, addBook, removeBook }}>
			{props.children}
		</BookContext.Provider>
	);
};

export default BookContextProvider;
