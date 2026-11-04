// Module ID: 17954
// Function ID: 17955
// Name: NotifyFriendsOnProfileUpdateSetting
// Dependencies: [8432, 11540, 1113, 2740, 4839, 17955, 2]

// Module 17954 (NotifyFriendsOnProfileUpdateSetting)
import intl2 from "intl" /* 1113 */;
import _modDef2740 from "module_2740" /* 2740 */;
import UserSettings from "UserSettings" /* 4839 */;
import SettingsConstants from "SettingsConstants" /* 8432 */;
import NotifyFriendsOnProfileUpdateUtils from "NotifyFriendsOnProfileUpdateUtils" /* 17955 */;
import SettingBuilders from "SettingBuilders" /* 11540 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2740.F3llsQ);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef2740["6goWcz"]);
  },
  parent: MobileUserSettings.DATA_AND_PRIVACY,
  useValue: UserSettings.NotifyFriendsOnProfileUpdate.useSetting,
  onValueChange: NotifyFriendsOnProfileUpdateUtils.onNotifyFriendsOnProfileUpdateSettingsChanged
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/NotifyFriendsOnProfileUpdateSetting.tsx");

export default toggle;
