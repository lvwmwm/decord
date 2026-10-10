// Module ID: 16275
// Function ID: 16276
// Name: AllowGameFriendDMsSetting
// Dependencies: [7992, 10663, 1126, 2041, 16276, 2]

// Module 16275 (AllowGameFriendDMsSetting)
import intl2 from "intl" /* 1126 */;
import UserSettings from "UserSettings" /* 2041 */;
import SettingsConstants from "SettingsConstants" /* 7992 */;
import useIsAllowGameFriendDMsSettingVisible from "useIsAllowGameFriendDMsSettingVisible" /* 16276 */;
import SettingBuilders from "SettingBuilders" /* 10663 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.XpBObB);
  },
  parent: MobileUserSettings.CONNECTED_GAMES,
  useValue: UserSettings.AllowGameFriendDmsInDiscord.useSetting,
  onValueChange: UserSettings.AllowGameFriendDmsInDiscord.updateSetting,
  useSearchTerms() {
    const intl = intl2.intl;
    const items = [intl.string(intl2.t.XpBObB)];
    return items;
  },
  usePredicate: useIsAllowGameFriendDMsSettingVisible.useIsAllowGameFriendDMsSettingVisible
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AllowGameFriendDMsSetting.tsx");

export default toggle;
