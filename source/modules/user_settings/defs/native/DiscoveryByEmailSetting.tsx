// Module ID: 14677
// Function ID: 14678
// Name: toggle
// Dependencies: [7893, 673, 1233, 4166, 1398, 12446, 11288, 2]

// Module 14677 (toggle)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import hasFlag from "hasFlag" /* 1398 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4166 */;
import MobileUserSettings from "MobileUserSettings" /* 7893 */;
import _updateDiscoverabilityDefault from "_updateDiscoverability" /* 12446 */;
import createToggle from "createToggle" /* 11288 */;

const FriendDiscoveryFlags = ME.FriendDiscoveryFlags;
const toggle = createToggle.createToggle({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["w/qqKK"]);
  },
  parent: MobileUserSettings.MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useDescription: function useDiscoveryByEmailSettingDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.ilGsHE);
  },
  useValue: function useDiscoveryByEmailSettingValue() {
    const FriendDiscoverySettings = explicitContentFromProto.FriendDiscoverySettings;
    const setting = FriendDiscoverySettings.useSetting();
    return hasFlag.hasFlag(setting, FriendDiscoveryFlags.FIND_BY_EMAIL);
  },
  onValueChange: function onDiscoveryByEmailSettingValueChange(email) {
    const FriendDiscoverySettings = explicitContentFromProto.FriendDiscoverySettings;
    const setting = FriendDiscoverySettings.getSetting();
    let obj = hasFlag;
    const hasFlagResult = obj.hasFlag(setting, FriendDiscoveryFlags.FIND_BY_PHONE);
    obj = { phone: hasFlagResult, email };
    const result = _updateDiscoverabilityDefault.updateDiscoverability(obj);
  }
});
let obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["w/qqKK"]);
  },
  parent: MobileUserSettings.MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useDescription: function useDiscoveryByEmailSettingDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.ilGsHE);
  },
  useValue: function useDiscoveryByEmailSettingValue() {
    const FriendDiscoverySettings = explicitContentFromProto.FriendDiscoverySettings;
    const setting = FriendDiscoverySettings.useSetting();
    return hasFlag.hasFlag(setting, FriendDiscoveryFlags.FIND_BY_EMAIL);
  },
  onValueChange: function onDiscoveryByEmailSettingValueChange(email) {
    const FriendDiscoverySettings = explicitContentFromProto.FriendDiscoverySettings;
    const setting = FriendDiscoverySettings.getSetting();
    let obj = hasFlag;
    const hasFlagResult = obj.hasFlag(setting, FriendDiscoveryFlags.FIND_BY_PHONE);
    obj = { phone: hasFlagResult, email };
    const result = _updateDiscoverabilityDefault.updateDiscoverability(obj);
  }
};
let result = set.fileFinishedImporting("modules/user_settings/defs/native/DiscoveryByEmailSetting.tsx");

export default toggle;
