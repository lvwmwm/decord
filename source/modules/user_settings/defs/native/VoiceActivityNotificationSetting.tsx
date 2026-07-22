// Module ID: 14218
// Function ID: 107528
// Name: toggle
// Dependencies: []

// Module 14218 (toggle)
const AnalyticEvents = require(dependencyMap[1]).AnalyticEvents;
let closure_4 = require(dependencyMap[2]).NotificationSettingsUpdateType;
const _module = require(dependencyMap[3]);
const toggle = _module.createToggle({
  useTitle() {
    const intl = require(dependencyMap[4]).intl;
    return intl.string(require(dependencyMap[4]).t.wtk08S);
  },
  parent: require(dependencyMap[0]).MobileSetting.NOTIFICATIONS,
  useValue: require(dependencyMap[5]).EnableVoiceActivityNotifications.useSetting,
  useDescription() {
    const intl = require(dependencyMap[4]).intl;
    return intl.string(require(dependencyMap[4]).t.rngMNx);
  },
  onValueChange(voice_activity_notifications) {
    const EnableVoiceActivityNotifications = require(dependencyMap[5]).EnableVoiceActivityNotifications;
    EnableVoiceActivityNotifications.updateSetting(voice_activity_notifications);
    let obj = importDefault(dependencyMap[6]);
    obj = { update_type: constants.ACCOUNT, voice_activity_notifications };
    obj.track(AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, obj);
  }
});
const _module1 = require(dependencyMap[7]);
const result = _module1.fileFinishedImporting("modules/user_settings/defs/native/VoiceActivityNotificationSetting.tsx");

export default toggle;
