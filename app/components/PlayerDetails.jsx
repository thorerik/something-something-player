var React = require('react');

var tmpPlayer = require('tmpPlayer');

var PlayerDetails = React.createClass({
    render: function() {
        var {player} = this.props;
        var {id, avatar, groupName, joinDate, name} = player;

        function renderBanList(id) {
            var that = this;
            var bans = tmpPlayer.getBans(id).then(function (bans) {
                if (bans.length > 0) {
                    that.setState({
                        bans: bans
                    });
                }
            }, function (e) {
                console.log(e);
            });
            var b;
            this.state.bans.forEach(function(element) {
                b += <div>{element}</div>
            }, this);
            
            return (
                <div className="row">
                    {b}
                </div>
            );
        }

        return (
            <div>
                <div className="contact-card row">
                    <div className="medium-4 columns">
                        <img src={avatar} />
                    </div>
                    <div className="medium-8 columns">
                        <h3 className="text-center">{name}</h3>
                        <h4 className="text-center">{groupName}</h4>
                        <h5 className="text-center">Joined {joinDate}</h5>
                    </div>
                </div>
                {renderBanList(id)}
            </div>
        );
    }
});
module.exports = PlayerDetails;