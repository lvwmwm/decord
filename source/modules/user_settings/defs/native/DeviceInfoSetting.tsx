// Module ID: 14266
// Function ID: 107827
// Dependencies: []

// Module 14266
const _module = require(dependencyMap[2]);
const obj = {
  useTitle() {
    const intl = require(dependencyMap[3]).intl;
    return intl.string(require(dependencyMap[3]).t.+ynK0W);
  },
  parent: null,
  IconComponent: require(dependencyMap[4]).MobilePhoneSettingsIcon,
  useTrailing: function useDeviceInfo() {
    const obj = require(dependencyMap[0]);
    const clientInfoString = obj.getClientInfoString(require(dependencyMap[1]).getDeviceInfo());
    const obj2 = require(dependencyMap[1]);
    const obj3 = require(dependencyMap[0]);
    return "" + clientInfoString + " (" + obj3.getClientInfoString(require(dependencyMap[1]).getSystemVersion()) + ")";
  },
  usePredicate: require(dependencyMap[5]).DeveloperMode.useSetting
};
const _module1 = require(dependencyMap[6]);
const result = _module1.fileFinishedImporting("modules/user_settings/defs/native/DeviceInfoSetting.tsx");

export default _module.createStatic({
  useTitle() {
    const intl = require(dependencyMap[3]).intl;
    return intl.string(require(dependencyMap[3]).t.+ynK0W);
  },
  parent: null,
  IconComponent: require(dependencyMap[4]).MobilePhoneSettingsIcon,
  useTrailing: function useDeviceInfo() {
    const obj = require(dependencyMap[0]);
    const clientInfoString = obj.getClientInfoString(require(dependencyMap[1]).getDeviceInfo());
    const obj2 = require(dependencyMap[1]);
    const obj3 = require(dependencyMap[0]);
    return "" + clientInfoString + " (" + obj3.getClientInfoString(require(dependencyMap[1]).getSystemVersion()) + ")";
  },
  usePredicate: require(dependencyMap[5]).DeveloperMode.useSetting
});
