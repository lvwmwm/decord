// Module ID: 7171
// Function ID: 7172
// Name: maybeDispatchDevOnlyDummyFriendSuggestions
// Dependencies: [1922, 2]
// Exports: default

// Module 7171 (maybeDispatchDevOnlyDummyFriendSuggestions)
import mergeGuildAvatar from "mergeGuildAvatar";

const result = require("set").fileFinishedImporting("modules/friend_suggestions/maybeDispatchDevOnlyDummyFriendSuggestions.tsx");

export default function maybeDispatchDevOnlyDummyFriendSuggestions() {
  let MAX_VALUE = arg0;
  if (arg0 === undefined) {
    const _Number = Number;
    MAX_VALUE = Number.MAX_VALUE;
  }
  const bound = Math.min(Object.values(users.getUsers()).length, MAX_VALUE);
};
