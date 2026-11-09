// Module ID: 18285
// Function ID: 18286
// Name: NotifyFriendsOnComeOnlineSetting
// Dependencies: [8503, 11685, 1113, 2832, 4965, 17827, 2]

// Module 18285 (NotifyFriendsOnComeOnlineSetting)
import intl2 from "intl" /* 1113 */;
import _modDef2832 from "module_2832" /* 2832 */;
import UserSettings from "UserSettings" /* 4965 */;
import SettingsConstants from "SettingsConstants" /* 8503 */;
import FriendOnlineNotificationUtils from "FriendOnlineNotificationUtils" /* 17827 */;
import SettingBuilders from "SettingBuilders" /* 11685 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2832.A0FVCV);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef2832.vHX6RG);
  },
  parent: MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: UserSettings.NotifyFriendsOnComeOnline.useSetting,
  onValueChange: FriendOnlineNotificationUtils.onNotifyFriendsOnComeOnlineSettingsChanged
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/NotifyFriendsOnComeOnlineSetting.tsx");

export default toggle;
