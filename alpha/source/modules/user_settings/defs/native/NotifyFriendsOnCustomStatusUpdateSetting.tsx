// Module ID: 17282
// Function ID: 17283
// Name: NotifyFriendsOnCustomStatusUpdateSetting
// Dependencies: [8592, 11817, 1112, 2893, 4619, 17283, 17284, 2]

// Module 17282 (NotifyFriendsOnCustomStatusUpdateSetting)
import intl2 from "intl" /* 1112 */;
import _modDef2893 from "module_2893" /* 2893 */;
import UserSettings from "UserSettings" /* 4619 */;
import SettingsConstants from "SettingsConstants" /* 8592 */;
import NotifyFriendsOnCustomStatusUpdateUtils from "NotifyFriendsOnCustomStatusUpdateUtils" /* 17283 */;
import NotifyFriendsOnCustomStatusUpdateExperiment from "NotifyFriendsOnCustomStatusUpdateExperiment" /* 17284 */;
import SettingBuilders from "SettingBuilders" /* 11817 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2893.AOUyrx);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef2893.bZ094C);
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
