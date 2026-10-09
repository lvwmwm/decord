// Module ID: 7346
// Function ID: 7347
// Name: maybeDispatchDevOnlyDummyFriendSuggestions
// Dependencies: [1390, 2]
// Exports: default

// Module 7346 (maybeDispatchDevOnlyDummyFriendSuggestions)
import UserStore from "UserStore" /* 1390 */;
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
