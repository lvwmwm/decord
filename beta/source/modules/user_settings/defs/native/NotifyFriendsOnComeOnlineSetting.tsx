// Module ID: 15529
// Function ID: 15530
// Name: NotifyFriendsOnComeOnlineSetting
// Dependencies: [7417, 11006, 1115, 2653, 2021, 15055, 2]

// Module 15529 (NotifyFriendsOnComeOnlineSetting)
import intl2 from "intl" /* 1115 */;
import UserSettings from "UserSettings" /* 2021 */;
import _modDef2653 from "module_2653" /* 2653 */;
import SettingsConstants from "SettingsConstants" /* 7417 */;
import FriendOnlineNotificationUtils from "FriendOnlineNotificationUtils" /* 15055 */;
import SettingBuilders from "SettingBuilders" /* 11006 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2653.A0FVCV);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef2653.vHX6RG);
  },
  parent: MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: UserSettings.NotifyFriendsOnComeOnline.useSetting,
  onValueChange: FriendOnlineNotificationUtils.onNotifyFriendsOnComeOnlineSettingsChanged
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/NotifyFriendsOnComeOnlineSetting.tsx");

export default toggle;
