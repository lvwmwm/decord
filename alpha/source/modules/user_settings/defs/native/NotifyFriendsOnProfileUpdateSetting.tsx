// Module ID: 15817
// Function ID: 15818
// Name: NotifyFriendsOnProfileUpdateSetting
// Dependencies: [7634, 11129, 1126, 2691, 2028, 15818, 2]

// Module 15817 (NotifyFriendsOnProfileUpdateSetting)
import intl2 from "intl" /* 1126 */;
import UserSettings from "UserSettings" /* 2028 */;
import _modDef2691 from "module_2691" /* 2691 */;
import SettingsConstants from "SettingsConstants" /* 7634 */;
import NotifyFriendsOnProfileUpdateUtils from "NotifyFriendsOnProfileUpdateUtils" /* 15818 */;
import SettingBuilders from "SettingBuilders" /* 11129 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2691.F3llsQ);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef2691["6goWcz"]);
  },
  parent: MobileUserSettings.DATA_AND_PRIVACY,
  useValue: UserSettings.NotifyFriendsOnProfileUpdate.useSetting,
  onValueChange: NotifyFriendsOnProfileUpdateUtils.onNotifyFriendsOnProfileUpdateSettingsChanged
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/NotifyFriendsOnProfileUpdateSetting.tsx");

export default toggle;
