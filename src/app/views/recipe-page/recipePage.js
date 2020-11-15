import React, { useState, useEffect } from "react";
import "./recipePage.scss";
import { DisplayIngredients } from "app/components";

function RecipePage({recipe}){
    
    function renderIngredients(){
        const ingredients = Object.keys(recipe);
        return ingredients.map(ingredient => {
            const recipeName = recipe[ingredient];
            return <DisplayIngredients ingredient={recipeName}/>;
        })
    }
    return(
        <div>
            <h1>~ You Should Make ~</h1>
            {renderIngredients()}
        </div>

    )
}

export default RecipePage;