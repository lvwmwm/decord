// Module ID: 14382
// Function ID: 110101
// Name: toggle
// Dependencies: [7697, 10059, 1212, 3804, 14383, 477, 2]

// Module 14382 (toggle)
import createToggle from "createToggle";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.V6D0wU);
  },
  parent: require("MobileSetting").MobileSetting.NOTIFICATIONS,
  useValue: require("explicitContentFromProto").NativePhoneIntegrationEnabled.useSetting,
  onValueChange: require("explicitContentFromProto").NativePhoneIntegrationEnabled.updateSetting,
  usePredicate() {
    let enabled = importDefault(14383).useConfig({ location: "IOSNativePhoneIntegrationSetting" }).enabled;
    if (enabled) {
      enabled = require(477) /* set */.isIOS();
      const obj2 = require(477) /* set */;
    }
    return enabled;
  }
});
const obj = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.V6D0wU);
  },
  parent: require("MobileSetting").MobileSetting.NOTIFICATIONS,
  useValue: require("explicitContentFromProto").NativePhoneIntegrationEnabled.useSetting,
  onValueChange: require("explicitContentFromProto").NativePhoneIntegrationEnabled.updateSetting,
  usePredicate() {
    let enabled = importDefault(14383).useConfig({ location: "IOSNativePhoneIntegrationSetting" }).enabled;
    if (enabled) {
      enabled = require(477) /* set */.isIOS();
      const obj2 = require(477) /* set */;
    }
    return enabled;
  }
};
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/IOSNativePhoneIntegrationSetting.tsx");

export default toggle;
