// Module ID: 10666
// Function ID: 10667
// Name: ConjureSmartContextStore
// Dependencies: [504, 584, 2]

// Module 10666 (ConjureSmartContextStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

const map = new Map();
const Store = get_initializedDefault.Store;
class ConjureSmartContextStore extends Store {
  getSmartContext(arg0) {
    let value = map.get(arg0);
    if (value == null) {
      value = null;
    }
    return value;
  }
}
const prototype = ConjureSmartContextStore.prototype;
let obj = {
  CONJURE_SMART_CONTEXT_SET: function handleSmartContextSet(arg0) {
    let enabled;
    let projectId;
    ({ projectId, enabled } = arg0);
    const obj = map;
    if (map.get(projectId) === enabled) {
      return false;
    } else {
      const result = obj.set(projectId, enabled);
    }
  }
};
const conjureSmartContextStore = new ConjureSmartContextStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/conjure/contexts/ConjureSmartContextStore.tsx");

export default conjureSmartContextStore;
