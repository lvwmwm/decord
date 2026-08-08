// Module ID: 14693
// Function ID: 14694
// Name: toggle
// Dependencies: [8082, 10446, 1236, 3974, 14694, 2]

// Module 14693 (toggle)
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
