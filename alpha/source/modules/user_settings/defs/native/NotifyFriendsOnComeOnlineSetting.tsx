// Module ID: 16940
// Function ID: 16941
// Name: NotifyFriendsOnComeOnlineSetting
// Dependencies: [8213, 11006, 1128, 2739, 2044, 16484, 2]

// Module 16940 (NotifyFriendsOnComeOnlineSetting)
import intl2 from "intl" /* 1128 */;
import UserSettings from "UserSettings" /* 2044 */;
import _modDef2739 from "module_2739" /* 2739 */;
import SettingsConstants from "SettingsConstants" /* 8213 */;
import FriendOnlineNotificationUtils from "FriendOnlineNotificationUtils" /* 16484 */;
import SettingBuilders from "SettingBuilders" /* 11006 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2739.A0FVCV);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef2739.vHX6RG);
  },
  parent: MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: UserSettings.NotifyFriendsOnComeOnline.useSetting,
  onValueChange: FriendOnlineNotificationUtils.onNotifyFriendsOnComeOnlineSettingsChanged
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/NotifyFriendsOnComeOnlineSetting.tsx");

export default toggle;
