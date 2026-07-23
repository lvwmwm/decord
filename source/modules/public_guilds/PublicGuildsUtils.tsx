// Module ID: 7721
// Function ID: 61467
// Name: isPublicSystemMessage
// Dependencies: [7722, 653, 7723, 7724, 675, 4324, 2]
// Exports: getPublicSystemMessageAvatar, isPublicSystemMessage, trackEnableCommunityFlow

// Module 7721 (isPublicSystemMessage)
import PUBLIC_SUCCESS_MODAL_SEEN_KEY from "PUBLIC_SUCCESS_MODAL_SEEN_KEY";
import { AnalyticEvents } from "ME";

let closure_3;
let closure_4;
let closure_5;
({ PUBLIC_GUILD_ANNOUNCEMENTS_GUILD_ID: closure_3, PUBLIC_GUILD_UPDATES_WEBHOOK_USER_ID: closure_4, ENABLE_COMMUNITY_FLOW_MODAL_KEY: closure_5 } = PUBLIC_SUCCESS_MODAL_SEEN_KEY);
const result = require("isCrosspost").fileFinishedImporting("modules/public_guilds/PublicGuildsUtils.tsx");

export const isPublicSystemMessage = function isPublicSystemMessage(message) {
  let tmp = importDefault(7723)(message);
  if (tmp) {
    tmp = message.messageReference.guild_id === closure_3;
  }
  if (!tmp) {
    let tmp4 = null != message.author;
    if (tmp4) {
      tmp4 = message.author.id === closure_4;
    }
    tmp = tmp4;
  }
  return tmp;
};
export const getPublicSystemMessageAvatar = function getPublicSystemMessageAvatar() {
  return importDefault(7724);
};
export const trackEnableCommunityFlow = function trackEnableCommunityFlow(fromStep) {
  let obj = importDefault(675);
  obj = { flow_type: closure_5, from_step: fromStep.fromStep, to_step: fromStep.toStep };
  const merged = Object.assign(require(4324) /* _createForOfIteratorHelperLoose */.collectGuildAnalyticsMetadata(fromStep.guildId));
  obj.track(AnalyticEvents.USER_FLOW_TRANSITION, obj);
};
