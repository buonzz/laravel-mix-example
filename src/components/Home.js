import React, {Component} from 'react';
const qs = require('query-string');
import RaisedButton from 'material-ui/RaisedButton';

class Home extends Component{
	render(){
		return(
			<div>
			<h3>This is home</h3>
			<RaisedButton label="Default" />
			</div>
		);
	}
}

export default Home;