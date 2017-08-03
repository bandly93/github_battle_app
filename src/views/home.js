//Make an view where you can find two users on github and display 
//and display their information on the page. 
//
//
//Need two forms and a submit button that update the app when you click 
//submit.

var React = require("react");

class UserOne extends React.Component {

	render(){
		return (
			<div>
				<p>Please enter a github user.</p>
			</div>
		)
	}
}

module.exports = UserOne;

