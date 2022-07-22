import React, { FC } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header logo={logo}>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Link href="https://reactjs.org" target="_blank">
          Learn React
        </Link>
      </Header>
    </div>
  );
}

interface HeaderProps {
  logo: string;
  children: any;
}

const Header: FC<HeaderProps> = ({ children, logo }) => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    {children}
  </header>
);

interface LinkProps {
  href: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  rel?: string;
  children: any;
}

const Link: FC<LinkProps> = ({
  href = "https://reactjs.org",
  target = "_blank",
  rel = "noopener noreferrer",
  children,
}) => (
  <a className="App-link" href={href} target={target} rel={rel}>
    {children}
  </a>
);

export default App;
