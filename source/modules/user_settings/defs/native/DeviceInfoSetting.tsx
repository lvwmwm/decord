// Module ID: 14494
// Function ID: 110651
// Dependencies: [14493, 4145, 10099, 1212, 14495, 3838, 2]

// Module 14494
import createToggle from "createToggle";

let obj = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["+ynK0W"]);
  },
  parent: null,
  IconComponent: require("MobilePhoneSettingsIcon").MobilePhoneSettingsIcon,
  useTrailing: function useDeviceInfo() {
    const obj = require(14493) /* getClientInfoString */;
    const clientInfoString = obj.getClientInfoString(require(4145) /* getSystemVersion */.getDeviceInfo());
    const obj2 = require(4145) /* getSystemVersion */;
    const obj3 = require(14493) /* getClientInfoString */;
    return "" + clientInfoString + " (" + obj3.getClientInfoString(require(4145) /* getSystemVersion */.getSystemVersion()) + ")";
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
    const obj = require(14493) /* getClientInfoString */;
    const clientInfoString = obj.getClientInfoString(require(4145) /* getSystemVersion */.getDeviceInfo());
    const obj2 = require(4145) /* getSystemVersion */;
    const obj3 = require(14493) /* getClientInfoString */;
    return "" + clientInfoString + " (" + obj3.getClientInfoString(require(4145) /* getSystemVersion */.getSystemVersion()) + ")";
  },
  usePredicate: require("explicitContentFromProto").DeveloperMode.useSetting
});
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DeviceInfoSetting.tsx");

export default createStaticResult;
