// Module ID: 17936
// Function ID: 17937
// Name: AgeGateStore
// Dependencies: [1098, 504, 572, 2]

// Module 17936 (AgeGateStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import AgeGateConstants from "AgeGateConstants" /* 1098 */;
import size from "module_2" /* 2 */;

const AGE_GATE_REGISTER_TIMEOUT_MS = AgeGateConstants.AGE_GATE_REGISTER_TIMEOUT_MS;
let c0 = false;
const Store = get_initializedDefault.Store;
class AgeGateStore extends Store {
  isUnderageAnonymous() {
    return c0;
  }
}
const prototype = AgeGateStore.prototype;
AgeGateStore.displayName = "AgeGateStore";
const obj = {
  AGE_GATE_PREVENT_UNDERAGE_REGISTRATION: function handleMarkUnderageAnonymous() {
    c0 = true;
    const timestamp = Date.now();
  },
  LOGIN_SUCCESS: function handleLogin() {
    c0 = false;
  }
};
const ageGateStore = new AgeGateStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/age_gate/AgeGateStore.tsx");

export default ageGateStore;
