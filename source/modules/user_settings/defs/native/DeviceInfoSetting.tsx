// Module ID: 14742
// Function ID: 14743
// Dependencies: [14741, 4283, 10446, 1236, 14743, 3974, 2]

// Module 14742
import createToggle from "createToggle";

let obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["+ynK0W"]);
  },
  parent: null,
  IconComponent: require("MobilePhoneSettingsIcon").MobilePhoneSettingsIcon,
  useTrailing: function useDeviceInfo() {
    const obj = require(14741) /* getClientInfo */;
    const clientInfoString = obj.getClientInfoString(require(4283) /* DCDDeviceManager */.getDeviceInfo());
    const obj2 = require(4283) /* DCDDeviceManager */;
    const obj3 = require(14741) /* getClientInfo */;
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
    const obj = require(14741) /* getClientInfo */;
    const clientInfoString = obj.getClientInfoString(require(4283) /* DCDDeviceManager */.getDeviceInfo());
    const obj2 = require(4283) /* DCDDeviceManager */;
    const obj3 = require(14741) /* getClientInfo */;
    return "" + clientInfoString + " (" + obj3.getClientInfoString(require(4283) /* DCDDeviceManager */.getSystemVersion()) + ")";
  },
  usePredicate: require("explicitContentFromProto").DeveloperMode.useSetting
});
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DeviceInfoSetting.tsx");

export default createStaticResult;
