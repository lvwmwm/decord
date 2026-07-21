// Module ID: 13555
// Function ID: 102807
// Name: route
// Dependencies: []

// Module 13555 (route)
const _module = require(dependencyMap[2]);
let obj = {
  useTitle() {
    const intl = require(dependencyMap[3]).intl;
    return intl.string(require(dependencyMap[3]).t.CIGa+7);
  },
  parent: require(dependencyMap[0]).MobileSetting.ACCOUNT,
  screen: obj
};
obj = {
  route: require(dependencyMap[1]).UserSettingsSections.ACCOUNT_CHANGE_PASSWORD,
  getComponent() {
    return require(dependencyMap[4]).default;
  }
};
const route = _module.createRoute(obj);
const _module1 = require(dependencyMap[5]);
const result = _module1.fileFinishedImporting("modules/user_settings/defs/native/AccountChangePasswordSetting.tsx");

export default route;
