// Module ID: 17131
// Function ID: 17132
// Name: FriendAnniversaryNotificationSetting
// Dependencies: [9556, 11970, 1112, 4868, 17132, 3207, 17109, 2]

// Module 17131 (FriendAnniversaryNotificationSetting)
import intl2 from "intl" /* 1112 */;
import _modDef3207 from "module_3207" /* 3207 */;
import UserSettings from "UserSettings" /* 4868 */;
import SettingsConstants from "SettingsConstants" /* 9556 */;
import MobileNotifSettings from "MobileNotifSettings" /* 17109 */;
import FriendAnniversaryNotificationUtils from "FriendAnniversaryNotificationUtils" /* 17132 */;
import SettingBuilders_mod from "SettingBuilders" /* 11970 */;
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
const obj2 = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef3207.KEDd8y);
  },
  useDescription: undefined,
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_FRIENDS_ACTIVITY
};
const merged = Object.assign(toggle);
const toggle1 = createToggle(obj2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/FriendAnniversaryNotificationSetting.tsx");

export default toggle;
export const RedesignFriendAnniversaryNotificationSetting = toggle1;
