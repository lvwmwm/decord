// Module ID: 18714
// Function ID: 18715
// Name: trackGuildViewedClickstream
// Dependencies: [1084, 5054, 7633, 2]
// Exports: default

// Module 18714 (trackGuildViewedClickstream)
import Constants from "Constants" /* 1084 */;
import RouteUtils from "RouteUtils" /* 5054 */;
import Clickstream from "Clickstream" /* 7633 */;
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
