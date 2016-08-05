//treeNav.js

var TreeNav = React.createClass({
    render: function() {
    return (
      <div className="treeNav">
        Parent node list
      </div>
    );
  }
});

ReactDOM.render(
  <TreeNav  />,
  document.getElementById('content')
);