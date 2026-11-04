// Module ID: 18206
// Function ID: 18207
// Name: NotifyFriendsOnProfileUpdateSetting
// Dependencies: [8573, 11729, 1113, 2867, 4966, 18207, 2]

// Module 18206 (NotifyFriendsOnProfileUpdateSetting)
import intl2 from "intl" /* 1113 */;
import _modDef2867 from "module_2867" /* 2867 */;
import UserSettings from "UserSettings" /* 4966 */;
import SettingsConstants from "SettingsConstants" /* 8573 */;
import NotifyFriendsOnProfileUpdateUtils from "NotifyFriendsOnProfileUpdateUtils" /* 18207 */;
import SettingBuilders from "SettingBuilders" /* 11729 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2867.F3llsQ);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef2867["6goWcz"]);
  },
  parent: MobileUserSettings.DATA_AND_PRIVACY,
  useValue: UserSettings.NotifyFriendsOnProfileUpdate.useSetting,
  onValueChange: NotifyFriendsOnProfileUpdateUtils.onNotifyFriendsOnProfileUpdateSettingsChanged
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/NotifyFriendsOnProfileUpdateSetting.tsx");

export default toggle;
