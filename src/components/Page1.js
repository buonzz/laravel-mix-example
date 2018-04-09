import React, {Component} from 'react';
import {Users} from './DataSet';

class Page1 extends Component{
	render(){

		const UsersList = Users.map((user) => 
			<tr key={user.id}>
				<td>{ user.id }</td>
				<td>{ user.name }</td>
			</tr>);

		return(
			<div>
			<h3>This is page 1</h3>
			<table>
				<thead>
				<tr>
					<th>id</th>
					<th>name</th>
				</tr>
				</thead>
				<tbody>
				{UsersList}
				</tbody>
			</table>
			</div>
		);
	} // render
} // class
export default Page1;