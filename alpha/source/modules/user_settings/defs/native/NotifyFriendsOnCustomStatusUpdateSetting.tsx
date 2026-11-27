// Module ID: 17621
// Function ID: 17622
// Name: NotifyFriendsOnCustomStatusUpdateSetting
// Dependencies: [9556, 11970, 1112, 3047, 4868, 17622, 17623, 2]

// Module 17621 (NotifyFriendsOnCustomStatusUpdateSetting)
import intl2 from "intl" /* 1112 */;
import _modDef3047 from "module_3047" /* 3047 */;
import UserSettings from "UserSettings" /* 4868 */;
import SettingsConstants from "SettingsConstants" /* 9556 */;
import NotifyFriendsOnCustomStatusUpdateUtils from "NotifyFriendsOnCustomStatusUpdateUtils" /* 17622 */;
import NotifyFriendsOnCustomStatusUpdateExperiment from "NotifyFriendsOnCustomStatusUpdateExperiment" /* 17623 */;
import SettingBuilders from "SettingBuilders" /* 11970 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef3047.AOUyrx);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef3047.bZ094C);
  },
  parent: MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: UserSettings.NotifyFriendsOnCustomStatusUpdate.useSetting,
  onValueChange: NotifyFriendsOnCustomStatusUpdateUtils.onNotifyFriendsOnCustomStatusUpdateSettingsChanged,
  usePredicate() {
    const obj = NotifyFriendsOnCustomStatusUpdateExperiment;
    return obj.useNotifyFriendsOnCustomStatusUpdateExperiment("NotifyFriendsOnCustomStatusUpdateSetting");
  }
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/NotifyFriendsOnCustomStatusUpdateSetting.tsx");

export default toggle;
