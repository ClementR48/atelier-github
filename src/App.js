import axios from 'axios';
import { useEffect, useState } from 'react';
import 'semantic-ui-css/semantic.min.css'
import GridResults from './components/GridResults';
import Header from "./components/Header";
import InputSearch from "./components/InputSearch";
import NbResults from './components/NbResults';
import "./styles/index.scss";


function App() {

  const [ search , setSearch ] = useState('')
  const [ isLoaded, setIsLoaded ] = useState(false)
  const [ repos, setRepos ]  = useState([]);
  const [ nbRepos, setNbRepos ] = useState(0)




  const loadData = () => {
     axios
    .get(`https://api.github.com/search/repositories?q=${search}`)
    .then((response) => {
      setRepos(response.data.items)
      setNbRepos(response.data.total_count)
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      setIsLoaded(true)
    }) 
  }

  
  return (
    <div className="app">
      <Header />
      <InputSearch
      loadData={loadData}
      search={search}
      setSearch={setSearch}/>

      <NbResults countData={nbRepos}/>
      <GridResults reposData={repos}/> 
    </div>
  );
}

export default App;
