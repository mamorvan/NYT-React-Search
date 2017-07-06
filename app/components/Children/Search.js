var React = require("react");

var Search = React.createClass({
    getInitialState: function() {
        return { topic: "", startYear: 0, endYear: 0};
    },
    render: function() {
        return(
            <div className="col-md-10 col-md-offset-1 well">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Search NYT</h3>
                    </div>
                    <div className="panel-body">
                        <form>
                            <div className="form-group">

                                <h4>Topic</h4>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="topic"
                                    required
                                />

                                <h4>Start Year</h4>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="startYear"
                                />

                                <h4>End Year</h4>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="endYear"
                                />

                                <button className="btn btn-default" type="submit">Submit</button>

                            </div>
                        </form>
                    </div>
                </div>

                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Results</h3>
                    </div>
                    <div className="panel-body" id="results">
                        
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Search;