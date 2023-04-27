import './App.css';
import { Card } from './components/Card';
import { NavBar } from './components/NavBar';
import data from './data'

function App() {
  
  return (
		<div className='App'>
			<NavBar />
			<Card data={data} />
		</div>
  );
}

export default App;
