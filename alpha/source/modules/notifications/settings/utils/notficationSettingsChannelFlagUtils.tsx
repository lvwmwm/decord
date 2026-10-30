// Module ID: 11292
// Function ID: 11293
// Name: notficationSettingsChannelFlagUtils
// Dependencies: [6769, 6770, 1082, 7282, 11050, 7277, 2]
// Exports: updateChannelUnreadSetting

// Module 11292 (notficationSettingsChannelFlagUtils)
import UserSettingsConstants from "UserSettingsConstants" /* 1082 */;
import ReadStateConstants from "ReadStateConstants" /* 6770 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 7282 */;
import notificationSettingsFlagUtils from "notificationSettingsFlagUtils" /* 11050 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 6769 */;
import size from "module_2" /* 2 */;

let tmp4;
const NotificationSettingsUtils = tmp4(7277);
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
