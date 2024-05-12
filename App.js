import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => <h1>This is title From Shorthand component</h1>
const ReturnComponent = () => {
    return <h1>Namaste I am from Return Component</h1>
}
const HeadingComponent = () => (
    <div id="container">
    <Title />
<ReturnComponent />
        <h1 className="heading">Namaste Functional Component </h1>
    </div>
);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);