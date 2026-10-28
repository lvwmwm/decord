// Module ID: 6854
// Function ID: 6855
// Name: trackAckMessages
// Dependencies: [4856, 6850, 4878, 6739, 1084, 5747, 2]
// Exports: default

// Module 6854 (trackAckMessages)
import Constants from "Constants" /* 1084 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5747 */;
import ChannelStore from "ChannelStore" /* 4856 */;
import GuildReadStateStore from "GuildReadStateStore" /* 6850 */;
import GuildStore from "GuildStore" /* 4878 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 6739 */;
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
