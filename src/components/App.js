import React, {Component} from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

import Home from './Home';
import Page1 from './Page1';
import Page2 from './Page2';
import Page404 from './Page404';

class App extends Component{
	render(){
		const params = window.location.search;
		return(
			<MuiThemeProvider>
				<div>
					<AppBar title="Laravel Mix Example" />
					<ul>
						<li><NavLink exact to={"/"+params} isActive={(match, location) => location.pathname + location.search === '/'+params}>Home</NavLink></li>
						<li><NavLink to={"/page1/"+params} isActive={(match, location) => location.pathname + location.search === '/page1/'+params}>Page 1</NavLink></li>
						<li><NavLink to={"/page2/"+params} isActive={(match, location) => location.pathname + location.search === '/page2/'+params}>Page 2</NavLink></li>
					</ul>
					<div>
			        <Switch>
			            <Route exact path='/' component={Home}/>
			            <Route exact path='/page1/' component={Page1}/>
			            <Route exact path='/page2/' component={Page2}/>
			            <Route component={Page404} />
			        </Switch>
			        </div>
		        </div>
			</MuiThemeProvider>);
	}
}

export default App;