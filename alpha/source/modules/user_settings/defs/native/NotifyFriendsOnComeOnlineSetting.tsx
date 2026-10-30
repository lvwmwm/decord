// Module ID: 17897
// Function ID: 17898
// Name: NotifyFriendsOnComeOnlineSetting
// Dependencies: [8424, 11505, 1114, 2707, 4834, 17426, 2]

// Module 17897 (NotifyFriendsOnComeOnlineSetting)
import intl2 from "intl" /* 1114 */;
import _modDef2707 from "module_2707" /* 2707 */;
import UserSettings from "UserSettings" /* 4834 */;
import SettingsConstants from "SettingsConstants" /* 8424 */;
import FriendOnlineNotificationUtils from "FriendOnlineNotificationUtils" /* 17426 */;
import SettingBuilders from "SettingBuilders" /* 11505 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2707.A0FVCV);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef2707.vHX6RG);
  },
  parent: MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: UserSettings.NotifyFriendsOnComeOnline.useSetting,
  onValueChange: FriendOnlineNotificationUtils.onNotifyFriendsOnComeOnlineSettingsChanged
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/NotifyFriendsOnComeOnlineSetting.tsx");

export default toggle;
