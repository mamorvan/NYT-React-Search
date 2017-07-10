var React = require("react");

var Search = require("./children/Search");
var Results = require("./children/Results");
// var Saved = require("./children/Saved");

var helpers = require("../utils/helpers");

var Main = React.createClass({
    getInitialState: function() {
        return { topic: "", startYear: "", endYear: "", results: [], saved: [] };
    },
    componentDidMount: function() {
        helpers.getSaved().then(function(response) {
            console.log("main.js 14 - helpers.getSaved on mounted - response: ", response);
            if(response !== this.state.saved) {
                this.setState({ saved: response.data});
            }
        }.bind(this));
    },
    componentDidUpdate: function() {
        helpers.runQuery(this.state.topic, this.state.startYear, this.state.endYear).then(function(data){
            if(data !== this.state.results) {
                console.log("main.js 23 - helpers.runQuery data:", data);
                this.setState({ results: data });

                // helpers.postSaved(data.topic, data.date, data.url).then(function(){
                //     console.log("main.js 27 - article saved");
                //     helpers.getSaved().then(function(response) {
                //         console.log("main.js 29 - helpers.getSaved on update - response: ", response);
                //         this.setState({ saved: response.data });
                //     }.bind(this)); //bind getSaved to Main component
                // }.bind(this)); // bind postSaved to Main component
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

            // <div className="row">
            //     <div className="col-md-10 col-md-offset-1 well">
            //         <Saved saved={this.state.saved} />
            //     </div>
            // </div>

        </div>

        );
    }
});

module.exports = Main;