// Module ID: 14411
// Function ID: 110198
// Name: route
// Dependencies: [7733, 653, 3838, 1282, 1212, 10099, 14412, 2]

// Module 14411 (route)
import createToggle from "createToggle";

obj = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["D/Dkcd"]);
  },
  parent: require("MobileSetting").MobileSetting.CHAT,
  useTrailing: function useSwipeRightToLeftSettingTrailing() {
    const SwipeRightToLeftModeSetting = require(3838) /* explicitContentFromProto */.SwipeRightToLeftModeSetting;
    const setting = SwipeRightToLeftModeSetting.useSetting();
    if (setting === require(1282) /* _callSuper */.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_REPLY) {
      const intl2 = require(1212) /* getSystemLocale */.intl;
      let stringResult = intl2.string(require(1212) /* getSystemLocale */.t["3tYNDS"]);
    } else {
      stringResult = null;
      if (setting === require(1282) /* _callSuper */.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_CHANNEL_DETAILS) {
        const intl = require(1212) /* getSystemLocale */.intl;
        stringResult = intl.string(require(1212) /* getSystemLocale */.t["6eXLcJ"]);
      }
    }
    return stringResult;
  },
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.SWIPE_RIGHT_TO_LEFT,
  getComponent() {
    return require(14412) /* UserSettingsSwipeRightToLeft */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("explicitContentFromProto").fileFinishedImporting("modules/user_settings/defs/native/SwipeRightToLeftSetting.tsx");

export default route;
