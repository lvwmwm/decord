// Module ID: 17562
// Function ID: 17563
// Name: NotifyServerMembersOnGoLiveSetting
// Dependencies: [9513, 11914, 1112, 3046, 4837, 17563, 2]

// Module 17562 (NotifyServerMembersOnGoLiveSetting)
import intl2 from "intl" /* 1112 */;
import _modDef3046 from "module_3046" /* 3046 */;
import UserSettings from "UserSettings" /* 4837 */;
import SettingsConstants from "SettingsConstants" /* 9513 */;
import go_live_GoLiveNotificationUtils from "go_live/GoLiveNotificationUtils" /* 17563 */;
import SettingBuilders from "SettingBuilders" /* 11914 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef3046["9l5u6A"]);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef3046.QcmgBF);
  },
  parent: MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: UserSettings.NotifyServerMembersOnGoLive.useSetting,
  onValueChange: go_live_GoLiveNotificationUtils.onNotifyServerMembersOnGoLiveSettingsChanged
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/NotifyServerMembersOnGoLiveSetting.tsx");

export default toggle;
