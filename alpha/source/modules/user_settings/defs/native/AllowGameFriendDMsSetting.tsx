// Module ID: 17430
// Function ID: 17431
// Name: AllowGameFriendDMsSetting
// Dependencies: [8593, 11875, 1113, 4617, 17431, 2]

// Module 17430 (AllowGameFriendDMsSetting)
import intl2 from "intl" /* 1113 */;
import UserSettings from "UserSettings" /* 4617 */;
import SettingsConstants from "SettingsConstants" /* 8593 */;
import useIsAllowGameFriendDMsSettingVisible from "useIsAllowGameFriendDMsSettingVisible" /* 17431 */;
import SettingBuilders from "SettingBuilders" /* 11875 */;
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
