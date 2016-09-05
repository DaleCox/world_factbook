
var Country = React.createClass({
    render: function() {        
        return (  
            //todo add onclick to transition to country display
            <li className="countryListItem" >
            {this.props.children.Name}            
            </li>
        );
    }
});


var CountryList = React.createClass({
    //todo test for presence of data props
    render: function() {
        var countries;
        if(this.props.data)
        countries = this.props.data.map(function(country) {            
            return (
                <Country key={country.id}>
                {country}                
                </Country>
            );
        });
        return (      
            <ul>
                {countries}
            </ul>
        );
    }
});



var RegionContent = React.createClass({
    displayRegion(regionName, countries, mapPath){
        //todo fix how state is used here instead of props 
        //  use React.renderComponent to rerend with the data values set
        //  for now using state to get layout done
        this.setState({regionName: regionName});
        console.log("Region Name: ", regionName);
        this.setState({countries: countries});  
        this.setState({mapPath: mapPath});  
    } ,
    getInitialState: function() {
        window.x.displayRegion = this.displayRegion;
        return {regionName: null};
    },    
    render: function() {
        if(this.state.regionName){
            var imagePath = 'img/locator/' +  this.state.mapPath;
            return (
            <div className="regionContent">
                <h2 id="contentTitleId">{this.state.regionName}</h2>
                <div id="countryListId">
                    <CountryList data={this.state.countries} />
                </div>
                <div id="regionImageId">
                    <img alt="Selected region image" src={imagePath} />
                </div>
            </div>
            );
        }else{
            return (
                <p>
                    The <b>World Factbook</b> provides information on the history, people, government, economy, geography, communications, transportation, military, and transnational issues for 267 world entities. 
                    <br/><br/> Currently the site only supports content from North America. Select a Region on the left to get started. 
                    <br/><br/> The original site that this one is based on can be found at <a href="https://www.cia.gov/library/publications/the-world-factbook/" target="_blank">CIA World Factbook</a>.
                </p>
            );
        }
  }
});



ReactDOM.render(
  <RegionContent   />,
  document.getElementById('content')
);

