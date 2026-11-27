// Module ID: 17620
// Function ID: 17621
// Name: NotifyFriendsOnComeOnlineSetting
// Dependencies: [9556, 11970, 1112, 3047, 4868, 17140, 2]

// Module 17620 (NotifyFriendsOnComeOnlineSetting)
import intl2 from "intl" /* 1112 */;
import _modDef3047 from "module_3047" /* 3047 */;
import UserSettings from "UserSettings" /* 4868 */;
import SettingsConstants from "SettingsConstants" /* 9556 */;
import FriendOnlineNotificationUtils from "FriendOnlineNotificationUtils" /* 17140 */;
import SettingBuilders from "SettingBuilders" /* 11970 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef3047.A0FVCV);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef3047.vHX6RG);
  },
  parent: MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: UserSettings.NotifyFriendsOnComeOnline.useSetting,
  onValueChange: FriendOnlineNotificationUtils.onNotifyFriendsOnComeOnlineSettingsChanged
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/NotifyFriendsOnComeOnlineSetting.tsx");

export default toggle;
