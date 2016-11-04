var React = require('react');
import AutoLinkText from 'react-autolink-text';


var Ban = React.createClass({
    render: function() {
        var {active, adminName, expiration, reason, timeAdded} = this.props.ban;
        return (
            <div className="row ban-card">
                <div className="column medium-4">
                </div>
                <div className="column medium-8">
                    <h1>Reason: <AutoLinkText text={reason}/></h1>
                    <h2>Admin: {adminName}</h2>
                    <h3>Expires: {expiration}</h3>
                    <h4>Banned: {timeAdded}</h4>
                </div>
            </div>
        );
    }
});

module.exports = Ban;