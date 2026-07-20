// Module ID: 13552
// Function ID: 102809
// Name: route
// Dependencies: [0, 0, 0, 0]

// Module 13552 (route)
import result from "result";

let obj = {
  useTitle() {
    const intl = require(dependencyMap[3]).intl;
    return intl.string(require(dependencyMap[3]).t.7qKDrE);
  },
  parent: require("result").MobileSetting.ACCOUNT,
  unsearchable: true,
  screen: obj
};
obj = {
  route: require("result").UserSettingsSections.ACCOUNT_CONFIRM_PASSWORD,
  getComponent() {
    return require(dependencyMap[4]).UserSettingsConfirmPasswordWrapped;
  }
};
const route = result.createRoute(obj);
const _module1 = require(dependencyMap[5]);
result = _module1.fileFinishedImporting("modules/user_settings/defs/native/AccountConfirmPasswordSetting.tsx");

export default route;
