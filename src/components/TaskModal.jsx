import React, { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";

const TaskModal = ({ setTasksList, tasksList }) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [inputValues, setInputValues] = useState({
    taskName: "",
    taskDescription: "",
    workHours: 0,
    deadlineDate: null,
    status: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    let todos = tasksList;
    console.log("prev, ", todos);
    todos.push(inputValues);
    console.log("curr:", todos);
    setTasksList(todos);
    toggle();
  };
  return (
    <div>
      <Button color="success" size="lg" onClick={toggle}>
        Add Task
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add Task</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="taskName">Task 1</Label>
              <Input
                type="text"
                name="taskName"
                id="taskName"
                // value={inputValues.taskName}
                placeholder="Define your Task 1 here..."
                onChange={(e) =>
                  setInputValues({ ...inputValues, taskName: e.target.value })
                }
              />
            </FormGroup>
            <FormGroup>
              <Label for="taskDescription">Description</Label>
              <Input
                type="textarea"
                name="text"
                id="taskDescription"
                placeholder="What you have done ? "
                onChange={(e) =>
                  setInputValues({
                    ...inputValues,
                    taskDescription: e.target.value,
                  })
                }
              />
            </FormGroup>

            <FormGroup>
              <Label for="workHours">Work Hours</Label>
              <Input
                type="number"
                name="text"
                id="workHours"
                placeholder="How many hours you took to complete this task ? "
                onChange={(e) =>
                  setInputValues({ ...inputValues, workHours: e.target.value })
                }
              />
            </FormGroup>
            <FormGroup>
              <Label for="deadlineDate">Deadline</Label>
              <Input
                type="date"
                name="date"
                id="deadlineDate"
                placeholder="Deadline"
                onChange={(e) =>
                  setInputValues({
                    ...inputValues,
                    deadlineDate: e.target.value,
                  })
                }
              />
            </FormGroup>
            <FormGroup tag="fieldset">
              <Label for="taskCompleted">Status</Label>
              <div className={"d-flex flex-row"}>
                <FormGroup check className={"m-2"}>
                  <Label check>
                    <Input
                      type="radio"
                      name="status"
                      checked
                      onClick={() =>
                        setInputValues({ ...inputValues, status: "Completed" })
                      }
                    />{" "}
                    Completed
                  </Label>
                </FormGroup>
                <FormGroup check className={"m-2"}>
                  <Label check>
                    <Input
                      type="radio"
                      name="status"
                      onClick={() =>
                        setInputValues({ ...inputValues, status: "Remaining" })
                      }
                    />{" "}
                    Remaining
                  </Label>
                </FormGroup>
              </div>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>{" "}
          <Button color="primary" onClick={handleSubmit}>
            Add Task
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
export default TaskModal;
