// Module ID: 6901
// Function ID: 54994
// Name: maybeDispatchDevOnlyDummyFriendSuggestions
// Dependencies: []
// Exports: default

// Module 6901 (maybeDispatchDevOnlyDummyFriendSuggestions)
let closure_0 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[1]).fileFinishedImporting("modules/friend_suggestions/maybeDispatchDevOnlyDummyFriendSuggestions.tsx");

export default function maybeDispatchDevOnlyDummyFriendSuggestions() {
  let MAX_VALUE = arg0;
  if (arg0 === undefined) {
    const _Number = Number;
    MAX_VALUE = Number.MAX_VALUE;
  }
  const bound = Math.min(Object.values(users.getUsers()).length, MAX_VALUE);
};
