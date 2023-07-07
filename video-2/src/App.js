import './App.css';
import Card from './components/Card';


function App() {
  return (
    <Card
      title="React Component"
      description="This is a sample card component."
    >
      <p>This is some additional information about the card.</p>
      <button>Click Me</button>
    </Card>
  );
}

export default App;
