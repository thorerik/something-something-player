var React = require('react');

var tmpPlayer = require('tmpPlayer');
var Ban = require('Ban');

var BanList = React.createClass({
    getInitialState: function() {
        return {
            bans: null
        };
    },
    componentWillMount: function() {
        var that = this;

        tmpPlayer.getBans(this.props.player.id).then(function (bans) {
            that.setState({
                bans: bans,
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
        var {bans} = this.state;

        function renderList(bans) {
            if(bans) {
                var b = bans.map((ban, index) => 
                    <Ban ban={ban} key={index} />
                );
                return b;
            }
        }

        return (
            <div>
                {renderList(bans)}
            </div>
        );
    }
});

module.exports = BanList;