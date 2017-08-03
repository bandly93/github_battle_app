var React = require('react'),
	 Popular = require('../views/popular'),
	 Home = require("../views/home"),
	 Battle = require("../views/battle"),
	 Nav = require("./Navbar"),
	 ReactRouter = require("react-router-dom"),
	 Router = ReactRouter.BrowserRouter,
	 Route = ReactRouter.Route;

class App extends React.Component {
  render() {
    return (
    	<Router>
    		<div className = "container">
    			<Nav />
    			<Route path = '/popular' component = {Popular} />
    			<Route exact path = '/' component = {Home} />
    			<Route path = '/battle' component = {Battle} />
    		</div>
    	</Router>
    )
  }
}

module.exports = App;