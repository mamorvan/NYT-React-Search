var React = require("react");

var Saved = React.createClass({
    render: function() {
        return(
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">Saved Articles</h3>
                </div>
                <div className="panel-body" id="saved">
                    
                </div>
            </div>
        );
    }
});

module.exports = Saved;