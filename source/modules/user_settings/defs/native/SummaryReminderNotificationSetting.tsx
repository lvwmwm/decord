// Module ID: 14574
// Function ID: 14575
// Name: toggle
// Dependencies: [7864, 10333, 1236, 3928, 14575, 2]

// Module 14574 (toggle)
import createToggle from "createToggle";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.xEqC6q);
  },
  useDescription() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.KmVXll);
  },
  parent: require("MobileSetting").MobileSetting.NOTIFICATIONS,
  useValue: require("explicitContentFromProto").EnableSummaryReminderNotifications.useSetting,
  onValueChange: require("onSummaryReminderNotificationSettingsChanged").onSummaryReminderNotificationSettingsChanged,
  usePredicate() {
    return false;
  }
});
const obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.xEqC6q);
  },
  useDescription() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.KmVXll);
  },
  parent: require("MobileSetting").MobileSetting.NOTIFICATIONS,
  useValue: require("explicitContentFromProto").EnableSummaryReminderNotifications.useSetting,
  onValueChange: require("onSummaryReminderNotificationSettingsChanged").onSummaryReminderNotificationSettingsChanged,
  usePredicate() {
    return false;
  }
};
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/SummaryReminderNotificationSetting.tsx");

export default toggle;
