import React from "react";
import _ from 'lodash';

// controlled form

 class Search extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        searchResult: '',
        selectResult: ''
    }

    this.hendleSearch = this.hendleSearch.bind(this);
     this.displaySearchResult = this.displaySearchResult.bind(this);
     this.buldTypeOptions = this.buldTypeOptions.bind(this);
     this.hendleSearch = this.hendleSearch.bind(this);
     this.handleReset = this.handleReset.bind(this);
     
}


hendleSearch(event) {
this.setState({ searchResult: event.target.value });

}

handleSelect(event) {
    this.setState({ searchResult: event.target.value });
}

handleReset() {
this.setState({searchResult: '', selectResult: ''});
}

displaySearchResult() {
    const {searchResult, selectResult} = this.state;
    const { products } = this.props;

    console.log({searchResult, selectResult});

const filteredProducts = products.filter(({type, name}) => {
    const searchResultLower = searchResult.toLowerCase();
    const productTypeLower = type.toLowerCase(); 
    return productTypeLower.includes(searchResultLower)
    && name === selectResult ;
});
  
return filteredProducts.map((product) => 
    
         <div key={product.id}>Type: {product.type} || Amount: {product.amount} || Currency: {product.currency}</div>      
    
);

}

//I get uniq products
buldTypeOptions() {
    const { products } = this.props;
    // search uniq type by lodash
    const uniqProductsByTypes = _.uniqBy(products, 'type');
const uniqProductTypes = _.map(uniqProductsByTypes, 'type');

return uniqProductTypes.map((type, index) =>
<option key={`type-${type}-${index}`} value={type}>{type}</option>
);

}

render() {
const {searchResult, selectResult} = this.state;



return(

<div style={{marginTop: 100}}>
<input type="text"
placeholder="Search"
value={searchResult}
onChange={this.hendleSearch}
/>

<label>
          Select product type
          <select name="type" onChange={this.handleSelect} value={selectResult}>
          <option value="" disabled>
              ...
            </option>

            {this.buldTypeOptions()}
          </select>
        </label>

         <button onClick={this.handleReset} style={{marginLeft: 30}}>Reset</button>

<div style={{margin: 30}}>
    <h1>List of product</h1>
        <div>{this.displaySearchResult()}</div>
    
</div>

</div>

)

}

 }

 export default Search;