import { useEffect, useState } from "react";

export default function App() {
  const [elapsedTime, setElapsedTIme] = useState(0);
  function handleAlert() {
    return alert("keydown was clicked");
  }

  useEffect(() => {
    const intervalid = setInterval(() => {
      setElapsedTIme((prev) => prev + 1);
    }, 1000);

    document.addEventListener("keydown", handleAlert);

    return () => {
      clearInterval(intervalid);
      document.removeEventListener("keydown", handleAlert);
    };
  });

  return (
    <>
      <button onClick={null}>increase {elapsedTime}</button>
      <p>
        {" "}
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit non
        animi ipsa saepe rem architecto recusandae voluptatum. Odit, tenetur
        autem voluptatem est consequuntur vel architecto repellendus quidem,
        velit libero iusto?
      </p>
    </>
  );
}
