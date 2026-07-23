// Module ID: 3769
// Function ID: 28949
// Name: getReactionEmojiName
// Dependencies: [1194, 653, 3770, 3771, 1212, 3803, 675, 2]
// Exports: emojiEquals, getAccessibleEmojiDisplayName, getBurstAnalyticsSection, isCustomReactionEmojiId, shouldApplyReaction, toReactionEmoji, updateReactionNotificationsSetting

// Module 3769 (getReactionEmojiName)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";
import { NotificationSettingsUpdateType as closure_6 } from "AccountNotificationFlags";

let closure_4;
let closure_5;
const require = arg1;
function getReactionEmojiName(emoji) {
  if (null == emoji.id) {
    let result = importDefault(3771).convertSurrogateToName(emoji.name);
    const obj = importDefault(3771);
  } else {
    const _HermesInternal = HermesInternal;
    result = ":" + emoji.name + ":";
  }
  return result;
}
({ AnalyticsSections: closure_4, AnalyticEvents: closure_5 } = ME);
let result = require("AccountNotificationFlags").fileFinishedImporting("modules/reactions/ReactionUtils.tsx");

export const MAX_REACTIONS = 20;
export { getReactionEmojiName };
export const getAccessibleEmojiDisplayName = function getAccessibleEmojiDisplayName(me, count, emoji, arg3) {
  const t = require(1212) /* getSystemLocale */.t;
  if (!arg3) {
    const intl = require(1212) /* getSystemLocale */.intl;
    const obj = { reactions: count };
    const str = getReactionEmojiName(emoji);
    let trimmed;
    if (null != str) {
      const str3 = str.replace(/[:_]/g, " ");
      if (null != str3) {
        trimmed = str3.trim();
      }
    }
    let str4 = "";
    if (null != trimmed) {
      str4 = trimmed;
    }
    obj.emojiName = str4;
    return intl.formatToPlainString(me ? t.CLuzw5 : t.PirBBE, obj);
  }
};
export const toReactionEmoji = function toReactionEmoji(byName) {
  const obj = {};
  const id = byName.id;
  let tmp = null;
  if (null != id) {
    tmp = id;
  }
  obj.id = tmp;
  let name = null != byName.id ? byName.name : byName.optionallyDiverseSequence;
  if (null == name) {
    name = byName.name;
  }
  let str = "";
  if (null != name) {
    str = name;
  }
  obj.name = str;
  obj.animated = Boolean(byName.animated);
  return obj;
};
export const isCustomReactionEmojiId = function isCustomReactionEmojiId(emojiId) {
  let tmp = null != emojiId;
  if (tmp) {
    tmp = "" !== emojiId;
  }
  if (!tmp) {
    return tmp;
  } else if ("number" === typeof emojiId) {
    let tmp3 = 0 !== emojiId;
  } else {
    const _String = String;
    tmp3 = "0" !== String(emojiId);
  }
};
export const emojiEquals = function emojiEquals(emoji, closure_0) {
  if (null != closure_0.id) {
    if (null != emoji.id) {
      const _HermesInternal = HermesInternal;
      let id = "" + emoji.id;
    } else {
      id = emoji.id;
    }
    const _HermesInternal2 = HermesInternal;
    return "" + closure_0.id === id;
  } else {
    return null == emoji.id && closure_0.name === emoji.name;
  }
};
export const getBurstAnalyticsSection = function getBurstAnalyticsSection(isThread) {
  if (isThread.isThread()) {
    let FORUM_CHANNEL_TEXT_AREA = constants.THREAD_TEXT_AREA;
  } else if (isThread.isForumPost()) {
    FORUM_CHANNEL_TEXT_AREA = constants.FORUM_CHANNEL_TEXT_AREA;
  } else {
    FORUM_CHANNEL_TEXT_AREA = isThread.isGuildVocal() ? tmp.TEXT_IN_VOICE : tmp.CHANNEL_TEXT_AREA;
  }
  return FORUM_CHANNEL_TEXT_AREA;
};
export const shouldApplyReaction = function shouldApplyReaction(optimistic) {
  optimistic = optimistic.optimistic;
  if (optimistic) {
    optimistic = id.getId() !== optimistic.userId;
  }
  return !optimistic;
};
export const updateReactionNotificationsSetting = function updateReactionNotificationsSetting(NumberResult, setting) {
  const ReactionNotifications = require(3803) /* explicitContentFromProto */.ReactionNotifications;
  ReactionNotifications.updateSetting(NumberResult);
  let obj = importDefault(675);
  obj = { update_type: constants3.ACCOUNT, reaction_notifications: NumberResult, reaction_notifications_old: setting };
  obj.track(constants2.NOTIFICATION_SETTINGS_UPDATED, obj);
};
