export type TodoState = {
  todo: any[];
  loading: boolean;
  error: null | string;
  page: number;
  limit: number;
};

export enum TodoActionTypes {
  FETCH_TODO = "FETCH_TODO",
  FETCH_TODO_SUCCESS = "FETCH_TODO_SUCCESS",
  FETCH_TODO_ERROR = "FETCH_TODO_ERROR",
  SET_TODO_PAGE = "SET_TODO_PAGE",
}

type FetchTodoAction = {
  type: TodoActionTypes.FETCH_TODO;
};

type FetchTodoSuccessAction = {
  type: TodoActionTypes.FETCH_TODO_SUCCESS;
  payload: any[];
};

type FetchTodoErrorAction = {
  type: TodoActionTypes.FETCH_TODO_ERROR;
  payload: string | null;
};

type SetTodoPageAction = {
  type: TodoActionTypes.SET_TODO_PAGE;
  payload: number;
};

export type TodoAction =
  | FetchTodoAction
  | FetchTodoSuccessAction
  | FetchTodoErrorAction
  | SetTodoPageAction;
