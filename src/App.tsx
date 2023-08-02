import React from "react";
import { useState } from "react";
import UseRef from "./assets/UseRef";

export interface Person {
  name: string;
  age: number;
  id?: number;
}

function App() {
  const [count, setCount] = useState(0);

  const [people, setPeople] = useState<Person[]>([
    { name: "John", age: 20 },
    { name: "Jane", age: 30 },
  ]);

  React.useEffect(() => {
    const newArray = people.map((people) => {
      setCount(count + 1);
      return { ...people, id: count };
    });
    setPeople(newArray);
  }, []);

  return (
    <>
      {/*       
      <h1>People</h1>
      {people.map((person) => (
        <div key={person.id}>
          <h3>{person.name}</h3>
          <h3>{person.age}</h3>
          <h3>{person.id}</h3>
        </div>
      ))}
       */}
      <UseRef />
    </>
  );
}

export default App;
