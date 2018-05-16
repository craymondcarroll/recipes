import * as React from 'react';
import PropTypes from 'prop-types';


const RecipeList = ({recipes, onSelectRecipe}) => (   // you can also pass in all props by const RecipeList = (props) =>

   <ul className='list-unstyled'>
       {recipes.map(recipe=> <li key={recipe.id}>

           <a href='#' onClick={onSelectRecipe.bind(null,recipe)}>{recipe.name}</a>

       </li>)}
   </ul>

);


RecipeList.propTypes = {
    recipes: PropTypes.array.isRequired,
    onSelectRecipe: PropTypes.func.isRequired
};


export default RecipeList;