// Module ID: 8769
// Function ID: 8770
// Name: maybeDispatchDevOnlyDummyFriendSuggestions
// Dependencies: [1388, 2]
// Exports: default

// Module 8769 (maybeDispatchDevOnlyDummyFriendSuggestions)
import UserStore from "UserStore" /* 1388 */;
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
