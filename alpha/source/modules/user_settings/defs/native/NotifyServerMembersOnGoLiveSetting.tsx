// Module ID: 16910
// Function ID: 16911
// Name: NotifyServerMembersOnGoLiveSetting
// Dependencies: [8210, 10991, 1126, 2736, 2041, 16911, 2]

// Module 16910 (NotifyServerMembersOnGoLiveSetting)
import intl2 from "intl" /* 1126 */;
import UserSettings from "UserSettings" /* 2041 */;
import _modDef2736 from "module_2736" /* 2736 */;
import SettingsConstants from "SettingsConstants" /* 8210 */;
import go_live_GoLiveNotificationUtils from "go_live/GoLiveNotificationUtils" /* 16911 */;
import SettingBuilders from "SettingBuilders" /* 10991 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2736["9l5u6A"]);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef2736.QcmgBF);
  },
  parent: MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: UserSettings.NotifyServerMembersOnGoLive.useSetting,
  onValueChange: go_live_GoLiveNotificationUtils.onNotifyServerMembersOnGoLiveSettingsChanged
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/NotifyServerMembersOnGoLiveSetting.tsx");

export default toggle;
