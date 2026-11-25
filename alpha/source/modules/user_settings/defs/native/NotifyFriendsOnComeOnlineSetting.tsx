// Module ID: 17556
// Function ID: 17557
// Name: NotifyFriendsOnComeOnlineSetting
// Dependencies: [9513, 11914, 1112, 3046, 4837, 17082, 2]

// Module 17556 (NotifyFriendsOnComeOnlineSetting)
import intl2 from "intl" /* 1112 */;
import _modDef3046 from "module_3046" /* 3046 */;
import UserSettings from "UserSettings" /* 4837 */;
import SettingsConstants from "SettingsConstants" /* 9513 */;
import FriendOnlineNotificationUtils from "FriendOnlineNotificationUtils" /* 17082 */;
import SettingBuilders from "SettingBuilders" /* 11914 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef3046.A0FVCV);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef3046.vHX6RG);
  },
  parent: MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: UserSettings.NotifyFriendsOnComeOnline.useSetting,
  onValueChange: FriendOnlineNotificationUtils.onNotifyFriendsOnComeOnlineSettingsChanged
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/NotifyFriendsOnComeOnlineSetting.tsx");

export default toggle;
