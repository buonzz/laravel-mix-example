import React, {Component} from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';

import Home from './Home';
import Page1 from './Page1';
import Page2 from './Page2';

class App extends Component{
	render(){
		return(
			<div>
				<h1>Laravel Mix Example</h1>
				<ul>
					<li><NavLink exact to="/">Home</NavLink></li>
					<li><NavLink to="/page1">Page 1</NavLink></li>
					<li><NavLink to="/page2">Page 2</NavLink></li>
				</ul>
				<div>
		        <Switch>
		            <Route exact path='/' component={Home}/>
		            <Route exact path='/page1' component={Page1}/>
		            <Route exact path='/page2' component={Page2}/>
		        </Switch>
		        </div>
			</div>);
	}
}

export default App;