// Module ID: 12693
// Function ID: 12694
// Name: GuildDismissibleContentUtils
// Dependencies: [1224, 1078, 2042, 1088, 2030, 558, 568, 504, 2028, 1245, 2031, 2]
// Exports: isContentDismissed, markContentAsDismissed, unmarkContentAsDismissed

// Module 12693 (GuildDismissibleContentUtils)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1245 */;
import Uint8ArrayUtils from "Uint8ArrayUtils" /* 2030 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1224 */;

const require = globalThis.__r;

require = fn;
const AnalyticEvents = fn(1078).AnalyticEvents;
const ContentDismissActionType = fn(2042).ContentDismissActionType;
const UserSettingsDelay = fn(1088).UserSettingsDelay;
const ReactCompilerGating = fn(558);
function isContentDismissed(GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK, id) {
  const dismissedGuildContent = UserSettingsProtoStore.getDismissedGuildContent(id);
  let hasBitResult = null != dismissedGuildContent;
  if (hasBitResult) {
    hasBitResult = Uint8ArrayUtils.hasBit(dismissedGuildContent, GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK);
  }
  return hasBitResult;
}
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_dismissible_content/GuildDismissibleContentUtils.tsx");

export { isContentDismissed };
export const useIsContentDismissed = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  _require = arg0;
  closure_1 = arg1;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserSettingsProtoStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg0) {
    if (cResult[2] === arg1) {
      let tmp6 = cResult[3];
    }
    return require("initialize").useStateFromStores(first, tmp6);
  }
  const fn = function u() {
    const dismissedGuildContent = UserSettingsProtoStore.getDismissedGuildContent(closure_1);
    let hasBitResult = null != dismissedGuildContent;
    if (hasBitResult) {
      hasBitResult = Uint8ArrayUtils.hasBit(dismissedGuildContent, closure_0);
    }
    return hasBitResult;
  };
  cResult[1] = arg0;
  cResult[2] = arg1;
  cResult[3] = fn;
  tmp6 = fn;
}) : ((arg0, arg1) => {
  _require = arg0;
  closure_1 = arg1;
  const items = [UserSettingsProtoStore];
  return require("initialize").useStateFromStores(items, () => {
    const dismissedGuildContent = UserSettingsProtoStore.getDismissedGuildContent(closure_1);
    let hasBitResult = null != dismissedGuildContent;
    if (hasBitResult) {
      hasBitResult = Uint8ArrayUtils.hasBit(dismissedGuildContent, closure_0);
    }
    return hasBitResult;
  });
});
export const markContentAsDismissed = function markContentAsDismissed(dc, guildId, arg2, AUTO_DISMISS) {
  _require = true;
  importDefault = dc;
  dependencyMap = guildId;
  const result = require("UserSettingsProtoActionCreators").updateUserGuildSettings(guildId, (dismissedGuildContent) => {
    dismissedGuildContent = UserSettingsProtoStore.getDismissedGuildContent(closure_2);
    let hasBitResult = null != dismissedGuildContent;
    if (hasBitResult) {
      hasBitResult = Uint8ArrayUtils.hasBit(dismissedGuildContent, tmp);
    }
    if (!c0) {
      const tmp9 = Uint8ArrayUtils;
      dismissedGuildContent.dismissedGuildContent = tmp6 ? tmp9.addBit : tmp9.removeBit(dismissedGuildContent.dismissedGuildContent, tmp);
    }
    return false;
  }, UserSettingsDelay.INFREQUENT_USER_ACTION);
  if (arg2) {
    let UNKNOWN = AUTO_DISMISS;
    const obj3 = { type: require("dismissible_content").DismissibleGuildContent[dc], guild_id: guildId, action: null };
    if (AUTO_DISMISS == null) {
      UNKNOWN = ContentDismissActionType.UNKNOWN;
    }
    obj3.action = UNKNOWN;
    AnalyticsUtilsDefault.track(AnalyticEvents.DISMISSIBLE_CONTENT_DISMISSED, obj3);
  }
};
export const unmarkContentAsDismissed = function unmarkContentAsDismissed(dc, guildId) {
  _require = false;
  closure_1 = dc;
  dependencyMap = guildId;
  const result = require("UserSettingsProtoActionCreators").updateUserGuildSettings(guildId, (dismissedGuildContent) => {
    dismissedGuildContent = UserSettingsProtoStore.getDismissedGuildContent(closure_2);
    let hasBitResult = null != dismissedGuildContent;
    if (hasBitResult) {
      hasBitResult = Uint8ArrayUtils.hasBit(dismissedGuildContent, tmp);
    }
    if (!c0) {
      const tmp9 = Uint8ArrayUtils;
      dismissedGuildContent.dismissedGuildContent = tmp6 ? tmp9.addBit : tmp9.removeBit(dismissedGuildContent.dismissedGuildContent, tmp);
    }
    return false;
  }, UserSettingsDelay.FREQUENT_USER_ACTION);
};
