// Module ID: 14685
// Function ID: 14686
// Name: toggle
// Dependencies: [8084, 10452, 1236, 3993, 14686, 500, 2]

// Module 14685 (toggle)
import createToggle from "createToggle";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.V6D0wU);
  },
  parent: require("MobileSetting").MobileSetting.NOTIFICATIONS,
  useValue: require("explicitContentFromProto").NativePhoneIntegrationEnabled.useSetting,
  onValueChange: require("explicitContentFromProto").NativePhoneIntegrationEnabled.updateSetting,
  usePredicate() {
    let enabled = importDefault(14686).useConfig({ location: "IOSNativePhoneIntegrationSetting" }).enabled;
    if (enabled) {
      enabled = require(500) /* set */.isIOS();
      const obj2 = require(500) /* set */;
    }
    return enabled;
  }
});
const obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.V6D0wU);
  },
  parent: require("MobileSetting").MobileSetting.NOTIFICATIONS,
  useValue: require("explicitContentFromProto").NativePhoneIntegrationEnabled.useSetting,
  onValueChange: require("explicitContentFromProto").NativePhoneIntegrationEnabled.updateSetting,
  usePredicate() {
    let enabled = importDefault(14686).useConfig({ location: "IOSNativePhoneIntegrationSetting" }).enabled;
    if (enabled) {
      enabled = require(500) /* set */.isIOS();
      const obj2 = require(500) /* set */;
    }
    return enabled;
  }
};
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/IOSNativePhoneIntegrationSetting.tsx");

export default toggle;
