// Module ID: 17466
// Function ID: 17467
// Name: TextAndMediaSyncSetting
// Dependencies: [1193, 8432, 504, 11540, 1113, 5932, 2]

// Module 17466 (TextAndMediaSyncSetting)
import get_initialized from "get initialized" /* 504 */;
import intl2 from "intl" /* 1113 */;
import UserSettingsActionCreatorsDefault from "UserSettingsActionCreators" /* 5932 */;
import SettingsConstants from "SettingsConstants" /* 8432 */;
import SelectivelySyncedUserSettingsStore from "SelectivelySyncedUserSettingsStore" /* 1193 */;
import SettingBuilders from "SettingBuilders" /* 11540 */;
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
