// Module ID: 18205
// Function ID: 18206
// Name: NotifyFriendsOnComeOnlineSetting
// Dependencies: [8573, 11729, 1113, 2835, 4966, 17750, 2]

// Module 18205 (NotifyFriendsOnComeOnlineSetting)
import intl2 from "intl" /* 1113 */;
import _modDef2835 from "module_2835" /* 2835 */;
import UserSettings from "UserSettings" /* 4966 */;
import SettingsConstants from "SettingsConstants" /* 8573 */;
import FriendOnlineNotificationUtils from "FriendOnlineNotificationUtils" /* 17750 */;
import SettingBuilders from "SettingBuilders" /* 11729 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2835.A0FVCV);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef2835.vHX6RG);
  },
  parent: MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: UserSettings.NotifyFriendsOnComeOnline.useSetting,
  onValueChange: FriendOnlineNotificationUtils.onNotifyFriendsOnComeOnlineSettingsChanged
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/NotifyFriendsOnComeOnlineSetting.tsx");

export default toggle;
