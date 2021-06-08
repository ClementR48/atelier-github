import React from 'react';
import { Card } from 'semantic-ui-react'

const Result = ({ name, description, owner }) => {
    return(
    <Card className="result"
    image={owner.avatar_url}
    header={name}
    meta={owner.login}
    description={description}
  />
    );
};

export default Result;