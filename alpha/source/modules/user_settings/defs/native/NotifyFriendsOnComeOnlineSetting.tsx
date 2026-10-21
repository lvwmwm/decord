// Module ID: 17142
// Function ID: 17143
// Name: NotifyFriendsOnComeOnlineSetting
// Dependencies: [8308, 11155, 1128, 2704, 4797, 16690, 2]

// Module 17142 (NotifyFriendsOnComeOnlineSetting)
import intl2 from "intl" /* 1128 */;
import _modDef2704 from "module_2704" /* 2704 */;
import UserSettings from "UserSettings" /* 4797 */;
import SettingsConstants from "SettingsConstants" /* 8308 */;
import FriendOnlineNotificationUtils from "FriendOnlineNotificationUtils" /* 16690 */;
import SettingBuilders from "SettingBuilders" /* 11155 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2704.A0FVCV);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef2704.vHX6RG);
  },
  parent: MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: UserSettings.NotifyFriendsOnComeOnline.useSetting,
  onValueChange: FriendOnlineNotificationUtils.onNotifyFriendsOnComeOnlineSettingsChanged
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/NotifyFriendsOnComeOnlineSetting.tsx");

export default toggle;
