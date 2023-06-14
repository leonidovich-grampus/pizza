import React from "react";
import ReactDOM from "react-dom";
import App from "core/App/App";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter } from "react-router-dom";

document.body.innerHTML = '<div id="root"></div>';

// const App = (): JSX.Element => {
//   return <h1>Hello, 21323world!</h1>;
// };

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
    , document.getElementById("root"));