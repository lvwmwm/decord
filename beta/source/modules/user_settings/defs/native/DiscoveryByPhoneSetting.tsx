// Module ID: 14371
// Function ID: 14372
// Name: DiscoveryByPhoneSetting
// Dependencies: [7421, 1086, 1127, 558, 576, 2027, 1391, 12074, 10874, 2]

// Module 14371 (DiscoveryByPhoneSetting)
import react from "react" /* 576 */;
import Constants from "Constants" /* 1086 */;
import intl2 from "intl" /* 1127 */;
import UserSettings from "UserSettings" /* 2027 */;
import SettingsConstants from "SettingsConstants" /* 7421 */;
import ContactSyncActionCreatorsDefault from "ContactSyncActionCreators" /* 12074 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 10874 */;
import size from "module_2" /* 2 */;

let tmp;
const FlagUtils = tmp(1391);
const MobileUserSettings = SettingsConstants.MobileUserSettings;
const FriendDiscoveryFlags = Constants.FriendDiscoveryFlags;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp5;
  const obj = react;
  const cResult = obj.c(2);
  const FriendDiscoverySettings = UserSettings.FriendDiscoverySettings;
  const setting = FriendDiscoverySettings.useSetting();
  if (cResult[0] !== setting) {
    const tmpResult = FlagUtils;
    const hasFlagResult = tmpResult.hasFlag(setting, FriendDiscoveryFlags.FIND_BY_PHONE);
    cResult[0] = setting;
    cResult[1] = hasFlagResult;
    tmp5 = hasFlagResult;
  } else {
    tmp5 = cResult[1];
  }
  return tmp5;
}) : (() => {
  const FriendDiscoverySettings = UserSettings.FriendDiscoverySettings;
  const setting = FriendDiscoverySettings.useSetting();
  const obj = FlagUtils;
  return obj.hasFlag(setting, FriendDiscoveryFlags.FIND_BY_PHONE);
});
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.dEYpSt);
  },
  parent: MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useDescription: function useDiscoveryByPhoneSettingDescription() {
    const intl = intl2.intl;
    return intl.string(intl2.t.X7pIKN);
  },
  useValue: tmp2,
  onValueChange: function onDiscoveryByPhoneSettingValueChange(phone) {
    const FriendDiscoverySettings = UserSettings.FriendDiscoverySettings;
    const setting = FriendDiscoverySettings.getSetting();
    const obj = FlagUtils;
    const hasFlagResult = obj.hasFlag(setting, FriendDiscoveryFlags.FIND_BY_EMAIL);
    const obj2 = ContactSyncActionCreatorsDefault;
    const obj3 = { phone, email: hasFlagResult };
    const result = obj2.updateDiscoverability(obj3);
  }
};
const toggle = SettingBuilders.createToggle(obj);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/DiscoveryByPhoneSetting.tsx");

export default toggle;
