// Module ID: 16157
// Function ID: 16158
// Name: DiscoveryByPhoneSetting
// Dependencies: [8712, 1071, 1112, 4738, 1404, 13592, 11942, 2]

// Module 16157 (DiscoveryByPhoneSetting)
import Constants from "Constants" /* 1071 */;
import intl2 from "intl" /* 1112 */;
import FlagUtils from "FlagUtils" /* 1404 */;
import UserSettings from "UserSettings" /* 4738 */;
import SettingsConstants from "SettingsConstants" /* 8712 */;
import ContactSyncActionCreatorsDefault from "ContactSyncActionCreators" /* 13592 */;
import SettingBuilders from "SettingBuilders" /* 11942 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const FriendDiscoveryFlags = Constants.FriendDiscoveryFlags;
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
  useValue: function useDiscoveryByPhoneSettingValue() {
    const FriendDiscoverySettings = UserSettings.FriendDiscoverySettings;
    const setting = FriendDiscoverySettings.useSetting();
    const obj = FlagUtils;
    return obj.hasFlag(setting, FriendDiscoveryFlags.FIND_BY_PHONE);
  },
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
