import React from 'react';
import Nav from '../components/Nav';

const Signup = () => {
    return (
        <div>
            <Nav/>
            <div className='form-content-right'>
      <form  className='form' >
        <h1>
        Bienvenue ! Rejoingnez-nous sans plus attendre en vous inscrivant ci-dessous !
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Pseudo</label>
          <input
            className='form-input'
            type='text'
            name='pseudo'
            placeholder='Choisissez votre pseudo'
           
          />
          
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Courriel</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='renseignez votre email'
           
          />
          
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Mot de Passe</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Entrez votre mot de passe'
            
          />
          
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Confirmation du mot de passe</label>
          <input
            className='form-input'
            type='password'
            name='password2'
            placeholder='Confirmez le mot de passe '
            
          />
          
        </div>
        <button className='form-input-btn' type='submit'>
          S'inscrire
        </button>
        
      </form>
    </div>
        </div>
    );
};

export default Signup;