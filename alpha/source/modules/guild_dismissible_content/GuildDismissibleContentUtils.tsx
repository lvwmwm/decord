// Module ID: 14020
// Function ID: 14021
// Name: GuildDismissibleContentUtils
// Dependencies: [1232, 1072, 4855, 1082, 4841, 504, 4839, 1253, 4842, 2]
// Exports: isContentDismissed, markContentAsDismissed, unmarkContentAsDismissed, useIsContentDismissed

// Module 14020 (GuildDismissibleContentUtils)
import Constants from "Constants" /* 1072 */;
import UserSettingsConstants from "UserSettingsConstants" /* 1082 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import Uint8ArrayUtils from "Uint8ArrayUtils" /* 4841 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4855 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1232 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, importDefault;

const AnalyticEvents = Constants.AnalyticEvents;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const UserSettingsDelay = UserSettingsConstants.UserSettingsDelay;
let result = size.fileFinishedImporting("modules/guild_dismissible_content/GuildDismissibleContentUtils.tsx");

export function isContentDismissed(GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK, c0) {
  const dismissedGuildContent = UserSettingsProtoStore.getDismissedGuildContent(c0);
  let hasBitResult = null != dismissedGuildContent;
  if (hasBitResult) {
    const obj = Uint8ArrayUtils;
    hasBitResult = obj.hasBit(dismissedGuildContent, GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK);
  }
  return hasBitResult;
}
export function useIsContentDismissed(arg0, arg1) {
  let closure_0;
  _require = arg0;
  let closure_1 = arg1;
  let obj = require("get initialized");
  const items = [UserSettingsProtoStore];
  return obj.useStateFromStores(items, () => {
    const dismissedGuildContent = UserSettingsProtoStore.getDismissedGuildContent(closure_1);
    let hasBitResult = null != dismissedGuildContent;
    const tmp = closure_0;
    if (hasBitResult) {
      const obj = Uint8ArrayUtils;
      hasBitResult = obj.hasBit(dismissedGuildContent, tmp);
    }
    return hasBitResult;
  });
}
export function markContentAsDismissed(GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK, guildId, arg2, AUTO_DISMISS) {
  let c0;
  _require = true;
  importDefault = GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK;
  dependencyMap = guildId;
  const obj = require("UserSettingsProtoActionCreators");
  const result = obj.updateUserGuildSettings(guildId, (dismissedGuildContent) => {
    dismissedGuildContent = UserSettingsProtoStore.getDismissedGuildContent(guildId);
    let hasBitResult = null != dismissedGuildContent;
    if (hasBitResult) {
      const obj = Uint8ArrayUtils;
      hasBitResult = obj.hasBit(dismissedGuildContent, tmp);
    }
    if (!c0) {
      const tmp9 = Uint8ArrayUtils;
      dismissedGuildContent.dismissedGuildContent = c0 ? tmp9.addBit : tmp9.removeBit(dismissedGuildContent.dismissedGuildContent, dc);
    }
    return false;
  }, UserSettingsDelay.INFREQUENT_USER_ACTION);
  const tmp = _require;
  const tmp4 = arg2;
  if (tmp4) {
    let UNKNOWN = AUTO_DISMISS;
    const obj2 = { type: tmp(4842).DismissibleGuildContent[GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK], guild_id: guildId, action: UNKNOWN };
    const track = AnalyticsUtilsDefault.track;
    const DISMISSIBLE_CONTENT_DISMISSED = AnalyticEvents.DISMISSIBLE_CONTENT_DISMISSED;
    AnalyticsUtilsDefault;
    if (AUTO_DISMISS == null) {
      UNKNOWN = ContentDismissActionType.UNKNOWN;
    }
    track(DISMISSIBLE_CONTENT_DISMISSED, obj2);
  }
}
export function unmarkContentAsDismissed(dc, guildId) {
  let c0;
  _require = false;
  let closure_1 = dc;
  dependencyMap = guildId;
  let obj = require("UserSettingsProtoActionCreators");
  const result = obj.updateUserGuildSettings(guildId, (dismissedGuildContent) => {
    dismissedGuildContent = UserSettingsProtoStore.getDismissedGuildContent(guildId);
    let hasBitResult = null != dismissedGuildContent;
    if (hasBitResult) {
      const obj = Uint8ArrayUtils;
      hasBitResult = obj.hasBit(dismissedGuildContent, tmp);
    }
    if (!c0) {
      const tmp9 = Uint8ArrayUtils;
      dismissedGuildContent.dismissedGuildContent = c0 ? tmp9.addBit : tmp9.removeBit(dismissedGuildContent.dismissedGuildContent, dc);
    }
    return false;
  }, UserSettingsDelay.FREQUENT_USER_ACTION);
}
