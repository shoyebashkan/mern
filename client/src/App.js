import './App.css';
import Header from './component/Header';
import TodoForm from "./component/TodoForm";
import Todos from './component/Todos'
import Demo from './component/Demo'
function App() {
  return (
    <div className="App">
    <Header />
    <TodoForm />
    <Todos/>
    <Demo title={"this is a title"} body={"this is a body"}/>
    </div>
  );
}

export default App;
