import React, { useState, useEffect } from "react";
import "./searchPage.scss";
import { DisplayIngredients } from "app/components";
import { useHistory } from "react-router-dom";
const axios = require('axios');

function SearchPage({recipe, setRecipe}){
  const history = useHistory();
  // const [list, setList] = useState('');
  const [userInput, setUserInput] = useState('');
  const [ingredientsList, setIngredientsList] = useState([]);
  const [healthList, setHealthList] = useState([]);
  // function handleChange(e){
  //   console.log(e.target.value);
  // }
    useEffect(() => {
      console.log(ingredientsList);
      console.log(healthList);
    }, [ingredientsList, healthList]);

    function submit(){
      setIngredientsList([...ingredientsList, userInput]);
      setUserInput('');
    }
    function submitGlutenFree(){
      setHealthList([...healthList, 'Gluten-free']);
    }
    function submitAlcoholFree(){
      setHealthList([...healthList, 'Alcohol-free']);
    }
    function submitCrustaceanFree(){
      setHealthList([...healthList, 'Crustacean-free']);
    }
    function submitDairyFree(){
      setHealthList([...healthList, 'Dairy-free']);
    }
    function submitEggFree(){
      setHealthList([...healthList, 'Egg-free']);
    }
    function submitFishFree(){
      setHealthList([...healthList, 'Fish-free']);
    }
    function submitKeto(){
      setHealthList([...healthList, 'Keto']);
    }
    function submitKosher(){
      setHealthList([...healthList, 'Kosher']);
    }
    function submitPaleo(){
      setHealthList([...healthList, 'Paleo']);
    }
    function submitVegetarian(){
      setHealthList([...healthList, 'Vegetarian']);
    }
    function submitVegan(){
      setHealthList([...healthList, 'Vegan']);
    }
    function submitPorkFree(){
      setHealthList([...healthList, 'Pork-Free']);
    }
    
    /**
     * axios call documentation here: https://www.npmjs.com/package/axios
     * TALK TO BACKEND ON HOW TO CONNECT FROM HERE
     */
    function BIGSubmit(){
      axios.post('http://9d35c0a6c9b9.ngrok.io/search', {"ingredients": ingredientsList, "healthLabels": healthList})
      .then(function (response) {
        console.log(response.data);
        let returnedJSONData = response.data;
        setRecipe(returnedJSONData);
        history.push('/recipes');
      })
      .catch(function (error) {
        console.log(error);
      });;
      
    }
    

    const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};

    return (
      <div>
        <div style={{padding:"20px 0"}}>
          <h1>ʕ•́ᴥ•̀ʔっ Food Finder cʕ•́ᴥ•̀ʔ</h1>
        </div>

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
        <div style={{padding:"10px 0"}}>
          <h3>~ Health Labels ~</h3>
          <button style={{margin: "10px"}}onClick={submitGlutenFree}>Gluten-free</button>
          <button style={{margin: "10px"}}onClick={submitAlcoholFree}>Alcohol-free</button>
          <button style={{margin: "10px"}}onClick={submitCrustaceanFree}>Crustacean-free</button>
          <button style={{margin: "10px"}}onClick={submitDairyFree}>Dairy-free</button>
          <button style={{margin: "10px"}}onClick={submitEggFree}>Egg-free</button>
          <button style={{margin: "10px"}}onClick={submitFishFree}>Fish-free</button>
          <button style={{margin: "10px"}}onClick={submitKeto}>Keto</button>
          <button style={{margin: "10px"}}onClick={submitKosher}>Kosher</button>
          <button style={{margin: "10px"}}onClick={submitPaleo}>Paleo</button>
          <button style={{margin: "10px"}}onClick={submitPorkFree}>Pork-free</button>
          <button style={{margin: "10px"}}onClick={submitVegan}>Vegan</button>
          <button style={{margin: "10px"}}onClick={submitVegetarian}>Vegetarian</button>
        </div>
        </div>
        <h3>Your Ingredients and/or Dietary Restrictions:</h3>
        {ingredientsList.map(ingredient => {
          return <DisplayIngredients ingredient={ingredient}/>;
        })}

        {healthList.map(ingredient => {
          return <DisplayIngredients ingredient={ingredient}/>;
        })}

        {/* {JSON.stringify(recipes)} */}
      </div>


    );

}

export default SearchPage;