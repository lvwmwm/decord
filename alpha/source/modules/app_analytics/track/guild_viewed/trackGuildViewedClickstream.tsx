// Module ID: 18724
// Function ID: 18725
// Name: trackGuildViewedClickstream
// Dependencies: [1071, 4845, 8139, 2]
// Exports: default

// Module 18724 (trackGuildViewedClickstream)
import Constants from "Constants" /* 1071 */;
import RouteUtils from "RouteUtils" /* 4845 */;
import Clickstream from "Clickstream" /* 8139 */;
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
