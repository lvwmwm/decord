// Module ID: 14618
// Function ID: 14619
// Dependencies: [14617, 4235, 10333, 1236, 14619, 3928, 2]

// Module 14618
import createToggle from "createToggle";

let obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["+ynK0W"]);
  },
  parent: null,
  IconComponent: require("MobilePhoneSettingsIcon").MobilePhoneSettingsIcon,
  useTrailing: function useDeviceInfo() {
    const obj = require(14617) /* getClientInfo */;
    const clientInfoString = obj.getClientInfoString(require(4235) /* DCDDeviceManager */.getDeviceInfo());
    const obj2 = require(4235) /* DCDDeviceManager */;
    const obj3 = require(14617) /* getClientInfo */;
    return "" + clientInfoString + " (" + obj3.getClientInfoString(require(4235) /* DCDDeviceManager */.getSystemVersion()) + ")";
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
    const obj = require(14617) /* getClientInfo */;
    const clientInfoString = obj.getClientInfoString(require(4235) /* DCDDeviceManager */.getDeviceInfo());
    const obj2 = require(4235) /* DCDDeviceManager */;
    const obj3 = require(14617) /* getClientInfo */;
    return "" + clientInfoString + " (" + obj3.getClientInfoString(require(4235) /* DCDDeviceManager */.getSystemVersion()) + ")";
  },
  usePredicate: require("explicitContentFromProto").DeveloperMode.useSetting
});
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DeviceInfoSetting.tsx");

export default createStaticResult;
