// Module ID: 17454
// Function ID: 17455
// Name: NotifyFriendsOnComeOnlineSetting
// Dependencies: [8593, 11875, 1113, 2891, 4617, 16980, 2]

// Module 17454 (NotifyFriendsOnComeOnlineSetting)
import intl2 from "intl" /* 1113 */;
import _modDef2891 from "module_2891" /* 2891 */;
import UserSettings from "UserSettings" /* 4617 */;
import SettingsConstants from "SettingsConstants" /* 8593 */;
import FriendOnlineNotificationUtils from "FriendOnlineNotificationUtils" /* 16980 */;
import SettingBuilders from "SettingBuilders" /* 11875 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2891.A0FVCV);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef2891.vHX6RG);
  },
  parent: MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: UserSettings.NotifyFriendsOnComeOnline.useSetting,
  onValueChange: FriendOnlineNotificationUtils.onNotifyFriendsOnComeOnlineSettingsChanged
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/NotifyFriendsOnComeOnlineSetting.tsx");

export default toggle;
