// Module ID: 17591
// Function ID: 17592
// Name: NotifyServerMembersOnGoLiveSetting
// Dependencies: [8365, 11248, 1125, 2705, 4832, 17592, 2]

// Module 17591 (NotifyServerMembersOnGoLiveSetting)
import intl2 from "intl" /* 1125 */;
import _modDef2705 from "module_2705" /* 2705 */;
import UserSettings from "UserSettings" /* 4832 */;
import SettingsConstants from "SettingsConstants" /* 8365 */;
import go_live_GoLiveNotificationUtils from "go_live/GoLiveNotificationUtils" /* 17592 */;
import SettingBuilders from "SettingBuilders" /* 11248 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2705["9l5u6A"]);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef2705.QcmgBF);
  },
  parent: MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: UserSettings.NotifyServerMembersOnGoLive.useSetting,
  onValueChange: go_live_GoLiveNotificationUtils.onNotifyServerMembersOnGoLiveSettingsChanged
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/NotifyServerMembersOnGoLiveSetting.tsx");

export default toggle;
