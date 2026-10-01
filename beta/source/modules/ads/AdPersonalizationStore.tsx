// Module ID: 13228
// Function ID: 13229
// Name: AdPersonalizationStore
// Dependencies: [504, 573, 2]

// Module 13228 (AdPersonalizationStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
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
