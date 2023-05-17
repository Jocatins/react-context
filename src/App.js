import "./App.css";
import { AddItem } from "./components/AddItem";
import { ShoppingList } from "./components/ShoppingList";
import { GlobalProvider } from "./context/GlobalState";

function App() {
	return (
		<>
			<div>
				<GlobalProvider>
					<AddItem />
					<ShoppingList />
				</GlobalProvider>
			</div>
		</>
	);
}

export default App;
