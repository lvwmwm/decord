// Module ID: 2037
// Function ID: 2038
// Name: UserRequiredActionStore
// Dependencies: [504, 573, 2]

// Module 2037 (UserRequiredActionStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import size from "module_2" /* 2 */;

function handleRequiredAction(requiredAction) {
  requiredAction = requiredAction.requiredAction;
}
let requiredAction = null;
const Store = get_initializedDefault.Store;
class UserRequiredActionStore extends Store {
  hasAction() {
    return null != requiredAction;
  }
  getAction() {
    return requiredAction;
  }
}
const prototype = UserRequiredActionStore.prototype;
UserRequiredActionStore.displayName = "UserRequiredActionStore";
const obj = { CONNECTION_OPEN: handleRequiredAction, USER_REQUIRED_ACTION_UPDATE: handleRequiredAction };
const userRequiredActionStore = new UserRequiredActionStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("stores/UserRequiredActionStore.tsx");

export default userRequiredActionStore;
