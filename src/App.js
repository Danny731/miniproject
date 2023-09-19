import React from 'react';
import {useState} from 'react';
import {useRef} from 'react';
import './App.css';
//import './App.html';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'; 

import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'

firebase.initializeApp({
  apiKey: "AIzaSyB1SbTOYZqVi8nTpaTSHhepWP9gRXPnhXc",
  authDomain: "miniproject-ec463-b3f4c.firebaseapp.com",
  projectId: "miniproject-ec463-b3f4c",
  storageBucket: "miniproject-ec463-b3f4c.appspot.com",
  messagingSenderId: "42804002971",
  appId: "1:42804002971:web:9dc1a9655c60ed960e463e",
  measurementId: "G-PVP1PLJVZC"
})

const auth = firebase.auth();
const firestore = firebase.firestore();
//let myImage = document.getElementById("Logo");
//myImage.setAttribute("src", "Pic1.jpg")
function App() {
  const [user] = useAuthState(auth);
  return (
    //document.getElementById("Logo").setAttribute("src", "Pic1.jpg");
    <div className="App">
      <header>

      <h1 style={{color: 'azure'}}> Welcome to the AllChat</h1>
      <h7 style={{color: 'azure'}}> Interative chat with multiple users</h7>
      <h1 class = "logo">🕊️</h1>

      </header>
      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  );
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
      <button onClick={signInWithGoogle} class = "SignIn">Sign in with Google</button>
  )
}

function SignOut() {
  return auth.currentUser && (
    <button onClick={() => auth.signOut()}>Sign Out</button>
  )
}

function ChatRoom() {
  const slide = useRef();
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);

  const [messages] = useCollectionData(query, { idField: 'id' });

  const [formValue, setFormValue] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    })

    setFormValue('');
    slide.current.scrollIntoView({behavior: 'smooth'});
  }

  return (
    <>
      <div>
        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
        <div ref = {slide}></div>
      </div>
      <button onClick={() => auth.signOut()} class = "SignOut">Sign Out</button>
      <form onSubmit={sendMessage}>
      <input value={formValue} onChange={(e) => setFormValue(e.target.value)}/>
      <button type="submit">Send</button>
      <p class = "SideChat">ChatRoom</p>

    </form>
    
    </>
  )
}

function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (<>
    <div className={`message ${messageClass}`}>
      <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
      <p>{text}</p>
    </div>
  </>)
}







export default App;
