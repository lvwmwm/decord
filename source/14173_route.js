// Module ID: 14173
// Function ID: 107316
// Name: route
// Dependencies: []

// Module 14173 (route)
const _module = require(dependencyMap[5]);
let obj = {
  useTitle() {
    const intl = require(dependencyMap[4]).intl;
    return intl.string(require(dependencyMap[4]).t.D/Dkcd);
  },
  parent: require(dependencyMap[0]).MobileSetting.CHAT,
  useTrailing: function useSwipeRightToLeftSettingTrailing() {
    const SwipeRightToLeftModeSetting = require(dependencyMap[2]).SwipeRightToLeftModeSetting;
    const setting = SwipeRightToLeftModeSetting.useSetting();
    if (setting === require(dependencyMap[3]).SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_REPLY) {
      const intl2 = require(dependencyMap[4]).intl;
      let stringResult = intl2.string(require(dependencyMap[4]).t.3tYNDS);
    } else {
      stringResult = null;
      if (setting === require(dependencyMap[3]).SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_CHANNEL_DETAILS) {
        const intl = require(dependencyMap[4]).intl;
        stringResult = intl.string(require(dependencyMap[4]).t.6eXLcJ);
      }
    }
    return stringResult;
  },
  screen: obj
};
obj = {
  route: require(dependencyMap[1]).UserSettingsSections.SWIPE_RIGHT_TO_LEFT,
  getComponent() {
    return require(dependencyMap[6]).default;
  }
};
const route = _module.createRoute(obj);
const _module1 = require(dependencyMap[7]);
const result = _module1.fileFinishedImporting("modules/user_settings/defs/native/SwipeRightToLeftSetting.tsx");

export default route;
