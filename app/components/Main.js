var React = require("react");

var Search = require("./children/Search");
var Saved = require("./children/Saved");

var Main = React.createClass({

    render: function() {
        return (
            <div className="container">

                <div className="row">
                    <div className="jumbotron">
                        <h1>New York Times React Search</h1>
                        <h3><em>Search for and annotate articles</em></h3>
                    </div>
                </div>
            
            <div className="row">         
                    <Search />   
            </div>

            <div className="row">
                <div className="col-md-10 col-md-offset-1 well">
                    <Saved />
                </div>
            </div>

        </div>

        );
    }
});

module.exports = Main;