// Module ID: 17795
// Function ID: 17796
// Name: DmSettingsUpsellActionCreators
// Dependencies: [17796, 510, 5054, 17797, 1999, 17798, 2]

// Module 17795 (DmSettingsUpsellActionCreators)
import Storage3 from "Storage" /* 510 */;
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import DmSettingsUpsellUtils from "DmSettingsUpsellUtils" /* 17798 */;
import DmSettingsUpsellConstants from "DmSettingsUpsellConstants" /* 17796 */;
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
    obj2.openLazy(asyncRequire(17797, tmp2.paths), "dm_settings_upsell_modal", obj);
    const Storage2 = tmp(510).Storage;
    const result = Storage2.set(tmp3, timestamp);
  }
};
let result = size.fileFinishedImporting("modules/dm_settings_upsell/DmSettingsUpsellActionCreators.native.tsx");

export default obj;
