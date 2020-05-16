import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Code Pipeline Demo</h1>
      <h1>
        ServerUrl from env:{" "}
        {process.env.REACT_APP_SERVER_URL || (
          <span style={{ color: "red" }}>undefined</span>
        )}
      </h1>
    </div>
  );
}

export default App;

[Supported Runtime Environment]('https://docs.aws.amazon.com/codebuild/latest/userguide/build-env-ref-available.html')