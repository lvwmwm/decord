// Module ID: 6803
// Function ID: 6804
// Name: trackAckMessages
// Dependencies: [4821, 6799, 4843, 6689, 1087, 5697, 2]
// Exports: default

// Module 6803 (trackAckMessages)
import Constants from "Constants" /* 1087 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5697 */;
import ChannelStore from "ChannelStore" /* 4821 */;
import GuildReadStateStore from "GuildReadStateStore" /* 6799 */;
import GuildStore from "GuildStore" /* 4843 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 6689 */;
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
