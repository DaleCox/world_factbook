//treeNav.js
//todo serve data from node web service. 
var Regions=[
        {
            "Name":"North America",
            "Countries":[
                "Bermuda","Canada","Clipperton Island",
                "Greenland","Mexico","Saint Pierre and Mixuelon", "United States"
            ],
            "id":0
        },
        {
            "Name":"South America",
            "Countries":[],
            "id":1},
        {
            "Name":"Europe",
            "Countries":[],
            "id":2},
        {
            "Name":"Middle East",
            "Countries":[],
            "id":3},
        {
            "Name":"Africa",
            "Countries":[],
            "id":4},
        {
            "Name":"Central Asia",
            "Countries":[],
            "id":5},
        {
            "Name":"South Asia",
            "Countries":[],
            "id":6},
        {
            "Name":"East and South Asia",
            "Countries":[],
            "id":7},
        {
            "Name":"Australia - Oceania",
            "Countries":[],
            "id":8}
    ];



//todo implement a recursive loop that treats country and region the same
var Country = React.createClass({
    render: function() {
    return (  
        //todo set class name as part of state 
        <li className="treeNavUnselected">{this.props.children}</li>
    );
    }

});

var CountyList = React.createClass({
    //todo test for presence of data props
    render: function() {
        
        var countryNodes;
        if(this.props.data)
        countryNodes = this.props.data.map(function(country) {            
            return (
                <Country key={country}>
                {country}
                </Country>
            );
        });
    return (      
        <ul>
            {countryNodes}
        </ul>
    );
  }
});

var Region = React.createClass({
    render: function() {
    return (  
        //todo set class name as part of state 
        <li className="treeNavUnselected">
        {this.props.children.Name}
        <CountyList data={this.props.children.Countries} />
        </li>
    );
    }

});

var RegionList = React.createClass({
    //todo test for presence of data props
    render: function() {
        var regionNodes = this.props.data.map(function(region) {            
            return (
                <Region key={region.id}>
                {region}                
                </Region>
            );
        });
    return (      
        <ul>
            {regionNodes}
        </ul>
    );
  }
});

var TreeNav = React.createClass({

    render: function() {
    return (
      <div className="treeNav">
        <RegionList data={this.props.data} />
      </div>
    );
  }
});

ReactDOM.render(
  <TreeNav data={Regions} />,
  document.getElementById('leftNav')
);

