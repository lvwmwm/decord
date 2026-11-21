// Module ID: 17406
// Function ID: 17407
// Name: NotifyFriendsOnCustomStatusUpdateSetting
// Dependencies: [8712, 11937, 1112, 2992, 4738, 17407, 17408, 2]

// Module 17406 (NotifyFriendsOnCustomStatusUpdateSetting)
import intl2 from "intl" /* 1112 */;
import _modDef2992 from "module_2992" /* 2992 */;
import UserSettings from "UserSettings" /* 4738 */;
import SettingsConstants from "SettingsConstants" /* 8712 */;
import NotifyFriendsOnCustomStatusUpdateUtils from "NotifyFriendsOnCustomStatusUpdateUtils" /* 17407 */;
import NotifyFriendsOnCustomStatusUpdateExperiment from "NotifyFriendsOnCustomStatusUpdateExperiment" /* 17408 */;
import SettingBuilders from "SettingBuilders" /* 11937 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2992.AOUyrx);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef2992.bZ094C);
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
