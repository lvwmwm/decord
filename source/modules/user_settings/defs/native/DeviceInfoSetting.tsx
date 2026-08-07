// Module ID: 14672
// Function ID: 14673
// Dependencies: [14671, 4282, 10380, 1236, 14673, 3974, 2]

// Module 14672
import createToggle from "createToggle";

let obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["+ynK0W"]);
  },
  parent: null,
  IconComponent: require("MobilePhoneSettingsIcon").MobilePhoneSettingsIcon,
  useTrailing: function useDeviceInfo() {
    const obj = require(14671) /* getClientInfo */;
    const clientInfoString = obj.getClientInfoString(require(4282) /* DCDDeviceManager */.getDeviceInfo());
    const obj2 = require(4282) /* DCDDeviceManager */;
    const obj3 = require(14671) /* getClientInfo */;
    return "" + clientInfoString + " (" + obj3.getClientInfoString(require(4282) /* DCDDeviceManager */.getSystemVersion()) + ")";
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
    const obj = require(14671) /* getClientInfo */;
    const clientInfoString = obj.getClientInfoString(require(4282) /* DCDDeviceManager */.getDeviceInfo());
    const obj2 = require(4282) /* DCDDeviceManager */;
    const obj3 = require(14671) /* getClientInfo */;
    return "" + clientInfoString + " (" + obj3.getClientInfoString(require(4282) /* DCDDeviceManager */.getSystemVersion()) + ")";
  },
  usePredicate: require("explicitContentFromProto").DeveloperMode.useSetting
});
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DeviceInfoSetting.tsx");

export default createStaticResult;
