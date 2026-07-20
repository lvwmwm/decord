// Module ID: 13542
// Function ID: 102756
// Name: route
// Dependencies: []

// Module 13542 (route)
const _module = require(dependencyMap[2]);
let obj = {
  useTitle() {
    const intl = require(dependencyMap[3]).intl;
    return intl.string(require(dependencyMap[3]).t.piqs0o);
  },
  parent: require(dependencyMap[0]).MobileSetting.ACCOUNT,
  useTrailing() {
    const intl = require(dependencyMap[3]).intl;
    const intl2 = require(dependencyMap[3]).intl;
    return "" + intl.string(require(dependencyMap[3]).t.XxRj7f) + " \u2022 " + intl2.string(importDefault(dependencyMap[4]).FTawSP);
  },
  usePredicate: require(dependencyMap[5]).useShowAssignedAgeGroupSettings,
  screen: obj
};
obj = {
  route: require(dependencyMap[1]).UserSettingsSections.AGE_GROUP,
  getComponent() {
    return require(dependencyMap[6]).default;
  }
};
const route = _module.createRoute(obj);
const _module1 = require(dependencyMap[7]);
const result = _module1.fileFinishedImporting("modules/user_settings/defs/native/AccountAgeGroupAssignedAdultSetting.tsx");

export default route;
