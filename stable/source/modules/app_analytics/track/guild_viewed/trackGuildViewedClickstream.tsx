// Module ID: 16567
// Function ID: 16568
// Name: trackGuildViewedClickstream
// Dependencies: [1086, 4675, 6889, 2]
// Exports: default

// Module 16567 (trackGuildViewedClickstream)
import Constants from "Constants" /* 1086 */;
import RouteUtils from "RouteUtils" /* 4675 */;
import Clickstream from "Clickstream" /* 6889 */;
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
