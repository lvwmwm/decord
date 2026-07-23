// Module ID: 9137
// Function ID: 71524
// Name: sortForumPostReactionsByPopularityDesc
// Dependencies: [5, 31, 4991, 5039, 5040, 5683, 1348, 4958, 1838, 3758, 4142, 1849, 5682, 5656, 9138, 7010, 5685, 653, 1355, 1211, 566, 5684, 686, 22, 1327, 4559, 21, 7023, 1357, 7634, 4360, 7779, 8328, 9139, 5069, 2]
// Exports: getForumPostAuthor, useAutomaticForumSearch, useCanManageChannel, useCanViewArchivedPosts, useChannelTemplate, useExistingPin, useFacepileUsers, useForumActiveThreadIds, useForumPostAuthor, useForumPostFirstMessageMarkup, useForumPostMessageAuthor, useForumPostReadStates, useForumSearchQuery, useForumThreadsForChannelList, useHasForumSearchQuery, useLastActiveTimestamp, useLoadForumUnreadCounts, useMaxPossibleForumPostReactions, useMessageCount, useMostUsedReaction, useSomeForumPostReactions

// Module 9137 (sortForumPostReactionsByPopularityDesc)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import getInitialParserStateFromMessage from "getInitialParserStateFromMessage";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import closure_14 from "_isNativeReflectConstruct";
import closure_15 from "_isNativeReflectConstruct";
import closure_16 from "_isNativeReflectConstruct";
import closure_17 from "_isNativeReflectConstruct";
import closure_18 from "_isNativeReflectConstruct";
import { ForumTimestampFormats } from "FORUM_GUIDELINES_ACTION_SHEET";
import ME from "ME";
import { ChannelFlags } from "set";
import { MAX_THREAD_UNREAD_MESSAGE_COUNT as closure_25 } from "AbortCodes";

