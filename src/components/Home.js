import React, {Component} from 'react';
const qs = require('query-string');


class Home extends Component{
	render(){

		console.log(qs.parse(this.props.location.search));
		return(
			<h3>This is home</h3>
		);
	}
}

export default Home;