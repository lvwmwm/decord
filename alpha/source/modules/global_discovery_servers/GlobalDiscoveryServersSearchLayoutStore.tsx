// Module ID: 15846
// Function ID: 15847
// Name: GlobalDiscoveryServersSearchLayoutStore
// Dependencies: [15845, 15847, 504, 572, 2]

// Module 15846 (GlobalDiscoveryServersSearchLayoutStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import GlobalDiscoveryServersSearchCountsStore from "GlobalDiscoveryServersSearchCountsStore" /* 15845 */;
import GlobalDiscoveryServersSearchResultsStore from "GlobalDiscoveryServersSearchResultsStore" /* 15847 */;
import size from "module_2" /* 2 */;

function reset() {
  counts = [];
}
let counts = [];
const Store = get_initializedDefault.Store;
class GlobalDiscoveryServersSearchLayoutStore extends Store {
  initialize() {
    this.waitFor(GlobalDiscoveryServersSearchCountsStore, GlobalDiscoveryServersSearchResultsStore);
  }
  getVisibleTabs() {
    return counts;
  }
}
const prototype = GlobalDiscoveryServersSearchLayoutStore.prototype;
GlobalDiscoveryServersSearchLayoutStore.displayName = "GlobalDiscoveryServersSearchLayoutStore";
const obj = {
  CONNECTION_OPEN: reset,
  GLOBAL_DISCOVERY_SERVERS_SEARCH_LAYOUT_RESET: reset,
  GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_SUCCESS: function handleGlobalDiscoveryServersSearchCountSuccess(query) {
    counts = GlobalDiscoveryServersSearchCountsStore.getCounts(query.query);
    if (null == counts) {
      return false;
    }
  }
};
const globalDiscoveryServersSearchLayoutStore = new GlobalDiscoveryServersSearchLayoutStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/global_discovery_servers/GlobalDiscoveryServersSearchLayoutStore.tsx");

export default globalDiscoveryServersSearchLayoutStore;
