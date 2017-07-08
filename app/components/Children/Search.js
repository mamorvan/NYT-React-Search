var React = require("react");

var Search = React.createClass({
    getInitialState: function() {
        return { topic: "", startYear: 0, endYear: 0};
    },
    handleTopicChange: function() {
        this.setState({ topic: event.target.value});
    },
    handleStartYearChange: function() {
        this.setState({ startYear: event.target.value});
    },
    handleEndYearChange: function() {
        this.setState({ endYear: event.target.value});
    },
    handleSubmit: function(event) {
        event.preventDefault();

        this.props.setSearch(this.state.topic, this.state.startYear, this.state.endYear);
        this.setState({ topic: ""});
        this.setState({ startYear: 0});
        this.setState({ endYear: 0});
    },
    render: function() {
        return(
            <div className="col-md-10 col-md-offset-1 well">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Search NYT</h3>
                    </div>
                    <div className="panel-body">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">

                                <h4>Topic</h4>
                                <input
                                    onChange={this.handleTopicChange}
                                    value={this.state.topic}
                                    type="text"
                                    className="form-control"
                                    id="topic"
                                    required
                                />

                                <h4>Start Year</h4>
                                <input
                                    onChange={this.handleStartYearChange}
                                    value={this.state.startYear}
                                    type="number"
                                    className="form-control"
                                    id="startYear"
                                    required
                                />

                                <h4>End Year</h4>
                                <input
                                    onChange={this.handleEndYearChange}
                                    value={this.state.endYear}
                                    type="number"
                                    className="form-control"
                                    id="endYear"
                                    required
                                />

                                <button className="btn btn-default" type="submit">Submit</button>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Search;