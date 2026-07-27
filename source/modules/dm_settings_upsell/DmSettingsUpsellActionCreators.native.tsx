// Module ID: 16086
// Function ID: 124474
// Dependencies: [16087, 587, 4099, 16088, 1935, 16089, 2]

// Module 16086
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
        let obj = require(16089) /* trackEvent */;
        obj.trackEvent(require(16089) /* trackEvent */.DmUpsellActionTypes.SUPPRESSED_BY_COOLDOWN, guildId);
      }
    }
    obj = { guildId };
    importDefault(4099).openLazy(require(1935) /* maybeLoadBundle */(16088, dependencyMap.paths), "dm_settings_upsell_modal", obj);
    const Storage2 = require(587) /* Storage */.Storage;
    const result = Storage2.set(closure_3, timestamp);
  }
};
