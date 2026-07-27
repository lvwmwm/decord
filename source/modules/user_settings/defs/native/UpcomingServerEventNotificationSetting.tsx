// Module ID: 14405
// Function ID: 110173
// Name: toggle
// Dependencies: [7697, 14406, 10059, 1212, 3804, 14407, 2]

// Module 14405 (toggle)
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
    return require(14406) /* apexExperiment */.useUpcomingServerEventExperiment("tabsV2Settings").showSettingsToggle;
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
    return require(14406) /* apexExperiment */.useUpcomingServerEventExperiment("tabsV2Settings").showSettingsToggle;
  }
};
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/UpcomingServerEventNotificationSetting.tsx");

export default toggle;
