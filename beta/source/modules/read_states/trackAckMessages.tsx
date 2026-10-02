// Module ID: 13385
// Function ID: 13386
// Name: trackAckMessages
// Dependencies: [2051, 7054, 2073, 5018, 1086, 5017, 2]
// Exports: default

// Module 13385 (trackAckMessages)
import Constants from "Constants" /* 1086 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5017 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildReadStateStore from "GuildReadStateStore" /* 7054 */;
import GuildStore from "GuildStore" /* 2073 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5018 */;
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
