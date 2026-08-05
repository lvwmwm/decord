// Module ID: 16417
// Function ID: 16418
// Name: handleChange
// Dependencies: [4947, 5214, 709, 2]

// Module 16417 (handleChange)
import filterPlayingActivities from "filterPlayingActivities";
import "initialize";

function handleChange() {
  let obj = importDefault(709);
  obj = { type: "SELF_PRESENCE_STORE_UPDATE", status: store.getStatus(), activities: store.getActivities(true), hiddenActivities: store.getHiddenActivities() };
  obj.dispatch(obj);
}
let prototype = function SelfPresenceStoreManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.stores = new Map().set(filterPlayingActivities, handleChange);
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
prototype = new prototype();
const result = require("dispatcher").fileFinishedImporting("stores/SelfPresenceStoreManager.tsx");

export default prototype;
