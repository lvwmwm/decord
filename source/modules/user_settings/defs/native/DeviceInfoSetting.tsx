// Module ID: 14388
// Function ID: 110023
// Dependencies: [14387, 4110, 10095, 1212, 14389, 3803, 2]

// Module 14388
import createToggle from "createToggle";

let obj = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["+ynK0W"]);
  },
  parent: null,
  IconComponent: require("MobilePhoneSettingsIcon").MobilePhoneSettingsIcon,
  useTrailing: function useDeviceInfo() {
    const obj = require(14387) /* getClientInfoString */;
    const clientInfoString = obj.getClientInfoString(require(4110) /* getSystemVersion */.getDeviceInfo());
    const obj2 = require(4110) /* getSystemVersion */;
    const obj3 = require(14387) /* getClientInfoString */;
    return "" + clientInfoString + " (" + obj3.getClientInfoString(require(4110) /* getSystemVersion */.getSystemVersion()) + ")";
  },
  usePredicate: require("explicitContentFromProto").DeveloperMode.useSetting
};
const createStaticResult = createToggle.createStatic({
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["+ynK0W"]);
  },
  parent: null,
  IconComponent: require("MobilePhoneSettingsIcon").MobilePhoneSettingsIcon,
  useTrailing: function useDeviceInfo() {
    const obj = require(14387) /* getClientInfoString */;
    const clientInfoString = obj.getClientInfoString(require(4110) /* getSystemVersion */.getDeviceInfo());
    const obj2 = require(4110) /* getSystemVersion */;
    const obj3 = require(14387) /* getClientInfoString */;
    return "" + clientInfoString + " (" + obj3.getClientInfoString(require(4110) /* getSystemVersion */.getSystemVersion()) + ")";
  },
  usePredicate: require("explicitContentFromProto").DeveloperMode.useSetting
});
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DeviceInfoSetting.tsx");

export default createStaticResult;
