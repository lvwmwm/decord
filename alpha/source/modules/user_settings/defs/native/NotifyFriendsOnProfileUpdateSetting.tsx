// Module ID: 17589
// Function ID: 17590
// Name: NotifyFriendsOnProfileUpdateSetting
// Dependencies: [8365, 11248, 1125, 2737, 4832, 17590, 2]

// Module 17589 (NotifyFriendsOnProfileUpdateSetting)
import intl2 from "intl" /* 1125 */;
import _modDef2737 from "module_2737" /* 2737 */;
import UserSettings from "UserSettings" /* 4832 */;
import SettingsConstants from "SettingsConstants" /* 8365 */;
import NotifyFriendsOnProfileUpdateUtils from "NotifyFriendsOnProfileUpdateUtils" /* 17590 */;
import SettingBuilders from "SettingBuilders" /* 11248 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2737.F3llsQ);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef2737["6goWcz"]);
  },
  parent: MobileUserSettings.DATA_AND_PRIVACY,
  useValue: UserSettings.NotifyFriendsOnProfileUpdate.useSetting,
  onValueChange: NotifyFriendsOnProfileUpdateUtils.onNotifyFriendsOnProfileUpdateSettingsChanged
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/NotifyFriendsOnProfileUpdateSetting.tsx");

export default toggle;
