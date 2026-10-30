// Module ID: 17898
// Function ID: 17899
// Name: NotifyFriendsOnProfileUpdateSetting
// Dependencies: [8424, 11505, 1114, 2739, 4834, 17899, 2]

// Module 17898 (NotifyFriendsOnProfileUpdateSetting)
import intl2 from "intl" /* 1114 */;
import _modDef2739 from "module_2739" /* 2739 */;
import UserSettings from "UserSettings" /* 4834 */;
import SettingsConstants from "SettingsConstants" /* 8424 */;
import NotifyFriendsOnProfileUpdateUtils from "NotifyFriendsOnProfileUpdateUtils" /* 17899 */;
import SettingBuilders from "SettingBuilders" /* 11505 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2739.F3llsQ);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef2739["6goWcz"]);
  },
  parent: MobileUserSettings.DATA_AND_PRIVACY,
  useValue: UserSettings.NotifyFriendsOnProfileUpdate.useSetting,
  onValueChange: NotifyFriendsOnProfileUpdateUtils.onNotifyFriendsOnProfileUpdateSettingsChanged
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/NotifyFriendsOnProfileUpdateSetting.tsx");

export default toggle;
