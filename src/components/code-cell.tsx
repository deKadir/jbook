import { useState, useEffect } from "react";
import CodeEditor from "./code-editor";
import bundle from "../bundler";
import Resizable from "./resizable";
import Preview from "./prewiew";

const CodeCell = () => {
  const [code, setCode] = useState("");
  const [input, setInput] = useState("");

  useEffect(() => {
    const timer = setTimeout(async () => {
      const output = await bundle(input);
      setCode(output);
    }, 750);

    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  return (
    <Resizable direction="vertical">
      <div style={{ height: "100%", display: "flex", flexDirection: "row" }}>
        <Resizable direction="horizontal">
          <CodeEditor
            initialValue="import ReactDOM from 'react-dom';
            
            import React from 'react';
            
            const App = () => {
              return (
                <div>
                  <h1>hello world</h1>
                </div>
              );
            };
            
            ReactDOM.render(<App />, document.querySelector('#root'));"
            onChange={(value) => setInput(value)}
          />
        </Resizable>
        <Preview code={code} />
      </div>
    </Resizable>
  );
};

export default CodeCell;
