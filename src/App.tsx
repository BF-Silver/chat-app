import React from 'react';
import './App.scss';
import Chat  from './components/chat/Chat';
import Sidebar from './components/sidebar/Sidebar';
import Login from './components/login/Login';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { auth } from "./firebase";
import { login } from './features/userSlice';
import { useEffect } from 'react'; // useEffect を React からインポート
import { logout } from './features/userSlice'; // logout をインポート
import { ErrorBoundary } from 'react-error-boundary';
import {ErrorFallBack} from "./utils/ErrorFallBack";


function App() {

  const user = useAppSelector((state) => state.user.user);
  //const user = null;

  const dispatch = useAppDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((loginUser) =>{
      console.log(loginUser);
      if(loginUser){
        dispatch(login
          ({
            uid: loginUser.uid,
            photo: loginUser.photoURL,
            email: loginUser.email,
            displayName: loginUser.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    })

  }, [dispatch]);
  return (
    <div className="App">
      {user ? (
        <>
        <ErrorBoundary FallbackComponent={ErrorFallBack}>
      <Sidebar />
      </ErrorBoundary>
      <Chat />
      </>
        ) : (
          <><Login /></>
      )}
    </div>
  );
}

export default App;
