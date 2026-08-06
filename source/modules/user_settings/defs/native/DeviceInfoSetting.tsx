// Module ID: 14656
// Function ID: 14657
// Dependencies: [14655, 4265, 10364, 1236, 14657, 3957, 2]

// Module 14656
import createToggle from "createToggle";

let obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["+ynK0W"]);
  },
  parent: null,
  IconComponent: require("MobilePhoneSettingsIcon").MobilePhoneSettingsIcon,
  useTrailing: function useDeviceInfo() {
    const obj = require(14655) /* getClientInfo */;
    const clientInfoString = obj.getClientInfoString(require(4265) /* DCDDeviceManager */.getDeviceInfo());
    const obj2 = require(4265) /* DCDDeviceManager */;
    const obj3 = require(14655) /* getClientInfo */;
    return "" + clientInfoString + " (" + obj3.getClientInfoString(require(4265) /* DCDDeviceManager */.getSystemVersion()) + ")";
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
    const obj = require(14655) /* getClientInfo */;
    const clientInfoString = obj.getClientInfoString(require(4265) /* DCDDeviceManager */.getDeviceInfo());
    const obj2 = require(4265) /* DCDDeviceManager */;
    const obj3 = require(14655) /* getClientInfo */;
    return "" + clientInfoString + " (" + obj3.getClientInfoString(require(4265) /* DCDDeviceManager */.getSystemVersion()) + ")";
  },
  usePredicate: require("explicitContentFromProto").DeveloperMode.useSetting
});
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DeviceInfoSetting.tsx");

export default createStaticResult;
