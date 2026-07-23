// Module ID: 14343
// Function ID: 109718
// Name: toggle
// Dependencies: [7662, 14344, 10095, 1212, 3803, 14345, 2]

// Module 14343 (toggle)
import createToggle from "createToggle";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.MCVmjA);
  },
  useDescription() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.R0VpSW);
  },
  parent: require("MobileSetting").MobileSetting.NOTIFICATIONS,
  useValue: require("explicitContentFromProto").EnableUpcomingServerEventNotifications.useSetting,
  onValueChange: require("onUpcomingServerEventNotificationSettingsChanged").onUpcomingServerEventNotificationSettingsChanged,
  usePredicate: function useExperiment() {
    return require(14344) /* apexExperiment */.useUpcomingServerEventExperiment("tabsV2Settings").showSettingsToggle;
  }
});
const obj = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.MCVmjA);
  },
  useDescription() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.R0VpSW);
  },
  parent: require("MobileSetting").MobileSetting.NOTIFICATIONS,
  useValue: require("explicitContentFromProto").EnableUpcomingServerEventNotifications.useSetting,
  onValueChange: require("onUpcomingServerEventNotificationSettingsChanged").onUpcomingServerEventNotificationSettingsChanged,
  usePredicate: function useExperiment() {
    return require(14344) /* apexExperiment */.useUpcomingServerEventExperiment("tabsV2Settings").showSettingsToggle;
  }
};
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/UpcomingServerEventNotificationSetting.tsx");

export default toggle;
