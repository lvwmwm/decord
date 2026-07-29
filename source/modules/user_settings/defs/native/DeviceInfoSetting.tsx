// Module ID: 14519
// Function ID: 14520
// Dependencies: [14518, 4169, 10120, 1236, 14520, 3862, 2]

// Module 14519
import createToggle from "createToggle";

let obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["+ynK0W"]);
  },
  parent: null,
  IconComponent: require("MobilePhoneSettingsIcon").MobilePhoneSettingsIcon,
  useTrailing: function useDeviceInfo() {
    const obj = require(14518) /* getClientInfo */;
    const clientInfoString = obj.getClientInfoString(require(4169) /* DCDDeviceManager */.getDeviceInfo());
    const obj2 = require(4169) /* DCDDeviceManager */;
    const obj3 = require(14518) /* getClientInfo */;
    return "" + clientInfoString + " (" + obj3.getClientInfoString(require(4169) /* DCDDeviceManager */.getSystemVersion()) + ")";
  },
  usePredicate: require("explicitContentFromProto").DeveloperMode.useSetting
};
const createStaticResult = createToggle.createStatic({
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["+ynK0W"]);
  },
  parent: null,
  IconComponent: require("MobilePhoneSettingsIcon").MobilePhoneSettingsIcon,
  useTrailing: function useDeviceInfo() {
    const obj = require(14518) /* getClientInfo */;
    const clientInfoString = obj.getClientInfoString(require(4169) /* DCDDeviceManager */.getDeviceInfo());
    const obj2 = require(4169) /* DCDDeviceManager */;
    const obj3 = require(14518) /* getClientInfo */;
    return "" + clientInfoString + " (" + obj3.getClientInfoString(require(4169) /* DCDDeviceManager */.getSystemVersion()) + ")";
  },
  usePredicate: require("explicitContentFromProto").DeveloperMode.useSetting
});
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DeviceInfoSetting.tsx");

export default createStaticResult;
