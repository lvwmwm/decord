// Module ID: 13031
// Function ID: 13032
// Name: reset
// Dependencies: [13030, 13032, 589, 709, 2]

// Module 13031 (reset)
import map from "map";
import closure_1 from "map";
import { Store } from "initialize";

function reset() {
  let closure_2 = [];
}
let closure_2 = [];
class GlobalDiscoveryServersSearchLayoutStore extends Store {
}
const prototype = GlobalDiscoveryServersSearchLayoutStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(map, closure_1);
};
prototype["getVisibleTabs"] = function getVisibleTabs() {
  return closure_2;
};
GlobalDiscoveryServersSearchLayoutStore.displayName = "GlobalDiscoveryServersSearchLayoutStore";
const globalDiscoveryServersSearchLayoutStore = new GlobalDiscoveryServersSearchLayoutStore(require("dispatcher"), {
  CONNECTION_OPEN: reset,
  GLOBAL_DISCOVERY_SERVERS_SEARCH_LAYOUT_RESET: reset,
  GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_SUCCESS: function handleGlobalDiscoveryServersSearchCountSuccess(query) {
    counts = counts.getCounts(query.query);
    if (null == counts) {
      return false;
    }
  }
});
const result = require("initialize").fileFinishedImporting("modules/global_discovery_servers/GlobalDiscoveryServersSearchLayoutStore.tsx");

export default globalDiscoveryServersSearchLayoutStore;
