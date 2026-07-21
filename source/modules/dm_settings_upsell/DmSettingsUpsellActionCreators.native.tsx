// Module ID: 15887
// Function ID: 121677
// Dependencies: []

// Module 15887
const _module = require(dependencyMap[0]);
({ DM_SETTINGS_UPSELL_LAST_SHOWN_KEY: closure_3, DM_SETTINGS_UPSELL_LAST_SHOWN_MAX_TIME_MS: closure_4 } = _module);
const _module1 = require(dependencyMap[6]);
const result = _module1.fileFinishedImporting("modules/dm_settings_upsell/DmSettingsUpsellActionCreators.native.tsx");

export default {
  openDmSettingsUpsellModal(guildId) {
    const Storage = require(dependencyMap[1]).Storage;
    const value = Storage.get(closure_3);
    const timestamp = Date.now();
    if (null != value) {
      if (timestamp - value <= closure_4) {
        let obj = require(dependencyMap[5]);
        obj.trackEvent(require(dependencyMap[5]).DmUpsellActionTypes.SUPPRESSED_BY_COOLDOWN, guildId);
      }
    }
    obj = { guildId };
    importDefault(dependencyMap[2]).openLazy(require(dependencyMap[4])(dependencyMap[3], dependencyMap.paths), "dm_settings_upsell_modal", obj);
    const Storage2 = require(dependencyMap[1]).Storage;
    const result = Storage2.set(closure_3, timestamp);
  }
};
