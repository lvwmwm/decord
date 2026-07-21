// Module ID: 5680
// Function ID: 48870
// Name: getForumPostReadStates
// Dependencies: []
// Exports: canDisplayPostUnreadMessageCount, getForumPostReadStatesById, getForumTimestampFormatter, isForumPostPinned

// Module 5680 (getForumPostReadStates)
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
  const obj = { minutes: arg1(dependencyMap[5]).t.nFt9ck, hours: arg1(dependencyMap[5]).t.jzCewe, days: arg1(dependencyMap[5]).t.U4I0sw };
  const intl = arg1(dependencyMap[5]).intl;
  obj.month = intl.string(arg1(dependencyMap[5]).t.nBNJ/L);
  return obj;
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
const ForumTimestampFormats = arg1(dependencyMap[3]).ForumTimestampFormats;
const ChannelFlags = arg1(dependencyMap[4]).ChannelFlags;
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/forums/ForumUtils.tsx");

export { getForumPostReadStates };
export const getForumPostReadStatesById = function getForumPostReadStatesById(channelId) {
  let obj;
  let obj2;
  let tmp5;
  let tmp = arg1;
  if (arg1 === undefined) {
    const items = [closure_2, closure_3, closure_4];
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
export const getForumTimestampFormatter = function getForumTimestampFormatter(arg0, DURATION_AGO) {
  if (DURATION_AGO === ForumTimestampFormats.POSTED_DURATION_AGO) {
    if (arg0 === DURATION_AGO(dependencyMap[6]).ThreadSortOrder.CREATION_DATE) {
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
  const channel = channel.getChannel(id);
  let hasFlagResult;
  if (null != channel) {
    hasFlagResult = channel.hasFlag(ChannelFlags.PINNED);
  }
  return true === hasFlagResult;
};
