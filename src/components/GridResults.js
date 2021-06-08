import React from 'react';
import { Card } from 'semantic-ui-react';
import Result from './Result';



const GridResults = ({ reposData }) => {
  
  return (
    <Card.Group itemsPerRow={3}>
      {reposData.map((repos) => 
        <Result key={repos.id} {...repos}/>
      )}
   </Card.Group>

  );
}




export default GridResults;