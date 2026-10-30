// Module ID: 17900
// Function ID: 17901
// Name: NotifyServerMembersOnGoLiveSetting
// Dependencies: [8424, 11505, 1114, 2707, 4834, 17901, 2]

// Module 17900 (NotifyServerMembersOnGoLiveSetting)
import intl2 from "intl" /* 1114 */;
import _modDef2707 from "module_2707" /* 2707 */;
import UserSettings from "UserSettings" /* 4834 */;
import SettingsConstants from "SettingsConstants" /* 8424 */;
import go_live_GoLiveNotificationUtils from "go_live/GoLiveNotificationUtils" /* 17901 */;
import SettingBuilders from "SettingBuilders" /* 11505 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2707["9l5u6A"]);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef2707.QcmgBF);
  },
  parent: MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: UserSettings.NotifyServerMembersOnGoLive.useSetting,
  onValueChange: go_live_GoLiveNotificationUtils.onNotifyServerMembersOnGoLiveSettingsChanged
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/NotifyServerMembersOnGoLiveSetting.tsx");

export default toggle;
