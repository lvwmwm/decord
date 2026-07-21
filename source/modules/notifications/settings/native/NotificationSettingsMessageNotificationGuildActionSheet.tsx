// Module ID: 10285
// Function ID: 79430
// Name: NotificationSettingsMessageNotificationGuildActionSheet
// Dependencies: []
// Exports: default

// Module 10285 (NotificationSettingsMessageNotificationGuildActionSheet)
importAll(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const UserNotificationSettings = arg1(dependencyMap[2]).UserNotificationSettings;
const UnreadSetting = arg1(dependencyMap[3]).UnreadSetting;
let closure_6 = arg1(dependencyMap[4]).GuildNotificationSettingsFlags;
const jsx = arg1(dependencyMap[5]).jsx;
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsMessageNotificationGuildActionSheet.tsx");

export default function NotificationSettingsMessageNotificationGuildActionSheet(guildId) {
  const arg1 = guildId;
  let obj = arg1(dependencyMap[6]);
  const guildPresetSettings = obj.useGuildPresetSettings(guildId.guildId);
  const unread = guildPresetSettings.unread;
  const importDefault = unread;
  const notification = guildPresetSettings.notification;
  obj = { context: "guild", value: notification };
  let stringResult;
  if (notification !== UserNotificationSettings.ALL_MESSAGES) {
    if (unread !== UnreadSetting.ALL_MESSAGES) {
      const intl = arg1(dependencyMap[8]).intl;
      stringResult = intl.string(arg1(dependencyMap[8]).t.eP8yWU);
    }
  }
  obj.allMessagesSubLabel = stringResult;
  obj.onChange = function onChange(message_notifications) {
    const obj = { message_notifications };
    let tmp = message_notifications === constants.ALL_MESSAGES;
    if (tmp) {
      tmp = unread !== constants2.ALL_MESSAGES;
    }
    if (tmp) {
      obj.flags = message_notifications(closure_2[9]).withGuildUnreadFlags(guildFlags.getGuildFlags(message_notifications.guildId), constants3.UNREADS_ALL_MESSAGES);
      const obj2 = message_notifications(closure_2[9]);
    }
    const NotificationLabel = message_notifications(closure_2[11]).NotificationLabel;
    const result = unread(closure_2[10]).updateGuildNotificationSettings(message_notifications.guildId, obj, NotificationLabel.notifications(message_notifications));
  };
  return jsx(importDefault(dependencyMap[7]), obj);
};
