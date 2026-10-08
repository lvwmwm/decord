// Module ID: 6086
// Function ID: 6087
// Name: trackAckMessages
// Dependencies: [2063, 6082, 2086, 5971, 1085, 5105, 2]
// Exports: default

// Module 6086 (trackAckMessages)
import Constants from "Constants" /* 1085 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5105 */;
import ChannelStore from "ChannelStore" /* 2063 */;
import GuildReadStateStore from "GuildReadStateStore" /* 6082 */;
import GuildStore from "GuildStore" /* 2086 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5971 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/read_states/trackAckMessages.tsx");

export default function trackAckMessages(channel_id, location) {
  let guildId;
  let guildsArray;
  const channel = ChannelStore.getChannel(channel_id);
  const obj = {
    channel_id,
    guild_id: guildId,
    location,
    guild_unread_statuses: guildsArray.map((id) => {
      const hasUnreadResult = GuildReadStateStore.hasUnread(id.id);
      const mentionCount = GuildReadStateStore.getMentionCount(id.id);
      const isMutedResult = UserGuildSettingsStore.isMuted(id.id);
      return "" + id.id + "," + hasUnreadResult + "," + mentionCount + "," + isMutedResult + "," + UserGuildSettingsStore.resolveGuildUnreadSetting(id);
    })
  };
  guildId = undefined;
  const trackWithMetadata = AppAnalyticsUtils.trackWithMetadata;
  const ACK_MESSAGES = AnalyticEvents.ACK_MESSAGES;
  AppAnalyticsUtils;
  if (null != channel) {
    guildId = channel.getGuildId();
  }
  guildsArray = GuildStore.getGuildsArray();
  trackWithMetadata(ACK_MESSAGES, obj);
};
