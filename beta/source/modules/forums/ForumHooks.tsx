// Module ID: 7310
// Function ID: 7311
// Name: ForumHooks
// Dependencies: [5, 19, 5771, 5818, 5819, 6724, 2045, 5738, 2067, 4469, 4851, 1372, 6723, 6695, 7311, 7187, 6691, 1074, 2052, 1114, 504, 6725, 573, 12, 1370, 5298, 11, 7200, 2054, 7312, 5083, 7313, 7323, 7324, 6531, 2]
// Exports: getForumPostAuthor, useAutomaticForumSearch, useCanManageChannel, useCanSearchForumPosts, useCanViewArchivedPosts, useChannelTemplate, useDefaultReactionEmoji, useExistingPin, useFacepileUsers, useForumActiveThreadIds, useForumPostAuthor, useForumPostFirstMessageMarkup, useForumPostMessageAuthor, useForumPostReadStates, useForumSearchQuery, useForumSearchState, useForumThreadsForChannelList, useHasForumSearchQuery, useLastActiveTimestamp, useLoadForumUnreadCounts, useMaxPossibleForumPostReactions, useMessageCount, useMostUsedReaction, useSomeForumPostReactions, useUnreadThreadsCountForParent

// Module 7310 (ForumHooks)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import _modDef12 from "module_12" /* 12 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import ThreadConstants from "ThreadConstants" /* 1114 */;
import GlobalUtils from "GlobalUtils" /* 1370 */;
import ChannelConstants from "ChannelConstants" /* 2052 */;
import ThreadSortOrder from "ThreadSortOrder" /* 2054 */;
import useMessageAuthor from "useMessageAuthor" /* 5083 */;
import ReadStateActionCreators from "ReadStateActionCreators" /* 6531 */;
import ForumConstants from "ForumConstants" /* 6691 */;
import ForumUtils from "ForumUtils" /* 6725 */;
import ThreadUtils from "ThreadUtils" /* 7200 */;
import renderMessageMarkupDefault from "renderMessageMarkup" /* 7313 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import EmojiStore from "EmojiStore" /* 5771 */;
import ActiveJoinedThreadsStore from "ActiveJoinedThreadsStore" /* 5818 */;
import ActiveThreadsStore from "ActiveThreadsStore" /* 5819 */;
import ThreadMessageStore from "ThreadMessageStore" /* 6724 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildMemberRequesterStore from "GuildMemberRequesterStore" /* 5738 */;
import GuildStore from "GuildStore" /* 2067 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import ReadStateStore from "ReadStateStore" /* 4851 */;
import UserStore from "UserStore" /* 1372 */;
import ForumActivePostStore from "ForumActivePostStore" /* 6723 */;
import ForumPostMessagesStore from "ForumPostMessagesStore" /* 6695 */;
import ForumPostUnreadCountStore from "ForumPostUnreadCountStore" /* 7311 */;
import ForumSearchStore from "ForumSearchStore" /* 7187 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c0, current, dependencyMap, importDefault, set, usableCustomEmojiById;

let closure_20;
let closure_21;
let closure_22;
let closure_23;
const f84262 = (count) => count.count + count.burst_count;
const f84263 = (burst_count) => burst_count.burst_count;
const f84265 = () => PermissionStore.can(constants.READ_MESSAGE_HISTORY, closure_0);
const ForumTimestampFormats = ForumConstants.ForumTimestampFormats;
({ AnalyticsObjectTypes: closure_20, AnalyticsObjects: closure_21, EMPTY_STRING_SNOWFLAKE_ID: closure_22, Permissions: closure_23 } = Constants);
const ChannelFlags = ChannelConstants.ChannelFlags;
let closure_25 = ThreadConstants.MAX_THREAD_UNREAD_MESSAGE_COUNT;
let closure_26 = { isNew: false, hasUnreads: false };
const result = size.fileFinishedImporting("modules/forums/ForumHooks.tsx");

export const useLoadForumUnreadCounts = function useLoadForumUnreadCounts(channel, sortOrder, tagFilter, tagSetting) {
  _require = channel;
  let closure_1 = sortOrder;
  dependencyMap = tagFilter;
  let closure_3 = tagSetting;
  let obj = require("get initialized");
  let items = [ActiveThreadsStore];
  const stateFromStores = obj.useStateFromStores(items, () => ActiveThreadsStore.hasLoaded(channel.guild_id));
  const items1 = [, , , , , ];
  ({ id: arr2[0], guild_id: arr2[1] } = channel);
  items1[2] = stateFromStores;
  items1[3] = tagFilter;
  items1[4] = sortOrder;
  items1[5] = tagSetting;
  const effect = stateFromStores.useEffect(() => {
    let trackedAckMessageId;
    const tmp = stateFromStores;
    if (tmp) {
      const threadIdsMissingCounts = ForumPostUnreadCountStore.getThreadIdsMissingCounts(channel.guild_id, ForumActivePostStore.getThreadIds(channel.id, sortOrder, tagFilter, tagSetting));
      const found = threadIdsMissingCounts.filter((item) => {
        const items = [trackedAckMessageId];
        const obj = channel(tagFilter[21]);
        return obj.canDisplayPostUnreadMessageCount(item, items);
      });
      const substr = found.slice(0, 180);
      const mapped = substr.map((threadId) => {
        const obj = { threadId, ackMessageId: trackedAckMessageId.getTrackedAckMessageId(threadId) };
        return obj;
      });
      const tmp3 = channel;
      if (mapped.length > 0) {
        let obj = DispatcherDefault;
        const obj3 = { type: "REQUEST_FORUM_UNREADS", guildId: null, channelId: null, threads: mapped };
        ({ guild_id: obj2.guildId, id: obj2.channelId } = tmp3);
        obj.dispatch(obj3);
      }
    }
  }, items1);
};
export const useExistingPin = function useExistingPin(thread) {
  _require = thread;
  const items = [ActiveThreadsStore, ChannelStore];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    const tmp = _modDef12;
    const tmpResult = tmp(ActiveThreadsStore.getThreadsForParent(thread.guild_id, thread.parent_id));
    const keys = tmpResult.keys();
    const found = keys.filter((item) => {
      channel = channel.getChannel(item);
      let hasFlagResult;
      if (channel != null) {
        hasFlagResult = channel.hasFlag(constants.PINNED);
      }
      return true === hasFlagResult;
    });
    return ChannelStore.getChannel(found.head());
  });
};
export const useFacepileUsers = function useFacepileUsers(thread, typingUserIds) {
  let stateFromStoresArray;
  _require = thread;
  importDefault = typingUserIds;
  const items = [UserStore];
  const obj = require("get initialized");
  stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    let user;
    const mapped = typingUserIds.map((item) => user.getUser(item));
    return mapped.filter(GlobalUtils.isNotNullish);
  });
  require("useMountEffect")(() => {
    let guild_id;
    const item = stateFromStoresArray.forEach((id) => {
      const member = GuildMemberRequesterStore.requestMember(guild_id.guild_id, id.id);
    });
  });
  return stateFromStoresArray;
};
export const useLastActiveTimestamp = function useLastActiveTimestamp(thread, sortOrder, format) {
  _require = thread;
  let closure_1 = sortOrder;
  let DURATION_AGO = format;
  if (format === undefined) {
    DURATION_AGO = ForumTimestampFormats.DURATION_AGO;
  }
  let lastMessageTimestamp;
  const items = [thread.id];
  const memo = lastMessageTimestamp.useMemo(() => {
    const obj = SnowflakeUtilsDefault;
    return obj.extractTimestamp(thread.id);
  }, items);
  let obj = require("ThreadUtils");
  lastMessageTimestamp = obj.useLastMessageTimestamp(thread);
  const items1 = [sortOrder, DURATION_AGO];
  const memo1 = lastMessageTimestamp.useMemo(() => {
    const obj = ForumUtils;
    return obj.getForumTimestampFormatter(sortOrder, DURATION_AGO);
  }, items1);
  const items2 = [lastMessageTimestamp, sortOrder, memo, memo1];
  return lastMessageTimestamp.useMemo(() => {
    let timestampString;
    if (sortOrder === ThreadSortOrder.ThreadSortOrder.CREATION_DATE) {
      const tmpResult = ThreadUtils;
      timestampString = tmpResult.getTimestampString(memo, memo1);
    } else {
      const tmpResult2 = ThreadUtils;
      timestampString = tmpResult2.getTimestampString(lastMessageTimestamp, memo1);
    }
    return timestampString;
  }, items2);
};
export const useMostUsedReaction = function useMostUsedReaction(reactions) {
  reactions = undefined;
  const useMemo = react.useMemo;
  if (reactions != null) {
    reactions = reactions.reactions;
  }
  let items = [reactions];
  return useMemo(() => {
    reactions = undefined;
    if (reactions != null) {
      reactions = reactions.reactions;
    }
    if (reactions == null) {
      reactions = [];
    }
    if (0 !== reactions.length) {
      const items = [f84262, f84263];
      const obj = _modDef12;
      return obj.orderBy(reactions, items, ["desc", "desc"])[0];
    }
  }, items);
};
export const useDefaultReactionEmoji = function useDefaultReactionEmoji(defaultReactionEmoji) {
  defaultReactionEmoji = undefined;
  if (defaultReactionEmoji != null) {
    defaultReactionEmoji = defaultReactionEmoji.defaultReactionEmoji;
  }
  const items = [EmojiStore];
  const obj = defaultReactionEmoji(504);
  const stateFromStores = obj.useStateFromStores(items, () => {
    let emojiId;
    if (defaultReactionEmoji != null) {
      emojiId = tmp.emojiId;
    }
    usableCustomEmojiById = null;
    if (null != emojiId) {
      usableCustomEmojiById = usableCustomEmojiById.getUsableCustomEmojiById(tmp.emojiId);
    }
    return usableCustomEmojiById;
  });
  let tmp3 = null;
  if (null != defaultReactionEmoji) {
    let tmp4;
    if (null != defaultReactionEmoji.emojiId) {
      if (null != stateFromStores) {
        const obj5 = { id: defaultReactionEmoji.emojiId, name: null, animated: null };
        ({ name: obj3.name, animated: obj3.animated } = stateFromStores);
        tmp4 = obj5;
      }
      tmp3 = tmp4;
    }
    tmp4 = null;
    if (null != defaultReactionEmoji.emojiName) {
      const obj6 = { id: null, name: null, animated: false };
      ({ emojiId: obj2.id, emojiName: obj2.name } = defaultReactionEmoji);
      tmp4 = obj6;
    }
  }
  return tmp3;
};
export const useSomeForumPostReactions = function useSomeForumPostReactions(message) {
  let count;
  let parentChannel;
  let substr;
  let sum;
  message = message.message;
  ({ parentChannel, count } = message);
  if (count === undefined) {
    count = 1;
  }
  let flag = message.sorted;
  if (flag === undefined) {
    flag = true;
  }
  let defaultReactionEmoji;
  if (parentChannel != null) {
    defaultReactionEmoji = parentChannel.defaultReactionEmoji;
  }
  let obj = message(504);
  let items = [EmojiStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let emojiId;
    if (defaultReactionEmoji != null) {
      emojiId = tmp.emojiId;
    }
    usableCustomEmojiById = null;
    if (null != emojiId) {
      usableCustomEmojiById = usableCustomEmojiById.getUsableCustomEmojiById(tmp.emojiId);
    }
    return usableCustomEmojiById;
  });
  let tmp4 = null;
  if (null != defaultReactionEmoji) {
    let tmp5;
    if (null != defaultReactionEmoji.emojiId) {
      if (null != stateFromStores) {
        const obj4 = { id: defaultReactionEmoji.emojiId, name: null, animated: null };
        ({ name: obj3.name, animated: obj3.animated } = stateFromStores);
        tmp5 = obj4;
      }
      tmp4 = tmp5;
    }
    tmp5 = null;
    if (null != defaultReactionEmoji.emojiName) {
      const obj5 = { id: null, name: null, animated: false };
      ({ emojiId: obj2.id, emojiName: obj2.name } = defaultReactionEmoji);
      tmp5 = obj5;
    }
  }
  let reactions;
  const useMemo = react.useMemo;
  if (message != null) {
    reactions = message.reactions;
  }
  const items1 = [reactions, flag];
  const memo = useMemo(() => {
    let reactions;
    if (message != null) {
      reactions = message.reactions;
    }
    if (reactions == null) {
      reactions = [];
    }
    let orderByResult = reactions;
    if (flag) {
      const items = [f84262, f84263];
      const obj = _modDef12;
      orderByResult = obj.orderBy(reactions, items, ["desc", "desc"]);
    }
    return orderByResult;
  }, items1);
  let items2 = [];
  if (null != tmp4) {
    const items3 = [{ emoji: tmp4, me: false, count: 0, burst_count: 0, me_burst: false }];
    items2 = items3;
    const obj9 = { emoji: tmp4, me: false, count: 0, burst_count: 0, me_burst: false };
  }
  if (memo.length > 0) {
    items2 = memo;
  }
  const obj10 = { reactions: items2.slice(0, count), additionalNonUniqueReactionCount: sum(substr.map((count) => count.count + count.burst_count)) };
  sum = flag(12).sum;
  flag(12);
  substr = items2.slice(count, items2.length);
  return obj10;
};
export const useMaxPossibleForumPostReactions = function useMaxPossibleForumPostReactions(message) {
  let containerWidth;
  let digitWidth;
  let reactionEmojiWidth;
  message = message.message;
  const parentChannel = message.parentChannel;
  let defaultReactionEmoji;
  ({ containerWidth, reactionEmojiWidth, digitWidth } = message);
  if (parentChannel != null) {
    defaultReactionEmoji = parentChannel.defaultReactionEmoji;
  }
  let obj = message(504);
  let items = [EmojiStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let emojiId;
    if (defaultReactionEmoji != null) {
      emojiId = tmp.emojiId;
    }
    usableCustomEmojiById = null;
    if (null != emojiId) {
      usableCustomEmojiById = usableCustomEmojiById.getUsableCustomEmojiById(tmp.emojiId);
    }
    return usableCustomEmojiById;
  });
  let tmp3 = null;
  if (null != defaultReactionEmoji) {
    let tmp4;
    if (null != defaultReactionEmoji.emojiId) {
      if (null != stateFromStores) {
        const obj4 = { id: defaultReactionEmoji.emojiId, name: null, animated: null };
        ({ name: obj3.name, animated: obj3.animated } = stateFromStores);
        tmp4 = obj4;
      }
      tmp3 = tmp4;
    }
    tmp4 = null;
    if (null != defaultReactionEmoji.emojiName) {
      const obj5 = { id: null, name: null, animated: false };
      ({ emojiId: obj2.id, emojiName: obj2.name } = defaultReactionEmoji);
      tmp4 = obj5;
    }
  }
  let reactions;
  const useMemo = react.useMemo;
  if (message != null) {
    reactions = message.reactions;
  }
  const items1 = [reactions];
  const memo = useMemo(() => {
    let reactions;
    if (message != null) {
      reactions = message.reactions;
    }
    if (reactions == null) {
      reactions = [];
    }
    const items = [f84262, f84263];
    const obj = _modDef12;
    return obj.orderBy(reactions, items, ["desc", "desc"]);
  }, items1);
  let items2 = [];
  if (null != tmp3) {
    const items3 = [{ emoji: tmp3, me: false, count: 0, burst_count: 0, me_burst: false }];
    items2 = items3;
    const obj9 = { emoji: tmp3, me: false, count: 0, burst_count: 0, me_burst: false };
  }
  if (memo.length > 0) {
    items2 = memo;
  }
  let num = 0;
  let num2 = 0;
  let num3 = 0;
  let num4 = 0;
  if (0 < items2.length) {
    while (true) {
      let tmp7 = items2[num];
      let _Math = Math;
      let _Math2 = Math;
      let sum = reactionEmojiWidth + digitWidth * Math.ceil(Math.log10((tmp7.burst_count > 0 ? tmp7.burst_count : tmp7.count) + 1));
      num4 = num3;
      if (num2 + sum >= containerWidth) {
        break;
      } else {
        num2 = num2 + sum;
        num3 = num3 + 1;
        num = num + 1;
        num4 = num3;
        if (num >= items2.length) {
          break;
        }
      }
    }
  }
  const diff = items2.length - num4;
  let diff1 = num4;
  let sum1 = diff;
  if (0 < diff) {
    diff1 = num4 - 1;
    sum1 = diff + 1;
  }
  const obj10 = { reactions: items2.slice(0, diff1), additionalReactionCount: sum1 };
  return obj10;
};
export const useMessageCount = function useMessageCount(thread) {
  let closure_2;
  let stateFromStores1;
  let tmp4;
  _require = thread;
  let obj = require("get initialized");
  let items = [ThreadMessageStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let num = ThreadMessageStore.getCount(thread.id);
    if (num == null) {
      num = 0;
    }
    return num;
  });
  const obj2 = require("MessageCountUtils");
  const messageCountText = obj2.getMessageCountText(stateFromStores, thread.id);
  const items1 = [ReadStateStore];
  const obj3 = require("get initialized");
  dependencyMap = obj3.useStateFromStores(items1, () => {
    const items = [ReadStateStore];
    const obj = ForumUtils;
    return obj.canDisplayPostUnreadMessageCount(thread.id, items);
  });
  const items2 = [ForumPostUnreadCountStore];
  const obj5 = { messageCount: stateFromStores, isMaxMessageCount: tmp4, messageCountText, unreadCount: stateFromStores1 };
  tmp4 = null != stateFromStores;
  const obj4 = require("get initialized");
  stateFromStores1 = obj4.useStateFromStores(items2, () => {
    const tmp = closure_2;
    if (tmp) {
      const count = ForumPostUnreadCountStore.getCount(thread.id);
      if (null != count) {
        if (count > 0) {
          const _Math = Math;
          let bound = Math.min(count, stateFromStores);
          if (bound >= closure_25) {
            const _HermesInternal = HermesInternal;
            bound = "" + tmp10 + "+";
          }
          return bound;
        }
      }
      return "1+";
    } else {
      return null;
    }
  });
  if (tmp4) {
    let _HermesInternal = HermesInternal;
    tmp4 = "" + stateFromStores !== messageCountText;
  }
  return obj5;
};
export const useForumPostMessageAuthor = function useForumPostMessageAuthor(message, thread) {
  let colorString;
  let colorStrings;
  let id;
  if (message != null) {
    const author = message.author;
    if (author != null) {
      id = author.id;
    }
  }
  const guildId = thread.getGuildId();
  const items = [UserStore];
  const obj = id(504);
  const stateFromStores = obj.useStateFromStores(items, () => UserStore.getUser(id));
  const obj2 = id(5083);
  const nullableMessageAuthor = obj2.useNullableMessageAuthor(message);
  const items1 = [guildId, id];
  const effect = react.useEffect(() => {
    let tmp2 = null != id;
    const tmp = id;
    if (tmp2) {
      tmp2 = null != guildId;
    }
    if (tmp2) {
      const member = GuildMemberRequesterStore.requestMember(guildId, tmp);
    }
  }, items1);
  let nick;
  if (nullableMessageAuthor != null) {
    nick = nullableMessageAuthor.nick;
  }
  if (nick == null) {
    let username;
    if (stateFromStores != null) {
      username = stateFromStores.username;
    }
    nick = username;
  }
  const obj3 = { authorName: nick, authorColor: colorString, authorColors: colorStrings, user: stateFromStores };
  colorString = undefined;
  if (nullableMessageAuthor != null) {
    colorString = nullableMessageAuthor.colorString;
  }
  if (colorString == null) {
    colorString = null;
  }
  colorStrings = undefined;
  if (nullableMessageAuthor != null) {
    colorStrings = nullableMessageAuthor.colorStrings;
  }
  if (colorStrings == null) {
    colorStrings = null;
  }
  return obj3;
};
export const useForumPostAuthor = function useForumPostAuthor(thread) {
  _require = thread;
  const items = [UserStore];
  const obj = require("get initialized");
  const user = obj.useStateFromStores(items, () => UserStore.getUser(thread.ownerId));
  const items1 = [ForumPostMessagesStore];
  const obj2 = require("get initialized");
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    const message = ForumPostMessagesStore.getMessage(thread.id);
    let firstMessage;
    if (message != null) {
      firstMessage = message.firstMessage;
    }
    return firstMessage;
  });
  let author;
  const useNullableUserAuthor = require("useMessageAuthor").useNullableUserAuthor;
  require("useMessageAuthor");
  if (stateFromStores1 != null) {
    author = stateFromStores1.author;
  }
  if (author == null) {
    author = user;
  }
  const items2 = [, ];
  ({ guild_id: arr3[0], ownerId: arr3[1] } = thread);
  const author1 = useNullableUserAuthor(author, thread);
  const effect = react.useEffect(() => {
    if (null != thread.ownerId) {
      const member = GuildMemberRequesterStore.requestMember(tmp.guild_id, tmp.ownerId);
    }
  }, items2);
  return { user, author: author1 };
};
export const getForumPostAuthor = function getForumPostAuthor(ownerId) {
  let author;
  let getUserAuthor;
  const user = UserStore.getUser(ownerId.ownerId);
  const message = ForumPostMessagesStore.getMessage(ownerId.id);
  let firstMessage;
  if (message != null) {
    firstMessage = message.firstMessage;
  }
  const obj = { user, author: getUserAuthor(author, ownerId) };
  author = undefined;
  getUserAuthor = useMessageAuthor.getUserAuthor;
  useMessageAuthor;
  if (firstMessage != null) {
    author = firstMessage.author;
  }
  if (author == null) {
    author = user;
  }
  return obj;
};
export const useForumPostFirstMessageMarkup = function useForumPostFirstMessageMarkup(firstMessage) {
  let obj2;
  let obj3;
  firstMessage = firstMessage.firstMessage;
  let flag = firstMessage.formatInline;
  if (flag === undefined) {
    flag = true;
  }
  let flag2 = firstMessage.noStyleAndInteraction;
  if (flag2 === undefined) {
    flag2 = true;
  }
  let flag3 = firstMessage.hasUnreads;
  if (flag3 === undefined) {
    flag3 = true;
  }
  let str = "text-muted";
  if (flag3) {
    str = "text-default";
  }
  const items = [firstMessage, flag, flag2, str];
  const memo = react.useMemo(() => {
    let content;
    if (firstMessage != null) {
      content = tmp.content;
    }
    if (null != content) {
      if ("" !== firstMessage.content) {
        const obj = { formatInline: flag, noStyleAndInteraction: flag2, allowHeading: true, allowList: true, allowGameMentions: true, textColor: "", disablePressableChannelMention: true };
        renderMessageMarkupDefault(firstMessage, obj);
      }
      return { hasSpoilerEmbeds: false, content: null };
    }
  }, items);
  const hasSpoilerEmbeds = memo.hasSpoilerEmbeds;
  let obj = { hasSpoilerEmbeds, content: memo.content, firstMedia: obj2.useFindFirstMediaProperties(firstMessage, hasSpoilerEmbeds), firstMediaIsEmbed: obj3.useFirstMediaIsEmbed(firstMessage, hasSpoilerEmbeds) };
  obj2 = firstMessage(flag2[32]);
  obj3 = firstMessage(flag2[32]);
  return obj;
};
export const useCanManageChannel = function useCanManageChannel(channel) {
  _require = channel;
  const items = [PermissionStore];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => PermissionStore.can(constants.MANAGE_CHANNELS, channel));
};
export const useForumPostReadStates = function useForumPostReadStates(stateFromStores) {
  _require = stateFromStores;
  let obj = require("get initialized");
  let items = [GuildStore, ReadStateStore];
  return obj.useStateFromStoresObject(items, () => {
    let forumPostReadStates;
    const getGuild = GuildStore.getGuild;
    let guildId = stateFromStores.getGuildId();
    const tmp2 = stateFromStores;
    if (guildId == null) {
      guildId = authStore5;
    }
    const guild = getGuild(guildId);
    if (null == guild) {
      forumPostReadStates = closure_26;
    } else {
      const items = [ReadStateStore];
      const obj = ForumUtils;
      forumPostReadStates = obj.getForumPostReadStates(tmp2, guild, items);
    }
    return forumPostReadStates;
  });
};
export const useChannelTemplate = function useChannelTemplate(parentChannel) {
  let closure_0 = parentChannel;
  const items = [parentChannel];
  return react.useMemo(() => {
    let str = "";
    if (null != closure_0) {
      str = "";
      if (null != closure_0.template) {
        const str2 = closure_0.template;
        str = str2.trim();
      }
    }
    return str;
  }, items);
};
export const useForumThreadsForChannelList = function useForumThreadsForChannelList(arg0) {
  let closure_0;
  _require = arg0;
  let obj = require("get initialized");
  const items = [ActiveJoinedThreadsStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = { activeJoinedThreads: ActiveJoinedThreadsStore.getActiveJoinedThreadsForGuild(closure_0), activeUnjoinedThreads: ActiveJoinedThreadsStore.getActiveUnjoinedThreadsForGuild(closure_0), newThreadCounts: ActiveJoinedThreadsStore.getNewThreadCountsForGuild(closure_0) };
    return obj;
  });
  return { activeJoinedThreads: stateFromStoresObject.activeJoinedThreads, activeUnjoinedThreads: stateFromStoresObject.activeUnjoinedThreads, newThreadCounts: stateFromStoresObject.newThreadCounts };
};
export const useCanSearchForumPosts = function useCanSearchForumPosts(channel) {
  _require = channel;
  const items = [PermissionStore];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, f84265);
};
export const useCanViewArchivedPosts = function useCanViewArchivedPosts(channel) {
  _require = channel;
  const items = [PermissionStore];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => PermissionStore.can(constants.READ_MESSAGE_HISTORY, channel));
};
export const useForumSearchQuery = function useForumSearchQuery(channelId) {
  channelId = channelId.channelId;
  const items = [ForumSearchStore];
  const obj = channelId(504);
  return obj.useStateFromStores(items, () => {
    let searchQuery = null;
    if (null != channelId) {
      searchQuery = ForumSearchStore.getSearchQuery(tmp);
    }
    return searchQuery;
  });
};
export const useForumSearchState = function useForumSearchState(channelId) {
  channelId = channelId.channelId;
  const items = [ForumSearchStore];
  const obj = channelId(504);
  return obj.useStateFromStoresObject(items, () => {
    const obj = { isSearchLoading: ForumSearchStore.getSearchLoading(id), searchQuery: ForumSearchStore.getSearchQuery(id), searchResults: ForumSearchStore.getSearchResults(id) };
    return obj;
  });
};
export const useHasForumSearchQuery = function useHasForumSearchQuery(channelId) {
  _require = channelId;
  const items = [ForumSearchStore];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => null != ForumSearchStore.getSearchQuery(channelId));
};
export const useAutomaticForumSearch = function useAutomaticForumSearch(channel, tagFilter, tagSetting) {
  _require = channel;
  dependencyMap = tagSetting;
  let flag = arg3;
  if (arg3 === undefined) {
    flag = false;
  }
  const id = channel.id;
  let obj = require("get initialized");
  const items = [ForumSearchStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = { isSearchLoading: ForumSearchStore.getSearchLoading(id), searchQuery: ForumSearchStore.getSearchQuery(id), searchResults: ForumSearchStore.getSearchResults(id) };
    return obj;
  });
  const isSearchLoading = stateFromStoresObject.isSearchLoading;
  const searchQuery = stateFromStoresObject.searchQuery;
  _require = channel;
  let obj2 = require("get initialized");
  const items1 = [PermissionStore];
  const stateFromStores = obj2.useStateFromStores(items1, f84265);
  const ref = isSearchLoading.useRef(null);
  const useRef = isSearchLoading.useRef;
  set = new Set();
  const ref2 = useRef(set);
  const items2 = [stateFromStores, , , , , , , ];
  ({ guild_id: arr3[1], id: arr3[2] } = channel);
  items2[3] = flag;
  items2[4] = isSearchLoading;
  items2[5] = searchQuery;
  items2[6] = tagFilter;
  items2[7] = tagSetting;
  const effect = isSearchLoading.useEffect(() => {
    let closure_0;
    if (null == searchQuery) {
      if (null != ref.current) {
        let obj2 = tagFilter(tagSetting[33]);
        const tmp15 = channel;
        obj2.clearForumSearch(channel.id);
        tmp.current = null;
      }
    }
    if (null != searchQuery) {
      if (0 !== searchQuery.length) {
        const tmp17 = flag;
        if (!tmp17) {
          const tmp2 = stateFromStores;
          if (tmp2) {
            if (ref.current !== searchQuery) {
              const tmp10 = isSearchLoading;
              if (!tmp10) {
                const _setTimeout = setTimeout;
                channel = setTimeout(flag(function*(arg0, value) {
                  if (c0 === 2) {
                    c0 = 3;
                    throw new TypeError("Generator functions may not be called on executing generators");
                  } else if (tmp2 === 3) {
                    if (arg0 === 1) {
                      throw value;
                    } else if (arg0 === 2) {
                      const obj3 = { value, done: true };
                      return obj3;
                    } else {
                      return { value: "HermesInternal", done: null };
                    }
                  } else {
                    let c2;
                    try {
                      c0 = 2;
                      if (0 === current) {
                        if (arg0 === 1) {
                          c0 = 3;
                          throw value;
                        } else if (arg0 === 2) {
                          c0 = 3;
                          const obj4 = { value, done: true };
                          return obj4;
                        } else {
                          ref.current = current2;
                          ref2.current = current;
                          c2 = 1;
                          const obj2 = tagFilter(tagSetting[33]);
                          current = 2;
                          c0 = 1;
                          const obj5 = { value: obj2.searchForumPosts(c0.guild_id, c0.id, current2, current, c2), done: false };
                          return obj5;
                        }
                      } else {
                        if (1 === tmp3) {
                          c2 = 0;
                        } else if (arg0 === 1) {
                          c0 = 3;
                          throw value;
                        } else if (arg0 === 2) {
                          c2 = 0;
                          c0 = 3;
                          const obj = { value, done: true };
                          return obj;
                        } else {
                          c2 = 0;
                        }
                        c0 = 3;
                        return { value: "HermesInternal", done: null };
                      }
                    } catch (tmp15) {
                      if (0 === c2) {
                        c0 = 3;
                        throw tmp15;
                      } else {
                        current = 1;
                      }
                    }
                  }
                }), 350);
                return () => clearTimeout(closure_0);
              }
            }
          } else {
            const tmp3 = tagFilter;
            let obj = tagFilter(tagSetting[33]);
            obj.clearForumSearch(channel.id);
          }
        }
      }
    }
  }, items2);
};
export const useUnreadThreadsCountForParent = function useUnreadThreadsCountForParent(guild_id, id) {
  _require = guild_id;
  let closure_1 = id;
  const items = [ActiveJoinedThreadsStore, ReadStateStore, ChannelStore];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    channel = channel.getChannel(closure_1_1);
    let isForumLikeChannelResult;
    if (channel != null) {
      isForumLikeChannelResult = channel.isForumLikeChannel();
    }
    if (isForumLikeChannelResult) {
      const activeJoinedUnreadThreadsForParent = stateFromStores1.getActiveJoinedUnreadThreadsForParent(closure_1_0, tmp2);
      const activeUnjoinedUnreadThreadsForParent = stateFromStores1.getActiveUnjoinedUnreadThreadsForParent(closure_1_0, tmp2);
      const ackMessageIdResult = ReadStateStore.ackMessageId(closure_1_1);
      if (null == ackMessageIdResult) {
        return 0;
      } else {
        let num3 = 0;
        let num2 = 0;
        const keys = Object.keys();
        if (keys !== undefined) {
          num2 = num3;
          while (keys[tmp] !== undefined) {
            let lastMessageIdResult = ReadStateStore.lastMessageId(activeJoinedUnreadThreadsForParent[tmp11].channel.id);
            let tmp12 = null != lastMessageIdResult && lastMessageIdResult > ackMessageIdResult;
            if (!tmp12) {
              continue;
            } else {
              num3 = tmp10 + 1;
              continue;
            }
            continue;
          }
        }
        let sum = num2;
        let tmp15 = num2;
        const keys1 = Object.keys();
        if (keys1 !== undefined) {
          tmp15 = sum;
          while (keys1[tmp] !== undefined) {
            let lastMessageIdResult1 = ReadStateStore.lastMessageId(activeUnjoinedUnreadThreadsForParent[tmp18].id);
            let tmp19 = null != lastMessageIdResult1 && lastMessageIdResult1 > ackMessageIdResult;
            if (!tmp19) {
              continue;
            } else {
              sum = tmp17 + 1;
              continue;
            }
            continue;
          }
        }
        return tmp15;
      }
    } else {
      return 0;
    }
  });
};
export const useForumActiveThreadIds = function useForumActiveThreadIds(channel) {
  let closure_129_0;
  let closure_129_1;
  let shouldAutomaticallyAck;
  channel = channel.channel;
  ({ sortOrder: importDefault, tagFilter: dependencyMap, tagSetting: _asyncToGenerator, shouldAutomaticallyAck } = channel);
  let stateFromStores1;
  let obj = channel(504);
  const items = [ForumActivePostStore];
  ({ guild_id: closure_129_0, id: closure_129_1 } = channel);
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => ForumActivePostStore.getThreadIds(channel.id, importDefault, dependencyMap, _asyncToGenerator));
  let obj2 = channel(504);
  const items1 = [stateFromStores1, ReadStateStore, ChannelStore];
  const stateFromStores = obj2.useStateFromStores(items1, () => {
    channel = channel.getChannel(closure_1_1);
    let isForumLikeChannelResult;
    if (channel != null) {
      isForumLikeChannelResult = channel.isForumLikeChannel();
    }
    if (isForumLikeChannelResult) {
      const activeJoinedUnreadThreadsForParent = stateFromStores1.getActiveJoinedUnreadThreadsForParent(closure_1_0, tmp2);
      const activeUnjoinedUnreadThreadsForParent = stateFromStores1.getActiveUnjoinedUnreadThreadsForParent(closure_1_0, tmp2);
      const ackMessageIdResult = ReadStateStore.ackMessageId(closure_1_1);
      if (null == ackMessageIdResult) {
        return 0;
      } else {
        let num3 = 0;
        let num2 = 0;
        const keys = Object.keys();
        if (keys !== undefined) {
          num2 = num3;
          while (keys[tmp] !== undefined) {
            let lastMessageIdResult = ReadStateStore.lastMessageId(activeJoinedUnreadThreadsForParent[tmp11].channel.id);
            let tmp12 = null != lastMessageIdResult && lastMessageIdResult > ackMessageIdResult;
            if (!tmp12) {
              continue;
            } else {
              num3 = tmp10 + 1;
              continue;
            }
            continue;
          }
        }
        let sum = num2;
        let tmp15 = num2;
        const keys1 = Object.keys();
        if (keys1 !== undefined) {
          tmp15 = sum;
          while (keys1[tmp] !== undefined) {
            let lastMessageIdResult1 = ReadStateStore.lastMessageId(activeUnjoinedUnreadThreadsForParent[tmp18].id);
            let tmp19 = null != lastMessageIdResult1 && lastMessageIdResult1 > ackMessageIdResult;
            if (!tmp19) {
              continue;
            } else {
              sum = tmp17 + 1;
              continue;
            }
            continue;
          }
        }
        return tmp15;
      }
    } else {
      return 0;
    }
  });
  const items2 = [ForumActivePostStore];
  const items3 = [shouldAutomaticallyAck, stateFromStores];
  const obj3 = channel(504);
  stateFromStores1 = obj3.useStateFromStores(items2, () => {
    let tmp = shouldAutomaticallyAck;
    if (tmp) {
      const canAckThreads = stateFromStores > 0 || ForumActivePostStore.getCanAckThreads();
      tmp = canAckThreads;
    }
    return tmp;
  }, items3);
  const items4 = [channel, stateFromStores1];
  const effect = shouldAutomaticallyAck.useEffect(() => {
    const tmp = stateFromStores1;
    if (tmp) {
      const obj2 = { object: constants2.ACK_FORUM_ACTIVE_THREADS, objectType: constants.ACK_AUTOMATIC };
      const obj = ReadStateActionCreators;
      obj.ackChannel(channel, obj2);
    }
  }, items4);
  return stateFromStoresArray;
};
