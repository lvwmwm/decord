// Module ID: 18637
// Function ID: 18638
// Name: SelfPresenceStoreManager
// Dependencies: [6015, 7085, 584, 2]

// Module 18637 (SelfPresenceStoreManager)
import DispatcherDefault from "Dispatcher" /* 584 */;
import SelfPresenceStore from "SelfPresenceStore" /* 6015 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7085 */;
import size from "module_2" /* 2 */;

let map;

function handleChange() {
  const obj = DispatcherDefault;
  const obj2 = { type: "SELF_PRESENCE_STORE_UPDATE", status: SelfPresenceStore.getStatus(), activities: SelfPresenceStore.getActivities(true), hiddenActivities: SelfPresenceStore.getHiddenActivities() };
  obj.dispatch(obj2);
}
class SelfPresenceStoreManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    map = new Map();
    applyArgumentsResult.stores = map.set(SelfPresenceStore, handleChange);
    return applyArgumentsResult;
  }
}
const selfPresenceStoreManager = new SelfPresenceStoreManager();
const result = size.fileFinishedImporting("stores/SelfPresenceStoreManager.tsx");

export default selfPresenceStoreManager;
