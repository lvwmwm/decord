// Module ID: 16299
// Function ID: 16300
// Dependencies: [16300, 595, 4253, 16301, 1988, 16302, 2]

// Module 16299
import DM_SETTINGS_UPSELL_LAST_SHOWN_KEY from "DM_SETTINGS_UPSELL_LAST_SHOWN_KEY";

let c3;
let c4;
({ DM_SETTINGS_UPSELL_LAST_SHOWN_KEY: c3, DM_SETTINGS_UPSELL_LAST_SHOWN_MAX_TIME_MS: c4 } = DM_SETTINGS_UPSELL_LAST_SHOWN_KEY);
let result = require("ACTION_SHEET_HEIGHT_HALF").fileFinishedImporting("modules/dm_settings_upsell/DmSettingsUpsellActionCreators.native.tsx");

export default {
  openDmSettingsUpsellModal(guildId) {
    const Storage = require(595) /* Storage */.Storage;
    const value = Storage.get(closure_3);
    const timestamp = Date.now();
    if (null != value) {
      if (timestamp - value <= closure_4) {
        tmp(16302).trackEvent(tmp(16302).DmUpsellActionTypes.SUPPRESSED_BY_COOLDOWN, guildId);
        const tmpResult = tmp(16302);
      }
    }
    importDefault(4253).openLazy(require(1988) /* asyncRequireImpl */(16301, dependencyMap.paths), "dm_settings_upsell_modal", { guildId });
    const Storage2 = tmp(595).Storage;
    const result = Storage2.set(closure_3, timestamp);
  }
};
