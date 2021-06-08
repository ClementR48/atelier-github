import React from 'react';
import { Message } from 'semantic-ui-react'

const NbResults = ({ countData }) => {
  return (
    <Message visible className="nb-results">
      {countData}
    </Message>
  );
};

export default NbResults;