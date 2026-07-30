// Module ID: 14515
// Function ID: 14516
// Dependencies: [14514, 4169, 10116, 1236, 14516, 3862, 2]

// Module 14515
import createToggle from "createToggle";

let obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["+ynK0W"]);
  },
  parent: null,
  IconComponent: require("MobilePhoneSettingsIcon").MobilePhoneSettingsIcon,
  useTrailing: function useDeviceInfo() {
    const obj = require(14514) /* getClientInfo */;
    const clientInfoString = obj.getClientInfoString(require(4169) /* DCDDeviceManager */.getDeviceInfo());
    const obj2 = require(4169) /* DCDDeviceManager */;
    const obj3 = require(14514) /* getClientInfo */;
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
    const obj = require(14514) /* getClientInfo */;
    const clientInfoString = obj.getClientInfoString(require(4169) /* DCDDeviceManager */.getDeviceInfo());
    const obj2 = require(4169) /* DCDDeviceManager */;
    const obj3 = require(14514) /* getClientInfo */;
    return "" + clientInfoString + " (" + obj3.getClientInfoString(require(4169) /* DCDDeviceManager */.getSystemVersion()) + ")";
  },
  usePredicate: require("explicitContentFromProto").DeveloperMode.useSetting
});
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DeviceInfoSetting.tsx");

export default createStaticResult;
