// Module ID: 16003
// Function ID: 16004
// Name: NotifyFriendsOnComeOnlineSetting
// Dependencies: [8079, 11605, 1114, 2562, 1935, 15590, 2]

// Module 16003 (NotifyFriendsOnComeOnlineSetting)
import util from "util" /* 1114 */;
import UserSettings from "UserSettings" /* 1935 */;
import _modDef2562 from "module_2562" /* 2562 */;
import SettingsConstants from "SettingsConstants" /* 8079 */;
import FriendOnlineNotificationUtils from "FriendOnlineNotificationUtils" /* 15590 */;
import SettingBuilders from "SettingBuilders" /* 11605 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2562.A0FVCV);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2562.vHX6RG);
  },
  parent: SettingsConstants.MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: UserSettings.NotifyFriendsOnComeOnline.useSetting,
  onValueChange: FriendOnlineNotificationUtils.onNotifyFriendsOnComeOnlineSettingsChanged
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/NotifyFriendsOnComeOnlineSetting.tsx");

export default toggle;
