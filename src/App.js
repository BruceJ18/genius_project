import { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./components/search-bar/search-bar.component";
import CardList from "./components/card-list/cards-list.components";


const App = () => {


  const [ geniuses, setGeniuses ] = useState([
            { name: "Leonardo Da Vinci", id: 1 },
    
            { name: "Nikola Tesla", id: 2 },
    
            { name: "Issac Newton", id: 3 },
          ])


  const [ searchField, setSearchField ] = useState('')

  const onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    
    setSearchField(searchField);

  };



  const filteredpolymaths = geniuses.filter((genius) => {
    return genius.name.toLocaleLowerCase().includes(searchField);
  });



  return (
    <div className="App">

      <h1 className="app-title">Poly-Maths</h1>

      <SearchBar
        className="geniuses-search-box"
        onChangeHandler={onSearchChange}
        placeHolder="Search Geniuses"
      />


      <CardList  polyMaths={filteredpolymaths} />
    </div>
  );
}


// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       geniuses: [
//         { name: "Leonardo Da Vinci", id: 1 },

//         { name: "Nikola Tesla", id: 2 },

//         { name: "Issac Newton", id: 3 },
//       ],

//       searchField: "",
//     };
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return { searchField };
//     });
//   };

//   render() {
//     const { geniuses, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredpolymaths = geniuses.filter((genius) => {
//       return genius.name.toLocaleLowerCase().includes(searchField);
//     });

//     return (
//       <div className="App">

//         <h1 className="app-title">Poly-Maths</h1>

//         <SearchBar
//           className="geniuses-search-box"
//           onChangeHandler={onSearchChange}
//           placeHolder="Search Geniuses"
//         />


//         <CardList  polyMaths={filteredpolymaths} />
//       </div>
//     );
//   }
// }

export default App;
