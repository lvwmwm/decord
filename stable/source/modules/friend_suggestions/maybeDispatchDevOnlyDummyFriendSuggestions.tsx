// Module ID: 7081
// Function ID: 7082
// Name: maybeDispatchDevOnlyDummyFriendSuggestions
// Dependencies: [1378, 2]
// Exports: default

// Module 7081 (maybeDispatchDevOnlyDummyFriendSuggestions)
import UserStore from "UserStore" /* 1378 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/friend_suggestions/maybeDispatchDevOnlyDummyFriendSuggestions.tsx");

export default function maybeDispatchDevOnlyDummyFriendSuggestions() {
  let MAX_VALUE = arg0;
  if (arg0 === undefined) {
    const _Number = Number;
    MAX_VALUE = Number.MAX_VALUE;
  }
  const bound = Math.min(Object.values(UserStore.getUsers()).length, MAX_VALUE);
};
