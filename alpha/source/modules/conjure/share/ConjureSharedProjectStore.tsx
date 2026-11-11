// Module ID: 12350
// Function ID: 12351
// Name: ConjureSharedProjectStore
// Dependencies: [504, 12351, 572, 2]

// Module 12350 (ConjureSharedProjectStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import conjureProjectLink from "conjureProjectLink" /* 12351 */;
import size from "module_2" /* 2 */;

const map = new Map();
const Store = get_initializedDefault.Store;
class ConjureSharedProjectStore extends Store {
  getStatus(arg0) {
    let tmp = arg1;
    if (arg1 === undefined) {
      tmp = null;
    }
    const get = map.get;
    const obj = conjureProjectLink;
    let value = get(obj.conjureProjectLinkCode(arg0, tmp));
    if (value == null) {
      value = null;
    }
    return value;
  }
}
const prototype = ConjureSharedProjectStore.prototype;
let obj = {
  CONJURE_SHARED_PROJECT_STATUS: function handleStatus(arg0) {
    let linkCode;
    let status;
    ({ linkCode, status } = arg0);
    if (null != status) {
      const result = map.set(linkCode, status);
    } else if (!map.delete(linkCode)) {
      return false;
    }
  },
  LOGOUT: function handleLogout() {
    const obj = map;
    if (0 === map.size) {
      return false;
    } else {
      obj.clear();
    }
  }
};
const conjureSharedProjectStore = new ConjureSharedProjectStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/conjure/share/ConjureSharedProjectStore.tsx");

export default conjureSharedProjectStore;
