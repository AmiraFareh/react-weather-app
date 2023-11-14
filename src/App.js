import './App.css';
import Weather from './Weather';
export default function App() {
  return (
    <div className="App">
    <div className="container"> 
      
      <Weather defaultCity= {"Auckland"}/>
      <footer>
        This project was created by <a href="https://amira-fareh-portfolio.netlify.app" target='_blank' rel="noreferrer">Amira fareh</a> and is 
      <a href='https://github.com/AmiraFareh/react-weather-app' target='_blank' rel="noreferrer"> open-sourced on GitHub. </a>
      </footer>
      </div>
    </div>
  );
}


