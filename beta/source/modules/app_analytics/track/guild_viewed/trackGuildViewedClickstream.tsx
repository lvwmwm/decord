// Module ID: 19217
// Function ID: 19218
// Name: trackGuildViewedClickstream
// Dependencies: [1072, 5221, 7754, 2]
// Exports: default

// Module 19217 (trackGuildViewedClickstream)
import Constants from "Constants" /* 1072 */;
import RouteUtils from "RouteUtils" /* 5221 */;
import Clickstream from "Clickstream" /* 7754 */;
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
