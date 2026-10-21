// Module ID: 10674
// Function ID: 10675
// Name: ConjureSettingsStore
// Dependencies: [504, 584, 2]

// Module 10674 (ConjureSettingsStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

const map = new Map();
let closure_1 = [];
const Store = get_initializedDefault.Store;
class ConjureSettingsStore extends Store {
  getSettings(arg0) {
    let value = map.get(arg0);
    if (value == null) {
      value = null;
    }
    return value;
  }
  getDeclaredConnections(projectId) {
    const value = map.get(projectId);
    let connections;
    if (value != null) {
      connections = value.connections;
    }
    if (connections == null) {
      connections = closure_1;
    }
    return connections;
  }
}
const prototype = ConjureSettingsStore.prototype;
const obj = {
  CONJURE_SETTINGS_SET: function handleSettingsSet(projectId) {
    const result = map.set(projectId.projectId, projectId.settings);
  }
};
const conjureSettingsStore = new ConjureSettingsStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/conjure/settings/ConjureSettingsStore.tsx");

export default conjureSettingsStore;
