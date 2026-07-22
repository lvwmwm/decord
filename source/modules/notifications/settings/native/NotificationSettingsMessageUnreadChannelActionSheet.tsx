// Module ID: 10294
// Function ID: 79468
// Name: NotificationSettingsMessageUnreadChannelActionSheet
// Dependencies: []
// Exports: default

// Module 10294 (NotificationSettingsMessageUnreadChannelActionSheet)
importAll(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const UserNotificationSettings = arg1(dependencyMap[2]).UserNotificationSettings;
const UnreadSetting = arg1(dependencyMap[3]).UnreadSetting;
let closure_6 = arg1(dependencyMap[4]).ChannelNotificationSettingsFlags;
const jsx = arg1(dependencyMap[5]).jsx;
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsMessageUnreadChannelActionSheet.tsx");

export default function NotificationSettingsMessageUnreadChannelActionSheet(channel) {
  let notification;
  let unread;
  const arg1 = channel;
  let obj = arg1(dependencyMap[6]);
  const channelPresetSettings = obj.useChannelPresetSettings(channel.channel);
  ({ unread, notification } = channelPresetSettings);
  obj = { value: unread };
  let stringResult;
  if (notification === UserNotificationSettings.ALL_MESSAGES) {
    const intl = arg1(dependencyMap[8]).intl;
    stringResult = intl.string(arg1(dependencyMap[8]).t.eP8yWU);
  }
  obj.disabledMentionOnlyWithReason = stringResult;
  obj.onChange = function onChange(ONLY_MENTIONS) {
    const channelIdFlags = channelIdFlags.getChannelIdFlags(ONLY_MENTIONS.channel.guild_id, ONLY_MENTIONS.channel.id);
    let obj = callback(closure_2[9]);
    obj = {};
    if (ONLY_MENTIONS === constants.ALL_MESSAGES) {
      let UNREADS_ONLY_MENTIONS = constants2.UNREADS_ALL_MESSAGES;
    } else {
      UNREADS_ONLY_MENTIONS = constants2.UNREADS_ONLY_MENTIONS;
    }
    obj.flags = ONLY_MENTIONS(closure_2[10]).withChannelUnreadFlags(channelIdFlags, UNREADS_ONLY_MENTIONS);
    const NotificationLabel = ONLY_MENTIONS(closure_2[11]).NotificationLabel;
    const result = obj.updateChannelOverrideSettings(ONLY_MENTIONS.channel.guild_id, ONLY_MENTIONS.channel.id, obj, NotificationLabel.unreads(ONLY_MENTIONS));
  };
  return jsx(importDefault(dependencyMap[7]), obj);
};
