// Module ID: 18488
// Function ID: 18489
// Name: NotifyServerMembersOnGoLiveSetting
// Dependencies: [9136, 12317, 1113, 2853, 5068, 18489, 2]

// Module 18488 (NotifyServerMembersOnGoLiveSetting)
import intl2 from "intl" /* 1113 */;
import _modDef2853 from "module_2853" /* 2853 */;
import UserSettings from "UserSettings" /* 5068 */;
import SettingsConstants from "SettingsConstants" /* 9136 */;
import go_live_GoLiveNotificationUtils from "go_live/GoLiveNotificationUtils" /* 18489 */;
import SettingBuilders from "SettingBuilders" /* 12317 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2853["9l5u6A"]);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef2853.QcmgBF);
  },
  parent: MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: UserSettings.NotifyServerMembersOnGoLive.useSetting,
  onValueChange: go_live_GoLiveNotificationUtils.onNotifyServerMembersOnGoLiveSettingsChanged
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/NotifyServerMembersOnGoLiveSetting.tsx");

export default toggle;
