// Module ID: 17462
// Function ID: 17463
// Name: DmSettingsUpsellActionCreators
// Dependencies: [17463, 510, 4854, 17464, 1987, 17465, 2]

// Module 17462 (DmSettingsUpsellActionCreators)
import Storage3 from "Storage" /* 510 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import DmSettingsUpsellUtils from "DmSettingsUpsellUtils" /* 17465 */;
import DmSettingsUpsellConstants from "DmSettingsUpsellConstants" /* 17463 */;
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
    obj2.openLazy(asyncRequire(17464, tmp2.paths), "dm_settings_upsell_modal", obj);
    const Storage2 = tmp(510).Storage;
    const result = Storage2.set(tmp3, timestamp);
  }
};
let result = size.fileFinishedImporting("modules/dm_settings_upsell/DmSettingsUpsellActionCreators.native.tsx");

export default obj;
