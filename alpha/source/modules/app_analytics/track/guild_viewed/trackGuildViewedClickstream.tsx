// Module ID: 19084
// Function ID: 19085
// Name: trackGuildViewedClickstream
// Dependencies: [1072, 5190, 7785, 2]
// Exports: default

// Module 19084 (trackGuildViewedClickstream)
import Constants from "Constants" /* 1072 */;
import RouteUtils from "RouteUtils" /* 5190 */;
import Clickstream from "Clickstream" /* 7785 */;
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
