import React from 'react';
import { Card } from 'semantic-ui-react'

const Result = () => {
  return (
    <Card className="result"
    image='/images/avatar/large/elliot.jpg'
    header='Elliot Baker'
    meta='Friend'
    description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
  />
  );
};

export default Result;