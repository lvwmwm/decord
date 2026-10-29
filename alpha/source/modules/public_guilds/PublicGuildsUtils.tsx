// Module ID: 8460
// Function ID: 8461
// Name: PublicGuildsUtils
// Dependencies: [8461, 1084, 8462, 8463, 1264, 5749, 2]
// Exports: getPublicSystemMessageAvatar, isPublicSystemMessage, trackEnableCommunityFlow

// Module 8460 (PublicGuildsUtils)
import Constants from "Constants" /* 1084 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1264 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5749 */;
import isCrosspostDefault from "isCrosspost" /* 8462 */;
import PublicGuildsConstants from "PublicGuildsConstants" /* 8461 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let c3;
let closure_4;
let hasOwnProperty;
({ PUBLIC_GUILD_ANNOUNCEMENTS_GUILD_ID: c3, PUBLIC_GUILD_UPDATES_WEBHOOK_USER_ID: closure_4, ENABLE_COMMUNITY_FLOW_MODAL_KEY: hasOwnProperty } = PublicGuildsConstants);
const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/public_guilds/PublicGuildsUtils.tsx");

export function isPublicSystemMessage(message) {
  let tmp = isCrosspostDefault(message) && message.messageReference.guild_id === _false;
  if (!tmp) {
    tmp = null != message.author && message.author.id === React3;
    const tmp4 = null != message.author && message.author.id === React3;
  }
  return tmp;
}
export function getPublicSystemMessageAvatar() {
  return require("AssetRegistry");
}
export function trackEnableCommunityFlow(fromStep) {
  const track = AnalyticsUtilsDefault.track;
  const USER_FLOW_TRANSITION = AnalyticEvents.USER_FLOW_TRANSITION;
  const obj = { flow_type: hasOwnProperty, from_step: fromStep.fromStep, to_step: fromStep.toStep };
  AnalyticsUtilsDefault;
  const obj2 = AppAnalyticsUtils;
  const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(fromStep.guildId));
  track(USER_FLOW_TRANSITION, obj);
}
