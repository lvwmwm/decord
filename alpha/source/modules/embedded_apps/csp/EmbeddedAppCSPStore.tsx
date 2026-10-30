// Module ID: 10909
// Function ID: 10910
// Name: EmbeddedAppCSPStore
// Dependencies: [504, 572, 2]

// Module 10909 (EmbeddedAppCSPStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
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
