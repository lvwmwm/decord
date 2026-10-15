// Module ID: 17783
// Function ID: 17784
// Name: trackGuildViewedClickstream
// Dependencies: [1085, 5013, 7404, 2]
// Exports: default

// Module 17783 (trackGuildViewedClickstream)
import Constants from "Constants" /* 1085 */;
import RouteUtils from "RouteUtils" /* 5013 */;
import Clickstream from "Clickstream" /* 7404 */;
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
