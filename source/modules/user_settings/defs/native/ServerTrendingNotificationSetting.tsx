// Module ID: 14465
// Function ID: 14466
// Name: toggle
// Dependencies: [7753, 10116, 1236, 3862, 14466, 2]

// Module 14465 (toggle)
import createToggle from "createToggle";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.Q3VWjI);
  },
  useDescription() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.Wc1RcU);
  },
  parent: require("MobileSetting").MobileSetting.NOTIFICATIONS,
  useValue: require("explicitContentFromProto").EnableServerTrendingNotifications.useSetting,
  onValueChange: require("onServerTrendingNotificationSettingsChanged").onServerTrendingNotificationSettingsChanged,
  usePredicate() {
    return false;
  }
});
const obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.Q3VWjI);
  },
  useDescription() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.Wc1RcU);
  },
  parent: require("MobileSetting").MobileSetting.NOTIFICATIONS,
  useValue: require("explicitContentFromProto").EnableServerTrendingNotifications.useSetting,
  onValueChange: require("onServerTrendingNotificationSettingsChanged").onServerTrendingNotificationSettingsChanged,
  usePredicate() {
    return false;
  }
};
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/ServerTrendingNotificationSetting.tsx");

export default toggle;
