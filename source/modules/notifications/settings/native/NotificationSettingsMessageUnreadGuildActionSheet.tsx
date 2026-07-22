// Module ID: 10292
// Function ID: 79463
// Name: NotificationSettingsMessageUnreadGuildActionSheet
// Dependencies: []
// Exports: default

// Module 10292 (NotificationSettingsMessageUnreadGuildActionSheet)
importAll(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const UserNotificationSettings = arg1(dependencyMap[2]).UserNotificationSettings;
const UnreadSetting = arg1(dependencyMap[3]).UnreadSetting;
let closure_6 = arg1(dependencyMap[4]).GuildNotificationSettingsFlags;
const jsx = arg1(dependencyMap[5]).jsx;
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsMessageUnreadGuildActionSheet.tsx");

export default function NotificationSettingsMessageUnreadGuildActionSheet(guildId) {
  let notification;
  let unread;
  const arg1 = guildId;
  let obj = arg1(dependencyMap[6]);
  const guildPresetSettings = obj.useGuildPresetSettings(guildId.guildId);
  ({ unread, notification } = guildPresetSettings);
  obj = {};
  let stringResult;
  if (notification === UserNotificationSettings.ALL_MESSAGES) {
    const intl = arg1(dependencyMap[8]).intl;
    stringResult = intl.string(arg1(dependencyMap[8]).t.eP8yWU);
  }
  obj.disabledMentionOnlyWithReason = stringResult;
  obj.value = unread;
  obj.onChange = function onChange(ONLY_MENTIONS) {
    const guildFlags = guildFlags.getGuildFlags(ONLY_MENTIONS.guildId);
    let obj = callback(closure_2[9]);
    obj = {};
    if (ONLY_MENTIONS === constants.ALL_MESSAGES) {
      let UNREADS_ONLY_MENTIONS = constants2.UNREADS_ALL_MESSAGES;
    } else {
      UNREADS_ONLY_MENTIONS = constants2.UNREADS_ONLY_MENTIONS;
    }
    obj.flags = ONLY_MENTIONS(closure_2[10]).withGuildUnreadFlags(guildFlags, UNREADS_ONLY_MENTIONS);
    const NotificationLabel = ONLY_MENTIONS(closure_2[11]).NotificationLabel;
    const result = obj.updateGuildNotificationSettings(ONLY_MENTIONS.guildId, obj, NotificationLabel.unreads(ONLY_MENTIONS));
  };
  return jsx(importDefault(dependencyMap[7]), obj);
};
