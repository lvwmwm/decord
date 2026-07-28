// Module ID: 14438
// Function ID: 110312
// Name: toggle
// Dependencies: [7733, 653, 3805, 10099, 1212, 3838, 675, 2]

// Module 14438 (toggle)
import { AnalyticEvents } from "ME";
import { NotificationSettingsUpdateType as closure_4 } from "AccountNotificationFlags";
import createToggle from "createToggle";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.wtk08S);
  },
  parent: require("MobileSetting").MobileSetting.NOTIFICATIONS,
  useValue: require("explicitContentFromProto").EnableVoiceActivityNotifications.useSetting,
  useDescription() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.rngMNx);
  },
  onValueChange(voice_activity_notifications) {
    const EnableVoiceActivityNotifications = require(3838) /* explicitContentFromProto */.EnableVoiceActivityNotifications;
    EnableVoiceActivityNotifications.updateSetting(voice_activity_notifications);
    let obj = importDefault(675);
    obj = { update_type: constants.ACCOUNT, voice_activity_notifications };
    obj.track(AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, obj);
  }
});
let obj = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.wtk08S);
  },
  parent: require("MobileSetting").MobileSetting.NOTIFICATIONS,
  useValue: require("explicitContentFromProto").EnableVoiceActivityNotifications.useSetting,
  useDescription() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.rngMNx);
  },
  onValueChange(voice_activity_notifications) {
    const EnableVoiceActivityNotifications = require(3838) /* explicitContentFromProto */.EnableVoiceActivityNotifications;
    EnableVoiceActivityNotifications.updateSetting(voice_activity_notifications);
    let obj = importDefault(675);
    obj = { update_type: constants.ACCOUNT, voice_activity_notifications };
    obj.track(AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, obj);
  }
};
const result = require("AccountNotificationFlags").fileFinishedImporting("modules/user_settings/defs/native/VoiceActivityNotificationSetting.tsx");

export default toggle;
