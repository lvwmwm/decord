// Module ID: 3767
// Function ID: 28939
// Name: getReactionEmojiName
// Dependencies: []
// Exports: emojiEquals, getAccessibleEmojiDisplayName, getBurstAnalyticsSection, isCustomReactionEmojiId, shouldApplyReaction, toReactionEmoji, updateReactionNotificationsSetting

// Module 3767 (getReactionEmojiName)
function getReactionEmojiName(emoji) {
  if (null == emoji.id) {
    let result = importDefault(dependencyMap[3]).convertSurrogateToName(emoji.name);
    const obj = importDefault(dependencyMap[3]);
  } else {
    const _HermesInternal = HermesInternal;
    result = ":" + emoji.name + ":";
  }
  return result;
}
let closure_3 = importDefault(dependencyMap[0]);
({ AnalyticsSections: closure_4, AnalyticEvents: closure_5 } = arg1(dependencyMap[1]));
let closure_6 = arg1(dependencyMap[2]).NotificationSettingsUpdateType;
const tmp2 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/reactions/ReactionUtils.tsx");

export const MAX_REACTIONS = 20;
export { getReactionEmojiName };
export const getAccessibleEmojiDisplayName = function getAccessibleEmojiDisplayName(me, count, emoji, arg3) {
  const t = count(dependencyMap[4]).t;
  if (!arg3) {
    const intl = count(dependencyMap[4]).intl;
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
export const emojiEquals = function emojiEquals(emoji, closure_1) {
  if (null != closure_1.id) {
    if (null != emoji.id) {
      const _HermesInternal = HermesInternal;
      let id = "" + emoji.id;
    } else {
      id = emoji.id;
    }
    const _HermesInternal2 = HermesInternal;
    return "" + closure_1.id === id;
  } else {
    return null == emoji.id && closure_1.name === emoji.name;
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
  const ReactionNotifications = setting(dependencyMap[5]).ReactionNotifications;
  ReactionNotifications.updateSetting(NumberResult);
  let obj = importDefault(dependencyMap[6]);
  obj = { update_type: constants3.ACCOUNT, reaction_notifications: NumberResult, reaction_notifications_old: setting };
  obj.track(constants2.NOTIFICATION_SETTINGS_UPDATED, obj);
};
