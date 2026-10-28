// Module ID: 10750
// Function ID: 10751
// Name: ConjureRemixStore
// Dependencies: [504, 584, 2]

// Module 10750 (ConjureRemixStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

const map = new Map();
const map1 = new Map();
const Store = get_initializedDefault.Store;
class ConjureRemixStore extends Store {
  getFailure(arg0) {
    return map.get(arg0);
  }
  getSetupStartedAt(arg0) {
    let value;
    if (null === map.get(arg0)) {
      value = map1.get(arg0);
    }
    return value;
  }
}
const prototype = ConjureRemixStore.prototype;
const obj = {
  CONJURE_REMIX_STATE_SET: function handleRemixStateSet(pending) {
    let failed;
    let flag;
    let projectId;
    ({ projectId, failed } = pending);
    if (pending.pending) {
      const tmp5 = null == failed && null !== map.get(projectId);
      if (tmp5) {
        const _Date = Date;
        const result = map1.set(projectId, Date.now());
      }
      const result1 = map.set(projectId, failed);
      flag = true;
    } else {
      map1.delete(projectId);
      flag = map.delete(projectId);
    }
    return flag;
  }
};
const conjureRemixStore = new ConjureRemixStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/conjure/remix/ConjureRemixStore.tsx");

export default conjureRemixStore;
