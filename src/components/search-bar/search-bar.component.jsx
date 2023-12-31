import './search-bar.styles.css';


const SearchBar = ( { className, placeHolder, onChangeHandler } ) => {
    return (
        <input
      className={`search-box ${className}`}
      type="search"
      placeholder={placeHolder}
      onChange={onChangeHandler}
    />

    )
}


// class SearchBar extends Component {



//     render() {
//         return (
//             <input
//           className={`search-box ${this.props.className}`}
//           type="search"
//           placeholder={this.props.placeHolder}
//           onChange={this.props.onChangeHandler}
//         />

//         )
//     }
// }

export default SearchBar;