import logo from './logo.svg';
import './App.css';
import { LinkPreviewer } from "./LinkPreviewer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <p>
          Happily coming back with <br /> my
          <LinkPreviewer
            href="https://dev.to/ilonacodes/frontend-shorts-vue-js-vanilla-js-digital-dices-og"
            image="https://thepracticaldev.s3.amazonaws.com/i/6hqmcjaxbgbon8ydw93z.png"
            title="Frontend Shorts: Vue.js + Vanilla.js — Digital Dices"
            text="Let me show you how you can implement a dice-rolling simulator in less than 30 minutes of your time on the front-end."
          >
            frontend shorts
          </LinkPreviewer>
          series on
          <LinkPreviewer
            href="https://dev.to"
            image="https://thepracticaldev.s3.amazonaws.com/i/6hqmcjaxbgbon8ydw93z.png"
            title="DEV Community"
            text="Where programmers share ideas and help each other grow—A constructive and inclusive social network."
          >
            dev.to
          </LinkPreviewer>
        </p>
      </header>
    </div>
  );
}

export default App;
