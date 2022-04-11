import MainComponent from "./components/MainComponent";
import Nav from "./components/Nav";
import data from './components/Data'
import Meme from "./components/Meme";

function App() {
  
  const meme = data.map(item =>{
    return <Meme
    key={item.id}
    img={item.url}
    
    
    
    />
  })
  return (
    <div className="App">
      <Nav/>
      <MainComponent/>
      {/* {meme} */}
    </div>
  );
}

export default App;
