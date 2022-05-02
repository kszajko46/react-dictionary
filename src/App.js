import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Daily Dictionary 📖</header>

        <main>
          <Dictionary />
        </main>
      </div>
      <footer className="text-center">
        Coded by{" "}
        <a href="https://www.linkedin.com/in/kata-szajko/">Kata Szajko </a>{" "}
        published on{" "}
        <a href="https://github.com/kszajko46/react-dictionary/find/main">
          GitHub
        </a>
      </footer>
    </div>
  );
}
