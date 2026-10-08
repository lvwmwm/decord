// Module ID: 16117
// Function ID: 16118
// Name: NotifyFriendsOnProfileUpdateSetting
// Dependencies: [7966, 11262, 1126, 2763, 2040, 16118, 2]

// Module 16117 (NotifyFriendsOnProfileUpdateSetting)
import intl2 from "intl" /* 1126 */;
import UserSettings from "UserSettings" /* 2040 */;
import _modDef2763 from "module_2763" /* 2763 */;
import SettingsConstants from "SettingsConstants" /* 7966 */;
import NotifyFriendsOnProfileUpdateUtils from "NotifyFriendsOnProfileUpdateUtils" /* 16118 */;
import SettingBuilders from "SettingBuilders" /* 11262 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2763.F3llsQ);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef2763["6goWcz"]);
  },
  parent: MobileUserSettings.DATA_AND_PRIVACY,
  useValue: UserSettings.NotifyFriendsOnProfileUpdate.useSetting,
  onValueChange: NotifyFriendsOnProfileUpdateUtils.onNotifyFriendsOnProfileUpdateSettingsChanged
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/NotifyFriendsOnProfileUpdateSetting.tsx");

export default toggle;
