// Module ID: 17787
// Function ID: 17788
// Name: TextAndMediaSyncSetting
// Dependencies: [1193, 8503, 504, 11685, 1113, 6064, 2]

// Module 17787 (TextAndMediaSyncSetting)
import get_initialized from "get initialized" /* 504 */;
import intl2 from "intl" /* 1113 */;
import UserSettingsActionCreatorsDefault from "UserSettingsActionCreators" /* 6064 */;
import SettingsConstants from "SettingsConstants" /* 8503 */;
import SelectivelySyncedUserSettingsStore from "SelectivelySyncedUserSettingsStore" /* 1193 */;
import SettingBuilders from "SettingBuilders" /* 11685 */;
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
