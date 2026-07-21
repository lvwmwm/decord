// Module ID: 14426
// Function ID: 108775
// Name: route
// Dependencies: []

// Module 14426 (route)
const _module = require(dependencyMap[2]);
let obj = {
  useTitle() {
    const intl = require(dependencyMap[3]).intl;
    return intl.string(require(dependencyMap[3]).t.Hj/But);
  },
  IconComponent: require(dependencyMap[4]).ImageWarningIcon,
  parent: require(dependencyMap[0]).MobileSetting.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  screen: obj,
  unsearchable: true
};
obj = {
  route: require(dependencyMap[1]).UserSettingsSections.FAMILY_CENTER_PARENTAL_CONTROLS_SENSITIVE_CONTENT_FILTERS,
  getComponent() {
    return require(dependencyMap[5]).default;
  }
};
const route = _module.createRoute(obj);
const _module1 = require(dependencyMap[6]);
const result = _module1.fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsSensitiveContentFilterSetting.tsx");

export default route;
