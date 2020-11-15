import React, { useState, useEffect } from "react";
import "./recipePage.scss";
import { DisplayIngredients } from "app/components";

function RecipePage({recipe}){
    return(
        <div>
            <h1>~ Possible Recipes ~</h1>
            {recipe.map(ingredient => {
            return <DisplayIngredients ingredient={ingredient}/>;
            })}
        </div>

    )
}

export default RecipePage;