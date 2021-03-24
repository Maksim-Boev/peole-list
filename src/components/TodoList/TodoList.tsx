import React, { useEffect } from "react";
import { useTypeSelector } from "../../hooks/useTypeSelector";
import { useAction } from "../../hooks/useAction";
import { NumberPages, Wraper } from "../../StyledComponents";

const TodoList = () => {
  const { loading, page, error, limit, todo } = useTypeSelector(
    (state) => state.todo
  );
  const { fetchTodo, setTodoPage } = useAction();

  const pages = [1, 2, 3, 4, 5];

  useEffect(() => {
    fetchTodo(page, limit);
  }, [page]);

  return (
    <>
      {loading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      {todo.map((todos, index) => (
        <div key={index.toString()}>
          {todos.id} - {todos.title}
        </div>
      ))}
      <Wraper>
        {pages.map((p) => (
          <NumberPages onClick={() => setTodoPage(p)} page={p === page}>
            {p}
          </NumberPages>
        ))}
      </Wraper>
    </>
  );
};

export default TodoList;
