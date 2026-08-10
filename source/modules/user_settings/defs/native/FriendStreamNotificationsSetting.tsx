// Module ID: 14682
// Function ID: 14683
// Name: toggle
// Dependencies: [8082, 10447, 1236, 3974, 14683, 2]

// Module 14682 (toggle)
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
