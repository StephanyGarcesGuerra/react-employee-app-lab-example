
import './App.css';
import HomePage from './Components/HomePage';

const styles ={
  header:{
    textAlign: "center"
  }
}
function App() {
  return (
    <div className="Employee App">
      <h1 style = {styles.header}> Employee Application</h1>
      
      <HomePage />
    </div>
  );
}

export default App;
