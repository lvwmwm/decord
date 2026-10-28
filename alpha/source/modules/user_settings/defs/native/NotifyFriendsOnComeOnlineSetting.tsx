// Module ID: 17588
// Function ID: 17589
// Name: NotifyFriendsOnComeOnlineSetting
// Dependencies: [8365, 11248, 1125, 2705, 4832, 17133, 2]

// Module 17588 (NotifyFriendsOnComeOnlineSetting)
import intl2 from "intl" /* 1125 */;
import _modDef2705 from "module_2705" /* 2705 */;
import UserSettings from "UserSettings" /* 4832 */;
import SettingsConstants from "SettingsConstants" /* 8365 */;
import FriendOnlineNotificationUtils from "FriendOnlineNotificationUtils" /* 17133 */;
import SettingBuilders from "SettingBuilders" /* 11248 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2705.A0FVCV);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef2705.vHX6RG);
  },
  parent: MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: UserSettings.NotifyFriendsOnComeOnline.useSetting,
  onValueChange: FriendOnlineNotificationUtils.onNotifyFriendsOnComeOnlineSettingsChanged
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/NotifyFriendsOnComeOnlineSetting.tsx");

export default toggle;
