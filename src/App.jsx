import { useState } from "react";
import Editor from "./components/Editor";
import Preview from "./components/Preview";
import "./App.css";

const App = () => {
  const [markdown, setMarkdown] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`container ${darkMode ? "dark-mode" : ""}`}>
      <header className="header">
        <h1>Markdown Editor</h1>
        <button className="theme-toggle" onClick={toggleDarkMode}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <div className="editor-preview-container">
        <div className="editor-container">
          <h3 className="window-name">Editor</h3>
          <Editor onChange={setMarkdown} />
        </div>
        <div className="preview-container">
          <h3>Preview</h3>
          <Preview content={markdown} />
        </div>
      </div>
    </div>
  );
};

export default App;
