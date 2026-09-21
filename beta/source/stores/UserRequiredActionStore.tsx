// Module ID: 2039
// Function ID: 2040
// Name: UserRequiredActionStore
// Dependencies: [504, 577, 2]

// Module 2039 (UserRequiredActionStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 577 */;

function handleRequiredAction(requiredAction) {
  requiredAction = requiredAction.requiredAction;
}
let requiredAction = null;
const Store = initializeDefault.Store;
class UserRequiredActionStore extends Store {
}
const prototype = UserRequiredActionStore.prototype;
prototype["hasAction"] = function hasAction() {
  return null != requiredAction;
};
prototype["getAction"] = function getAction() {
  return requiredAction;
};
UserRequiredActionStore.displayName = "UserRequiredActionStore";
const userRequiredActionStore = new UserRequiredActionStore(DispatcherDefault, { CONNECTION_OPEN: handleRequiredAction, USER_REQUIRED_ACTION_UPDATE: handleRequiredAction });
const size = fn(2);
const result = size.fileFinishedImporting("stores/UserRequiredActionStore.tsx");

export default userRequiredActionStore;
