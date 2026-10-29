// Module ID: 17826
// Function ID: 17827
// Name: NotifyFriendsOnComeOnlineSetting
// Dependencies: [8387, 11302, 1125, 2706, 4833, 17372, 2]

// Module 17826 (NotifyFriendsOnComeOnlineSetting)
import intl2 from "intl" /* 1125 */;
import _modDef2706 from "module_2706" /* 2706 */;
import UserSettings from "UserSettings" /* 4833 */;
import SettingsConstants from "SettingsConstants" /* 8387 */;
import FriendOnlineNotificationUtils from "FriendOnlineNotificationUtils" /* 17372 */;
import SettingBuilders from "SettingBuilders" /* 11302 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2706.A0FVCV);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef2706.vHX6RG);
  },
  parent: MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: UserSettings.NotifyFriendsOnComeOnline.useSetting,
  onValueChange: FriendOnlineNotificationUtils.onNotifyFriendsOnComeOnlineSettingsChanged
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/NotifyFriendsOnComeOnlineSetting.tsx");

export default toggle;
