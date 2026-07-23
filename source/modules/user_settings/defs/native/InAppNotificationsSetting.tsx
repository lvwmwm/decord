// Module ID: 14317
// Function ID: 109630
// Name: toggle
// Dependencies: [7662, 653, 3803, 10230, 1212, 675, 10095, 2]

// Module 14317 (toggle)
import { AnalyticEvents } from "ME";
import createToggle from "createToggle";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.rqEZdu);
  },
  parent: require("MobileSetting").MobileSetting.NOTIFICATIONS,
  useValue: function useInAppNotificationsSettingValue() {
    const FocusMode = require(3803) /* explicitContentFromProto */.FocusMode;
    const setting = FocusMode.useSetting();
    const ShowInAppNotifications = require(3803) /* explicitContentFromProto */.ShowInAppNotifications;
    return !setting && ShowInAppNotifications.useSetting();
  },
  onValueChange: function updateInAppNotificationSettings(notifications_in_app_enabled) {
    const ShowInAppNotifications = require(3803) /* explicitContentFromProto */.ShowInAppNotifications;
    ShowInAppNotifications.updateSetting(notifications_in_app_enabled);
    let obj = importDefault(675);
    obj = { notifications_in_app_enabled };
    obj.track(AnalyticEvents.LOCAL_SETTINGS_UPDATED, obj);
  },
  useDescription: function useInAppNotificationsDescription() {
    let stringResult;
    if (obj.useFocusModeEnabled()) {
      const intl = require(1212) /* getSystemLocale */.intl;
      stringResult = intl.string(require(1212) /* getSystemLocale */.t.cIRG0s);
    }
    return stringResult;
  },
  useIsDisabled: require("useFocusModeEnabled").useFocusModeEnabled
});
let obj = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.rqEZdu);
  },
  parent: require("MobileSetting").MobileSetting.NOTIFICATIONS,
  useValue: function useInAppNotificationsSettingValue() {
    const FocusMode = require(3803) /* explicitContentFromProto */.FocusMode;
    const setting = FocusMode.useSetting();
    const ShowInAppNotifications = require(3803) /* explicitContentFromProto */.ShowInAppNotifications;
    return !setting && ShowInAppNotifications.useSetting();
  },
  onValueChange: function updateInAppNotificationSettings(notifications_in_app_enabled) {
    const ShowInAppNotifications = require(3803) /* explicitContentFromProto */.ShowInAppNotifications;
    ShowInAppNotifications.updateSetting(notifications_in_app_enabled);
    let obj = importDefault(675);
    obj = { notifications_in_app_enabled };
    obj.track(AnalyticEvents.LOCAL_SETTINGS_UPDATED, obj);
  },
  useDescription: function useInAppNotificationsDescription() {
    let stringResult;
    if (obj.useFocusModeEnabled()) {
      const intl = require(1212) /* getSystemLocale */.intl;
      stringResult = intl.string(require(1212) /* getSystemLocale */.t.cIRG0s);
    }
    return stringResult;
  },
  useIsDisabled: require("useFocusModeEnabled").useFocusModeEnabled
};
const result = require("explicitContentFromProto").fileFinishedImporting("modules/user_settings/defs/native/InAppNotificationsSetting.tsx");

export default toggle;
