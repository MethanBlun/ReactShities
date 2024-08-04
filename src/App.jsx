import Truc from "./trucs";




const arr = [1,2,3,4,5,6,7]
const  [first,second,...rest] = arr
console.log(first,second,rest)

function App() {
  return (
    <Truc title={"lorme"}>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit,
        repellendus. Minus, magnam ad cumque nam eaque quam adipisci quaerat eos
        dolorem. Labore esse adipisci debitis quaerat nobis at temporibus ipsum.
      </p>
      <div>i am a child div</div>
    </Truc>
  );
}

export default App;
