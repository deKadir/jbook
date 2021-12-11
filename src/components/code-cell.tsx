import { useState } from "react";
import CodeEditor from "./code-editor";
import Preview from "./Preview";
import bundle from "../bundler/index";
const CodeCell = () => {
  const [input, setInput] = useState("");

  const [code, setCode] = useState("");

  const onClick = async () => {
    const output = await bundle(input);
    setCode(output);
  };

  return (
    <div>
      <CodeEditor initialValue={input} onChange={(value) => setInput(value)} />
      <div>
        <button onClick={onClick}>Submit</button>
      </div>
      <Preview code={code} />
    </div>
  );
};

export default CodeCell;
