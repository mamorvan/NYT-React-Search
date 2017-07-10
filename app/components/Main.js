var React = require("react");

var Search = require("./children/Search");
var Results = require("./children/Results");

var helpers = require("../utils/helpers");

var Main = React.createClass({
    getInitialState: function() {
        return { topic: "", startYear: "", endYear: "", results: [], saved: [] };
    },
    componentDidUpdate: function() {
        helpers.runQuery(this.state.topic, this.state.startYear, this.state.endYear).then(function(data){
            if(data !== this.state.results) {
                console.log("main.js 23 - helpers.runQuery data:", data);
                this.setState({ results: data });
            }
        }.bind(this)); //bind runQuery to Main component
    },
    setSearch: function(topic, startYear, endYear) {
        this.setState({ topic: topic });
        this.setState({ startYear: startYear});
        this.setState({ endYear: endYear});
    },
    render: function() {
        return (
            <div className="container">

                <div className="row">
                    <div className="jumbotron">
                        <h1>New York Times React Search</h1>
                        <h3><em>Search for articles and that's it</em></h3>
                    </div>
                </div>
            
            <div className="row">         
                    <Search setSearch={this.setSearch} />   
            </div>

            <div className="row">         
                    <Results results={this.state.results} />   
            </div>

        </div>
        );
    }
});

module.exports = Main;