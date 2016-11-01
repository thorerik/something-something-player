var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  onSearch: function (e) {
    e.preventDefault();

    var location = this.refs.location.value;
    var encodedLocation = encodeURIComponent(location);

    if (location.length > 0) {
      this.refs.location.value = "";
      window.location.hash = '#/?location=' + encodedLocation;
    }
  },
  render: function () {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">Something something Player</li>
            <li><IndexLink to="/" activeClassName="active">Get Player</IndexLink></li>
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = Nav;