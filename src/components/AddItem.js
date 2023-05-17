import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const AddItem = () => {
	const [text, updateText] = useState("");
	const { addItemToList } = useContext(GlobalContext);

	const handleSubmit = (event) => {
		if (text.length) {
			event.preventDefault();
			addItemToList(text);
			updateText("");
		}
	};
	const handleChange = (event) => {
		updateText(event.target.value);
	};
	return (
		<>
			<div>
				<h3>Add a new Item to th shopping List</h3>
				<form onSubmit={handleSubmit}>
					<div className="form-control">
						<input
							type="text"
							value={text}
							onChange={handleChange}
							placeholder="Enter Item ...."
						/>
					</div>
					<button className="btn">Add Item</button>
				</form>
			</div>
		</>
	);
};
