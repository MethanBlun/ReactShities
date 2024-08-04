export default function Truc(props) {
    console.log(props.children)
  return (
    <>
      <h1>
        <h1> le titre est {props.title} </h1>
      </h1>
      <div>
             {props.children}

      </div>
    </>
  );
}
