var React = require('react');

var PlayerForm = React.createClass({
  onFormSubmit: function(e) {
    e.preventDefault();

    var player = this.refs.player.value;
    if (player.length > 0) {
      this.refs.player.value = "";
      this.props.onSearch(player);
    }
  },
  render: function() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div>
            <input type="search" ref="player" placeholder="Enter player id"/>
          </div>
          <div>
            <button className="hollow button expanded">Get Player</button>
          </div>
        </form>
      </div>
    );
  }
});
module.exports = PlayerForm;