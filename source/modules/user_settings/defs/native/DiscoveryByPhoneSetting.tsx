// Module ID: 14102
// Function ID: 14103
// Name: toggle
// Dependencies: [8084, 676, 1236, 3993, 1403, 12042, 10452, 2]

// Module 14102 (toggle)
import { FriendDiscoveryFlags } from "ME";
import createToggle from "createToggle";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.dEYpSt);
  },
  parent: require("MobileSetting").MobileSetting.CONTENT_AND_SOCIAL_DISCORD,
  useDescription: function useDiscoveryByPhoneSettingDescription() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.X7pIKN);
  },
  useValue: function useDiscoveryByPhoneSettingValue() {
    const FriendDiscoverySettings = require(3993) /* explicitContentFromProto */.FriendDiscoverySettings;
    const setting = FriendDiscoverySettings.useSetting();
    return require(1403) /* hasFlag */.hasFlag(setting, FriendDiscoveryFlags.FIND_BY_PHONE);
  },
  onValueChange: function onDiscoveryByPhoneSettingValueChange(phone) {
    const FriendDiscoverySettings = require(3993) /* explicitContentFromProto */.FriendDiscoverySettings;
    const setting = FriendDiscoverySettings.getSetting();
    let obj = require(1403) /* hasFlag */;
    const hasFlagResult = obj.hasFlag(setting, FriendDiscoveryFlags.FIND_BY_EMAIL);
    obj = { phone, email: hasFlagResult };
    const result = importDefault(12042).updateDiscoverability(obj);
  }
});
let obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.dEYpSt);
  },
  parent: require("MobileSetting").MobileSetting.CONTENT_AND_SOCIAL_DISCORD,
  useDescription: function useDiscoveryByPhoneSettingDescription() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.X7pIKN);
  },
  useValue: function useDiscoveryByPhoneSettingValue() {
    const FriendDiscoverySettings = require(3993) /* explicitContentFromProto */.FriendDiscoverySettings;
    const setting = FriendDiscoverySettings.useSetting();
    return require(1403) /* hasFlag */.hasFlag(setting, FriendDiscoveryFlags.FIND_BY_PHONE);
  },
  onValueChange: function onDiscoveryByPhoneSettingValueChange(phone) {
    const FriendDiscoverySettings = require(3993) /* explicitContentFromProto */.FriendDiscoverySettings;
    const setting = FriendDiscoverySettings.getSetting();
    let obj = require(1403) /* hasFlag */;
    const hasFlagResult = obj.hasFlag(setting, FriendDiscoveryFlags.FIND_BY_EMAIL);
    obj = { phone, email: hasFlagResult };
    const result = importDefault(12042).updateDiscoverability(obj);
  }
};
let result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/DiscoveryByPhoneSetting.tsx");

export default toggle;
