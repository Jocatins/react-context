// In the GlobalState file, we will create a context object that will provide the global state to the app’s components.
import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
	shoppingList: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	// Actions for changing state
	function addItemToList(item) {
		dispatch({
			type: "ADD_ITEM",
			payload: item,
		});
	}
	function removeItemFromList(item) {
		dispatch({
			type: "REMOVE_ITEM",
			payload: item,
		});
	}
	return (
		<GlobalContext.Provider
			value={{
				shoppingList: state.shoppingList,
				addItemToList,
				removeItemFromList,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};
