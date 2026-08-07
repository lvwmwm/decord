// Module ID: 14023
// Function ID: 14024
// Name: toggle
// Dependencies: [8022, 676, 1236, 3974, 1384, 11972, 10380, 2]

// Module 14023 (toggle)
import { FriendDiscoveryFlags } from "ME";
import createToggle from "createToggle";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["w/qqKK"]);
  },
  parent: require("MobileSetting").MobileSetting.CONTENT_AND_SOCIAL_DISCORD,
  useDescription: function useDiscoveryByEmailSettingDescription() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.ilGsHE);
  },
  useValue: function useDiscoveryByEmailSettingValue() {
    const FriendDiscoverySettings = require(3974) /* explicitContentFromProto */.FriendDiscoverySettings;
    const setting = FriendDiscoverySettings.useSetting();
    return require(1384) /* hasFlag */.hasFlag(setting, FriendDiscoveryFlags.FIND_BY_EMAIL);
  },
  onValueChange: function onDiscoveryByEmailSettingValueChange(email) {
    const FriendDiscoverySettings = require(3974) /* explicitContentFromProto */.FriendDiscoverySettings;
    const setting = FriendDiscoverySettings.getSetting();
    let obj = require(1384) /* hasFlag */;
    const hasFlagResult = obj.hasFlag(setting, FriendDiscoveryFlags.FIND_BY_PHONE);
    obj = { phone: hasFlagResult, email };
    const result = importDefault(11972).updateDiscoverability(obj);
  }
});
let obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["w/qqKK"]);
  },
  parent: require("MobileSetting").MobileSetting.CONTENT_AND_SOCIAL_DISCORD,
  useDescription: function useDiscoveryByEmailSettingDescription() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.ilGsHE);
  },
  useValue: function useDiscoveryByEmailSettingValue() {
    const FriendDiscoverySettings = require(3974) /* explicitContentFromProto */.FriendDiscoverySettings;
    const setting = FriendDiscoverySettings.useSetting();
    return require(1384) /* hasFlag */.hasFlag(setting, FriendDiscoveryFlags.FIND_BY_EMAIL);
  },
  onValueChange: function onDiscoveryByEmailSettingValueChange(email) {
    const FriendDiscoverySettings = require(3974) /* explicitContentFromProto */.FriendDiscoverySettings;
    const setting = FriendDiscoverySettings.getSetting();
    let obj = require(1384) /* hasFlag */;
    const hasFlagResult = obj.hasFlag(setting, FriendDiscoveryFlags.FIND_BY_PHONE);
    obj = { phone: hasFlagResult, email };
    const result = importDefault(11972).updateDiscoverability(obj);
  }
};
let result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/DiscoveryByEmailSetting.tsx");

export default toggle;
