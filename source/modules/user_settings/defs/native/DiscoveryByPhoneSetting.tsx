// Module ID: 14022
// Function ID: 14023
// Name: toggle
// Dependencies: [8022, 676, 1236, 3974, 1384, 11972, 10380, 2]

// Module 14022 (toggle)
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
    const FriendDiscoverySettings = require(3974) /* explicitContentFromProto */.FriendDiscoverySettings;
    const setting = FriendDiscoverySettings.useSetting();
    return require(1384) /* hasFlag */.hasFlag(setting, FriendDiscoveryFlags.FIND_BY_PHONE);
  },
  onValueChange: function onDiscoveryByPhoneSettingValueChange(phone) {
    const FriendDiscoverySettings = require(3974) /* explicitContentFromProto */.FriendDiscoverySettings;
    const setting = FriendDiscoverySettings.getSetting();
    let obj = require(1384) /* hasFlag */;
    const hasFlagResult = obj.hasFlag(setting, FriendDiscoveryFlags.FIND_BY_EMAIL);
    obj = { phone, email: hasFlagResult };
    const result = importDefault(11972).updateDiscoverability(obj);
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
    const FriendDiscoverySettings = require(3974) /* explicitContentFromProto */.FriendDiscoverySettings;
    const setting = FriendDiscoverySettings.useSetting();
    return require(1384) /* hasFlag */.hasFlag(setting, FriendDiscoveryFlags.FIND_BY_PHONE);
  },
  onValueChange: function onDiscoveryByPhoneSettingValueChange(phone) {
    const FriendDiscoverySettings = require(3974) /* explicitContentFromProto */.FriendDiscoverySettings;
    const setting = FriendDiscoverySettings.getSetting();
    let obj = require(1384) /* hasFlag */;
    const hasFlagResult = obj.hasFlag(setting, FriendDiscoveryFlags.FIND_BY_EMAIL);
    obj = { phone, email: hasFlagResult };
    const result = importDefault(11972).updateDiscoverability(obj);
  }
};
let result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/DiscoveryByPhoneSetting.tsx");

export default toggle;
