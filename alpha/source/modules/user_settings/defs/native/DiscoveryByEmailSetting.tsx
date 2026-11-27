// Module ID: 16362
// Function ID: 16363
// Name: DiscoveryByEmailSetting
// Dependencies: [9556, 1071, 1112, 4868, 1405, 13685, 11970, 2]

// Module 16362 (DiscoveryByEmailSetting)
import Constants from "Constants" /* 1071 */;
import intl2 from "intl" /* 1112 */;
import FlagUtils from "FlagUtils" /* 1405 */;
import UserSettings from "UserSettings" /* 4868 */;
import SettingsConstants from "SettingsConstants" /* 9556 */;
import ContactSyncActionCreatorsDefault from "ContactSyncActionCreators" /* 13685 */;
import SettingBuilders from "SettingBuilders" /* 11970 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const FriendDiscoveryFlags = Constants.FriendDiscoveryFlags;
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
  useValue: function useDiscoveryByEmailSettingValue() {
    const FriendDiscoverySettings = UserSettings.FriendDiscoverySettings;
    const setting = FriendDiscoverySettings.useSetting();
    const obj = FlagUtils;
    return obj.hasFlag(setting, FriendDiscoveryFlags.FIND_BY_EMAIL);
  },
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
