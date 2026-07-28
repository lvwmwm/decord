// Module ID: 16125
// Function ID: 124630
// Dependencies: [16126, 587, 4133, 16127, 1935, 16128, 2]

// Module 16125
import DM_SETTINGS_UPSELL_LAST_SHOWN_KEY from "DM_SETTINGS_UPSELL_LAST_SHOWN_KEY";

let closure_3;
let closure_4;
({ DM_SETTINGS_UPSELL_LAST_SHOWN_KEY: closure_3, DM_SETTINGS_UPSELL_LAST_SHOWN_MAX_TIME_MS: closure_4 } = DM_SETTINGS_UPSELL_LAST_SHOWN_KEY);
let result = require("showActionSheet").fileFinishedImporting("modules/dm_settings_upsell/DmSettingsUpsellActionCreators.native.tsx");

export default {
  openDmSettingsUpsellModal(guildId) {
    const Storage = require(587) /* Storage */.Storage;
    const value = Storage.get(closure_3);
    const timestamp = Date.now();
    if (null != value) {
      if (timestamp - value <= closure_4) {
        let obj = require(16128) /* trackEvent */;
        obj.trackEvent(require(16128) /* trackEvent */.DmUpsellActionTypes.SUPPRESSED_BY_COOLDOWN, guildId);
      }
    }
    obj = { guildId };
    importDefault(4133).openLazy(require(1935) /* maybeLoadBundle */(16127, dependencyMap.paths), "dm_settings_upsell_modal", obj);
    const Storage2 = require(587) /* Storage */.Storage;
    const result = Storage2.set(closure_3, timestamp);
  }
};
