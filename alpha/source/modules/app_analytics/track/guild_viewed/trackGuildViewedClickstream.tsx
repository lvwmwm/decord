// Module ID: 18895
// Function ID: 18896
// Name: trackGuildViewedClickstream
// Dependencies: [1071, 4968, 8034, 2]
// Exports: default

// Module 18895 (trackGuildViewedClickstream)
import Constants from "Constants" /* 1071 */;
import RouteUtils from "RouteUtils" /* 4968 */;
import Clickstream from "Clickstream" /* 8034 */;
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
