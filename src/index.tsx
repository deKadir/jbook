import ReactDom from "react-dom";
import "bulmaswatch/superhero/bulmaswatch.min.css";
import "./syntax.css";
import CodeCell from "./components/code-cell";
const App = () => {
  return (
    <div>
      <CodeCell />
      <CodeCell />
    </div>
  );
};

ReactDom.render(<App />, document.querySelector("#root"));
