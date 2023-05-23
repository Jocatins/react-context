import BookForm from "./components/BookForm";
import BookList from "./components/BookList";
import Navbar from "./components/Navbar";

import BookContextProvider from "./context/BookContext";

function App() {
	return (
		<>
			<div>
				<BookContextProvider>
					<Navbar />
					<BookList />
					<BookForm />
				</BookContextProvider>
			</div>
		</>
	);
}

export default App;
