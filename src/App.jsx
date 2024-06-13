import "./App.css";

function App() {

  
  const fruits = [{name:'orange'}
    ,{name:'banane'}
    ,{name:'chewingum'}
    ,{name:'pasteque'}]
  const listItem = fruits.map(fruit =><li key={fruit.name}>{fruit.name}</li>)
  return  <>{listItem}
  hekk
  </>;
}

export default App;
