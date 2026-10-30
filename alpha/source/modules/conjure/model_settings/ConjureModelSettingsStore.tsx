// Module ID: 10845
// Function ID: 10846
// Name: ConjureModelSettingsStore
// Dependencies: [504, 572, 2]

// Module 10845 (ConjureModelSettingsStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

const map = new Map();
const Store = get_initializedDefault.Store;
class ConjureModelSettingsStore extends Store {
  getModelSettings(projectId) {
    let value = map.get(projectId);
    if (value == null) {
      value = null;
    }
    return value;
  }
}
const prototype = ConjureModelSettingsStore.prototype;
let obj = {
  CONJURE_MODEL_SETTINGS_SET: function handleModelSettingsSet(settings) {
    const obj = { settings: settings.settings, tierSettings: settings.tierSettings, tiers: settings.tiers, choices: settings.choices };
    const result = map.set(settings.projectId, obj);
  }
};
const conjureModelSettingsStore = new ConjureModelSettingsStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/conjure/model_settings/ConjureModelSettingsStore.tsx");

export default conjureModelSettingsStore;
