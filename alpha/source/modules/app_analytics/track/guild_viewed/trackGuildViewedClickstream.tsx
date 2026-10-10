// Module ID: 17448
// Function ID: 17449
// Name: trackGuildViewedClickstream
// Dependencies: [1085, 4957, 7187, 2]
// Exports: default

// Module 17448 (trackGuildViewedClickstream)
import Constants from "Constants" /* 1085 */;
import RouteUtils from "RouteUtils" /* 4957 */;
import Clickstream from "Clickstream" /* 7187 */;
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
