import React from "react";
import ReactDOM from "react-dom";
import IndecisionApp from "./components/IndecisionApp";

const Layout = (props) => {
  console.log(props);
  return (
    <div>
      <p>header</p>
      {props.children}
      <p>footer</p>
    </div>
  );
};

const template = (
  <div>
    <h1>Page Title</h1>
    <p>This is my page</p>
  </div>
);

// ReactDOM.render(<Layout content={template} />, document.getElementById("app"));
// ReactDOM.render(
//   <Layout>
//     <p>Tihis is inline</p>
//   </Layout>,
//   document.getElementById("app")
// );
ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
