// Module ID: 14821
// Function ID: 14822
// Dependencies: [14820, 4322, 10407, 1236, 14822, 4034, 2]

// Module 14821
import createToggle from "createToggle";

let obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["+ynK0W"]);
  },
  parent: null,
  IconComponent: require("MobilePhoneSettingsIcon").MobilePhoneSettingsIcon,
  useTrailing: function useDeviceInfo() {
    const obj = require(14820) /* getClientInfo */;
    const clientInfoString = obj.getClientInfoString(require(4322) /* DCDDeviceManager */.getDeviceInfo());
    const obj2 = require(4322) /* DCDDeviceManager */;
    const obj3 = require(14820) /* getClientInfo */;
    return "" + clientInfoString + " (" + obj3.getClientInfoString(require(4322) /* DCDDeviceManager */.getSystemVersion()) + ")";
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
    const obj = require(14820) /* getClientInfo */;
    const clientInfoString = obj.getClientInfoString(require(4322) /* DCDDeviceManager */.getDeviceInfo());
    const obj2 = require(4322) /* DCDDeviceManager */;
    const obj3 = require(14820) /* getClientInfo */;
    return "" + clientInfoString + " (" + obj3.getClientInfoString(require(4322) /* DCDDeviceManager */.getSystemVersion()) + ")";
  },
  usePredicate: require("explicitContentFromProto").DeveloperMode.useSetting
});
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DeviceInfoSetting.tsx");

export default createStaticResult;
