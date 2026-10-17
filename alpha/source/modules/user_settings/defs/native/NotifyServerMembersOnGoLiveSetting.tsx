// Module ID: 17017
// Function ID: 17018
// Name: NotifyServerMembersOnGoLiveSetting
// Dependencies: [8260, 11065, 1128, 2757, 2044, 17018, 2]

// Module 17017 (NotifyServerMembersOnGoLiveSetting)
import intl2 from "intl" /* 1128 */;
import UserSettings from "UserSettings" /* 2044 */;
import _modDef2757 from "module_2757" /* 2757 */;
import SettingsConstants from "SettingsConstants" /* 8260 */;
import go_live_GoLiveNotificationUtils from "go_live/GoLiveNotificationUtils" /* 17018 */;
import SettingBuilders from "SettingBuilders" /* 11065 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2757["9l5u6A"]);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef2757.QcmgBF);
  },
  parent: MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: UserSettings.NotifyServerMembersOnGoLive.useSetting,
  onValueChange: go_live_GoLiveNotificationUtils.onNotifyServerMembersOnGoLiveSettingsChanged
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/NotifyServerMembersOnGoLiveSetting.tsx");

export default toggle;
