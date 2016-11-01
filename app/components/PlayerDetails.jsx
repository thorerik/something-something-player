var React = require('react');

var PlayerDetails = ({player}) => {
    var {id, avatar, groupName, joinDate, name} = player;

    function renderBanList(id) {
        return (
            <div className="row">
            </div>
        );
    }

    console.log(avatar);
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
module.exports = PlayerDetails;