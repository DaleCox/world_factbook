//treeNav.js
//todo serve data from node web service. 
var countryProperties = [
    {
        "id":1,
        "Name":"Introduction"
    },
    {
        "id":2,
        "Name":"Geography"
    },
    {
        "id":3,
        "Name":"People and Society"
    },
    {
        "id":4,
        "Name":"Government"
    },
    {
        "id":5,
        "Name":"Economy"
    },
    {
        "id":6,
        "Name":"Energy"
    },
    {
        "id":7,
        "Name":"Communications"
    },
    {
        "id":8,
        "Name":"Transportation"
    },
    {
        "id":9,
        "Name":"Military and Security"
    },
    {
        "id":10,
        "Name":"Transational Issues"
    }
];

    var Root=[
        {
            "Name":"North America",
            "Children":[
                {"Name":"Bermuda", "id":0, "Children":countryProperties, "regionMap":"noa/bd_large_locator.gif"},
                {"Name":"Canada", "id":1, "Children":countryProperties, "regionMap":"noa/ca_large_locator.gif"},
                {"Name":"Clipperton Island", "id":2, "Children":countryProperties, "regionMap":"noa/ip_large_locator.gif"},
                {"Name":"Greenland", "id":3, "Children":countryProperties, "regionMap":"noa/gl_large_locator.gif"},
                {"Name":"Mexico", "id":4, "Children":countryProperties, "regionMap":"noa/mx_large_locator.gif"},
                {"Name":"Saint Pierre and Mixuelon", "id":5, "Children":countryProperties, "regionMap":"noa/sb_large_locator.gif"},
                {"Name":"United States", "id":6, "Children":countryProperties, "regionMap":"noa/us_large_locator.gif"}
            ],            
            "regionMap": "reg_na_large_locator.gif",
            "id":0
        },
        {
            "Name":"South America",
            "Children":[],
            "id":1},
        {
            "Name":"Europe",
            "Children":[],
            "id":2},
        {
            "Name":"Middle East",
            "Children":[],
            "id":3},
        {
            "Name":"Africa",
            "Children":[],
            "id":4},
        {
            "Name":"Central Asia",
            "Children":[],
            "id":5},
        {
            "Name":"South Asia",
            "Children":[],
            "id":6},
        {
            "Name":"East and South Asia",
            "Children":[],
            "id":7},
        {
            "Name":"Australia - Oceania",
            "Children":[],
            "id":8}
    ];


//recursive itterator 
var Branch = React.createClass({
    getInitialState: function() {
        return {className: "treeNavUnselected"};
    }, 
    handleClick(evt) {
        evt.stopPropagation();
        //could have also used a boolean state to track selection 
        if(this.state.className == "treeNavUnselected" ){
            this.setState({className: "treeNavSelected"});
            //using gloabl event component to componet communication is easy for this small app though Redux could be used in larger applications.
            window.x.displayRegion(this.props.children.Name, this.props.children.Children, this.props.children.regionMap)
        }
        else
            this.setState({className: "treeNavUnselected"});
    },  
    render: function() {
        var childNodes;
        if(this.props.children.Children)
            childNodes = <BranchList data={this.props.children.Children} />;
        return (  
            //todo set class name as part of state 
            <li className={this.state.className} onClick={this.handleClick}>
            {this.props.children.Name}
            {childNodes}
            </li>
        );
    }
});

var BranchList = React.createClass({
    //todo test for presence of data props
    render: function() {
        var BranchNodes;
        if(this.props.data)
        BranchNodes = this.props.data.map(function(branch) {            
            return (
                <Branch key={branch.id}>
                {branch}                
                </Branch>
            );
        });
        return (      
            <ul>
                {BranchNodes}
            </ul>
        );
    }
});

var TreeNav = React.createClass({
    render: function() {
    return (
      <div className="treeNav">
        <BranchList data={this.props.data} />
      </div>
    );
  }
});

ReactDOM.render(
  <TreeNav data={Root} />,
  document.getElementById('leftNav')
);

