import * as React from 'react';
import PropTypes from 'prop-types';


class CreateForm extends React.Component {

   constructor() {
       super()

       this.state={
         name: '',
         ingredients: '',
         instructions: '',
         created: false

       };
   }


   handleChangeName(event) {
       this.setState({name: event.target.value});
   }


   handleChangeIngredients(event) {
        this.setState({ingredients: event.target.value});
   }


    handleChangeInstructions(event) {
        this.setState({instructions: event.target.value});
    }


    handleSubmit(event) {
       event.preventDefault();
       const{name, ingredients, instructions} = this.state;
       this.props.onSubmit(name,ingredients, instructions);

       this.restForm();
       this.setState({created: true});
       this.refs.name.focus();

    }


    restForm() {

       this.setState({

           name: '',
           ingredients: '',
           instructions: ''
       });

    }


    render() {

        const {name, ingredients, instructions, created} = this.state;

        return (

            <form onSubmit={this.handleSubmit.bind(this)}>
                {created && <div className='alert alert-success'>Your recipe was created </div>}

                <div className='form-group'>
                    <label htmlFor='name'>Recipe name:</label>
                    <input
                        type='text'
                        className='form-control'
                        id='name'
                        placeholder='Enter recipe name here'
                        value={name}
                        ref='name'
                        onChange={this.handleChangeName.bind(this)}
                    />
                </div>

                <div className='form-group'>
                    <label htmlFor='ingredients'>Ingredients:</label>
                    <textarea
                        className='form-control'
                        rows='5'
                        id='ingredients'
                        placeholder='Enter ingredients here, one per line'
                        value={ingredients}
                        onChange={this.handleChangeIngredients.bind(this)}
                    />
                </div>

                <div className='form-group'>
                    <label htmlFor='instructions'>Instructions:</label>
                    <textarea
                        className='form-control'
                        rows='10'
                        id='instructions'
                        placeholder='Enter instructions here, one step per line'
                        value={instructions}
                        onChange={this.handleChangeInstructions.bind(this)}
                    />
                </div>

                <input className='btn btn-default' type='submit' value='Create'/>

            </form>

        );

    }


}


CreateForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};


export default CreateForm;