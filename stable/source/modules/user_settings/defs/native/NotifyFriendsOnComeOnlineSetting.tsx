// Module ID: 17018
// Function ID: 17019
// Name: NotifyFriendsOnComeOnlineSetting
// Dependencies: [8260, 11084, 1128, 2757, 2044, 16566, 2]

// Module 17018 (NotifyFriendsOnComeOnlineSetting)
import intl2 from "intl" /* 1128 */;
import UserSettings from "UserSettings" /* 2044 */;
import _modDef2757 from "module_2757" /* 2757 */;
import SettingsConstants from "SettingsConstants" /* 8260 */;
import FriendOnlineNotificationUtils from "FriendOnlineNotificationUtils" /* 16566 */;
import SettingBuilders from "SettingBuilders" /* 11084 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2757.A0FVCV);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef2757.vHX6RG);
  },
  parent: MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: UserSettings.NotifyFriendsOnComeOnline.useSetting,
  onValueChange: FriendOnlineNotificationUtils.onNotifyFriendsOnComeOnlineSettingsChanged
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/NotifyFriendsOnComeOnlineSetting.tsx");

export default toggle;
