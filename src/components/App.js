var React = require('react'),
	 Popular = require('../views/popular'),
	 Home = require("../views/home"),
	 Battle = require("../views/battle"),
	 Nav = require("./Navbar"),
	 ReactRouter = require("react-router-dom"),
	 Router = ReactRouter.BrowserRouter,
	 Switch = ReactRouter.Switch,
	 Route = ReactRouter.Route;

class App extends React.Component {
  render() {
    return (
    	<Router>
    		<div className = "container">
    			<Nav />
    			<Switch>
		    		<Route exact path = '/' component = {Home} />
		    		<Route exact path = '/battle' component = {Battle} />
		    		<Route path = '/popular' component = {Popular} />
		    		<Route render = {function (){
		    			return <p>This page is not found!</p>
		    		}} />
		    	</Switch>
    		</div>	
    	</Router>
    )
  }
}

module.exports = App;