import BookList from "./components/BookList";
import Navbar from "./components/Navbar";
import ThemeContextProvider from "./context/ThemeContext";
import "./App.css";
import ThemeToggle from "./components/ThemeToggle";
import AuthContextProvider from "./context/AuthContext";
import BookContextProvider from "./context/BookContext";

function App() {
	return (
		<>
			<div>
				<ThemeContextProvider>
					<AuthContextProvider>
						<Navbar />
						<BookContextProvider>
							<BookList />
						</BookContextProvider>
						<ThemeToggle />
					</AuthContextProvider>
				</ThemeContextProvider>
			</div>
		</>
	);
}

export default App;
