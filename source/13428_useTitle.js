// Module ID: 13428
// Function ID: 102011
// Name: useTitle
// Dependencies: []

// Module 13428 (useTitle)
const _module = require(dependencyMap[1]);
const obj = {
  -1383464956: null,
  -1739522044: null,
  1374118307: null,
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
