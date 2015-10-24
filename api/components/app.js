var React = require('react');

var ReactRouter = require('react-router');
var DefaultRoute = ReactRouter.DefaultRoute;
var Link = ReactRouter.Link;
var Route = ReactRouter.Route;
var RouteHandler = ReactRouter.RouteHandler;

var API = require('./utils/API');
var UserApp = require('./components/UserApp.react');
var Header = require('./components/Header.react');
var Profile = require('./components/Profile.react');

// Load Mock API Call
API.getUserList();

var Index = React.createClass({
  getInitialState: function() {
      return { userInfo : JSON.parse(API.getCurrentUser()) };
  },
  render: function () {
    return (
      <div>
        <Header userInfo={this.state.userInfo}/>
		<div className="container">
          <RouteHandler />
        </div>
      </div>
    );
  }
});

var routes = (
  <Route path="/" handler={Index}>
  <Route path="/profile" handler={Profile} />
    <DefaultRoute handler={UserApp}/>
  </Route>
);

ReactRouter.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('reactRender'));
});
