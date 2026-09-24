// Module ID: 16237
// Function ID: 16238
// Name: NotifyFriendsOnProfileUpdateSetting
// Dependencies: [8270, 11630, 1119, 2684, 2023, 16238, 2]

// Module 16237 (NotifyFriendsOnProfileUpdateSetting)
import util from "util" /* 1119 */;
import UserSettings from "UserSettings" /* 2023 */;
import _modDef2684 from "module_2684" /* 2684 */;
import SettingsConstants from "SettingsConstants" /* 8270 */;
import NotifyFriendsOnProfileUpdateUtils from "NotifyFriendsOnProfileUpdateUtils" /* 16238 */;
import SettingBuilders from "SettingBuilders" /* 11630 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2684.F3llsQ);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2684["6goWcz"]);
  },
  parent: SettingsConstants.MobileUserSettings.DATA_AND_PRIVACY,
  useValue: UserSettings.NotifyFriendsOnProfileUpdate.useSetting,
  onValueChange: NotifyFriendsOnProfileUpdateUtils.onNotifyFriendsOnProfileUpdateSettingsChanged
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/NotifyFriendsOnProfileUpdateSetting.tsx");

export default toggle;
