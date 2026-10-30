// Module ID: 15532
// Function ID: 15533
// Name: AdPersonalizationStore
// Dependencies: [504, 572, 2]

// Module 15532 (AdPersonalizationStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

function reset() {

}
let flag = false;
const Store = get_initializedDefault.Store;
class AdPersonalizationStore extends Store {
  isTogglesDisabled() {
    return flag;
  }
}
const prototype = AdPersonalizationStore.prototype;
const obj = {
  AD_PERSONALIZATION_TOGGLES_RESTRICTED: function handleAdPersonalizationTogglesRestricted(disabled) {
    flag = disabled.disabled;
    if (flag == null) {
      flag = false;
    }
  },
  CONNECTION_OPEN: reset,
  LOGOUT: reset
};
const adPersonalizationStore = new AdPersonalizationStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/ads/AdPersonalizationStore.tsx");

export default adPersonalizationStore;
