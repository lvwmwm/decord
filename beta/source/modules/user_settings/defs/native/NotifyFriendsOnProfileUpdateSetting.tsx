// Module ID: 18321
// Function ID: 18322
// Name: NotifyFriendsOnProfileUpdateSetting
// Dependencies: [8536, 11717, 1113, 2864, 4995, 18322, 2]

// Module 18321 (NotifyFriendsOnProfileUpdateSetting)
import intl2 from "intl" /* 1113 */;
import _modDef2864 from "module_2864" /* 2864 */;
import UserSettings from "UserSettings" /* 4995 */;
import SettingsConstants from "SettingsConstants" /* 8536 */;
import NotifyFriendsOnProfileUpdateUtils from "NotifyFriendsOnProfileUpdateUtils" /* 18322 */;
import SettingBuilders from "SettingBuilders" /* 11717 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2864.F3llsQ);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef2864["6goWcz"]);
  },
  parent: MobileUserSettings.DATA_AND_PRIVACY,
  useValue: UserSettings.NotifyFriendsOnProfileUpdate.useSetting,
  onValueChange: NotifyFriendsOnProfileUpdateUtils.onNotifyFriendsOnProfileUpdateSettingsChanged
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/NotifyFriendsOnProfileUpdateSetting.tsx");

export default toggle;
