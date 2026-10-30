// Module ID: 19551
// Function ID: 19552
// Name: SelfPresenceStoreManager
// Dependencies: [6564, 7281, 572, 2]

// Module 19551 (SelfPresenceStoreManager)
import DispatcherDefault from "Dispatcher" /* 572 */;
import SelfPresenceStore from "SelfPresenceStore" /* 6564 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7281 */;
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
