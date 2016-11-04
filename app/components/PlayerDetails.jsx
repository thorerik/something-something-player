var React = require('react');

var tmpPlayer = require('tmpPlayer');
var BansList = require('BansList');

var PlayerDetails = React.createClass({
    render: function() {
        var {player} = this.props;
        var {id, avatar, groupName, joinDate, name} = player;

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
                <BansList player={player}/>
            </div>
        );
    }
});
module.exports = PlayerDetails;