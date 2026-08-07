// Module ID: 14625
// Function ID: 14626
// Name: toggle
// Dependencies: [8022, 14626, 10380, 1236, 3974, 14627, 2]

// Module 14625 (toggle)
import createToggle from "createToggle";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.MCVmjA);
  },
  useDescription() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.R0VpSW);
  },
  parent: require("MobileSetting").MobileSetting.NOTIFICATIONS,
  useValue: require("explicitContentFromProto").EnableUpcomingServerEventNotifications.useSetting,
  onValueChange: require("onUpcomingServerEventNotificationSettingsChanged").onUpcomingServerEventNotificationSettingsChanged,
  usePredicate: function useExperiment() {
    return require(14626) /* apexExperiment */.useUpcomingServerEventExperiment("tabsV2Settings").showSettingsToggle;
  }
});
const obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.MCVmjA);
  },
  useDescription() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.R0VpSW);
  },
  parent: require("MobileSetting").MobileSetting.NOTIFICATIONS,
  useValue: require("explicitContentFromProto").EnableUpcomingServerEventNotifications.useSetting,
  onValueChange: require("onUpcomingServerEventNotificationSettingsChanged").onUpcomingServerEventNotificationSettingsChanged,
  usePredicate: function useExperiment() {
    return require(14626) /* apexExperiment */.useUpcomingServerEventExperiment("tabsV2Settings").showSettingsToggle;
  }
};
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/UpcomingServerEventNotificationSetting.tsx");

export default toggle;
