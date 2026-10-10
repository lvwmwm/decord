// Module ID: 18186
// Function ID: 18187
// Name: SelfPresenceStoreManager
// Dependencies: [5759, 6807, 584, 2]

// Module 18186 (SelfPresenceStoreManager)
import DispatcherDefault from "Dispatcher" /* 584 */;
import SelfPresenceStore from "SelfPresenceStore" /* 5759 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6807 */;
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
