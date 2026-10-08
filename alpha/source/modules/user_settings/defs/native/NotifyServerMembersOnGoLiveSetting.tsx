// Module ID: 16119
// Function ID: 16120
// Name: NotifyServerMembersOnGoLiveSetting
// Dependencies: [7966, 11262, 1126, 2731, 2040, 16120, 2]

// Module 16119 (NotifyServerMembersOnGoLiveSetting)
import intl2 from "intl" /* 1126 */;
import UserSettings from "UserSettings" /* 2040 */;
import _modDef2731 from "module_2731" /* 2731 */;
import SettingsConstants from "SettingsConstants" /* 7966 */;
import go_live_GoLiveNotificationUtils from "go_live/GoLiveNotificationUtils" /* 16120 */;
import SettingBuilders from "SettingBuilders" /* 11262 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2731["9l5u6A"]);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef2731.QcmgBF);
  },
  parent: MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: UserSettings.NotifyServerMembersOnGoLive.useSetting,
  onValueChange: go_live_GoLiveNotificationUtils.onNotifyServerMembersOnGoLiveSettingsChanged
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/NotifyServerMembersOnGoLiveSetting.tsx");

export default toggle;
