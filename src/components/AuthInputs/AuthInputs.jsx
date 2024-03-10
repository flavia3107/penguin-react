import { useState } from 'react';
import cssStyle from './AuthInputs.module.css';

export default function AuthInputs({onSubmit}) {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  const emailValid = enteredEmail.includes('@');
  const passwordValid = enteredPassword.trim().length >= 6;

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);

    if(emailValid && passwordValid){
      onSubmit();
    }
  }

  return (
    <div className={cssStyle.auth_inputs}>
      <div className={cssStyle.controls}>
        <p>
          <label>Email</label>
          <input
            type="email"
            className={submitted && !emailValid ? cssStyle.invalid : undefined}
            onChange={(event) => handleInputChange('email', event.target.value)}
          />
        </p>
        <p>
          <label>Password</label>
          <input
            type="password"
            className={submitted && !passwordValid ? cssStyle.invalid : undefined}
            onChange={(event) =>
              handleInputChange('password', event.target.value)
            }
          />
          <span className={cssStyle.hint}>Password must have 6 characters or more.</span>
        </p>
      </div>
      <div className={cssStyle.actions}>
        <button type="button" className={cssStyle.text_button}>
          Create a new account
        </button>
        <button className={cssStyle.button} onClick={handleLogin}>Sign In</button>
      </div>
    </div>
  );
}
