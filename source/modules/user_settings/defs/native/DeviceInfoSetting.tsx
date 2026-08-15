// Module ID: 14866
// Function ID: 14867
// Dependencies: [14865, 4354, 10669, 1236, 14867, 4066, 2]

// Module 14866
import createToggle from "createToggle";

let obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["+ynK0W"]);
  },
  parent: null,
  IconComponent: require("MobilePhoneSettingsIcon").MobilePhoneSettingsIcon,
  useTrailing: function useDeviceInfo() {
    const obj = require(14865) /* getClientInfo */;
    const clientInfoString = obj.getClientInfoString(require(4354) /* DCDDeviceManager */.getDeviceInfo());
    const obj2 = require(4354) /* DCDDeviceManager */;
    const obj3 = require(14865) /* getClientInfo */;
    return "" + clientInfoString + " (" + obj3.getClientInfoString(require(4354) /* DCDDeviceManager */.getSystemVersion()) + ")";
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
    const obj = require(14865) /* getClientInfo */;
    const clientInfoString = obj.getClientInfoString(require(4354) /* DCDDeviceManager */.getDeviceInfo());
    const obj2 = require(4354) /* DCDDeviceManager */;
    const obj3 = require(14865) /* getClientInfo */;
    return "" + clientInfoString + " (" + obj3.getClientInfoString(require(4354) /* DCDDeviceManager */.getSystemVersion()) + ")";
  },
  usePredicate: require("explicitContentFromProto").DeveloperMode.useSetting
});
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DeviceInfoSetting.tsx");

export default createStaticResult;
