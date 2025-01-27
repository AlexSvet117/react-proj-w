import { useState, useEffect} from "react";

function App() {

  // Primitive data types
  const [firstName, setFirstName] = useState('John Doe')
  const [count, setCount] = useState(1)
  const [isCoder, setIsCoder] = useState(true)

  // Arrays
  const [toDoes, setToDoes] = useState(["Get up", "Eat Breakfast"])


  // Get Data from Backend
  // https://jsonplaceholder.typicode.com/posts
  // const [posts, setPosts] = useState(null)

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //   .then(response => response.json())
  //   .then(json => setPosts(json))

  // })

  // Input
  const [todoText, setTodoText] = useState('')

  const addItem = () => {
    const newToDoes = [...toDoes, todoText]
    setToDoes(newToDoes)
    setTodoText('')
  }
  



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

    <div className="container text-center my-5 col-md-4">
      <h2>Array</h2>
      {toDoes && (toDoes.map(toDo => {
        return (
          <p>{toDo.toUpperCase()}</p>
        )
      }))}
      <input type="text" className="form-control border border-secondary my-4" 
      value={todoText} onChange={e => setTodoText(e.target.value)}/>
      
      <button className="btn btn-primary"
      onClick={addItem}>Add item</button>

      {/* {posts && (
        posts.map(post => {
          return (
            <p>{post.title}</p>
          )
        })
      )} */}
    </div>

    
     
    </>
  );
}

export default App;
