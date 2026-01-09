export default function TodoInput(props) {
  const { handleAddInput, setTodoValue, todoValue } = props;

  return (
    <header>
      <input
        value={todoValue}
        onChange={(e) => {
          setTodoValue(e.target.value);
        }}
        type="text"
        placeholder="Enter Todo....."
      />
      <button
        onClick={() => {
          handleAddInput(todoValue);
          setTodoValue("");
        }}
      >
        Add
      </button>
    </header>
  );
}
