import React from 'react';

import RecipeDetail from './RecipeDetail';
import RecipeList from './RecipeList';
import CreateEditForm from './CreateEditForm';
import SearchBox from "./SearchBox";


//--- Local Storage Key
const LOCAL_STORAGE_KEY = 'recipes';


class App extends React.Component {

    constructor() {
        super();


        //--- Get Recipes from Local Storage
        const localStorageRecipes = window.localStorage.getItem(LOCAL_STORAGE_KEY);


        this.state= {
            showCreate: false,
            recipes: localStorageRecipes ? JSON.parse(localStorageRecipes) : [],
            selectedRecipe: null,
            search: ''
        };

    }



    showCreate() {

        this.setState({
            showCreate:true,
            selectedRecipe:null
        });
    }


    handleCreateRecipe(name,ingredients, instructions) {

        /*
        const newRecipes = this.state.recipes.concat({
            name: name,
            ingredients: ingredients,
            instructions: instructions
        });
        */

        //-- Below is a shortcut from above
        // javascript will assume we want to
        // populate the key with the variable of
        // the same name
        const newRecipes = this.state.recipes.concat({
            id: new Date().getTime(),
            name,
            ingredients,
            instructions
        });




        //---- Copy new Recipes Array into recipes that is saved in state
        this.updateRecipes(newRecipes);



        // Save new Recipes in Local Storage as Json string
        window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newRecipes));



    }



    handleSelectRecipe(recipe) {

        this.setState({
           selectedRecipe: recipe,
           showCreate: false

        });

    }


    handleDeleteRecipe(recipeToDelete) {

        const newRecipes = this.state.recipes.filter(recipe => recipe !== recipeToDelete);

        //---- Copy new Recipes Array into recipes that is saved in state
        this.updateRecipes(newRecipes);

        this.setState({
            selectedRecipe:null
        });


    }



    updateRecipes(newRecipes) {

        this.setState({
           recipes: newRecipes
        });

    }



    handleSearchChange(newSearch) {

           this.setState({

               search: newSearch
           });

    }

    handleEditRecipe() {

        this.setState({
            showCreate: true

        });

    }


    handleRecipeEdited(name, ingredients, instructions) {

     const {recipes, selectedRecipe} = this.state;

     const editedRecipe = Object.assign({}, selectedRecipe, {
        name,
        ingredients,
        instructions

     });

     const newRecipes = recipes.map(recipe =>
       recipe == selectedRecipe ? editedRecipe : recipe

     );

     this.updateRecipes(newRecipes);
     this.handleSelectRecipe(editedRecipe);


    }




    render() {

        const filteredRecipes = this.state.recipes.filter(recipe=> recipe.name.toLowerCase().indexOf(this.state.search.toLowerCase()) > -1)
            .sort((a,b) => a.name > b.name);
        console.log(filteredRecipes);
        return(

        <div className='container'>
            <h1> Recipe Database </h1>

            <div className='row'>

                <div className='col-xs-4'>

                    <button type='button' className='btn btn-primary' style={{ width: '100%',  marginBottom: '5px'}} onClick={this.showCreate.bind(this)} >
                         Create new recipe
                    </button>


                   <SearchBox onChange={this.handleSearchChange.bind(this)}/>


                    <RecipeList
                        recipes={filteredRecipes}
                        onSelectRecipe={this.handleSelectRecipe.bind(this)}
                    />

                </div>


                <div className='col-xs-8'>
                    {this.state.showCreate
                        ? <CreateEditForm
                            onCreate={this.handleCreateRecipe.bind(this)}
                            onEdit={this.handleRecipeEdited.bind(this)}
                            recipe={this.state.selectedRecipe}

                        />
                        : <RecipeDetail
                            recipe={this.state.selectedRecipe}
                            onDelete={this.handleDeleteRecipe.bind(this)}
                            onEdit={this.handleEditRecipe.bind(this)}
                        /> }
                </div>

            </div>

        </div>

    );
  }

}

export default App;