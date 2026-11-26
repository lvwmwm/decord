// Module ID: 17419
// Function ID: 17420
// Name: NotifyFriendsOnComeOnlineSetting
// Dependencies: [8712, 11942, 1112, 2992, 4738, 16939, 2]

// Module 17419 (NotifyFriendsOnComeOnlineSetting)
import intl2 from "intl" /* 1112 */;
import _modDef2992 from "module_2992" /* 2992 */;
import UserSettings from "UserSettings" /* 4738 */;
import SettingsConstants from "SettingsConstants" /* 8712 */;
import FriendOnlineNotificationUtils from "FriendOnlineNotificationUtils" /* 16939 */;
import SettingBuilders from "SettingBuilders" /* 11942 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2992.A0FVCV);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef2992.vHX6RG);
  },
  parent: MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: UserSettings.NotifyFriendsOnComeOnline.useSetting,
  onValueChange: FriendOnlineNotificationUtils.onNotifyFriendsOnComeOnlineSettingsChanged
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/NotifyFriendsOnComeOnlineSetting.tsx");

export default toggle;
