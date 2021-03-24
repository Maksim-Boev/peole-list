import * as TodoActionCreator from "./todo";
import * as UserActionCreator from "./user";

export default {
  ...TodoActionCreator,
  ...UserActionCreator,
};
