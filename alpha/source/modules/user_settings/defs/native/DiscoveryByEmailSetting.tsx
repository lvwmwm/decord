// Module ID: 15942
// Function ID: 15943
// Name: DiscoveryByEmailSetting
// Dependencies: [8280, 1087, 1128, 558, 576, 4776, 1405, 13406, 11111, 2]

// Module 15942 (DiscoveryByEmailSetting)
import react from "react" /* 576 */;
import Constants from "Constants" /* 1087 */;
import intl2 from "intl" /* 1128 */;
import UserSettings from "UserSettings" /* 4776 */;
import SettingsConstants from "SettingsConstants" /* 8280 */;
import ContactSyncActionCreatorsDefault from "ContactSyncActionCreators" /* 13406 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11111 */;
import size from "module_2" /* 2 */;

let tmp;
const FlagUtils = tmp(1405);
const MobileUserSettings = SettingsConstants.MobileUserSettings;
const FriendDiscoveryFlags = Constants.FriendDiscoveryFlags;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useDiscoveryByEmailSettingValue() {
  let tmp5;
  const obj = react;
  const cResult = obj.c(2);
  const FriendDiscoverySettings = UserSettings.FriendDiscoverySettings;
  const setting = FriendDiscoverySettings.useSetting();
  if (cResult[0] !== setting) {
    const tmpResult = FlagUtils;
    const hasFlagResult = tmpResult.hasFlag(setting, FriendDiscoveryFlags.FIND_BY_EMAIL);
    cResult[0] = setting;
    cResult[1] = hasFlagResult;
    tmp5 = hasFlagResult;
  } else {
    tmp5 = cResult[1];
  }
  return tmp5;
}) : (function useDiscoveryByEmailSettingValue() {
  const FriendDiscoverySettings = UserSettings.FriendDiscoverySettings;
  const setting = FriendDiscoverySettings.useSetting();
  const obj = FlagUtils;
  return obj.hasFlag(setting, FriendDiscoveryFlags.FIND_BY_EMAIL);
});
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t["w/qqKK"]);
  },
  parent: MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useDescription: function useDiscoveryByEmailSettingDescription() {
    const intl = intl2.intl;
    return intl.string(intl2.t.ilGsHE);
  },
  useValue: tmp2,
  onValueChange: function onDiscoveryByEmailSettingValueChange(email) {
    const FriendDiscoverySettings = UserSettings.FriendDiscoverySettings;
    const setting = FriendDiscoverySettings.getSetting();
    const obj = FlagUtils;
    const hasFlagResult = obj.hasFlag(setting, FriendDiscoveryFlags.FIND_BY_PHONE);
    const obj2 = ContactSyncActionCreatorsDefault;
    const obj3 = { phone: hasFlagResult, email };
    const result = obj2.updateDiscoverability(obj3);
  }
};
const toggle = SettingBuilders.createToggle(obj);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/DiscoveryByEmailSetting.tsx");

export default toggle;
