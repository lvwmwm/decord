// Module ID: 14669
// Function ID: 14670
// Name: route
// Dependencies: [8084, 676, 3993, 1306, 1236, 10452, 14670, 2]

// Module 14669 (route)
import createToggle from "createToggle";

obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["D/Dkcd"]);
  },
  parent: require("MobileSetting").MobileSetting.CHAT,
  useTrailing: function useSwipeRightToLeftSettingTrailing() {
    const SwipeRightToLeftModeSetting = require(3993) /* explicitContentFromProto */.SwipeRightToLeftModeSetting;
    const setting = SwipeRightToLeftModeSetting.useSetting();
    if (setting === require(1306) /* create */.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_REPLY) {
      const intl2 = tmp(1236).intl;
      let stringResult = intl2.string(tmp(1236).t["3tYNDS"]);
    } else {
      stringResult = null;
      if (setting === tmp(1306).SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_CHANNEL_DETAILS) {
        const intl = tmp(1236).intl;
        stringResult = intl.string(tmp(1236).t["6eXLcJ"]);
      }
    }
    return stringResult;
  },
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.SWIPE_RIGHT_TO_LEFT,
  getComponent() {
    return require(14670) /* UserSettingsSwipeRightToLeft */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("explicitContentFromProto").fileFinishedImporting("modules/user_settings/defs/native/SwipeRightToLeftSetting.tsx");

export default route;
