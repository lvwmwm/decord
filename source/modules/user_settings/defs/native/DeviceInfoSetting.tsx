// Module ID: 14744
// Function ID: 14745
// Dependencies: [14743, 4283, 10447, 1236, 14745, 3974, 2]

// Module 14744
import createToggle from "createToggle";

let obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["+ynK0W"]);
  },
  parent: null,
  IconComponent: require("MobilePhoneSettingsIcon").MobilePhoneSettingsIcon,
  useTrailing: function useDeviceInfo() {
    const obj = require(14743) /* getClientInfo */;
    const clientInfoString = obj.getClientInfoString(require(4283) /* DCDDeviceManager */.getDeviceInfo());
    const obj2 = require(4283) /* DCDDeviceManager */;
    const obj3 = require(14743) /* getClientInfo */;
    return "" + clientInfoString + " (" + obj3.getClientInfoString(require(4283) /* DCDDeviceManager */.getSystemVersion()) + ")";
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
    const obj = require(14743) /* getClientInfo */;
    const clientInfoString = obj.getClientInfoString(require(4283) /* DCDDeviceManager */.getDeviceInfo());
    const obj2 = require(4283) /* DCDDeviceManager */;
    const obj3 = require(14743) /* getClientInfo */;
    return "" + clientInfoString + " (" + obj3.getClientInfoString(require(4283) /* DCDDeviceManager */.getSystemVersion()) + ")";
  },
  usePredicate: require("explicitContentFromProto").DeveloperMode.useSetting
});
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DeviceInfoSetting.tsx");

export default createStaticResult;
