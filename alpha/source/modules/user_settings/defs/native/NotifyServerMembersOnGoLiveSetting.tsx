// Module ID: 17280
// Function ID: 17281
// Name: NotifyServerMembersOnGoLiveSetting
// Dependencies: [8330, 11204, 1128, 2704, 4797, 17281, 2]

// Module 17280 (NotifyServerMembersOnGoLiveSetting)
import intl2 from "intl" /* 1128 */;
import _modDef2704 from "module_2704" /* 2704 */;
import UserSettings from "UserSettings" /* 4797 */;
import SettingsConstants from "SettingsConstants" /* 8330 */;
import go_live_GoLiveNotificationUtils from "go_live/GoLiveNotificationUtils" /* 17281 */;
import SettingBuilders from "SettingBuilders" /* 11204 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2704["9l5u6A"]);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef2704.QcmgBF);
  },
  parent: MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: UserSettings.NotifyServerMembersOnGoLive.useSetting,
  onValueChange: go_live_GoLiveNotificationUtils.onNotifyServerMembersOnGoLiveSettingsChanged
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/NotifyServerMembersOnGoLiveSetting.tsx");

export default toggle;
