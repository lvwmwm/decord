// Module ID: 14566
// Function ID: 14567
// Name: toggle
// Dependencies: [7864, 14567, 10333, 1236, 3928, 14568, 2]

// Module 14566 (toggle)
import createToggle from "createToggle";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.VxBO2F);
  },
  useDescription() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.F4VeBe);
  },
  parent: require("MobileSetting").MobileSetting.NOTIFICATIONS,
  useValue: require("explicitContentFromProto").EnableProfileUpdatesNotifications.useSetting,
  onValueChange: require("onProfileUpdatesNotificationSettingsChanged").onProfileUpdatesNotificationSettingsChanged,
  usePredicate: function useExperiment() {
    return require(14567) /* apexExperiment */.useProfileUpdatesNotificationExperiment("tabsV2Settings").showSettingsToggle;
  }
});
const obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.VxBO2F);
  },
  useDescription() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.F4VeBe);
  },
  parent: require("MobileSetting").MobileSetting.NOTIFICATIONS,
  useValue: require("explicitContentFromProto").EnableProfileUpdatesNotifications.useSetting,
  onValueChange: require("onProfileUpdatesNotificationSettingsChanged").onProfileUpdatesNotificationSettingsChanged,
  usePredicate: function useExperiment() {
    return require(14567) /* apexExperiment */.useProfileUpdatesNotificationExperiment("tabsV2Settings").showSettingsToggle;
  }
};
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/ProfileUpdatesNotificationSetting.tsx");

export default toggle;
