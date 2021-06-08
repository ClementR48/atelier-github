import React from 'react';
import { Input, Form } from 'semantic-ui-react'

const InputSearch = ({ search, setSearch, loadData }) => {

  const handleSubmit = (event) => {
    event.preventDefault();
    loadData()
  }


  return (
    
      <Form className="input-search"
            onSubmit={handleSubmit}>
        <Form.Field>
          <Input
          value={search}
          onChange={(event) => {
            setSearch(event.target.value)
          }}
          icon='search'
          placeholder='Search...'
          iconPosition="left" />
        </Form.Field>
      </Form>
    
  );
};

export default InputSearch;