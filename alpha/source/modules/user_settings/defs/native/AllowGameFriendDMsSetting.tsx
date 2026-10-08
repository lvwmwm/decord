// Module ID: 16092
// Function ID: 16093
// Name: AllowGameFriendDMsSetting
// Dependencies: [7966, 11262, 1126, 2040, 16093, 2]

// Module 16092 (AllowGameFriendDMsSetting)
import intl2 from "intl" /* 1126 */;
import UserSettings from "UserSettings" /* 2040 */;
import SettingsConstants from "SettingsConstants" /* 7966 */;
import useIsAllowGameFriendDMsSettingVisible from "useIsAllowGameFriendDMsSettingVisible" /* 16093 */;
import SettingBuilders from "SettingBuilders" /* 11262 */;
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
