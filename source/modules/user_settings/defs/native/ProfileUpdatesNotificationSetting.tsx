// Module ID: 14388
// Function ID: 110026
// Name: toggle
// Dependencies: [7751, 14389, 10127, 1212, 3803, 14390, 2]

// Module 14388 (toggle)
import createToggle from "createToggle";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.VxBO2F);
  },
  useDescription() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.F4VeBe);
  },
  parent: require("MobileSetting").MobileSetting.NOTIFICATIONS,
  useValue: require("explicitContentFromProto").EnableProfileUpdatesNotifications.useSetting,
  onValueChange: require("onProfileUpdatesNotificationSettingsChanged").onProfileUpdatesNotificationSettingsChanged,
  usePredicate: function useExperiment() {
    return require(14389) /* apexExperiment */.useProfileUpdatesNotificationExperiment("tabsV2Settings").showSettingsToggle;
  }
});
const obj = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.VxBO2F);
  },
  useDescription() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.F4VeBe);
  },
  parent: require("MobileSetting").MobileSetting.NOTIFICATIONS,
  useValue: require("explicitContentFromProto").EnableProfileUpdatesNotifications.useSetting,
  onValueChange: require("onProfileUpdatesNotificationSettingsChanged").onProfileUpdatesNotificationSettingsChanged,
  usePredicate: function useExperiment() {
    return require(14389) /* apexExperiment */.useProfileUpdatesNotificationExperiment("tabsV2Settings").showSettingsToggle;
  }
};
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/ProfileUpdatesNotificationSetting.tsx");

export default toggle;
