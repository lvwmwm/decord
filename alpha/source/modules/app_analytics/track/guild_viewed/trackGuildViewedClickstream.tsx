// Module ID: 18480
// Function ID: 18481
// Name: trackGuildViewedClickstream
// Dependencies: [1084, 5053, 7610, 2]
// Exports: default

// Module 18480 (trackGuildViewedClickstream)
import Constants from "Constants" /* 1084 */;
import RouteUtils from "RouteUtils" /* 5053 */;
import Clickstream from "Clickstream" /* 7610 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/app_analytics/track/guild_viewed/trackGuildViewedClickstream.tsx");

export default function trackGuildViewedClickstream(guildId) {
  guildId = guildId.guildId;
  let isPseudoGuildIdResult = null == guildId;
  if (!isPseudoGuildIdResult) {
    const obj = RouteUtils;
    isPseudoGuildIdResult = obj.isPseudoGuildId(guildId);
  }
  if (!isPseudoGuildIdResult) {
    const obj3 = { guild_id: guildId };
    const obj2 = Clickstream;
    obj2.trackClickstream(AnalyticEvents.GUILD_VIEWED_CLICKSTREAM, obj3);
  }
};
