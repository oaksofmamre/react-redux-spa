import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import App from "./components/App";
import "./index.css";
import { instagramResponse } from "./photos";
import { getUniqueItems } from "./helpers";

function photos(state = { photos: [], filters: [] }, action) {
	return state;
}

const preloadedState = {
	photos: instagramResponse.data,
	filters: getUniqueItems("filter", instagramResponse.data)
};

let store = createStore(photos, preloadedState);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
