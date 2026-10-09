// Module ID: 17376
// Function ID: 17377
// Name: trackGuildViewedClickstream
// Dependencies: [1085, 4918, 7181, 2]
// Exports: default

// Module 17376 (trackGuildViewedClickstream)
import Constants from "Constants" /* 1085 */;
import RouteUtils from "RouteUtils" /* 4918 */;
import Clickstream from "Clickstream" /* 7181 */;
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
