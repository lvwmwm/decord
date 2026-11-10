// Module ID: 17951
// Function ID: 17952
// Name: NotifyServerMembersOnGoLiveSetting
// Dependencies: [8432, 11540, 1113, 2708, 4839, 17952, 2]

// Module 17951 (NotifyServerMembersOnGoLiveSetting)
import intl2 from "intl" /* 1113 */;
import _modDef2708 from "module_2708" /* 2708 */;
import UserSettings from "UserSettings" /* 4839 */;
import SettingsConstants from "SettingsConstants" /* 8432 */;
import go_live_GoLiveNotificationUtils from "go_live/GoLiveNotificationUtils" /* 17952 */;
import SettingBuilders from "SettingBuilders" /* 11540 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2708["9l5u6A"]);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef2708.QcmgBF);
  },
  parent: MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: UserSettings.NotifyServerMembersOnGoLive.useSetting,
  onValueChange: go_live_GoLiveNotificationUtils.onNotifyServerMembersOnGoLiveSettingsChanged
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/NotifyServerMembersOnGoLiveSetting.tsx");

export default toggle;
