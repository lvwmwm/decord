// Module ID: 16306
// Function ID: 16307
// Name: ActivityShelfStore
// Dependencies: [504, 572, 2]

// Module 16306 (ActivityShelfStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

let closure_0 = { usageByApplicationId: {}, shelfOrder: [] };
const PersistedStore = get_initializedDefault.PersistedStore;
class ActivityShelfStore extends PersistedStore {
  initialize(arg0) {
    let obj = arg0;
    const obj2 = { usageByApplicationId: {}, shelfOrder: [] };
    if (arg0 == null) {
      obj = {};
    }
    const merged = Object.assign(obj);
    closure_0 = obj2;
  }
  getState() {
    return closure_0;
  }
}
const prototype = ActivityShelfStore.prototype;
ActivityShelfStore.displayName = "ActivityShelfStore";
ActivityShelfStore.persistKey = "ActivityShelfStore";
let obj = {
  LOGOUT: function reset() {
    closure_0 = { usageByApplicationId: {}, shelfOrder: [] };
  }
};
const activityShelfStore = new ActivityShelfStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/activities/ActivityShelfStore.tsx");

export default activityShelfStore;
