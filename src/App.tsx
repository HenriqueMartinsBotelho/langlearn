import { Aviso } from "./components/Aviso";
import { Home } from "./pages/Home/Home";
import "./styles/global.css";

function App() {
  return (
    <div className="App">
      <Aviso
        message=" Projeto em desenvolvimento! 😅"
        repository="https://github.com/HenriqueMartinsBotelho/langlearn"
        reponame="langlearn"
      />
      <Home />
    </div>
  );
}

export default App;
