// Module ID: 18486
// Function ID: 18487
// Name: NotifyFriendsOnProfileUpdateSetting
// Dependencies: [9136, 12317, 1113, 2885, 5068, 18487, 2]

// Module 18486 (NotifyFriendsOnProfileUpdateSetting)
import intl2 from "intl" /* 1113 */;
import _modDef2885 from "module_2885" /* 2885 */;
import UserSettings from "UserSettings" /* 5068 */;
import SettingsConstants from "SettingsConstants" /* 9136 */;
import NotifyFriendsOnProfileUpdateUtils from "NotifyFriendsOnProfileUpdateUtils" /* 18487 */;
import SettingBuilders from "SettingBuilders" /* 12317 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2885.F3llsQ);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef2885["6goWcz"]);
  },
  parent: MobileUserSettings.DATA_AND_PRIVACY,
  useValue: UserSettings.NotifyFriendsOnProfileUpdate.useSetting,
  onValueChange: NotifyFriendsOnProfileUpdateUtils.onNotifyFriendsOnProfileUpdateSettingsChanged
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/NotifyFriendsOnProfileUpdateSetting.tsx");

export default toggle;
