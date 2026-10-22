// Module ID: 17234
// Function ID: 17235
// Name: NotifyFriendsOnProfileUpdateSetting
// Dependencies: [8318, 11181, 1128, 2736, 4797, 17235, 2]

// Module 17234 (NotifyFriendsOnProfileUpdateSetting)
import intl2 from "intl" /* 1128 */;
import _modDef2736 from "module_2736" /* 2736 */;
import UserSettings from "UserSettings" /* 4797 */;
import SettingsConstants from "SettingsConstants" /* 8318 */;
import NotifyFriendsOnProfileUpdateUtils from "NotifyFriendsOnProfileUpdateUtils" /* 17235 */;
import SettingBuilders from "SettingBuilders" /* 11181 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2736.F3llsQ);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef2736["6goWcz"]);
  },
  parent: MobileUserSettings.DATA_AND_PRIVACY,
  useValue: UserSettings.NotifyFriendsOnProfileUpdate.useSetting,
  onValueChange: NotifyFriendsOnProfileUpdateUtils.onNotifyFriendsOnProfileUpdateSettingsChanged
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/NotifyFriendsOnProfileUpdateSetting.tsx");

export default toggle;
