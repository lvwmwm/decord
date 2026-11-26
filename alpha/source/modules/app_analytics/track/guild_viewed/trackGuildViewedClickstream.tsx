// Module ID: 19069
// Function ID: 19070
// Name: trackGuildViewedClickstream
// Dependencies: [1071, 5094, 8175, 2]
// Exports: default

// Module 19069 (trackGuildViewedClickstream)
import Constants from "Constants" /* 1071 */;
import RouteUtils from "RouteUtils" /* 5094 */;
import Clickstream from "Clickstream" /* 8175 */;
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
