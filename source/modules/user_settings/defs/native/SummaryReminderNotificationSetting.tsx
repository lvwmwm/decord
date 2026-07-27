// Module ID: 14408
// Function ID: 110182
// Name: toggle
// Dependencies: [7697, 10059, 1212, 3804, 14409, 2]

// Module 14408 (toggle)
import createToggle from "createToggle";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.xEqC6q);
  },
  useDescription() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.KmVXll);
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
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.xEqC6q);
  },
  useDescription() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.KmVXll);
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
