const ShowTask = ({ task }) => {
  console.log("task:: ", task);
  return (
    <div>
      <p>Task 1: {task.taskName}</p>
      <p>Description: {task.taskDescription}</p>
      <p>Work hours: {task.workHours}</p>
      <p>Deadline: {task.deadlineDate}</p>
      <p>Status: {task.status}</p>
    </div>
  );
};

export default ShowTask;
