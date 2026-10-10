// Module ID: 7912
// Function ID: 7913
// Name: getChannelOpenedMetadata
// Dependencies: [2065, 2087, 4750, 6035, 5966, 1390, 1085, 2072, 5107, 1102, 7913, 7914, 2]
// Exports: getChannelOpenedMetadata

// Module 7912 (getChannelOpenedMetadata)
import DurationsDefault from "Durations" /* 1102 */;
import ChannelConstants from "ChannelConstants" /* 2072 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5107 */;
import notificationSettingsPresetUtils from "notificationSettingsPresetUtils" /* 7913 */;
import hasPendingMemberAction from "hasPendingMemberAction" /* 7914 */;
import ChannelStore from "ChannelStore" /* 2065 */;
import GuildStore from "GuildStore" /* 2087 */;
import PermissionStore from "PermissionStore" /* 4750 */;
import ReadStateStore from "ReadStateStore" /* 6035 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5966 */;
import UserStore from "UserStore" /* 1390 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let c10;
let c9;
({ ChannelTypes: c9, Permissions: c10 } = Constants);
const isStaticChannelRoute = ChannelConstants.isStaticChannelRoute;
const result = size.fileFinishedImporting("modules/app_analytics/track/channel_opened/getChannelOpenedMetadata.tsx");

export const getChannelOpenedMetadata = function getChannelOpenedMetadata(selectedChannelId) {
  let guildUnreadSetting;
  let obj9;
  let presetFromSettings;
  let presetFromSettings2;
  let unreadSetting;
  if (isStaticChannelRoute(selectedChannelId)) {
    return { channel_static_route: selectedChannelId };
  } else {
    const channel = ChannelStore.getChannel(selectedChannelId);
    if (null == channel) {
      return { channel_id: selectedChannelId };
    } else {
      const guild = GuildStore.getGuild(channel.guild_id);
      if (null == guild) {
        let recipientFriendCounts;
        let flag = false;
        if (channel.isDM()) {
          const user = UserStore.getUser(channel.recipients[0]);
          flag = false;
          if (null != user) {
            flag = user.bot;
          }
        }
        if (channel.isDM()) {
          const obj3 = AppAnalyticsUtils;
          recipientFriendCounts = obj3.getRecipientFriendCounts(channel.recipients);
        } else {
          recipientFriendCounts = null;
        }
        let tmp12 = null;
        const obj4 = { channel_id: selectedChannelId, is_app_dm: flag };
        if (null != recipientFriendCounts) {
          const obj6 = { friend_recipient_count: null, non_friend_recipient_count: null };
          ({ friendCount: obj5.friend_recipient_count, nonFriendCount: obj5.non_friend_recipient_count } = recipientFriendCounts);
          tmp12 = obj6;
        }
        const merged = Object.assign(tmp12);
        return obj4;
      } else {
        let tmp3;
        const snapshot = ReadStateStore.getSnapshot(selectedChannelId, 10 * DurationsDefault.Millis.SECOND);
        ({ unread: obj8.channel_was_unread, mentionCount: obj8.channel_mention_count } = snapshot);
        const obj7 = { channel_id: selectedChannelId, channel_was_unread: null, channel_mention_count: null, channel_is_muted: UserGuildSettingsStore.isChannelMuted(channel.guild_id, channel.id), channel_is_nsfw: channel.isNSFW(), channel_is_spoiler: channel.isSpoilerChannel(), channel_resolved_unread_setting: UserGuildSettingsStore.resolveUnreadSetting(channel), channel_preset: presetFromSettings(unreadSetting, UserGuildSettingsStore.resolvedMessageNotifications(channel)), guild_id: channel.guild_id, guild_was_unread: null, guild_mention_count: null, guild_is_muted: UserGuildSettingsStore.isMuted(channel.guild_id), guild_resolved_unread_setting: UserGuildSettingsStore.resolveGuildUnreadSetting(guild), guild_preset: presetFromSettings2(guildUnreadSetting, UserGuildSettingsStore.getMessageNotifications(channel.guild_id)), parent_id: null, parent_channel_type: null, has_pending_member_action: obj9.hasPendingMemberAction(channel.guild_id, selectedChannelId), can_send_message: PermissionStore.can(constants2.SEND_MESSAGES, channel), is_app_dm: false };
        presetFromSettings = notificationSettingsPresetUtils.presetFromSettings;
        notificationSettingsPresetUtils;
        unreadSetting = UserGuildSettingsStore.resolveUnreadSetting(channel);
        ({ guildUnread: obj8.guild_was_unread, guildMentionCount: obj8.guild_mention_count } = snapshot);
        presetFromSettings2 = notificationSettingsPresetUtils.presetFromSettings;
        notificationSettingsPresetUtils;
        guildUnreadSetting = UserGuildSettingsStore.resolveGuildUnreadSetting(guild);
        ({ parent_id: obj8.parent_id, parentChannelThreadType: obj8.parent_channel_type } = channel);
        obj9 = hasPendingMemberAction;
        if (channel.type === constants.GUILD_APP) {
          tmp3 = null;
          if (null != channel.application_id) {
            tmp3 = { application_id: channel.application_id };
            const obj15 = { application_id: channel.application_id };
          }
        } else {
          tmp3 = null;
        }
        const merged1 = Object.assign(tmp3);
        return obj7;
      }
    }
  }
};
