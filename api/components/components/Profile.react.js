var React = require('react');
var API = require('../utils/API');

var Profile = React.createClass({
  getInitialState: function() {
    return { userInfo : JSON.parse(API.getCurrentUser()) };
  },
  render: function() {
        return (
            <h1>{this.state.userInfo.user.username}</h1>
        );
    }
});

module.exports = Profile;
