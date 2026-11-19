// Module ID: 11787
// Function ID: 11788
// Name: notficationSettingsChannelFlagUtils
// Dependencies: [6431, 6432, 1082, 7366, 11093, 7361, 2]
// Exports: updateChannelUnreadSetting

// Module 11787 (notficationSettingsChannelFlagUtils)
import UserSettingsConstants from "UserSettingsConstants" /* 1082 */;
import ReadStateConstants from "ReadStateConstants" /* 6432 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 7366 */;
import notificationSettingsFlagUtils from "notificationSettingsFlagUtils" /* 11093 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 6431 */;
import size from "module_2" /* 2 */;

let tmp4;
const NotificationSettingsUtils = tmp4(7361);
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
