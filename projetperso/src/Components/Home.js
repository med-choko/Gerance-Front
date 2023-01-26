import React  from 'react'
// import axios from 'axios'

import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react'


import Login from './Login'
// import {Button,Icon} from 'semantic-ui-react'

// import { useParams } from 'react-router-dom';


function Home() {
// const params = useParams();


  return (
    <div  >

<h1>hello</h1><Segment placeholder>
    <Grid columns={2} relaxed='very' stackable>
      <Grid.Column>
<Login />
</Grid.Column>



      <Grid.Column verticalAlign='middle'>
        <Button content='Sign up' icon='signup' size='big' href="/register"/>
      </Grid.Column>
    </Grid>

    <Divider vertical>Or</Divider>
  </Segment>
{/* <Button animated>
<Button.Content visible> Next</Button.Content>
<Button.Content hidden>
<Icon name='arrow right' />
</Button.Content>
</Button> */}
    </div>



  
  )
}

export default Home