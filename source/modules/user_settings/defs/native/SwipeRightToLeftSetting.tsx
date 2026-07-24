// Module ID: 14355
// Function ID: 109893
// Name: route
// Dependencies: [7751, 653, 3803, 1282, 1212, 10127, 14356, 2]

// Module 14355 (route)
import createToggle from "createToggle";

obj = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["D/Dkcd"]);
  },
  parent: require("MobileSetting").MobileSetting.CHAT,
  useTrailing: function useSwipeRightToLeftSettingTrailing() {
    const SwipeRightToLeftModeSetting = require(3803) /* explicitContentFromProto */.SwipeRightToLeftModeSetting;
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
    return require(14356) /* UserSettingsSwipeRightToLeft */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("explicitContentFromProto").fileFinishedImporting("modules/user_settings/defs/native/SwipeRightToLeftSetting.tsx");

export default route;
