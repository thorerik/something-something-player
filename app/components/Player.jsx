var React = require('react');

var ErrorModal = require('ErrorModal');
var PlayerForm = require('PlayerForm');
var PlayerDetails = require('PlayerDetails');
var tmpPlayer = require('tmpPlayer');


var Player = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false
    };
  },
  handleSearch: function(id) {
    var that = this;
    this.setState({
      isLoading: true,
      errorMessage: undefined,
      player: undefined
    });

    tmpPlayer.getPlayer(id).then(function (player) {
      that.setState({
        player: player,
        isLoading: false
      });
    }, function (e) {
      that.setState({
        isLoading: false,
        errorMessage: e.message
      });
    });
  },
  render: function() {
    var {isLoading, errorMessage, player} = this.state;

    function renderMessage() {
      if (isLoading) {
        return (
          <h3 className="text-center">Fetching Player…</h3>
        );
      } else if (player) {
        return (
          <PlayerDetails player={player}/>
        );
      }
    }

    function renderError() {
      if (typeof errorMessage === 'string') {
        return (
          <ErrorModal message={errorMessage}/>
        );
      }
    }

    return (
      <div>
        <h1 className="text-center page-title">Get Player</h1>
        <PlayerForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
});
module.exports = Player;