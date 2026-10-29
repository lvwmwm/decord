// Module ID: 17829
// Function ID: 17830
// Name: NotifyServerMembersOnGoLiveSetting
// Dependencies: [8387, 11302, 1125, 2706, 4833, 17830, 2]

// Module 17829 (NotifyServerMembersOnGoLiveSetting)
import intl2 from "intl" /* 1125 */;
import _modDef2706 from "module_2706" /* 2706 */;
import UserSettings from "UserSettings" /* 4833 */;
import SettingsConstants from "SettingsConstants" /* 8387 */;
import go_live_GoLiveNotificationUtils from "go_live/GoLiveNotificationUtils" /* 17830 */;
import SettingBuilders from "SettingBuilders" /* 11302 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2706["9l5u6A"]);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef2706.QcmgBF);
  },
  parent: MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: UserSettings.NotifyServerMembersOnGoLive.useSetting,
  onValueChange: go_live_GoLiveNotificationUtils.onNotifyServerMembersOnGoLiveSettingsChanged
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/NotifyServerMembersOnGoLiveSetting.tsx");

export default toggle;
