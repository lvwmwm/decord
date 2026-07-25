// Module ID: 14449
// Function ID: 110473
// Dependencies: [14448, 4111, 10059, 1212, 14450, 3804, 2]

// Module 14449
import createToggle from "createToggle";

let obj = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["+ynK0W"]);
  },
  parent: null,
  IconComponent: require("MobilePhoneSettingsIcon").MobilePhoneSettingsIcon,
  useTrailing: function useDeviceInfo() {
    const obj = require(14448) /* getClientInfoString */;
    const clientInfoString = obj.getClientInfoString(require(4111) /* getSystemVersion */.getDeviceInfo());
    const obj2 = require(4111) /* getSystemVersion */;
    const obj3 = require(14448) /* getClientInfoString */;
    return "" + clientInfoString + " (" + obj3.getClientInfoString(require(4111) /* getSystemVersion */.getSystemVersion()) + ")";
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
    const obj = require(14448) /* getClientInfoString */;
    const clientInfoString = obj.getClientInfoString(require(4111) /* getSystemVersion */.getDeviceInfo());
    const obj2 = require(4111) /* getSystemVersion */;
    const obj3 = require(14448) /* getClientInfoString */;
    return "" + clientInfoString + " (" + obj3.getClientInfoString(require(4111) /* getSystemVersion */.getSystemVersion()) + ")";
  },
  usePredicate: require("explicitContentFromProto").DeveloperMode.useSetting
});
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DeviceInfoSetting.tsx");

export default createStaticResult;
