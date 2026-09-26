// Module ID: 8325
// Function ID: 8326
// Name: PublicGuildsUtils
// Dependencies: [8326, 1074, 8327, 8328, 1241, 4968, 2]
// Exports: getPublicSystemMessageAvatar, isPublicSystemMessage, trackEnableCommunityFlow

// Module 8325 (PublicGuildsUtils)
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 4968 */;
import isCrosspostDefault from "isCrosspost" /* 8327 */;
import PublicGuildsConstants from "PublicGuildsConstants" /* 8326 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

({ PUBLIC_GUILD_ANNOUNCEMENTS_GUILD_ID: c3, PUBLIC_GUILD_UPDATES_WEBHOOK_USER_ID: closure_4, ENABLE_COMMUNITY_FLOW_MODAL_KEY: hasOwnProperty } = PublicGuildsConstants);
const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/public_guilds/PublicGuildsUtils.tsx");

export const isPublicSystemMessage = function isPublicSystemMessage(message) {
  let tmp = isCrosspostDefault(message);
  if (tmp) {
    tmp = message.messageReference.guild_id === React3;
  }
  if (!tmp) {
    let tmp4 = null != message.author;
    if (tmp4) {
      tmp4 = message.author.id === React4;
    }
    tmp = tmp4;
  }
  return tmp;
};
export const getPublicSystemMessageAvatar = function getPublicSystemMessageAvatar() {
  return require("module_8328");
};
export const trackEnableCommunityFlow = function trackEnableCommunityFlow(fromStep) {
  const obj = AnalyticsUtilsDefault;
  const obj2 = { flow_type, from_step: fromStep.fromStep, to_step: fromStep.toStep };
  const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(fromStep.guildId));
  obj.track(AnalyticEvents.USER_FLOW_TRANSITION, obj2);
};
