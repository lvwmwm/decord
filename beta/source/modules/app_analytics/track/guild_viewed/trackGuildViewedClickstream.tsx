// Module ID: 17213
// Function ID: 17214
// Name: trackGuildViewedClickstream
// Dependencies: [1074, 4595, 7707, 2]
// Exports: default

// Module 17213 (trackGuildViewedClickstream)
import Constants from "Constants" /* 1074 */;
import RouteUtils from "RouteUtils" /* 4595 */;
import Clickstream from "Clickstream" /* 7707 */;
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
