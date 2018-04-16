import React, {Component} from 'react';
import { connect } from 'react-redux';

class Page2 extends Component{

	render(){

		const libraryList = this.props.libraries.map((library) => 
			<li key={library.id}>
				{library.title}
			</li>);

		return(
			<div>
				<h3>Libraries</h3>
				<ul>
					{libraryList}
				</ul>
			</div>
		);
	}
}


const mapStateToProps = state => {
  return { libraries: state.libraries };
};

export default connect(mapStateToProps)(Page2);