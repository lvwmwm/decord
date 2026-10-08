// Module ID: 16116
// Function ID: 16117
// Name: NotifyFriendsOnComeOnlineSetting
// Dependencies: [7966, 11262, 1126, 2731, 2040, 15605, 2]

// Module 16116 (NotifyFriendsOnComeOnlineSetting)
import intl2 from "intl" /* 1126 */;
import UserSettings from "UserSettings" /* 2040 */;
import _modDef2731 from "module_2731" /* 2731 */;
import SettingsConstants from "SettingsConstants" /* 7966 */;
import FriendOnlineNotificationUtils from "FriendOnlineNotificationUtils" /* 15605 */;
import SettingBuilders from "SettingBuilders" /* 11262 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2731.A0FVCV);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef2731.vHX6RG);
  },
  parent: MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: UserSettings.NotifyFriendsOnComeOnline.useSetting,
  onValueChange: FriendOnlineNotificationUtils.onNotifyFriendsOnComeOnlineSettingsChanged
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/NotifyFriendsOnComeOnlineSetting.tsx");

export default toggle;
