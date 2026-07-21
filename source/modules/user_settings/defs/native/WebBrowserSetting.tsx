// Module ID: 14182
// Function ID: 107346
// Name: route
// Dependencies: []

// Module 14182 (route)
const _module = require(dependencyMap[1]);
let obj = {
  useTitle() {
    const intl = require(dependencyMap[2]).intl;
    return intl.string(require(dependencyMap[2]).t.C+DkPu);
  },
  usePredicate() {
    return require(dependencyMap[3]).useWebBrowserSettingOptions().length > 1;
  },
  parent: null,
  IconComponent: require(dependencyMap[4]).GlobeEarthIcon,
  screen: obj
};
obj = {
  route: require(dependencyMap[0]).UserSettingsSections.BROWSER,
  getComponent() {
    return require(dependencyMap[5]).default;
  }
};
const route = _module.createRoute(obj);
const _module1 = require(dependencyMap[6]);
const result = _module1.fileFinishedImporting("modules/user_settings/defs/native/WebBrowserSetting.tsx");

export default route;
