// Module ID: 17227
// Function ID: 17228
// Name: trackGuildViewedClickstream
// Dependencies: [1078, 4630, 7744, 2]
// Exports: default

// Module 17227 (trackGuildViewedClickstream)
import Constants from "Constants" /* 1078 */;
import RouteUtils from "RouteUtils" /* 4630 */;
import Clickstream from "Clickstream" /* 7744 */;
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
