// Module ID: 13437
// Function ID: 102056
// Name: useTitle
// Dependencies: []

// Module 13437 (useTitle)
const _module = require(dependencyMap[1]);
const obj = {
  y: null,
  button_action: 16,
  y: 5,
  useTitle() {
    const intl = require(dependencyMap[2]).intl;
    return intl.string(require(dependencyMap[2]).t.LYju5J);
  },
  screen: {
    route: require(dependencyMap[0]).UserSettingsSections.PROFILE_CUSTOMIZATION,
    getComponent() {
      return require(dependencyMap[3]).default;
    }
  }
};
const route = _module.createRoute(obj);
const _module1 = require(dependencyMap[4]);
const result = _module1.fileFinishedImporting("modules/user_settings/defs/native/ProfileCustomizationSetting.tsx");

export default route;
