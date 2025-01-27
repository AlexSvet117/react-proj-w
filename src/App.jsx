import { useState } from "react";

function App() {

  // Primitive data types
  const [firstName, setFirstName] = useState('John Doe')
  const [count, setCount] = useState(1)
  const [isCoder, setIsCoder] = useState(true)

  // Arrays
  useState()



  return (
    
    <>
    <div className="container text-center my-5">
      <h1>Primitive</h1>
      <p>{firstName}</p>
      <p>{count}</p>
      <p>{isCoder ? "Coder" : "Not Coder"}</p>
      <button className="btn btn-primary"
      onClick={() => {
        setFirstName("John Doe New")
        setCount(count+1)
        setIsCoder(!isCoder)
      }}>Update</button>
    </div>
     
    </>
  );
}

export default App;
