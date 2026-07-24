// Module ID: 13801
// Function ID: 105777
// Name: toggle
// Dependencies: [7751, 653, 1212, 3803, 1360, 11740, 10127, 2]

// Module 13801 (toggle)
import { FriendDiscoveryFlags } from "ME";
import createToggle from "createToggle";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.dEYpSt);
  },
  parent: require("MobileSetting").MobileSetting.CONTENT_AND_SOCIAL_DISCORD,
  useDescription: function useDiscoveryByPhoneSettingDescription() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.X7pIKN);
  },
  useValue: function useDiscoveryByPhoneSettingValue() {
    const FriendDiscoverySettings = require(3803) /* explicitContentFromProto */.FriendDiscoverySettings;
    const setting = FriendDiscoverySettings.useSetting();
    return require(1360) /* hasFlag */.hasFlag(setting, FriendDiscoveryFlags.FIND_BY_PHONE);
  },
  onValueChange: function onDiscoveryByPhoneSettingValueChange(phone) {
    const FriendDiscoverySettings = require(3803) /* explicitContentFromProto */.FriendDiscoverySettings;
    const setting = FriendDiscoverySettings.getSetting();
    let obj = require(1360) /* hasFlag */;
    const hasFlagResult = obj.hasFlag(setting, FriendDiscoveryFlags.FIND_BY_EMAIL);
    obj = { phone, email: hasFlagResult };
    const result = importDefault(11740).updateDiscoverability(obj);
  }
});
let obj = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.dEYpSt);
  },
  parent: require("MobileSetting").MobileSetting.CONTENT_AND_SOCIAL_DISCORD,
  useDescription: function useDiscoveryByPhoneSettingDescription() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.X7pIKN);
  },
  useValue: function useDiscoveryByPhoneSettingValue() {
    const FriendDiscoverySettings = require(3803) /* explicitContentFromProto */.FriendDiscoverySettings;
    const setting = FriendDiscoverySettings.useSetting();
    return require(1360) /* hasFlag */.hasFlag(setting, FriendDiscoveryFlags.FIND_BY_PHONE);
  },
  onValueChange: function onDiscoveryByPhoneSettingValueChange(phone) {
    const FriendDiscoverySettings = require(3803) /* explicitContentFromProto */.FriendDiscoverySettings;
    const setting = FriendDiscoverySettings.getSetting();
    let obj = require(1360) /* hasFlag */;
    const hasFlagResult = obj.hasFlag(setting, FriendDiscoveryFlags.FIND_BY_EMAIL);
    obj = { phone, email: hasFlagResult };
    const result = importDefault(11740).updateDiscoverability(obj);
  }
};
let result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/DiscoveryByPhoneSetting.tsx");

export default toggle;
