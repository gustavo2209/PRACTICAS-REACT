import React, {Component} from 'react'

class SearchProduct extends Component{

    state = {searchValue : ''};

    handlerSubmit = e => {
        e.preventDefault();
        this.props.handleSearchProduct(this.state.searchValue);
    }

    handleChange = e => {
        this.setState({searchValue: e.target.value});
    }

    render(){
        const {searchValue} = this.state;

        return(
        <form onSubmit={this.handlerSubmit} style={{margin: '1.5em 0.3rem'}}>
            <div className="field has-addons">
                <div className="control">
                    <input type="text" value={searchValue} className="input" placeholder="Buscar productos" onChange={this.handleChange}/>
                </div>
                <div>
                    <input type="submit" value="Buscar" className="button is-info"/>
                </div>
            </div>
        </form>
        )
    }
}

export default SearchProduct;