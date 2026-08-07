// Module ID: 14620
// Function ID: 14621
// Name: toggle
// Dependencies: [8022, 14621, 10380, 1236, 3974, 14622, 2]

// Module 14620 (toggle)
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
    return require(14621) /* apexExperiment */.useProfileUpdatesNotificationExperiment("tabsV2Settings").showSettingsToggle;
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
    return require(14621) /* apexExperiment */.useProfileUpdatesNotificationExperiment("tabsV2Settings").showSettingsToggle;
  }
};
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/ProfileUpdatesNotificationSetting.tsx");

export default toggle;
