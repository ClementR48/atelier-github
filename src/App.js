import 'semantic-ui-css/semantic.min.css'
import GridResults from './components/GridResults';
import Header from "./components/Header";
import InputSearch from "./components/InputSearch";
import NbResults from './components/NbResults';
import "./styles/index.scss";


function App() {
  return (
    <div className="app">
     <Header />
     <InputSearch />
     <NbResults />
     <GridResults />
    </div>
  );
}

export default App;
