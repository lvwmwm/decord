// Module ID: 10719
// Function ID: 10720
// Name: ConjureSettingsStore
// Dependencies: [504, 584, 2]

// Module 10719 (ConjureSettingsStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

const map = new Map();
const map1 = new Map();
let closure_2 = [];
const Store = get_initializedDefault.Store;
class ConjureSettingsStore extends Store {
  getSettings(arg0) {
    let value = map.get(arg0);
    if (value == null) {
      value = null;
    }
    return value;
  }
  getLoadState(arg0) {
    let value = map1.get(arg0);
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
      connections = closure_2;
    }
    return connections;
  }
}
const prototype = ConjureSettingsStore.prototype;
let obj = {
  CONJURE_SETTINGS_SET: function handleSettingsSet(projectId) {
    projectId = projectId.projectId;
    const result = map.set(projectId, projectId.settings);
    const result1 = map1.set(projectId, "loaded");
  },
  CONJURE_SETTINGS_LOAD_STATE_SET: function handleLoadStateSet(arg0) {
    let projectId;
    let state;
    ({ projectId, state } = arg0);
    const value = map1.get(projectId);
    const obj = map1;
    if (value !== state) {
      const result = obj.set(projectId, state);
    }
    return false;
  }
};
const conjureSettingsStore = new ConjureSettingsStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/conjure/settings/ConjureSettingsStore.tsx");

export default conjureSettingsStore;