let closure_20;
let closure_21;
let closure_22;
let closure_23;
const require = arg1;
function sortForumPostReactionsByPopularityDesc(items) {
  items = [(count) => count.count + count.burst_count, (burst_count) => burst_count.burst_count];
  return importDefault(22).orderBy(items, items, ["desc", "desc"]);
}
function useDefaultReactionEmoji(parentChannel) {
  let defaultReactionEmoji;
  if (null != parentChannel) {
    defaultReactionEmoji = parentChannel.defaultReactionEmoji;
  }
  let obj = defaultReactionEmoji(566);
  const items = [closure_5];
  let animated = obj.useStateFromStores(items, () => {
    let emojiId;
    if (null != defaultReactionEmoji) {
      emojiId = defaultReactionEmoji.emojiId;
    }
    let usableCustomEmojiById = null;
    if (null != emojiId) {
      usableCustomEmojiById = outer1_5.getUsableCustomEmojiById(defaultReactionEmoji.emojiId);
    }
    return usableCustomEmojiById;
  });
  if (null == defaultReactionEmoji) {
    return null;
  } else {
    if (null == defaultReactionEmoji.emojiId) {
      let tmp2 = null;
      if (null != defaultReactionEmoji.emojiName) {
        obj = {};
        ({ emojiId: obj2.id, emojiName: obj2.name } = defaultReactionEmoji);
        obj.animated = false;
        tmp2 = obj;
      }
    }
    obj = { id: defaultReactionEmoji.emojiId };
    defaultReactionEmoji = animated.name;
    obj.name = defaultReactionEmoji;
    animated = animated.animated;
    obj.animated = animated;
    tmp2 = obj;
  }
}
function useCanSearchForumPosts(channel) {
  const _require = channel;
  const items = [closure_12];
  return _require(566).useStateFromStores(items, () => outer1_12.can(outer1_23.READ_MESSAGE_HISTORY, closure_0));
}
function useForumSearchState(channelId) {
  channelId = channelId.channelId;
  const items = [closure_18];
  return channelId(566).useStateFromStoresObject(items, () => ({ isSearchLoading: outer1_18.getSearchLoading(channelId), searchQuery: outer1_18.getSearchQuery(channelId), searchResults: outer1_18.getSearchResults(channelId) }));
}
function useUnreadThreadsCountForParent(guild_id, id) {
  const _require = guild_id;
  let closure_1 = id;
  const items = [closure_6, closure_13, closure_9];
  return _require(566).useStateFromStores(items, () => {
    const channel = outer1_9.getChannel(closure_1);
    if (null != channel) {
      if (channel.isForumLikeChannel()) {
        const activeJoinedUnreadThreadsForParent = outer1_6.getActiveJoinedUnreadThreadsForParent(closure_0, closure_1);
        const activeUnjoinedUnreadThreadsForParent = outer1_6.getActiveUnjoinedUnreadThreadsForParent(closure_0, closure_1);
        const ackMessageIdResult = outer1_13.ackMessageId(closure_1);
        if (null == ackMessageIdResult) {
          return 0;
        } else {
          let num2 = 0;
          let num = 0;
          const keys = Object.keys();
          if (keys !== undefined) {
            num = num2;
            while (keys[tmp] !== undefined) {
              let tmp22 = tmp11;
              let tmp23 = outer1_13;
              let lastMessageIdResult = outer1_13.lastMessageId(activeJoinedUnreadThreadsForParent[tmp11].channel.id);
              let tmp12 = null != lastMessageIdResult && lastMessageIdResult > ackMessageIdResult;
              if (!tmp12) {
                continue;
              } else {
                num2 = tmp10 + 1;
                continue;
              }
              continue;
            }
          }
          let sum = num;
          let tmp15 = num;
          const keys1 = Object.keys();
          if (keys1 !== undefined) {
            tmp15 = sum;
            while (keys1[tmp] !== undefined) {
              let tmp25 = tmp18;
              let tmp26 = outer1_13;
              let lastMessageIdResult1 = outer1_13.lastMessageId(activeUnjoinedUnreadThreadsForParent[tmp18].id);
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
      }
    }
    return 0;
  });
}
({ AnalyticsObjectTypes: closure_20, AnalyticsObjects: closure_21, EMPTY_STRING_SNOWFLAKE_ID: closure_22, Permissions: closure_23 } = ME);
let closure_26 = { isNew: false, hasUnreads: false };
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/forums/ForumHooks.tsx");

export const useLoadForumUnreadCounts = function useLoadForumUnreadCounts(channel, sortOrder, tagFilter, tagSetting) {
  const _require = channel;
  let closure_1 = sortOrder;
  const dependencyMap = tagFilter;
  let _isNativeReflectConstruct = tagSetting;
  let items = [closure_7];
  const stateFromStores = _require(566).useStateFromStores(items, () => outer1_7.hasLoaded(channel.guild_id));
  const items1 = [, , , , , ];
  ({ id: arr2[0], guild_id: arr2[1] } = channel);
  items1[2] = stateFromStores;
  items1[3] = tagFilter;
  items1[4] = sortOrder;
  items1[5] = tagSetting;
  const effect = stateFromStores.useEffect(() => {
    if (stateFromStores) {
      const threadIdsMissingCounts = outer1_17.getThreadIdsMissingCounts(channel.guild_id, outer1_15.getThreadIds(channel.id, sortOrder, tagFilter, _isNativeReflectConstruct));
      const found = threadIdsMissingCounts.filter((id) => {
        const items = [outer2_13];
        return callback(table[21]).canDisplayPostUnreadMessageCount(id, items);
      });
      const substr = found.slice(0, 180);
      const mapped = substr.map((threadId) => ({ threadId, ackMessageId: outer2_13.getTrackedAckMessageId(threadId) }));
      if (mapped.length > 0) {
        let obj = sortOrder(tagFilter[22]);
        obj = { type: "REQUEST_FORUM_UNREADS" };
        ({ guild_id: obj2.guildId, id: obj2.channelId } = channel);
        obj.threads = mapped;
        obj.dispatch(obj);
      }
    }
  }, items1);
};
export const useExistingPin = function useExistingPin(thread) {
  const _require = thread;
  const items = [closure_7, closure_9];
  return _require(566).useStateFromStores(items, () => {
    const tmp = outer1_1(outer1_2[23]);
    const keys = outer1_1(outer1_2[23])(outer1_7.getThreadsForParent(thread.guild_id, thread.parent_id)).keys();
    const found = keys.filter((channelId) => {
      const channel = outer2_9.getChannel(channelId);
      let hasFlagResult;
      if (null != channel) {
        hasFlagResult = channel.hasFlag(outer2_24.PINNED);
      }
      return true === hasFlagResult;
    });
    return outer1_9.getChannel(found.head());
  });
};
export const useFacepileUsers = function useFacepileUsers(thread, typingUserIds) {
  const _require = thread;
  const importDefault = typingUserIds;
  const items = [closure_14];
  stateFromStoresArray = _require(stateFromStoresArray[20]).useStateFromStoresArray(items, () => {
    const mapped = typingUserIds.map((arg0) => outer2_14.getUser(arg0));
    return mapped.filter(thread(stateFromStoresArray[24]).isNotNullish);
  });
  importDefault(stateFromStoresArray[25])(() => {
    const item = stateFromStoresArray.forEach((id) => {
      const member = outer2_10.requestMember(outer1_0.guild_id, id.id);
    });
  });
  return stateFromStoresArray;
};
export const useLastActiveTimestamp = function useLastActiveTimestamp(thread, sortOrder, format) {
  let DURATION_AGO = format;
  const _require = thread;
  let closure_1 = sortOrder;
  if (format === undefined) {
    DURATION_AGO = ForumTimestampFormats.DURATION_AGO;
  }
  let memo;
  let lastMessageTimestamp;
  let memo1;
  const items = [thread.id];
  memo = lastMessageTimestamp.useMemo(() => sortOrder(DURATION_AGO[26]).extractTimestamp(thread.id), items);
  lastMessageTimestamp = _require(DURATION_AGO[27]).useLastMessageTimestamp(thread);
  const items1 = [sortOrder, DURATION_AGO];
  memo1 = lastMessageTimestamp.useMemo(() => thread(DURATION_AGO[21]).getForumTimestampFormatter(closure_1, DURATION_AGO), items1);
  const items2 = [lastMessageTimestamp, sortOrder, memo, memo1];
  return lastMessageTimestamp.useMemo(() => {
    if (closure_1 === thread(DURATION_AGO[28]).ThreadSortOrder.CREATION_DATE) {
      let timestampString = thread(DURATION_AGO[27]).getTimestampString(memo, memo1);
      const obj2 = thread(DURATION_AGO[27]);
    } else {
      timestampString = thread(DURATION_AGO[27]).getTimestampString(lastMessageTimestamp, memo1);
      const obj = thread(DURATION_AGO[27]);
    }
    return timestampString;
  }, items2);
};
export const useMostUsedReaction = function useMostUsedReaction(reactions) {
  let closure_0 = reactions;
  reactions = undefined;
  if (null != reactions) {
    reactions = reactions.reactions;
  }
  const items = [reactions];
  return React.useMemo(() => {
    let reactions;
    if (null != reactions) {
      reactions = reactions.reactions;
    }
    if (null == reactions) {
      reactions = [];
    }
    if (0 !== reactions.length) {
      return outer1_27(reactions)[0];
    }
  }, items);
};
export { useDefaultReactionEmoji };
export const useSomeForumPostReactions = function useSomeForumPostReactions(message) {
  message = message.message;
  let num = message.count;
  if (num === undefined) {
    num = 1;
  }
  let flag = message.sorted;
  if (flag === undefined) {
    flag = true;
  }
  const tmp = useDefaultReactionEmoji(message.parentChannel);
  let reactions;
  if (null != message) {
    reactions = message.reactions;
  }
  const items = [reactions, flag];
  const memo = React.useMemo(() => {
    let reactions;
    if (null != message) {
      reactions = message.reactions;
    }
    if (null == reactions) {
      reactions = [];
    }
    let tmp2 = reactions;
    if (flag) {
      tmp2 = outer1_27(reactions);
    }
    return tmp2;
  }, items);
  let items1 = [];
  if (null != tmp) {
    let obj = { emoji: tmp, me: false, count: 0, burst_count: 0, me_burst: false };
    const items2 = [obj];
    items1 = items2;
  }
  if (memo.length > 0) {
    items1 = memo;
  }
  obj = { reactions: items1.slice(0, num) };
  const substr = items1.slice(num, items1.length);
  obj.additionalNonUniqueReactionCount = flag(22).sum(substr.map((count) => count.count + count.burst_count));
  return obj;
};
export const useMaxPossibleForumPostReactions = function useMaxPossibleForumPostReactions(message) {
  let containerWidth;
  let digitWidth;
  let reactionEmojiWidth;
  message = message.message;
  let reactions;
  ({ containerWidth, reactionEmojiWidth, digitWidth } = message);
  const tmp2 = useDefaultReactionEmoji(message.parentChannel);
  if (null != message) {
    reactions = message.reactions;
  }
  const items = [reactions];
  const memo = React.useMemo(() => {
    let reactions;
    if (null != message) {
      reactions = message.reactions;
    }
    if (null == reactions) {
      reactions = [];
    }
    return outer1_27(reactions);
  }, items);
  let items1 = [];
  if (null != tmp2) {
    let obj = { emoji: tmp2, me: false, count: 0, burst_count: 0, me_burst: false };
    const items2 = [obj];
    items1 = items2;
  }
  if (memo.length > 0) {
    items1 = memo;
  }
  let num = 0;
  let num2 = 0;
  let num3 = 0;
  let num4 = 0;
  if (0 < items1.length) {
    while (true) {
      let tmp4 = items1[num3];
      let _Math = Math;
      let _Math2 = Math;
      let sum = reactionEmojiWidth + digitWidth * Math.ceil(Math.log10((tmp4.burst_count > 0 ? tmp4.burst_count : tmp4.count) + 1));
      num4 = num;
      if (num2 + sum >= containerWidth) {
        break;
      } else {
        num2 = num2 + sum;
        num = num + 1;
        num3 = num3 + 1;
        num4 = num;
        if (num3 >= items1.length) {
          break;
        }
      }
    }
  }
  const diff = items1.length - num4;
  let diff1 = num4;
  let sum1 = diff;
  if (diff > 0) {
    diff1 = num4 - 1;
    sum1 = diff + 1;
  }
  obj = { reactions: items1.slice(0, diff1), additionalReactionCount: sum1 };
  return obj;
};
export const useMessageCount = function useMessageCount(thread) {
  const _require = thread;
  let obj = _require(566);
  let items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const count = outer1_8.getCount(thread.id);
    let num = 0;
    if (null != count) {
      num = count;
    }
    return num;
  });
  const messageCountText = _require(7634).getMessageCountText(stateFromStores, thread.id);
  const obj2 = _require(7634);
  const items1 = [closure_13];
  const dependencyMap = _require(566).useStateFromStores(items1, () => {
    const items = [outer1_13];
    return thread(table[21]).canDisplayPostUnreadMessageCount(thread.id, items);
  });
  const obj3 = _require(566);
  const items2 = [closure_17];
  obj = { messageCount: stateFromStores };
  let tmp4 = null != stateFromStores;
  const stateFromStores1 = _require(566).useStateFromStores(items2, () => {
    if (closure_2) {
      const count = outer1_17.getCount(thread.id);
      if (null != count) {
        if (count > 0) {
          const _Math = Math;
          let bound = Math.min(count, stateFromStores);
          if (bound >= outer1_25) {
            const _HermesInternal = HermesInternal;
            bound = "" + outer1_25 + "+";
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
  obj.isMaxMessageCount = tmp4;
  obj.messageCountText = messageCountText;
  obj.unreadCount = stateFromStores1;
  return obj;
};
export const useForumPostMessageAuthor = function useForumPostMessageAuthor(message, thread) {
  let id;
  if (null != message) {
    const author = message.author;
    if (null != author) {
      id = author.id;
    }
  }
  const guildId = thread.getGuildId();
  let obj = id(566);
  const items = [closure_14];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_14.getUser(id));
  const nullableMessageAuthor = id(4360).useNullableMessageAuthor(message);
  const items1 = [guildId, id];
  const effect = React.useEffect(() => {
    let tmp = null != id;
    if (tmp) {
      tmp = null != guildId;
    }
    if (tmp) {
      const member = outer1_10.requestMember(guildId, id);
    }
  }, items1);
  obj = {};
  let nick;
  if (null != nullableMessageAuthor) {
    nick = nullableMessageAuthor.nick;
  }
  if (null == nick) {
    let username;
    if (null != stateFromStores) {
      username = stateFromStores.username;
    }
    nick = username;
  }
  obj.authorName = nick;
  let colorString;
  if (null != nullableMessageAuthor) {
    colorString = nullableMessageAuthor.colorString;
  }
  let tmp9 = null;
  if (null != colorString) {
    tmp9 = colorString;
  }
  obj.authorColor = tmp9;
  let colorStrings;
  if (null != nullableMessageAuthor) {
    colorStrings = nullableMessageAuthor.colorStrings;
  }
  let tmp11 = null;
  if (null != colorStrings) {
    tmp11 = colorStrings;
  }
  obj.authorColors = tmp11;
  obj.user = stateFromStores;
  return obj;
};
export const useForumPostAuthor = function useForumPostAuthor(thread) {
  const _require = thread;
  let author;
  const items = [closure_14];
  const user = _require(566).useStateFromStores(items, () => outer1_14.getUser(thread.ownerId));
  const obj = _require(566);
  const items1 = [closure_16];
  const stateFromStores1 = _require(566).useStateFromStores(items1, () => {
    const message = outer1_16.getMessage(thread.id);
    let firstMessage;
    if (null != message) {
      firstMessage = message.firstMessage;
    }
    return firstMessage;
  });
  const obj2 = _require(566);
  if (null != stateFromStores1) {
    author = stateFromStores1.author;
  }
  let tmp4 = user;
  if (null != author) {
    tmp4 = author;
  }
  const items2 = [, ];
  ({ guild_id: arr3[0], ownerId: arr3[1] } = thread);
  author = _require(4360).useNullableUserAuthor(tmp4, thread);
  const effect = React.useEffect(() => {
    if (null != thread.ownerId) {
      const member = outer1_10.requestMember(thread.guild_id, thread.ownerId);
    }
  }, items2);
  return { user, author };
};
export const getForumPostAuthor = function getForumPostAuthor(ownerId) {
  user = user.getUser(ownerId.ownerId);
  message = message.getMessage(ownerId.id);
  let firstMessage;
  if (null != message) {
    firstMessage = message.firstMessage;
  }
  const obj = { user };
  let author;
  if (null != firstMessage) {
    author = firstMessage.author;
  }
  if (null != author) {
    user = author;
  }
  obj.author = require(4360) /* useNullableMessageAuthor */.getUserAuthor(user, ownerId);
  return obj;
};
export const useForumPostFirstMessageMarkup = function useForumPostFirstMessageMarkup(firstMessage) {
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
  let str;
  str = "text-muted";
  if (flag3) {
    str = "text-default";
  }
  const items = [firstMessage, flag, flag2, str];
  const memo = React.useMemo(() => {
    let content;
    if (null != firstMessage) {
      content = firstMessage.content;
    }
    if (null != content) {
      if ("" !== firstMessage.content) {
        const obj = { formatInline: flag, noStyleAndInteraction: flag2, allowHeading: true, allowList: true, allowGameMentions: true, textColor: str, disablePressableChannelMention: true };
        flag(flag2[31])(firstMessage, obj);
      }
      return { hasSpoilerEmbeds: false, content: null };
    }
  }, items);
  const hasSpoilerEmbeds = memo.hasSpoilerEmbeds;
  let obj = { hasSpoilerEmbeds, content: memo.content, firstMedia: firstMessage(flag2[32]).useFindFirstMediaProperties(firstMessage, hasSpoilerEmbeds) };
  const obj2 = firstMessage(flag2[32]);
  obj.firstMediaIsEmbed = firstMessage(flag2[32]).useFirstMediaIsEmbed(firstMessage, hasSpoilerEmbeds);
  return obj;
};
export const useCanManageChannel = function useCanManageChannel(channel) {
  const _require = channel;
  const items = [closure_12];
  return _require(566).useStateFromStores(items, () => outer1_12.can(outer1_23.MANAGE_CHANNELS, closure_0));
};
export const useForumPostReadStates = function useForumPostReadStates(stateFromStores) {
  const _require = stateFromStores;
  let items = [_createForOfIteratorHelperLoose, closure_13];
  return _require(566).useStateFromStoresObject(items, () => {
    let guildId = stateFromStores.getGuildId();
    if (null == guildId) {
      guildId = outer1_22;
    }
    const guild = outer1_11.getGuild(guildId);
    if (null == guild) {
      let forumPostReadStates = outer1_26;
    } else {
      const items = [outer1_13];
      forumPostReadStates = stateFromStores(outer1_2[21]).getForumPostReadStates(stateFromStores, guild, items);
      const obj = stateFromStores(outer1_2[21]);
    }
    return forumPostReadStates;
  });
};
export const useChannelTemplate = function useChannelTemplate(parentChannel) {
  let closure_0 = parentChannel;
  const items = [parentChannel];
  return React.useMemo(() => {
    let str = "";
    if (null != parentChannel) {
      str = "";
      if (null != parentChannel.template) {
        str = parentChannel.template.trim();
        const str2 = parentChannel.template;
      }
    }
    return str;
  }, items);
};
export const useForumThreadsForChannelList = function useForumThreadsForChannelList(arg0) {
  const _require = arg0;
  let obj = _require(566);
  const items = [closure_6];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ activeJoinedThreads: outer1_6.getActiveJoinedThreadsForGuild(closure_0), activeUnjoinedThreads: outer1_6.getActiveUnjoinedThreadsForGuild(closure_0), newThreadCounts: outer1_6.getNewThreadCountsForGuild(closure_0) }));
  obj = { activeJoinedThreads: stateFromStoresObject.activeJoinedThreads, activeUnjoinedThreads: stateFromStoresObject.activeUnjoinedThreads, newThreadCounts: stateFromStoresObject.newThreadCounts };
  return obj;
};
export { useCanSearchForumPosts };
export const useCanViewArchivedPosts = function useCanViewArchivedPosts(channel) {
  const _require = channel;
  const items = [closure_12];
  return _require(566).useStateFromStores(items, () => outer1_12.can(outer1_23.READ_MESSAGE_HISTORY, closure_0));
};
export const useForumSearchQuery = function useForumSearchQuery(channelId) {
  channelId = channelId.channelId;
  const items = [closure_18];
  return channelId(566).useStateFromStores(items, () => {
    let searchQuery = null;
    if (null != channelId) {
      searchQuery = outer1_18.getSearchQuery(channelId);
    }
    return searchQuery;
  });
};
export { useForumSearchState };
export const useHasForumSearchQuery = function useHasForumSearchQuery(channelId) {
  const _require = channelId;
  const items = [closure_18];
  return _require(566).useStateFromStores(items, () => null != outer1_18.getSearchQuery(closure_0));
};
export const useAutomaticForumSearch = function useAutomaticForumSearch(channelId, tagFilter, tagSetting) {
  let flag = arg3;
  let closure_0 = channelId;
  let closure_1 = tagFilter;
  let closure_2 = tagSetting;
  if (arg3 === undefined) {
    flag = false;
  }
  let isSearchLoading;
  let searchQuery;
  let c6;
  let closure_7;
  let closure_8;
  const tmp = useForumSearchState({ channelId: channelId.id });
  isSearchLoading = tmp.isSearchLoading;
  searchQuery = tmp.searchQuery;
  const tmp2 = useCanSearchForumPosts(channelId);
  c6 = tmp2;
  closure_7 = isSearchLoading.useRef(null);
  closure_8 = isSearchLoading.useRef(new Set());
  const items = [tmp2, , , , , , , ];
  ({ guild_id: arr[1], id: arr[2] } = channelId);
  items[3] = flag;
  items[4] = isSearchLoading;
  items[5] = searchQuery;
  items[6] = tagFilter;
  items[7] = tagSetting;
  const effect = isSearchLoading.useEffect(() => {
    if (null == searchQuery) {
      if (null != ref.current) {
        tagFilter(tagSetting[33]).clearForumSearch(user.id);
        ref.current = null;
      }
    }
    if (null != searchQuery) {
      if (0 !== searchQuery.length) {
        if (!flag) {
          if (c6) {
            if (ref.current !== searchQuery) {
              if (!isSearchLoading) {
                const _setTimeout = setTimeout;
                // CreateGeneratorClosureLongIndex (0x67)
                user = setTimeout(flag(globalThis), 350);
                return () => clearTimeout(closure_0);
              }
            }
          } else {
            tagFilter(tagSetting[33]).clearForumSearch(user.id);
            const obj = tagFilter(tagSetting[33]);
          }
        }
      }
    }
  }, items);
};
export { useUnreadThreadsCountForParent };
export const useForumActiveThreadIds = function useForumActiveThreadIds(channel) {
  let _isNativeReflectConstruct;
  let dependencyMap;
  let importDefault;
  let shouldAutomaticallyAck;
  channel = channel.channel;
  ({ sortOrder: importDefault, tagFilter: dependencyMap, tagSetting: _isNativeReflectConstruct, shouldAutomaticallyAck } = channel);
  const items = [closure_15];
  const stateFromStoresArray = channel(566).useStateFromStoresArray(items, () => outer1_15.getThreadIds(channel.id, closure_1, closure_2, _isNativeReflectConstruct));
  const tmp2 = useUnreadThreadsCountForParent(channel.guild_id, channel.id);
  let closure_5 = tmp2;
  let obj = channel(566);
  const items1 = [closure_15];
  const items2 = [shouldAutomaticallyAck, tmp2];
  const stateFromStores = channel(566).useStateFromStores(items1, () => {
    let tmp = shouldAutomaticallyAck;
    if (shouldAutomaticallyAck) {
      let canAckThreads = closure_5 > 0;
      if (!canAckThreads) {
        canAckThreads = outer1_15.getCanAckThreads();
      }
      tmp = canAckThreads;
    }
    return tmp;
  }, items2);
  const items3 = [channel, stateFromStores];
  const effect = shouldAutomaticallyAck.useEffect(() => {
    if (stateFromStores) {
      let obj = channel(outer1_2[34]);
      obj = { object: outer1_21.ACK_FORUM_ACTIVE_THREADS, objectType: outer1_20.ACK_AUTOMATIC };
      obj.ackChannel(channel, obj);
    }
  }, items3);
  return stateFromStoresArray;
};
