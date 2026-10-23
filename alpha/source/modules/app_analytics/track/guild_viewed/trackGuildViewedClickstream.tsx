// Module ID: 18160
// Function ID: 18161
// Name: trackGuildViewedClickstream
// Dependencies: [1087, 5018, 7573, 2]
// Exports: default

// Module 18160 (trackGuildViewedClickstream)
import Constants from "Constants" /* 1087 */;
import RouteUtils from "RouteUtils" /* 5018 */;
import Clickstream from "Clickstream" /* 7573 */;
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
