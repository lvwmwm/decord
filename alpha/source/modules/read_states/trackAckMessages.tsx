// Module ID: 6547
// Function ID: 6548
// Name: trackAckMessages
// Dependencies: [4641, 6543, 4663, 6431, 1072, 5529, 2]
// Exports: default

// Module 6547 (trackAckMessages)
import Constants from "Constants" /* 1072 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5529 */;
import ChannelStore from "ChannelStore" /* 4641 */;
import GuildReadStateStore from "GuildReadStateStore" /* 6543 */;
import GuildStore from "GuildStore" /* 4663 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 6431 */;
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
