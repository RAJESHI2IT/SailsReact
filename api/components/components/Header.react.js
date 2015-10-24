var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;


var Search = React.createClass({
    render: function() {
        return (
            <nav>
              <div className="nav-wrapper">
                <a href="#" className="brand-logo">Logo</a>
                  { this.props.userInfo.authenticated
                    ? 
                      <ul id="nav-mobile" className="right hide-on-med-and-down">
                      <li><Link to="/profile">{ this.props.userInfo.user.username}</Link></li>
                      <li><a href="/logout">Logout</a></li>
                      </ul>
                    :
                      <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="/register">Register</a></li>
                        <li><a href="/login">Login</a></li>
                      </ul>
                  }
              </div>
            </nav>
        );
    }
});

module.exports = Search;
