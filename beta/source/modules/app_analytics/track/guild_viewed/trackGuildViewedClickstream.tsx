// Module ID: 19587
// Function ID: 19588
// Name: trackGuildViewedClickstream
// Dependencies: [1072, 5357, 8669, 2]
// Exports: default

// Module 19587 (trackGuildViewedClickstream)
import Constants from "Constants" /* 1072 */;
import RouteUtils from "RouteUtils" /* 5357 */;
import Clickstream from "Clickstream" /* 8669 */;
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
