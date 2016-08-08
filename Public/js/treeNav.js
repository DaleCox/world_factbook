//treeNav.js
//todo serve data from node web service. 
    var Root=[
        {
            "Name":"North America",
            "Children":[
                {"Name":"Bermuda", "id":0},
                {"Name":"Canada", "id":1},
                {"Name":"Clipperton Island", "id":2},
                {"Name":"Greenland", "id":3},
                {"Name":"Mexico", "id":4},
                {"Name":"Saint Pierre and Mixuelon", "id":5},
                {"Name":"United States", "id":6}
            ],
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
        if(this.state.className == "treeNavUnselected" )
            this.setState({className: "treeNavSelected"});
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

