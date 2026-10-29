// Module ID: 7464
// Function ID: 7465
// Name: ForumUtils
// Dependencies: [4857, 4879, 6829, 7440, 4864, 1125, 4866, 2]
// Exports: canDisplayPostUnreadMessageCount, getForumPostReadStates, getForumPostReadStatesById, getForumTimestampFormatter, isForumPostPinned

// Module 7464 (ForumUtils)
import intl2 from "intl" /* 1125 */;
import ChannelConstants from "ChannelConstants" /* 4864 */;
import ThreadSortOrder from "ThreadSortOrder" /* 4866 */;
import ForumConstants from "ForumConstants" /* 7440 */;
import ChannelStore from "ChannelStore" /* 4857 */;
import GuildStore from "GuildStore" /* 4879 */;
import ReadStateStore from "ReadStateStore" /* 6829 */;
import size from "module_2" /* 2 */;

function getCreationDefaultFormatter() {
  let intl;
  const time = { minutes: intl2.t.nFt9ck, hours: intl2.t.jzCewe, days: intl2.t.U4I0sw, month: intl.string(intl2.t["nBNJ/L"]) };
  intl = intl2.intl;
  return time;
}
const ForumTimestampFormats = ForumConstants.ForumTimestampFormats;
const ChannelFlags = ChannelConstants.ChannelFlags;
const result = size.fileFinishedImporting("modules/forums/ForumUtils.tsx");

export function getForumPostReadStates(isArchivedThread, guild, items) {
  let isArchivedThreadResult1;
  let obj;
  let tmp = items;
  if (items === undefined) {
    items = [ReadStateStore];
    tmp = items;
  }
  [obj] = tmp;
  let isNewForumThreadResult = !isArchivedThread.isArchivedThread();
  isArchivedThread.isArchivedThread();
  if (isNewForumThreadResult) {
    isNewForumThreadResult = obj.isNewForumThread(isArchivedThread.id, isArchivedThread.parent_id, guild);
  }
  const obj2 = { isNew: isNewForumThreadResult, hasUnreads: !isArchivedThreadResult1 && obj.isForumPostUnread(isArchivedThread.id) };
  isArchivedThreadResult1 = isArchivedThread.isArchivedThread();
  !isArchivedThreadResult1 && obj.isForumPostUnread(isArchivedThread.id);
  return obj2;
}
export function getForumPostReadStatesById(item) {
  let isArchivedThreadResult1;
  let obj;
  let obj2;
  let obj4;
  let tmp5;
  let tmp = arg1;
  if (arg1 === undefined) {
    const items = [ChannelStore, GuildStore, ReadStateStore];
    tmp = items;
  }
  [obj, obj2, tmp5] = tmp;
  const channel = obj.getChannel(item);
  if (null == channel) {
    return null;
  } else {
    const guild = obj2.getGuild(channel.guild_id);
    let tmp11 = null;
    if (null != guild) {
      const items1 = [tmp5];
      [obj4] = items1;
      const isArchivedThreadResult = channel.isArchivedThread();
      const obj3 = { isNew: !isArchivedThreadResult && obj4.isNewForumThread(channel.id, channel.parent_id, guild), hasUnreads: !isArchivedThreadResult1 && obj4.isForumPostUnread(channel.id) };
      !isArchivedThreadResult && obj4.isNewForumThread(channel.id, channel.parent_id, guild);
      isArchivedThreadResult1 = channel.isArchivedThread();
      tmp11 = obj3;
      !isArchivedThreadResult1 && obj4.isForumPostUnread(channel.id);
    }
    return tmp11;
  }
}
export function getForumTimestampFormatter(arg0, DURATION_AGO) {
  if (DURATION_AGO === ForumTimestampFormats.POSTED_DURATION_AGO) {
    if (arg0 === ThreadSortOrder.ThreadSortOrder.CREATION_DATE) {
      return getCreationDefaultFormatter;
    }
  }
}
export function canDisplayPostUnreadMessageCount(id, items) {
  let obj;
  [obj] = items;
  let hasTrackedUnreadResult = obj.hasTrackedUnread(id);
  const hasOpenedThreadResult = obj.hasOpenedThread(id);
  const tmp3 = null != obj.getTrackedAckMessageId(id);
  if (hasTrackedUnreadResult) {
    hasTrackedUnreadResult = hasOpenedThreadResult;
  }
  if (hasTrackedUnreadResult) {
    hasTrackedUnreadResult = tmp3;
  }
  return hasTrackedUnreadResult;
}
export function isForumPostPinned(id) {
  const channel = ChannelStore.getChannel(id);
  let hasFlagResult;
  if (channel != null) {
    hasFlagResult = channel.hasFlag(ChannelFlags.PINNED);
  }
  return true === hasFlagResult;
}
