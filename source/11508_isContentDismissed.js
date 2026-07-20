// Module ID: 11508
// Function ID: 89709
// Name: isContentDismissed
// Dependencies: []
// Exports: markContentAsDismissed, unmarkContentAsDismissed, useIsContentDismissed

// Module 11508 (isContentDismissed)
function isContentDismissed(GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK, closure_0) {
  const dismissedGuildContent = dismissedGuildContent.getDismissedGuildContent(closure_0);
  let hasBitResult = null != dismissedGuildContent;
  if (hasBitResult) {
    hasBitResult = closure_0(dependencyMap[4]).hasBit(dismissedGuildContent, GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK);
    const obj = closure_0(dependencyMap[4]);
  }
  return hasBitResult;
}
function toggleContentSeen(arg0, dc, guild_id, arg3, AUTO_DISMISS) {
  let UNKNOWN = AUTO_DISMISS;
  dc = arg0;
  const importDefault = dc;
  const dependencyMap = guild_id;
  let obj = dc(dependencyMap[6]);
  const result = obj.updateUserGuildSettings(guild_id, (dismissedGuildContent) => {
    const tmp = callback(arg1, arg2);
    if (!dismissedGuildContent) {
      const tmp6 = dismissedGuildContent(arg2[4]);
      dismissedGuildContent.dismissedGuildContent = dismissedGuildContent ? tmp6.addBit : tmp6.removeBit(dismissedGuildContent.dismissedGuildContent, arg1);
    }
    return false;
  }, arg0 ? tmp.INFREQUENT_USER_ACTION : tmp.FREQUENT_USER_ACTION);
  if (arg3) {
    obj = { type: dc(dependencyMap[8]).DismissibleGuildContent[dc], guild_id };
    if (null == UNKNOWN) {
      UNKNOWN = ContentDismissActionType.UNKNOWN;
    }
    obj.action = UNKNOWN;
    importDefault(dependencyMap[7]).track(AnalyticEvents.DISMISSIBLE_CONTENT_DISMISSED, obj);
    const obj2 = importDefault(dependencyMap[7]);
  }
}
let closure_3 = importDefault(dependencyMap[0]);
const AnalyticEvents = arg1(dependencyMap[1]).AnalyticEvents;
const ContentDismissActionType = arg1(dependencyMap[2]).ContentDismissActionType;
const UserSettingsDelay = arg1(dependencyMap[3]).UserSettingsDelay;
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/guild_dismissible_content/GuildDismissibleContentUtils.tsx");

export { isContentDismissed };
export const useIsContentDismissed = function useIsContentDismissed(arg0, arg1) {
  arg1 = arg0;
  const importDefault = arg1;
  const items = [closure_3];
  return arg1(dependencyMap[5]).useStateFromStores(items, () => callback(arg0, arg1));
};
export const markContentAsDismissed = function markContentAsDismissed(GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK, closure_0, arg2, AUTO_DISMISS) {
  toggleContentSeen(true, GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK, closure_0, arg2, AUTO_DISMISS);
};
export const unmarkContentAsDismissed = function unmarkContentAsDismissed(dc, guildId) {
  toggleContentSeen(false, dc, guildId);
};
