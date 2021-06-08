import React from 'react';
import Nav from '../components/Nav';

const Login = () => {
    return (
        <div>
            <Nav/>
            <div className='form-content-right'>
      <form  className='form' >
        <h1>
        Nous sommes ravis de vous revoir ! Pour vous connecter, veuillez renseigner vos indentifiant ci-dessous. 
        </h1>
       
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
       
        <button className='form-input-btn' type='submit'>
          Se connecter 
        </button>
        
      </form>
    </div>
        </div>
    );
};

export default Login;