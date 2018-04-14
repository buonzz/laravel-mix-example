import React, {Component} from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Grid, Menu, Segment } from 'semantic-ui-react';

import Home from './Home';
import Page1 from './Page1';
import Page2 from './Page2';
import Page404 from './Page404';

class App extends Component{

	constructor(props){
		super(props);
		this.state = { activeItem: 'bio' }; 
		this.handleItemClick = this.handleItemClick.bind(this);
	}

	handleItemClick(e, { name }){
		this.setState({ activeItem: name })
	}

	render(){
		const params = window.location.search;
		const { activeItem } = this.state;

		return(
			  <Grid>
			    <Grid.Column width={4}>
			      <Menu fluid vertical tabular>
			        <Menu.Item name='bio' active={activeItem === 'bio'} onClick={this.handleItemClick} as={Link} to='/'/>
			        <Menu.Item name='pics' active={activeItem === 'pics'} onClick={this.handleItemClick} as={Link} to='/page1/'/>
			        <Menu.Item name='companies' active={activeItem === 'companies'} onClick={this.handleItemClick} as={Link} to='/page2/'/>
			        <Menu.Item name='links' active={activeItem === 'links'} onClick={this.handleItemClick} as={Link} to='/page3/'/>
			      </Menu>
			    </Grid.Column>

			    <Grid.Column stretched width={12}>
			      <Segment>
			        <Switch>
			            <Route exact path='/' component={Home}/>
			            <Route exact path='/page1/' component={Page1}/>
			            <Route exact path='/page2/' component={Page2}/>
			            <Route component={Page404} />
			        </Switch>
			      </Segment>
			    </Grid.Column>
			  </Grid>
		);
	}
}

export default App;