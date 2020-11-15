import React, { useState, useEffect } from "react";
import "./searchPage.scss";
import { DisplayIngredients } from "app/components";
const axios = require('axios');

function SearchPage(){
  // const [list, setList] = useState('');
  const [userInput, setUserInput] = useState('');
  const [ingredientsList, setIngredientsList] = useState([]);
  const [recipes, setRecipes] = useState([]);
  // function handleChange(e){
  //   console.log(e.target.value);
  // }
    useEffect(() => {
      console.log(ingredientsList);
    }, [ingredientsList]);

    function submit(){
      setIngredientsList([...ingredientsList, userInput]);
      setUserInput('');
    }
    
    /**
     * axios call documentation here: https://www.npmjs.com/package/axios
     * TALK TO BACKEND ON HOW TO CONNECT FROM HERE
     */
    function BIGSubmit(){
      axios.get('https://api.github.com/users/ryqndev')
      .then(function (response) {
        console.log(response.data);
        let returnedJSONData = response.data;
        setRecipes([{name: 'cheese', ingredients: 'cheese'}, {name: 'eggs', ingredients: 'eggs'}]);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    

    const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};

    return (
      <div>
        <div style={{padding:"20px 0"}}>
          <input 
            style={BarStyling}
            key="random1"
            placeholder={"input ingredient"}
            value={userInput}
            onChange={e => setUserInput(e.target.value)}
          />
        <button style={{margin: "10px"}}onClick={submit}>Add Item</button>
        <button onClick={BIGSubmit}>Submit List</button>
        </div>
        
        {/* {ingredientsList.map(ingredient => {
          return (<h1>{ingredient}</h1>)
        })} */}
        {ingredientsList.map(ingredient => {
          return <DisplayIngredients ingredient={ingredient}/>;
        })}

        {/* {JSON.stringify(recipes)} */}
      </div>


    );

}

export default SearchPage;