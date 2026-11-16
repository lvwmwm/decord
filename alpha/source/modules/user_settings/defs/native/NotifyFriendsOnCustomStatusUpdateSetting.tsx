// Module ID: 18608
// Function ID: 18609
// Name: NotifyFriendsOnCustomStatusUpdateSetting
// Dependencies: [9202, 12406, 1113, 2869, 5131, 18609, 18610, 2]

// Module 18608 (NotifyFriendsOnCustomStatusUpdateSetting)
import intl2 from "intl" /* 1113 */;
import _modDef2869 from "module_2869" /* 2869 */;
import UserSettings from "UserSettings" /* 5131 */;
import SettingsConstants from "SettingsConstants" /* 9202 */;
import NotifyFriendsOnCustomStatusUpdateUtils from "NotifyFriendsOnCustomStatusUpdateUtils" /* 18609 */;
import NotifyFriendsOnCustomStatusUpdateExperiment from "NotifyFriendsOnCustomStatusUpdateExperiment" /* 18610 */;
import SettingBuilders from "SettingBuilders" /* 12406 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2869.AOUyrx);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef2869.bZ094C);
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
