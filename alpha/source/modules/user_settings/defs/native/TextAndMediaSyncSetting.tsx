// Module ID: 17393
// Function ID: 17394
// Name: TextAndMediaSyncSetting
// Dependencies: [1194, 8424, 504, 11505, 1114, 5913, 2]

// Module 17393 (TextAndMediaSyncSetting)
import get_initialized from "get initialized" /* 504 */;
import intl2 from "intl" /* 1114 */;
import UserSettingsActionCreatorsDefault from "UserSettingsActionCreators" /* 5913 */;
import SettingsConstants from "SettingsConstants" /* 8424 */;
import SelectivelySyncedUserSettingsStore from "SelectivelySyncedUserSettingsStore" /* 1194 */;
import SettingBuilders from "SettingBuilders" /* 11505 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t["3340dY"]);
  },
  parent: MobileUserSettings.CHAT,
  useValue: function useTextAndMediaSyncSettingValue() {
    const items = [SelectivelySyncedUserSettingsStore];
    const obj = get_initialized;
    return obj.useStateFromStores(items, () => SelectivelySyncedUserSettingsStore.shouldSync("text"));
  },
  onValueChange: UserSettingsActionCreatorsDefault.setShouldSyncTextSettings
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/TextAndMediaSyncSetting.tsx");

export default toggle;
