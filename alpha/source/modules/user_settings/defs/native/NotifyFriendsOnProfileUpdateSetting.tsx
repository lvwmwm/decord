// Module ID: 17624
// Function ID: 17625
// Name: NotifyFriendsOnProfileUpdateSetting
// Dependencies: [9556, 11970, 1112, 3079, 4868, 17625, 2]

// Module 17624 (NotifyFriendsOnProfileUpdateSetting)
import intl2 from "intl" /* 1112 */;
import _modDef3079 from "module_3079" /* 3079 */;
import UserSettings from "UserSettings" /* 4868 */;
import SettingsConstants from "SettingsConstants" /* 9556 */;
import NotifyFriendsOnProfileUpdateUtils from "NotifyFriendsOnProfileUpdateUtils" /* 17625 */;
import SettingBuilders from "SettingBuilders" /* 11970 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef3079.F3llsQ);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef3079["6goWcz"]);
  },
  parent: MobileUserSettings.DATA_AND_PRIVACY,
  useValue: UserSettings.NotifyFriendsOnProfileUpdate.useSetting,
  onValueChange: NotifyFriendsOnProfileUpdateUtils.onNotifyFriendsOnProfileUpdateSettingsChanged
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/NotifyFriendsOnProfileUpdateSetting.tsx");

export default toggle;
