// Module ID: 18523
// Function ID: 18524
// Name: SelfPresenceStoreManager
// Dependencies: [5975, 7028, 584, 2]

// Module 18523 (SelfPresenceStoreManager)
import DispatcherDefault from "Dispatcher" /* 584 */;
import SelfPresenceStore from "SelfPresenceStore" /* 5975 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7028 */;
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
