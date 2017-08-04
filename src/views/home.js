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

