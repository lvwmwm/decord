// Module ID: 17281
// Function ID: 17282
// Name: NotifyFriendsOnComeOnlineSetting
// Dependencies: [8592, 11817, 1112, 2893, 4619, 16804, 2]

// Module 17281 (NotifyFriendsOnComeOnlineSetting)
import intl2 from "intl" /* 1112 */;
import _modDef2893 from "module_2893" /* 2893 */;
import UserSettings from "UserSettings" /* 4619 */;
import SettingsConstants from "SettingsConstants" /* 8592 */;
import FriendOnlineNotificationUtils from "FriendOnlineNotificationUtils" /* 16804 */;
import SettingBuilders from "SettingBuilders" /* 11817 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2893.A0FVCV);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef2893.vHX6RG);
  },
  parent: MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: UserSettings.NotifyFriendsOnComeOnline.useSetting,
  onValueChange: FriendOnlineNotificationUtils.onNotifyFriendsOnComeOnlineSettingsChanged
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/NotifyFriendsOnComeOnlineSetting.tsx");

export default toggle;
