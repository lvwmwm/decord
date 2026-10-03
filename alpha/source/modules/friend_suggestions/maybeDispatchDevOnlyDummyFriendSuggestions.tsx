// Module ID: 7148
// Function ID: 7149
// Name: maybeDispatchDevOnlyDummyFriendSuggestions
// Dependencies: [1377, 2]
// Exports: default

// Module 7148 (maybeDispatchDevOnlyDummyFriendSuggestions)
import UserStore from "UserStore" /* 1377 */;
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
