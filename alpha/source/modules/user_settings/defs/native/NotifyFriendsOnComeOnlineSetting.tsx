// Module ID: 16629
// Function ID: 16630
// Name: NotifyFriendsOnComeOnlineSetting
// Dependencies: [7993, 10663, 1126, 2734, 2041, 16118, 2]

// Module 16629 (NotifyFriendsOnComeOnlineSetting)
import intl2 from "intl" /* 1126 */;
import UserSettings from "UserSettings" /* 2041 */;
import _modDef2734 from "module_2734" /* 2734 */;
import SettingsConstants from "SettingsConstants" /* 7993 */;
import FriendOnlineNotificationUtils from "FriendOnlineNotificationUtils" /* 16118 */;
import SettingBuilders from "SettingBuilders" /* 10663 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2734.A0FVCV);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef2734.vHX6RG);
  },
  parent: MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: UserSettings.NotifyFriendsOnComeOnline.useSetting,
  onValueChange: FriendOnlineNotificationUtils.onNotifyFriendsOnComeOnlineSettingsChanged
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/NotifyFriendsOnComeOnlineSetting.tsx");

export default toggle;
