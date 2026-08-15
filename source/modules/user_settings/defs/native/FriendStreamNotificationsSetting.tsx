// Module ID: 14804
// Function ID: 14805
// Name: toggle
// Dependencies: [8198, 10669, 1236, 4066, 14805, 2]

// Module 14804 (toggle)
import createToggle from "createToggle";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.FEFn90);
  },
  parent: require("MobileUserSettings").MobileUserSettings.NOTIFICATIONS,
  useValue: require("explicitContentFromProto").StreamNotificationsEnabled.useSetting,
  onValueChange: require("onGoLiveNotificationSettingsChanged").onGoLiveNotificationSettingsChanged
});
const obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.FEFn90);
  },
  parent: require("MobileUserSettings").MobileUserSettings.NOTIFICATIONS,
  useValue: require("explicitContentFromProto").StreamNotificationsEnabled.useSetting,
  onValueChange: require("onGoLiveNotificationSettingsChanged").onGoLiveNotificationSettingsChanged
};
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/FriendStreamNotificationsSetting.tsx");

export default toggle;
