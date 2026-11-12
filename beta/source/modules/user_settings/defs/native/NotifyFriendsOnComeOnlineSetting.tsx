// Module ID: 18320
// Function ID: 18321
// Name: NotifyFriendsOnComeOnlineSetting
// Dependencies: [8536, 11717, 1113, 2832, 4995, 17862, 2]

// Module 18320 (NotifyFriendsOnComeOnlineSetting)
import intl2 from "intl" /* 1113 */;
import _modDef2832 from "module_2832" /* 2832 */;
import UserSettings from "UserSettings" /* 4995 */;
import SettingsConstants from "SettingsConstants" /* 8536 */;
import FriendOnlineNotificationUtils from "FriendOnlineNotificationUtils" /* 17862 */;
import SettingBuilders from "SettingBuilders" /* 11717 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2832.A0FVCV);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef2832.vHX6RG);
  },
  parent: MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: UserSettings.NotifyFriendsOnComeOnline.useSetting,
  onValueChange: FriendOnlineNotificationUtils.onNotifyFriendsOnComeOnlineSettingsChanged
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/NotifyFriendsOnComeOnlineSetting.tsx");

export default toggle;
