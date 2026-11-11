// Module ID: 18485
// Function ID: 18486
// Name: NotifyFriendsOnComeOnlineSetting
// Dependencies: [9136, 12317, 1113, 2853, 5068, 18020, 2]

// Module 18485 (NotifyFriendsOnComeOnlineSetting)
import intl2 from "intl" /* 1113 */;
import _modDef2853 from "module_2853" /* 2853 */;
import UserSettings from "UserSettings" /* 5068 */;
import SettingsConstants from "SettingsConstants" /* 9136 */;
import FriendOnlineNotificationUtils from "FriendOnlineNotificationUtils" /* 18020 */;
import SettingBuilders from "SettingBuilders" /* 12317 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2853.A0FVCV);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef2853.vHX6RG);
  },
  parent: MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: UserSettings.NotifyFriendsOnComeOnline.useSetting,
  onValueChange: FriendOnlineNotificationUtils.onNotifyFriendsOnComeOnlineSettingsChanged
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/NotifyFriendsOnComeOnlineSetting.tsx");

export default toggle;
