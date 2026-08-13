// Module ID: 13013
// Function ID: 13014
// Name: reset
// Dependencies: [589, 709, 2]

// Module 13013 (reset)
import { Store } from "initialize";

function reset() {
  let c0 = false;
}
let c0 = false;
class AdPersonalizationStore extends Store {
}
AdPersonalizationStore.prototype["isTogglesDisabled"] = function isTogglesDisabled() {
  return c0;
};
const adPersonalizationStore = new AdPersonalizationStore(require("dispatcher"), {
  AD_PERSONALIZATION_TOGGLES_RESTRICTED: function handleAdPersonalizationTogglesRestricted(disabled) {
    let flag = disabled.disabled;
    if (flag == null) {
      flag = false;
    }
  },
  CONNECTION_OPEN: reset,
  LOGOUT: reset
});
const result = require("set").fileFinishedImporting("modules/ads/AdPersonalizationStore.tsx");

export default adPersonalizationStore;
