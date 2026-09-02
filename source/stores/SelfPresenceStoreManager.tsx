// Module ID: 17303
// Function ID: 17304
// Name: handleChange
// Dependencies: [5231, 5494, 706, 2]

// Module 17303 (handleChange)
import dispatcherDefault from "dispatcher" /* 706 */;
import initializeDefault from "initialize" /* 5494 */;
import closure_2 from "filterPlayingActivities" /* 5231 */;

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
