// Module ID: 5684
// Function ID: 48913
// Name: getForumPostReadStates
// Dependencies: [1348, 1838, 4142, 5685, 1355, 1212, 1357, 2]
// Exports: canDisplayPostUnreadMessageCount, getForumPostReadStatesById, getForumTimestampFormatter, isForumPostPinned

// Module 5684 (getForumPostReadStates)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_4 from "_isNativeReflectConstruct";
import { ForumTimestampFormats } from "FORUM_GUIDELINES_ACTION_SHEET";
import { ChannelFlags } from "set";

const require = arg1;
function getForumPostReadStates(channel, guild, items) {
  let obj;
  let tmp = items;
  if (items === undefined) {
    items = [closure_4];
    tmp = items;
  }
  [obj] = tmp;
  obj = {};
  let isNewForumThreadResult = !channel.isArchivedThread();
  if (isNewForumThreadResult) {
    isNewForumThreadResult = obj.isNewForumThread(channel.id, channel.parent_id, guild);
  }
  obj.isNew = isNewForumThreadResult;
  obj.hasUnreads = !channel.isArchivedThread() && obj.isForumPostUnread(channel.id);
  return obj;
}
function getCreationDefaultFormatter() {
  const obj = { minutes: require(1212) /* getSystemLocale */.t.nFt9ck, hours: require(1212) /* getSystemLocale */.t.jzCewe, days: require(1212) /* getSystemLocale */.t.U4I0sw };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.month = intl.string(require(1212) /* getSystemLocale */.t["nBNJ/L"]);
  return obj;
}
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/forums/ForumUtils.tsx");

export { getForumPostReadStates };
export const getForumPostReadStatesById = function getForumPostReadStatesById(channelId) {
  let obj;
  let obj2;
  let tmp5;
  let tmp = arg1;
  if (arg1 === undefined) {
    const items = [_isNativeReflectConstruct, _createForOfIteratorHelperLoose, closure_4];
    tmp = items;
  }
  [obj, obj2, tmp5] = tmp;
  const channel = obj.getChannel(channelId);
  if (null == channel) {
    return null;
  } else {
    const guild = obj2.getGuild(channel.guild_id);
    let tmp8 = null;
    if (null != guild) {
      const items1 = [tmp5];
      tmp8 = getForumPostReadStates(channel, guild, items1);
    }
    return tmp8;
  }
};
export const getForumTimestampFormatter = function getForumTimestampFormatter(closure_1, DURATION_AGO) {
  if (DURATION_AGO === ForumTimestampFormats.POSTED_DURATION_AGO) {
    if (closure_1 === require(1357) /* set */.ThreadSortOrder.CREATION_DATE) {
      return getCreationDefaultFormatter;
    }
  }
};
export const canDisplayPostUnreadMessageCount = function canDisplayPostUnreadMessageCount(id, items) {
  let obj;
  [obj] = items;
  let hasTrackedUnreadResult = obj.hasTrackedUnread(id);
  const hasOpenedThreadResult = obj.hasOpenedThread(id);
  if (hasTrackedUnreadResult) {
    hasTrackedUnreadResult = hasOpenedThreadResult;
  }
  if (hasTrackedUnreadResult) {
    hasTrackedUnreadResult = tmp3;
  }
  return hasTrackedUnreadResult;
};
export const isForumPostPinned = function isForumPostPinned(id) {
  channel = channel.getChannel(id);
  let hasFlagResult;
  if (null != channel) {
    hasFlagResult = channel.hasFlag(ChannelFlags.PINNED);
  }
  return true === hasFlagResult;
};
