import { useRef, useState } from "react";

type Props = {};

function UseRef({}: Props) {
  const ref = useRef(0);

  const [initalPhrase, setInitalPhrase] = useState("Ref minore di 10");

  const handleClick = () => {
    ref.current = ref.current + 1;
    if (ref.current > 10) {
      setInitalPhrase("Ref Maggiore di 10");
    }
  };

  return (
    <>
      <div>
        <h1 style={{ textAlign: "center" }}>UseRef</h1>
        <button onClick={handleClick}>Click here to update ref</button>
      </div>
      <h1>{initalPhrase}</h1>
    </>
  );
}

export default UseRef;
