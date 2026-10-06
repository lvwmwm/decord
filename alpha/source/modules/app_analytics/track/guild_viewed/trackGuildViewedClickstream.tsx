// Module ID: 16945
// Function ID: 16946
// Name: trackGuildViewedClickstream
// Dependencies: [1085, 4723, 6987, 2]
// Exports: default

// Module 16945 (trackGuildViewedClickstream)
import Constants from "Constants" /* 1085 */;
import RouteUtils from "RouteUtils" /* 4723 */;
import Clickstream from "Clickstream" /* 6987 */;
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
