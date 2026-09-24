// Module ID: 14147
// Function ID: 14148
// Name: trackAckMessages
// Dependencies: [2045, 7909, 2067, 4971, 1078, 4970, 2]
// Exports: default

// Module 14147 (trackAckMessages)
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 4970 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildReadStateStore from "GuildReadStateStore" /* 7909 */;
import GuildStore from "GuildStore" /* 2067 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 4971 */;

require = fn;
const AnalyticEvents = fn(1078).AnalyticEvents;
const size = fn(2);
const result = size.fileFinishedImporting("modules/read_states/trackAckMessages.tsx");

export default function trackAckMessages(channel_id, location) {
  const channel = ChannelStore.getChannel(channel_id);
  const obj = { channel_id, guild_id: null, location: null, guild_unread_statuses: null };
  let guildId;
  if (null != channel) {
    guildId = channel.getGuildId();
  }
  obj.guild_id = guildId;
  obj.location = location;
  const guildsArray = GuildStore.getGuildsArray();
  obj.guild_unread_statuses = guildsArray.map((id) => {
    const mentionCount = GuildReadStateStore.getMentionCount(id.id);
    const hasUnreadResult = GuildReadStateStore.hasUnread(id.id);
    return "" + id.id + "," + hasUnreadResult + "," + mentionCount + "," + UserGuildSettingsStore.isMuted(id.id) + "," + UserGuildSettingsStore.resolveGuildUnreadSetting(id);
  });
  AppAnalyticsUtils.trackWithMetadata(AnalyticEvents.ACK_MESSAGES, obj);
};
