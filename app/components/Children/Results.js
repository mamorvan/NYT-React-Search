var React = require("react");

var Results = React.createClass({
    render: function() {
        return(
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">Results</h3>
                    </div>
                    <div className="panel-body" id="results">
                        <p> {this.props.results} </p>
                    </div>
                </div>
        );
    }
}); 

module.exports = Results;