// Module ID: 17015
// Function ID: 17016
// Name: NotifyFriendsOnProfileUpdateSetting
// Dependencies: [8260, 11065, 1128, 2789, 2044, 17016, 2]

// Module 17015 (NotifyFriendsOnProfileUpdateSetting)
import intl2 from "intl" /* 1128 */;
import UserSettings from "UserSettings" /* 2044 */;
import _modDef2789 from "module_2789" /* 2789 */;
import SettingsConstants from "SettingsConstants" /* 8260 */;
import NotifyFriendsOnProfileUpdateUtils from "NotifyFriendsOnProfileUpdateUtils" /* 17016 */;
import SettingBuilders from "SettingBuilders" /* 11065 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2789.F3llsQ);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef2789["6goWcz"]);
  },
  parent: MobileUserSettings.DATA_AND_PRIVACY,
  useValue: UserSettings.NotifyFriendsOnProfileUpdate.useSetting,
  onValueChange: NotifyFriendsOnProfileUpdateUtils.onNotifyFriendsOnProfileUpdateSettingsChanged
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/NotifyFriendsOnProfileUpdateSetting.tsx");

export default toggle;
