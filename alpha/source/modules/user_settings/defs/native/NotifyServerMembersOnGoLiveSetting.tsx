// Module ID: 18288
// Function ID: 18289
// Name: NotifyServerMembersOnGoLiveSetting
// Dependencies: [8503, 11685, 1113, 2832, 4965, 18289, 2]

// Module 18288 (NotifyServerMembersOnGoLiveSetting)
import intl2 from "intl" /* 1113 */;
import _modDef2832 from "module_2832" /* 2832 */;
import UserSettings from "UserSettings" /* 4965 */;
import SettingsConstants from "SettingsConstants" /* 8503 */;
import go_live_GoLiveNotificationUtils from "go_live/GoLiveNotificationUtils" /* 18289 */;
import SettingBuilders from "SettingBuilders" /* 11685 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2832["9l5u6A"]);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef2832.QcmgBF);
  },
  parent: MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: UserSettings.NotifyServerMembersOnGoLive.useSetting,
  onValueChange: go_live_GoLiveNotificationUtils.onNotifyServerMembersOnGoLiveSettingsChanged
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/NotifyServerMembersOnGoLiveSetting.tsx");

export default toggle;
