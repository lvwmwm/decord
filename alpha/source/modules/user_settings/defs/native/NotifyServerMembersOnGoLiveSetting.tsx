// Module ID: 18236
// Function ID: 18237
// Name: NotifyServerMembersOnGoLiveSetting
// Dependencies: [8578, 11737, 1113, 2835, 4968, 18237, 2]

// Module 18236 (NotifyServerMembersOnGoLiveSetting)
import intl2 from "intl" /* 1113 */;
import _modDef2835 from "module_2835" /* 2835 */;
import UserSettings from "UserSettings" /* 4968 */;
import SettingsConstants from "SettingsConstants" /* 8578 */;
import go_live_GoLiveNotificationUtils from "go_live/GoLiveNotificationUtils" /* 18237 */;
import SettingBuilders from "SettingBuilders" /* 11737 */;
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
