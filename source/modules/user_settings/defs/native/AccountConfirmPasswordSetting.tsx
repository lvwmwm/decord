// Module ID: 13568
// Function ID: 102887
// Name: route
// Dependencies: [0, 0, 0, 0]

// Module 13568 (route)
let obj = {
  useTitle() {
    const intl = require(dependencyMap[3]).intl;
    return intl.string(require(dependencyMap[3]).t.7qKDrE);
  },
  parent: require("__exportStarResult1").MobileSetting.ACCOUNT,
  unsearchable: true,
  screen: obj
};
obj = {
  route: require("__exportStarResult1").UserSettingsSections.ACCOUNT_CONFIRM_PASSWORD,
  getComponent() {
    return require(dependencyMap[4]).UserSettingsConfirmPasswordWrapped;
  }
};
const route = require("__exportStarResult1").createRoute(obj);
const _module1 = require(dependencyMap[5]);
const result = _module1.fileFinishedImporting("modules/user_settings/defs/native/AccountConfirmPasswordSetting.tsx");

export default route;
