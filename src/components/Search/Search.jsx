import React from "react";

// controlled form

 class Search extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        searchResult: ''
    }

    this.hendleSearch = this.hendleSearch.bind(this);
     this.displaySearchResult = this.displaySearchResult.bind(this);
}


hendleSearch(event) {
this.setState({ searchResult: event.target.value });

}

displaySearchResult() {
    const {searchResult} = this.state;
    const { products } = this.props;
const filteredProducts = products.filter((product) => {
    const searchResultLower = searchResult.toLowerCase();
    const productTypeLower = product.type.toLowerCase(); 
    return productTypeLower.includes(searchResultLower);
});
  
return 
    filteredProducts.map((product) => 
    
         <div>Type: {product.type} || Amount: {product.amount} || Currency: {product.currency}</div>      
    
);

}

render() {
const {searchResult} = this.state;


return(

<div style={{marginTop: 100}}>
<input type="text"
placeholder="Search"
value={searchResult}
onChange={this.hendleSearch}

/>

<div style={{margin: 30}}>
    <h1>List of product</h1>
        <div>{this.displaySearchResult()}</div>
    
</div>

</div>

)

}

 }

 export default Search;