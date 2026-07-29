// Module ID: 14456
// Function ID: 14457
// Name: toggle
// Dependencies: [7756, 10120, 1236, 3862, 14457, 2]

// Module 14456 (toggle)
import createToggle from "createToggle";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.FEFn90);
  },
  parent: require("MobileSetting").MobileSetting.NOTIFICATIONS,
  useValue: require("explicitContentFromProto").StreamNotificationsEnabled.useSetting,
  onValueChange: require("onGoLiveNotificationSettingsChanged").onGoLiveNotificationSettingsChanged
});
const obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.FEFn90);
  },
  parent: require("MobileSetting").MobileSetting.NOTIFICATIONS,
  useValue: require("explicitContentFromProto").StreamNotificationsEnabled.useSetting,
  onValueChange: require("onGoLiveNotificationSettingsChanged").onGoLiveNotificationSettingsChanged
};
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/FriendStreamNotificationsSetting.tsx");

export default toggle;
