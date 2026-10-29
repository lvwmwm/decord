// Module ID: 10827
// Function ID: 10828
// Name: ConjureSpendLimitStore
// Dependencies: [504, 584, 2]

// Module 10827 (ConjureSpendLimitStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

const map = new Map();
const Store = get_initializedDefault.Store;
class ConjureSpendLimitStore extends Store {
  getSpendLimit(arg0) {
    let value = map.get(arg0);
    if (value == null) {
      value = null;
    }
    return value;
  }
}
const prototype = ConjureSpendLimitStore.prototype;
const obj = {
  CONJURE_SPEND_LIMIT_SET: function handleSpendLimitSet(arg0) {
    let projectId;
    let spendLimit;
    ({ projectId, spendLimit } = arg0);
    if (null == spendLimit) {
      return map.delete(projectId);
    } else {
      const result = map.set(projectId, spendLimit);
    }
  }
};
const conjureSpendLimitStore = new ConjureSpendLimitStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/conjure/usage/ConjureSpendLimitStore.tsx");

export default conjureSpendLimitStore;
