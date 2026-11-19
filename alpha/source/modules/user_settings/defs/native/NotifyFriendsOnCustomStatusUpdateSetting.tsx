// Module ID: 17455
// Function ID: 17456
// Name: NotifyFriendsOnCustomStatusUpdateSetting
// Dependencies: [8593, 11875, 1113, 2891, 4617, 17456, 17457, 2]

// Module 17455 (NotifyFriendsOnCustomStatusUpdateSetting)
import intl2 from "intl" /* 1113 */;
import _modDef2891 from "module_2891" /* 2891 */;
import UserSettings from "UserSettings" /* 4617 */;
import SettingsConstants from "SettingsConstants" /* 8593 */;
import NotifyFriendsOnCustomStatusUpdateUtils from "NotifyFriendsOnCustomStatusUpdateUtils" /* 17456 */;
import NotifyFriendsOnCustomStatusUpdateExperiment from "NotifyFriendsOnCustomStatusUpdateExperiment" /* 17457 */;
import SettingBuilders from "SettingBuilders" /* 11875 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2891.AOUyrx);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef2891.bZ094C);
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
