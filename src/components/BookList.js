import React, { Component } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { AuthContext } from "../context/AuthContext";

class BookList extends Component {
	// consuming context with class component restriction you use static contextType
	// 	static contextType = ThemeContext;
	render() {
		return (
			<AuthContext.Consumer>
				{(authContext) => (
					<ThemeContext.Consumer>
						{(context) => {
							const { isLightTheme, light, dark } = context;
							const theme = isLightTheme ? light : dark;
							const { isAuthenticated, toggleAuth } = authContext;
							return (
								<>
									<div
										className="book-list"
										style={{
											color: theme.syntax,
											background: theme.bg,
										}}
									>
										<ul>
											<li
												style={{ background: theme.ui }}
											>
												the way of kings
											</li>
											<li
												style={{ background: theme.ui }}
											>
												the name of the wind
											</li>
											<li
												style={{ background: theme.ui }}
											>
												the final empire
											</li>
										</ul>
									</div>
									<button onClick={toggleAuth}>
										{isAuthenticated
											? "LoggedIn"
											: "LoggedOut"}
									</button>
								</>
							);
						}}
					</ThemeContext.Consumer>
				)}
			</AuthContext.Consumer>
		);
	}
}

export default BookList;
