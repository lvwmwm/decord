// Module ID: 16971
// Function ID: 16972
// Name: FriendAnniversaryNotificationSetting
// Dependencies: [8593, 11875, 1113, 4617, 16972, 16949, 2]

// Module 16971 (FriendAnniversaryNotificationSetting)
import intl2 from "intl" /* 1113 */;
import UserSettings from "UserSettings" /* 4617 */;
import SettingsConstants from "SettingsConstants" /* 8593 */;
import MobileNotifSettings from "MobileNotifSettings" /* 16949 */;
import FriendAnniversaryNotificationUtils from "FriendAnniversaryNotificationUtils" /* 16972 */;
import SettingBuilders_mod from "SettingBuilders" /* 11875 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
let SettingBuilders = SettingBuilders_mod;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.BVO96v);
  },
  parent: MobileUserSettings.NOTIFICATIONS,
  useValue: UserSettings.EnableFriendAnniversaryNotifications.useSetting,
  useDescription() {
    const intl = intl2.intl;
    return intl.string(intl2.t["00TNo7"]);
  },
  onValueChange: FriendAnniversaryNotificationUtils.onFriendAnniversaryNotificationSettingsChanged
};
const toggle = SettingBuilders.createToggle(obj);
SettingBuilders = SettingBuilders_mod;
const createToggle = SettingBuilders.createToggle;
const obj2 = { parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_FRIENDS_ACTIVITY };
const merged = Object.assign(toggle);
const toggle1 = createToggle(obj2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/FriendAnniversaryNotificationSetting.tsx");

export default toggle;
export const RedesignFriendAnniversaryNotificationSetting = toggle1;
