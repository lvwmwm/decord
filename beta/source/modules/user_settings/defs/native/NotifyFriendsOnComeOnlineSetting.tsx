// Module ID: 15517
// Function ID: 15518
// Name: NotifyFriendsOnComeOnlineSetting
// Dependencies: [7421, 10874, 1127, 2656, 2027, 15043, 2]

// Module 15517 (NotifyFriendsOnComeOnlineSetting)
import intl2 from "intl" /* 1127 */;
import UserSettings from "UserSettings" /* 2027 */;
import _modDef2656 from "module_2656" /* 2656 */;
import SettingsConstants from "SettingsConstants" /* 7421 */;
import FriendOnlineNotificationUtils from "FriendOnlineNotificationUtils" /* 15043 */;
import SettingBuilders from "SettingBuilders" /* 10874 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2656.A0FVCV);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef2656.vHX6RG);
  },
  parent: MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: UserSettings.NotifyFriendsOnComeOnline.useSetting,
  onValueChange: FriendOnlineNotificationUtils.onNotifyFriendsOnComeOnlineSettingsChanged
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/NotifyFriendsOnComeOnlineSetting.tsx");

export default toggle;
