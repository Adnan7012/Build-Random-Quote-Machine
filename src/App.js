import { useEffect,useState } from 'react';
import './App.css';


function App() {

  const [info , setInfo] = useState({})

useEffect(()=>{
  getQuote()
},[]);

const getQuote = ()=>{
  fetch("https://api.quotable.io/random")
  .then((response)=>{
    return response.json();
  })
  .then((data)=>{
    setInfo({
      text: data.content,
      author: data.author
    })
  });
};


  return (
    <div className="App">
      <div id="quote-box">
        <p id="text">{info.text}</p>
        <p id="author">{info.author}</p>
        <button id="new-quote" onClick={getQuote}>New Quote</button>
        <a href={'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text='+info } id="tweet-quote">Post To Twitter</a>
      </div>
    </div>
  );
}

export default App;
