// Module ID: 6884
// Function ID: 6885
// Name: trackAckMessages
// Dependencies: [4858, 6880, 4880, 6769, 1072, 5755, 2]
// Exports: default

// Module 6884 (trackAckMessages)
import Constants from "Constants" /* 1072 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5755 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import GuildReadStateStore from "GuildReadStateStore" /* 6880 */;
import GuildStore from "GuildStore" /* 4880 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 6769 */;
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
