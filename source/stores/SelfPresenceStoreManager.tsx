// Module ID: 17403
// Function ID: 17404
// Name: handleChange
// Dependencies: [5240, 7058, 706, 2]

// Module 17403 (handleChange)
import dispatcherDefault from "dispatcher" /* 706 */;
import initializeDefault from "initialize" /* 7058 */;
import closure_2 from "filterPlayingActivities" /* 5240 */;

function handleChange() {
  let obj = dispatcherDefault;
  obj = { type: "SELF_PRESENCE_STORE_UPDATE", status: store.getStatus(), activities: store.getActivities(true), hiddenActivities: store.getHiddenActivities() };
  obj.dispatch(obj);
}
initializeDefault;
let prototype = function SelfPresenceStoreManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.stores = new Map().set(closure_2, handleChange);
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
prototype = new prototype();
const result = require("set").fileFinishedImporting("stores/SelfPresenceStoreManager.tsx");

export default prototype;
