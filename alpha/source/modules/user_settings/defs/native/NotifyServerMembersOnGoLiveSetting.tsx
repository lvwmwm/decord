// Module ID: 18208
// Function ID: 18209
// Name: NotifyServerMembersOnGoLiveSetting
// Dependencies: [8573, 11729, 1113, 2835, 4966, 18209, 2]

// Module 18208 (NotifyServerMembersOnGoLiveSetting)
import intl2 from "intl" /* 1113 */;
import _modDef2835 from "module_2835" /* 2835 */;
import UserSettings from "UserSettings" /* 4966 */;
import SettingsConstants from "SettingsConstants" /* 8573 */;
import go_live_GoLiveNotificationUtils from "go_live/GoLiveNotificationUtils" /* 18209 */;
import SettingBuilders from "SettingBuilders" /* 11729 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2835["9l5u6A"]);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef2835.QcmgBF);
  },
  parent: MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: UserSettings.NotifyServerMembersOnGoLive.useSetting,
  onValueChange: go_live_GoLiveNotificationUtils.onNotifyServerMembersOnGoLiveSettingsChanged
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/NotifyServerMembersOnGoLiveSetting.tsx");

export default toggle;
