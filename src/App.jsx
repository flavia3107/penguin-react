import { useState } from 'react';
import AuthInputs from './components/AuthInputs.jsx';
import Penguin from './components/Penguin/Penguin.jsx';

export default function App() {
  const [loggedIn, setLogIn] = useState(false);

  function handleSubmit(){
    setLogIn(true);
  }

  return (
    <>
      <main>
        {!loggedIn && <AuthInputs onSubmit={()=> handleSubmit()}/>}
        {loggedIn &&  <Penguin/>}
      </main>
    </>
  );
}
