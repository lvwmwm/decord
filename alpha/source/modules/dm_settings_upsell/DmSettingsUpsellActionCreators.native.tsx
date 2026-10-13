// Module ID: 18083
// Function ID: 18084
// Name: DmSettingsUpsellActionCreators
// Dependencies: [18084, 510, 5056, 18085, 2000, 18086, 2]

// Module 18083 (DmSettingsUpsellActionCreators)
import Storage3 from "Storage" /* 510 */;
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import DmSettingsUpsellUtils from "DmSettingsUpsellUtils" /* 18086 */;
import DmSettingsUpsellConstants from "DmSettingsUpsellConstants" /* 18084 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ DM_SETTINGS_UPSELL_LAST_SHOWN_KEY: c3, DM_SETTINGS_UPSELL_LAST_SHOWN_MAX_TIME_MS: closure_4 } = DmSettingsUpsellConstants);
let obj = {
  openDmSettingsUpsellModal(guildId) {
    const Storage = Storage3.Storage;
    const value = Storage.get(_false);
    const timestamp = Date.now();
    const tmp2 = dependencyMap;
    const tmp3 = _false;
    if (null != value) {
      if (timestamp - value <= React3) {
        const tmpResult = DmSettingsUpsellUtils;
        tmpResult.trackEvent(DmSettingsUpsellUtils.DmUpsellActionTypes.SUPPRESSED_BY_COOLDOWN, guildId);
      }
    }
    const obj = { guildId };
    const obj2 = ActionSheetActionCreatorsDefault;
    obj2.openLazy(asyncRequire(18085, tmp2.paths), "dm_settings_upsell_modal", obj);
    const Storage2 = tmp(510).Storage;
    const result = Storage2.set(tmp3, timestamp);
  }
};
let result = size.fileFinishedImporting("modules/dm_settings_upsell/DmSettingsUpsellActionCreators.native.tsx");

export default obj;
