// Module ID: 17949
// Function ID: 17950
// Name: DmSettingsUpsellActionCreators
// Dependencies: [17950, 510, 5055, 17951, 2000, 17952, 2]

// Module 17949 (DmSettingsUpsellActionCreators)
import Storage3 from "Storage" /* 510 */;
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import DmSettingsUpsellUtils from "DmSettingsUpsellUtils" /* 17952 */;
import DmSettingsUpsellConstants from "DmSettingsUpsellConstants" /* 17950 */;
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
    obj2.openLazy(asyncRequire(17951, tmp2.paths), "dm_settings_upsell_modal", obj);
    const Storage2 = tmp(510).Storage;
    const result = Storage2.set(tmp3, timestamp);
  }
};
let result = size.fileFinishedImporting("modules/dm_settings_upsell/DmSettingsUpsellActionCreators.native.tsx");

export default obj;
