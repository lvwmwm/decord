// Module ID: 14438
// Function ID: 110346
// Dependencies: [14437, 4110, 10127, 1212, 14439, 3803, 2]

// Module 14438
import createToggle from "createToggle";

let obj = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["+ynK0W"]);
  },
  parent: null,
  IconComponent: require("MobilePhoneSettingsIcon").MobilePhoneSettingsIcon,
  useTrailing: function useDeviceInfo() {
    const obj = require(14437) /* getClientInfoString */;
    const clientInfoString = obj.getClientInfoString(require(4110) /* getSystemVersion */.getDeviceInfo());
    const obj2 = require(4110) /* getSystemVersion */;
    const obj3 = require(14437) /* getClientInfoString */;
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
    const obj = require(14437) /* getClientInfoString */;
    const clientInfoString = obj.getClientInfoString(require(4110) /* getSystemVersion */.getDeviceInfo());
    const obj2 = require(4110) /* getSystemVersion */;
    const obj3 = require(14437) /* getClientInfoString */;
    return "" + clientInfoString + " (" + obj3.getClientInfoString(require(4110) /* getSystemVersion */.getSystemVersion()) + ")";
  },
  usePredicate: require("explicitContentFromProto").DeveloperMode.useSetting
});
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DeviceInfoSetting.tsx");

export default createStaticResult;
