// Module ID: 11526
// Function ID: 89808
// Name: isContentDismissed
// Dependencies: [1316, 653, 1345, 662, 1333, 566, 1331, 675, 1334, 2]
// Exports: markContentAsDismissed, unmarkContentAsDismissed, useIsContentDismissed

// Module 11526 (isContentDismissed)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { AnalyticEvents } from "ME";
import { ContentDismissActionType } from "ContentDismissActionType";
import { UserSettingsDelay } from "MAX_FAVORITES";

const require = arg1;
function isContentDismissed(GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK, outer1_0) {
  dismissedGuildContent = dismissedGuildContent.getDismissedGuildContent(outer1_0);
  let hasBitResult = null != dismissedGuildContent;
  if (hasBitResult) {
    hasBitResult = require(1333) /* hasBit */.hasBit(dismissedGuildContent, GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK);
    const obj = require(1333) /* hasBit */;
  }
  return hasBitResult;
}
function toggleContentSeen(arg0, dc, guild_id, arg3, AUTO_DISMISS) {
  let UNKNOWN = AUTO_DISMISS;
  const _require = arg0;
  const importDefault = dc;
  const dependencyMap = guild_id;
  let obj = _require(1331);
  const result = obj.updateUserGuildSettings(guild_id, (dismissedGuildContent) => {
    const tmp = outer1_7(closure_1, guild_id);
    if (!callback) {
      const tmp6 = callback(guild_id[4]);
      dismissedGuildContent.dismissedGuildContent = callback ? tmp6.addBit : tmp6.removeBit(dismissedGuildContent.dismissedGuildContent, closure_1);
    }
    return false;
  }, arg0 ? tmp.INFREQUENT_USER_ACTION : tmp.FREQUENT_USER_ACTION);
  if (arg3) {
    obj = { type: _require(1334).DismissibleGuildContent[dc], guild_id };
    if (null == UNKNOWN) {
      UNKNOWN = ContentDismissActionType.UNKNOWN;
    }
    obj.action = UNKNOWN;
    importDefault(675).track(AnalyticEvents.DISMISSIBLE_CONTENT_DISMISSED, obj);
    const obj2 = importDefault(675);
  }
}
let result = require("ContentDismissActionType").fileFinishedImporting("modules/guild_dismissible_content/GuildDismissibleContentUtils.tsx");

export { isContentDismissed };
export const useIsContentDismissed = function useIsContentDismissed(arg0, arg1) {
  const _require = arg0;
  let closure_1 = arg1;
  const items = [_isNativeReflectConstruct];
  return _require(566).useStateFromStores(items, () => outer1_7(closure_0, closure_1));
};
export const markContentAsDismissed = function markContentAsDismissed(GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK, closure_0, arg2, AUTO_DISMISS) {
  toggleContentSeen(true, GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK, closure_0, arg2, AUTO_DISMISS);
};
export const unmarkContentAsDismissed = function unmarkContentAsDismissed(dc, guildId) {
  toggleContentSeen(false, dc, guildId);
};
