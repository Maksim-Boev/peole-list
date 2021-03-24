import { TodoAction, TodoActionTypes, TodoState } from "../../types/todo";

const initialState: TodoState = {
  todo: [],
  page: 1,
  error: null,
  limit: 10,
  loading: false,
};

const todoReducer = (
  state: TodoState = initialState,
  action: TodoAction
): TodoState => {
  switch (action.type) {
    case TodoActionTypes.FETCH_TODO:
      return {
        ...state,
        loading: true,
      };
    case TodoActionTypes.FETCH_TODO_SUCCESS:
      return { ...state, loading: false, todo: action.payload };
    case TodoActionTypes.FETCH_TODO_ERROR:
      return { ...state, error: action.payload, loading: false };
    case TodoActionTypes.SET_TODO_PAGE:
      return { ...state, page: action.payload };
    default:
      return state;
  }
};
export default todoReducer;
