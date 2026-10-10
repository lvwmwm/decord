// Module ID: 16302
// Function ID: 16303
// Name: NotifyServerMembersOnGoLiveSetting
// Dependencies: [7992, 10663, 1126, 2734, 2041, 16303, 2]

// Module 16302 (NotifyServerMembersOnGoLiveSetting)
import intl2 from "intl" /* 1126 */;
import UserSettings from "UserSettings" /* 2041 */;
import _modDef2734 from "module_2734" /* 2734 */;
import SettingsConstants from "SettingsConstants" /* 7992 */;
import go_live_GoLiveNotificationUtils from "go_live/GoLiveNotificationUtils" /* 16303 */;
import SettingBuilders from "SettingBuilders" /* 10663 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2734["9l5u6A"]);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef2734.QcmgBF);
  },
  parent: MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: UserSettings.NotifyServerMembersOnGoLive.useSetting,
  onValueChange: go_live_GoLiveNotificationUtils.onNotifyServerMembersOnGoLiveSettingsChanged
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/NotifyServerMembersOnGoLiveSetting.tsx");

export default toggle;
