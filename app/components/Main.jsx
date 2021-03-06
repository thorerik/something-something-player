var React = require('react');

var Nav = require('Nav');

var Main = (props) => {
  return (
    <div>
      <Nav/>
      <div className="row">
        <div className="medium-6 columns small-centered">
          {props.children}
        </div>
      </div>
    </div>
  );
}
module.exports = Main;