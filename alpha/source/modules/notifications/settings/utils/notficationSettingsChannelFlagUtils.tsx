// Module ID: 11514
// Function ID: 11515
// Name: notficationSettingsChannelFlagUtils
// Dependencies: [6913, 6914, 1082, 7427, 11264, 7422, 2]
// Exports: updateChannelUnreadSetting

// Module 11514 (notficationSettingsChannelFlagUtils)
import UserSettingsConstants from "UserSettingsConstants" /* 1082 */;
import ReadStateConstants from "ReadStateConstants" /* 6914 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 7427 */;
import notificationSettingsFlagUtils from "notificationSettingsFlagUtils" /* 11264 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 6913 */;
import size from "module_2" /* 2 */;

let tmp4;
const NotificationSettingsUtils = tmp4(7422);
const UnreadSetting = ReadStateConstants.UnreadSetting;
const constants = UserSettingsConstants.ChannelNotificationSettingsFlags;
let result = size.fileFinishedImporting("modules/notifications/settings/utils/notficationSettingsChannelFlagUtils.tsx");

export function updateChannelUnreadSetting(guild_id, id, ALL_MESSAGES) {
  let NotificationLabel;
  let UNREADS_ONLY_MENTIONS;
  let withChannelUnreadFlags;
  const channelIdFlags = UserGuildSettingsStore.getChannelIdFlags(guild_id, id);
  const obj = { guildId: guild_id, channelId: id, settings: { flags: withChannelUnreadFlags(channelIdFlags, UNREADS_ONLY_MENTIONS) }, label: NotificationLabel.unreads(ALL_MESSAGES) };
  const updateChannelOverrideSettings = NotificationSettingsModalActionCreatorsDefault.updateChannelOverrideSettings;
  NotificationSettingsModalActionCreatorsDefault;
  withChannelUnreadFlags = notificationSettingsFlagUtils.withChannelUnreadFlags;
  notificationSettingsFlagUtils;
  if (ALL_MESSAGES === UnreadSetting.ALL_MESSAGES) {
    UNREADS_ONLY_MENTIONS = constants.UNREADS_ALL_MESSAGES;
  } else {
    UNREADS_ONLY_MENTIONS = constants.UNREADS_ONLY_MENTIONS;
  }
  ({ flags: withChannelUnreadFlags(channelIdFlags, UNREADS_ONLY_MENTIONS) });
  NotificationLabel = NotificationSettingsUtils.NotificationLabel;
  const result = updateChannelOverrideSettings(obj);
}
