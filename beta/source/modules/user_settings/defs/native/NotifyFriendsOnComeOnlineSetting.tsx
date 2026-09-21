// Module ID: 16226
// Function ID: 16227
// Name: NotifyFriendsOnComeOnlineSetting
// Dependencies: [8238, 11594, 1119, 2652, 2023, 15768, 2]

// Module 16226 (NotifyFriendsOnComeOnlineSetting)
import util from "util" /* 1119 */;
import UserSettings from "UserSettings" /* 2023 */;
import _modDef2652 from "module_2652" /* 2652 */;
import SettingsConstants from "SettingsConstants" /* 8238 */;
import FriendOnlineNotificationUtils from "FriendOnlineNotificationUtils" /* 15768 */;
import SettingBuilders from "SettingBuilders" /* 11594 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2652.A0FVCV);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2652.vHX6RG);
  },
  parent: SettingsConstants.MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: UserSettings.NotifyFriendsOnComeOnline.useSetting,
  onValueChange: FriendOnlineNotificationUtils.onNotifyFriendsOnComeOnlineSettingsChanged
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/NotifyFriendsOnComeOnlineSetting.tsx");

export default toggle;
