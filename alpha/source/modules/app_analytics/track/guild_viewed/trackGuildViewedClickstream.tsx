// Module ID: 18239
// Function ID: 18240
// Name: trackGuildViewedClickstream
// Dependencies: [1084, 5021, 7576, 2]
// Exports: default

// Module 18239 (trackGuildViewedClickstream)
import Constants from "Constants" /* 1084 */;
import RouteUtils from "RouteUtils" /* 5021 */;
import Clickstream from "Clickstream" /* 7576 */;
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
