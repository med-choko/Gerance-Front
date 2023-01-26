import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'



 class AddTelephones extends Component {
  render() {
    return (
      <div>
        <Form  action='http://localhost:5000/api/telephones' method='POST'>
        <Form.Group widths='equal'>
          <Form.Input fluid label='Marque ' placeholder='Marque '  name='marque'/>
          <Form.Input fluid label='Modele' placeholder='Modele' name='modele' />
          <Form.Input fluid label='couleur' placeholder='Modele' name='couleur' />
          <Form.Input fluid label='reference' placeholder='Modele' name='reference' />
         
        </Form.Group>
        
        <Form.TextArea label='About' placeholder='Tell us more about you...' name='description' />
        
        <Form.Button>Submit</Form.Button>
      </Form>
      </div>
    )
  }
}

export default AddTelephones