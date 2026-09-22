// Module ID: 17225
// Function ID: 17226
// Name: trackGuildViewedClickstream
// Dependencies: [1074, 4596, 7710, 2]
// Exports: default

// Module 17225 (trackGuildViewedClickstream)
import Constants from "Constants" /* 1074 */;
import RouteUtils from "RouteUtils" /* 4596 */;
import Clickstream from "Clickstream" /* 7710 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/app_analytics/track/guild_viewed/trackGuildViewedClickstream.tsx");

export default function trackGuildViewedClickstream(guildId) {
  guildId = guildId.guildId;
  let isPseudoGuildIdResult = null == guildId;
  if (!isPseudoGuildIdResult) {
    isPseudoGuildIdResult = RouteUtils.isPseudoGuildId(guildId);
  }
  if (!isPseudoGuildIdResult) {
    const obj3 = { guild_id: guildId };
    Clickstream.trackClickstream(AnalyticEvents.GUILD_VIEWED_CLICKSTREAM, obj3);
  }
};
