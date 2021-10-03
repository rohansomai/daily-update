import "./App.css";
import TaskModal from "./components/TaskModal";
import { Container } from "reactstrap";
import ShowTask from "./components/ShowTask";
import { useState } from "react";

function App() {
  const [tasksList, setTasksList] = useState([]);
  return (
    <Container>
      {console.log(">>>", tasksList)}
      <div className={"float-end m-5"}>
        <TaskModal setTasksList={setTasksList} tasksList={tasksList} />
      </div>
      <div className={"show-tasks-container"}>
        {tasksList.map((item) => (
          <ShowTask task={item} />
        ))}
      </div>
    </Container>
  );
}

export default App;
