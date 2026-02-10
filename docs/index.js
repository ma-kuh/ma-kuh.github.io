import { React, ReactDOM, html } from "./dependencies.js";

const Header = (props) => {
  return html`<header className="border-4 border-blue-500 p-6 bg-blue-50">
        <h1 className="text-2xl font-bold text-blue-900">Header</h1>
      </header>`;
};

const Main = (props) => {
  return html`<main className="border-4 border-green-500 flex-1 p-6 bg-green-50">
        <h2 className="text-2xl font-bold text-green-900 mb-4">Main Section</h2>
        <p className="text-green-800">This is the main content area. You can expand this section later.</p>
      </main>`;
};

const Footer = (props) => {
  return html`<footer className="border-4 border-purple-500 p-6 bg-purple-50">
        <p className="text-purple-900">Footer</p>
      </footer>`;
};

ReactDOM.render(
  html`<${Header} /><${Main} /><${Footer} />`,
  document.getElementById("root")
);
