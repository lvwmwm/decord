// Module ID: 13718
// Function ID: 103817
// Name: route
// Dependencies: []

// Module 13718 (route)
const _module = require(dependencyMap[1]);
let obj = {
  useTitle() {
    const intl = require(dependencyMap[2]).intl;
    return intl.string(require(dependencyMap[2]).t.+1h0k/);
  },
  parent: null,
  IconComponent: require(dependencyMap[3]).LaptopPhoneIcon,
  screen: obj
};
obj = {
  route: require(dependencyMap[0]).UserSettingsSections.SESSIONS,
  getComponent() {
    return require(dependencyMap[4]).default;
  }
};
const route = _module.createRoute(obj);
const _module1 = require(dependencyMap[5]);
const result = _module1.fileFinishedImporting("modules/user_settings/defs/native/DevicesSetting.tsx");

export default route;
