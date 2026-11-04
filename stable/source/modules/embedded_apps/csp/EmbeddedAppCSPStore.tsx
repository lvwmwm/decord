// Module ID: 10805
// Function ID: 10806
// Name: EmbeddedAppCSPStore
// Dependencies: [504, 584, 2]

// Module 10805 (EmbeddedAppCSPStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

const map = new Map();
const Store = get_initializedDefault.Store;
class EmbeddedAppCSPStore extends Store {
  getPolicy(applicationRouterOrigin) {
    let value = map.get(applicationRouterOrigin);
    if (value == null) {
      value = null;
    }
    return value;
  }
}
const prototype = EmbeddedAppCSPStore.prototype;
const obj = {
  EMBEDDED_APP_CSP_FETCH_SUCCESS: function handleFetchSuccess(routerOrigin) {
    const result = map.set(routerOrigin.routerOrigin, routerOrigin.policy);
  }
};
const embeddedAppCSPStore = new EmbeddedAppCSPStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/embedded_apps/csp/EmbeddedAppCSPStore.tsx");

export default embeddedAppCSPStore;
