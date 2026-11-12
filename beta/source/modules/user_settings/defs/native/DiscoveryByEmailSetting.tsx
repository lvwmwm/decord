// Module ID: 17104
// Function ID: 17105
// Name: DiscoveryByEmailSetting
// Dependencies: [8536, 1072, 1113, 4995, 1403, 14523, 11717, 2]

// Module 17104 (DiscoveryByEmailSetting)
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1113 */;
import FlagUtils from "FlagUtils" /* 1403 */;
import UserSettings from "UserSettings" /* 4995 */;
import SettingsConstants from "SettingsConstants" /* 8536 */;
import ContactSyncActionCreatorsDefault from "ContactSyncActionCreators" /* 14523 */;
import SettingBuilders from "SettingBuilders" /* 11717 */;
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
