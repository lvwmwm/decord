// Module ID: 7722
// Function ID: 7723
// Name: maybeDispatchDevOnlyDummyFriendSuggestions
// Dependencies: [1392, 2]
// Exports: default

// Module 7722 (maybeDispatchDevOnlyDummyFriendSuggestions)
import UserStore from "UserStore" /* 1392 */;
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
