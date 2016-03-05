import * as React from "react";

export interface HelloProps { compiler: string; framework: string; }

export default class Hello extends React.Component<HelloProps, {}> {
    componentWillMount ()
    {
      console.log("test 123");
      debugger;
    }
    render() {
      console.log("test 123");
      return <h1>Hello from {this.props.compiler} and {this.props.framework}! 123</h1>;
    }
}
