import * as React from "react";
import * as ReactDOM from "react-dom";
import Hello from "./Hello";

class AppComponent extends React.Component<any, any> {
    render() {
        return <div>
                <Hello compiler="C1" framework="F1"/>
                <h1>Hello from TypeScript and React!</h1>
              </div>;
    }
}

ReactDOM.render(
    <AppComponent />,
    document.getElementById("example")
);
