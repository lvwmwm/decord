// Module ID: 16907
// Function ID: 16908
// Name: NotifyFriendsOnComeOnlineSetting
// Dependencies: [8210, 10991, 1126, 2736, 2041, 16451, 2]

// Module 16907 (NotifyFriendsOnComeOnlineSetting)
import intl2 from "intl" /* 1126 */;
import UserSettings from "UserSettings" /* 2041 */;
import _modDef2736 from "module_2736" /* 2736 */;
import SettingsConstants from "SettingsConstants" /* 8210 */;
import FriendOnlineNotificationUtils from "FriendOnlineNotificationUtils" /* 16451 */;
import SettingBuilders from "SettingBuilders" /* 10991 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2736.A0FVCV);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef2736.vHX6RG);
  },
  parent: MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: UserSettings.NotifyFriendsOnComeOnline.useSetting,
  onValueChange: FriendOnlineNotificationUtils.onNotifyFriendsOnComeOnlineSettingsChanged
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/NotifyFriendsOnComeOnlineSetting.tsx");

export default toggle;
