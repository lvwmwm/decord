// Module ID: 16248
// Function ID: 16249
// Name: NotifyFriendsOnComeOnlineSetting
// Dependencies: [8237, 11729, 1115, 2648, 2020, 15791, 2]

// Module 16248 (NotifyFriendsOnComeOnlineSetting)
import util from "util" /* 1115 */;
import UserSettings from "UserSettings" /* 2020 */;
import _modDef2648 from "module_2648" /* 2648 */;
import SettingsConstants from "SettingsConstants" /* 8237 */;
import FriendOnlineNotificationUtils from "FriendOnlineNotificationUtils" /* 15791 */;
import SettingBuilders from "SettingBuilders" /* 11729 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2648.A0FVCV);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2648.vHX6RG);
  },
  parent: SettingsConstants.MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: UserSettings.NotifyFriendsOnComeOnline.useSetting,
  onValueChange: FriendOnlineNotificationUtils.onNotifyFriendsOnComeOnlineSettingsChanged
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/NotifyFriendsOnComeOnlineSetting.tsx");

export default toggle;
