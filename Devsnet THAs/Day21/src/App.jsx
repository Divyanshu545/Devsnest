import Card from "./components/Card";
import './style.css';
  
  function App() {
    return(
      <div className="App">
        <h className="head"><tab>Instructions</tab><li style={{fontSize: 24,padding: 6}}>Pass the values and setter of the state
        to the components as props.</li></h>
        <h className="Heading">Calorie Read Only</h>
          <Card /> </div>
    );  
  }

  export default App;
