//Make an view where you can find two users on github and display 
//and display their information on the page. 
//
//
//Need two forms and a submit button that update the app when you click 
//submit.

var React = require("react"),
	 ReactRouter = require("react-router-dom"),
	 Link = ReactRouter.Link;


class Home extends React.Component {

	render(){
		return (
			<div>
				<p>Battle your friends on GitHub!</p>
				<Link className='button' to='/battle'>Battle</Link>
			</div>
		)
	}
}

module.exports = Home;

