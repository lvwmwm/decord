// Module ID: 11990
// Function ID: 11991
// Name: GuildDismissibleContentUtils
// Dependencies: [1220, 1074, 2042, 1084, 2028, 504, 2026, 1241, 2029, 2]
// Exports: isContentDismissed, markContentAsDismissed, unmarkContentAsDismissed, useIsContentDismissed

// Module 11990 (GuildDismissibleContentUtils)
import Constants from "Constants" /* 1074 */;
import UserSettingsConstants from "UserSettingsConstants" /* 1084 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import Uint8ArrayUtils from "Uint8ArrayUtils" /* 2028 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2042 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1220 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, importDefault;

const AnalyticEvents = Constants.AnalyticEvents;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const UserSettingsDelay = UserSettingsConstants.UserSettingsDelay;
let result = size.fileFinishedImporting("modules/guild_dismissible_content/GuildDismissibleContentUtils.tsx");

export const isContentDismissed = function isContentDismissed(GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK, c0) {
  const dismissedGuildContent = UserSettingsProtoStore.getDismissedGuildContent(c0);
  let hasBitResult = null != dismissedGuildContent;
  if (hasBitResult) {
    const obj = Uint8ArrayUtils;
    hasBitResult = obj.hasBit(dismissedGuildContent, GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK);
  }
  return hasBitResult;
};
export const useIsContentDismissed = function useIsContentDismissed(arg0, arg1) {
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
};
export const markContentAsDismissed = function markContentAsDismissed(GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK, guildId, arg2, AUTO_DISMISS) {
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
    const obj2 = { type: tmp(2029).DismissibleGuildContent[GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK], guild_id: guildId, action: UNKNOWN };
    const track = AnalyticsUtilsDefault.track;
    const DISMISSIBLE_CONTENT_DISMISSED = AnalyticEvents.DISMISSIBLE_CONTENT_DISMISSED;
    AnalyticsUtilsDefault;
    if (AUTO_DISMISS == null) {
      UNKNOWN = ContentDismissActionType.UNKNOWN;
    }
    track(DISMISSIBLE_CONTENT_DISMISSED, obj2);
  }
};
export const unmarkContentAsDismissed = function unmarkContentAsDismissed(dc, guildId) {
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
};
