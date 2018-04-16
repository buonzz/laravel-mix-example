import React, {Component} from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Grid, Menu, Segment,  Header, Icon } from 'semantic-ui-react';


import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../reducers';

import Home from './Home';
import Page1 from './Page1';
import Page2 from './Page2';
import Page404 from './Page404';

const store = createStore(reducers);

class App extends Component{

	constructor(props){
		super(props);
		this.state = { activeItem: 'home' }; 
		this.handleItemClick = this.handleItemClick.bind(this);
	}

	handleItemClick(e, { name }){
		this.setState({ activeItem: name })
	}

	render(){
		const params = window.location.search;
		const { activeItem } = this.state;

		return(
			<Provider store={store}>
			<div className="wrapper">
			  <Header as='h2'>
			    <Icon name='plug' />
			    <Header.Content>
			      Laravel Mix Example
			    </Header.Content>
			  </Header>
			  <Grid>
			    <Grid.Column width={4}>
			      <Menu fluid vertical tabular>
			        <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} as={Link} to={"/"+params}/>
			        <Menu.Item name='page1' active={activeItem === 'page1'} onClick={this.handleItemClick} as={Link} to={"/page1/"+params}/>
			        <Menu.Item name='page2' active={activeItem === 'page2'} onClick={this.handleItemClick} as={Link} to={"/page2/"+params}/>
			        <Menu.Item name='page3' active={activeItem === 'page3'} onClick={this.handleItemClick} as={Link} to={"/page3/"+params}/>
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
			 </div>
			</Provider>
		);
	}
}

export default App;