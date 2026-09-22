// Module ID: 7903
// Function ID: 7904
// Name: maybeDispatchDevOnlyDummyFriendSuggestions
// Dependencies: [1372, 2]
// Exports: default

// Module 7903 (maybeDispatchDevOnlyDummyFriendSuggestions)
import UserStore from "UserStore" /* 1372 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/friend_suggestions/maybeDispatchDevOnlyDummyFriendSuggestions.tsx");

export default function maybeDispatchDevOnlyDummyFriendSuggestions() {
  let MAX_VALUE = arg0;
  if (arg0 === undefined) {
    const _Number = Number;
    MAX_VALUE = Number.MAX_VALUE;
  }
  const bound = Math.min(Object.values(UserStore.getUsers()).length, MAX_VALUE);
};
