// Module ID: 17409
// Function ID: 17410
// Name: NotifyFriendsOnProfileUpdateSetting
// Dependencies: [8712, 11937, 1112, 3024, 4738, 17410, 2]

// Module 17409 (NotifyFriendsOnProfileUpdateSetting)
import intl2 from "intl" /* 1112 */;
import _modDef3024 from "module_3024" /* 3024 */;
import UserSettings from "UserSettings" /* 4738 */;
import SettingsConstants from "SettingsConstants" /* 8712 */;
import NotifyFriendsOnProfileUpdateUtils from "NotifyFriendsOnProfileUpdateUtils" /* 17410 */;
import SettingBuilders from "SettingBuilders" /* 11937 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef3024.F3llsQ);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef3024["6goWcz"]);
  },
  parent: MobileUserSettings.DATA_AND_PRIVACY,
  useValue: UserSettings.NotifyFriendsOnProfileUpdate.useSetting,
  onValueChange: NotifyFriendsOnProfileUpdateUtils.onNotifyFriendsOnProfileUpdateSettingsChanged
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/NotifyFriendsOnProfileUpdateSetting.tsx");

export default toggle;
