// Module ID: 7715
// Function ID: 61420
// Name: isPublicSystemMessage
// Dependencies: []
// Exports: getPublicSystemMessageAvatar, isPublicSystemMessage, trackEnableCommunityFlow

// Module 7715 (isPublicSystemMessage)
const _module = require(dependencyMap[0]);
({ PUBLIC_GUILD_ANNOUNCEMENTS_GUILD_ID: closure_3, PUBLIC_GUILD_UPDATES_WEBHOOK_USER_ID: closure_4, ENABLE_COMMUNITY_FLOW_MODAL_KEY: closure_5 } = _module);
const AnalyticEvents = require(dependencyMap[1]).AnalyticEvents;
const _module1 = require(dependencyMap[6]);
const result = _module1.fileFinishedImporting("modules/public_guilds/PublicGuildsUtils.tsx");

export const isPublicSystemMessage = function isPublicSystemMessage(message) {
  let tmp = importDefault(dependencyMap[2])(message);
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
  return importDefault(dependencyMap[3]);
};
export const trackEnableCommunityFlow = function trackEnableCommunityFlow(fromStep) {
  let obj = importDefault(dependencyMap[4]);
  obj = { flow_type: closure_5, from_step: fromStep.fromStep, to_step: fromStep.toStep };
  const merged = Object.assign(require(dependencyMap[5]).collectGuildAnalyticsMetadata(fromStep.guildId));
  obj.track(AnalyticEvents.USER_FLOW_TRANSITION, obj);
};
