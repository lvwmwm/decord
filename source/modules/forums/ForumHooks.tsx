// Module ID: 9130
// Function ID: 71483
// Name: sortForumPostReactionsByPopularityDesc
// Dependencies: []
// Exports: getForumPostAuthor, useAutomaticForumSearch, useCanManageChannel, useCanViewArchivedPosts, useChannelTemplate, useExistingPin, useFacepileUsers, useForumActiveThreadIds, useForumPostAuthor, useForumPostFirstMessageMarkup, useForumPostMessageAuthor, useForumPostReadStates, useForumSearchQuery, useForumThreadsForChannelList, useHasForumSearchQuery, useLastActiveTimestamp, useLoadForumUnreadCounts, useMaxPossibleForumPostReactions, useMessageCount, useMostUsedReaction, useSomeForumPostReactions

// Module 9130 (sortForumPostReactionsByPopularityDesc)
function sortForumPostReactionsByPopularityDesc(items) {
  items = [(count) => count.count + count.burst_count, (burst_count) => burst_count.burst_count];
  return importDefault(dependencyMap[23]).orderBy(items, items, [-2108316476151903000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000061521795476951]);
}
function useDefaultReactionEmoji(parentChannel) {
  let defaultReactionEmoji;
  if (null != parentChannel) {
    defaultReactionEmoji = parentChannel.defaultReactionEmoji;
  }
  const arg1 = defaultReactionEmoji;
  let obj = arg1(dependencyMap[20]);
  const items = [closure_5];
  let animated = obj.useStateFromStores(items, () => {
    let emojiId;
    if (null != defaultReactionEmoji) {
      emojiId = defaultReactionEmoji.emojiId;
    }
    let usableCustomEmojiById = null;
    if (null != emojiId) {
      usableCustomEmojiById = usableCustomEmojiById.getUsableCustomEmojiById(defaultReactionEmoji.emojiId);
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
  const arg1 = channel;
  const items = [closure_12];
  return arg1(dependencyMap[20]).useStateFromStores(items, () => closure_12.can(constants.READ_MESSAGE_HISTORY, arg0));
}
function useForumSearchState(channelId) {
  const arg1 = channelId.channelId;
  const items = [closure_18];
  return arg1(dependencyMap[20]).useStateFromStoresObject(items, () => ({ isSearchLoading: store.getSearchLoading(channelId), searchQuery: store.getSearchQuery(channelId), searchResults: store.getSearchResults(channelId) }));
}
function useUnreadThreadsCountForParent(guild_id, id) {
  id = guild_id;
  const importDefault = id;
  const items = [closure_6, closure_13, closure_9];
  return id(dependencyMap[20]).useStateFromStores(items, () => {
    const channel = channel.getChannel(arg1);
    if (null != channel) {
      if (channel.isForumLikeChannel()) {
        const activeJoinedUnreadThreadsForParent = store.getActiveJoinedUnreadThreadsForParent(arg0, arg1);
        const activeUnjoinedUnreadThreadsForParent = store.getActiveUnjoinedUnreadThreadsForParent(arg0, arg1);
        const ackMessageIdResult = closure_13.ackMessageId(arg1);
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
              let tmp23 = closure_13;
              let lastMessageIdResult = closure_13.lastMessageId(activeJoinedUnreadThreadsForParent[tmp11].channel.id);
              let tmp12 = null != lastMessageIdResult && lastMessageIdResult > ackMessageIdResult;
              if (!tmp12) {
                continue;
              } else {
                num2 = tmp10 + 1;
                // continue
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
              let tmp26 = closure_13;
              let lastMessageIdResult1 = closure_13.lastMessageId(activeUnjoinedUnreadThreadsForParent[tmp18].id);
              let tmp19 = null != lastMessageIdResult1 && lastMessageIdResult1 > ackMessageIdResult;
              if (!tmp19) {
                continue;
              } else {
                sum = tmp17 + 1;
                // continue
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
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
let closure_11 = importDefault(dependencyMap[8]);
let closure_12 = importDefault(dependencyMap[9]);
let closure_13 = importDefault(dependencyMap[10]);
let closure_14 = importDefault(dependencyMap[11]);
let closure_15 = importDefault(dependencyMap[12]);
let closure_16 = importDefault(dependencyMap[13]);
let closure_17 = importDefault(dependencyMap[14]);
let closure_18 = importDefault(dependencyMap[15]);
const ForumTimestampFormats = arg1(dependencyMap[16]).ForumTimestampFormats;
({ AnalyticsObjectTypes: closure_20, AnalyticsObjects: closure_21, EMPTY_STRING_SNOWFLAKE_ID: closure_22, Permissions: closure_23 } = arg1(dependencyMap[17]));
const ChannelFlags = arg1(dependencyMap[18]).ChannelFlags;
let closure_25 = arg1(dependencyMap[19]).MAX_THREAD_UNREAD_MESSAGE_COUNT;
let closure_26 = { Object: true, add: true };
const tmp2 = arg1(dependencyMap[17]);
const result = arg1(dependencyMap[35]).fileFinishedImporting("modules/forums/ForumHooks.tsx");

export const useLoadForumUnreadCounts = function useLoadForumUnreadCounts(channel, sortOrder, tagFilter, tagSetting) {
  sortOrder = channel;
  const importDefault = sortOrder;
  const dependencyMap = tagFilter;
  let closure_3 = tagSetting;
  const items = [closure_7];
  const stateFromStores = sortOrder(dependencyMap[20]).useStateFromStores(items, () => closure_7.hasLoaded(arg0.guild_id));
  const React = stateFromStores;
  const items1 = [, , , , , ];
  ({ id: arr2[0], guild_id: arr2[1] } = channel);
  items1[2] = stateFromStores;
  items1[3] = tagFilter;
  items1[4] = sortOrder;
  items1[5] = tagSetting;
  const effect = React.useEffect((self) => {
    if (stateFromStores) {
      const threadIdsMissingCounts = threadIdsMissingCounts.getThreadIdsMissingCounts(self.guild_id, threadIds.getThreadIds(self.id, arg1, arg2, arg3));
      const found = threadIdsMissingCounts.filter((id) => {
        const items = [closure_13];
        return callback(closure_2[21]).canDisplayPostUnreadMessageCount(id, items);
      });
      const substr = found.slice(0, 180);
      const mapped = substr.map((threadId) => ({ threadId, ackMessageId: trackedAckMessageId.getTrackedAckMessageId(threadId) }));
      if (mapped.length > 0) {
        let obj = arg1(arg2[22]);
        obj = { type: "REQUEST_FORUM_UNREADS" };
        ({ guild_id: obj2.guildId, id: obj2.channelId } = self);
        obj.threads = mapped;
        obj.dispatch(obj);
      }
    }
  }, items1);
};
export const useExistingPin = function useExistingPin(thread) {
  const arg1 = thread;
  const items = [closure_7, closure_9];
  return arg1(dependencyMap[20]).useStateFromStores(items, (self) => {
    const tmp = callback(closure_2[23]);
    const keys = callback(closure_2[23])(threadsForParent.getThreadsForParent(self.guild_id, self.parent_id)).keys();
    const found = keys.filter((channelId) => {
      const channel = channel.getChannel(channelId);
      let hasFlagResult;
      if (null != channel) {
        hasFlagResult = channel.hasFlag(constants.PINNED);
      }
      return true === hasFlagResult;
    });
    return channel.getChannel(found.head());
  });
};
export const useFacepileUsers = function useFacepileUsers(thread, typingUserIds) {
  typingUserIds = thread;
  const importDefault = typingUserIds;
  const items = [closure_14];
  const stateFromStoresArray = typingUserIds(dependencyMap[20]).useStateFromStoresArray(items, () => {
    const mapped = arg1.map((arg0) => user.getUser(arg0));
    return mapped.filter(arg0(stateFromStoresArray[24]).isNotNullish);
  });
  const dependencyMap = stateFromStoresArray;
  importDefault(dependencyMap[25])(() => {
    const item = stateFromStoresArray.forEach((id) => {
      const member = closure_10.requestMember(guild_id.guild_id, id.id);
    });
  });
  return stateFromStoresArray;
};
export const useLastActiveTimestamp = function useLastActiveTimestamp(thread, sortOrder, format) {
  let DURATION_AGO = format;
  sortOrder = thread;
  const importDefault = sortOrder;
  if (format === undefined) {
    DURATION_AGO = ForumTimestampFormats.DURATION_AGO;
  }
  const dependencyMap = DURATION_AGO;
  let closure_3;
  let React;
  let closure_5;
  const items = [thread.id];
  const memo = React.useMemo(() => arg1(DURATION_AGO[26]).extractTimestamp(arg0.id), items);
  closure_3 = memo;
  const lastMessageTimestamp = sortOrder(dependencyMap[27]).useLastMessageTimestamp(thread);
  React = lastMessageTimestamp;
  const items1 = [sortOrder, DURATION_AGO];
  const memo1 = React.useMemo(() => arg0(DURATION_AGO[21]).getForumTimestampFormatter(arg1, DURATION_AGO), items1);
  closure_5 = memo1;
  const items2 = [lastMessageTimestamp, sortOrder, memo, memo1];
  return React.useMemo(() => {
    if (arg1 === arg0(DURATION_AGO[28]).ThreadSortOrder.CREATION_DATE) {
      let timestampString = arg0(DURATION_AGO[27]).getTimestampString(memo, memo1);
      const obj2 = arg0(DURATION_AGO[27]);
    } else {
      timestampString = arg0(DURATION_AGO[27]).getTimestampString(lastMessageTimestamp, memo1);
      const obj = arg0(DURATION_AGO[27]);
    }
    return timestampString;
  }, items2);
};
export const useMostUsedReaction = function useMostUsedReaction(reactions) {
  const arg1 = reactions;
  reactions = undefined;
  if (null != reactions) {
    reactions = reactions.reactions;
  }
  const items = [reactions];
  return React.useMemo(() => {
    let reactions;
    if (null != arg0) {
      reactions = arg0.reactions;
    }
    if (null == reactions) {
      reactions = [];
    }
    if (0 !== reactions.length) {
      return callback(reactions)[0];
    }
  }, items);
};
export { useDefaultReactionEmoji };
export const useSomeForumPostReactions = function useSomeForumPostReactions(message) {
  message = message.message;
  const arg1 = message;
  let num = message.count;
  if (num === undefined) {
    num = 1;
  }
  let flag = message.sorted;
  if (flag === undefined) {
    flag = true;
  }
  const importDefault = flag;
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
      tmp2 = callback(reactions);
    }
    return tmp2;
  }, items);
  let items1 = [];
  if (null != tmp) {
    let obj = { emoji: tmp };
    const items2 = [obj];
    items1 = items2;
  }
  if (memo.length > 0) {
    items1 = memo;
  }
  obj = { reactions: items1.slice(0, num) };
  const substr = items1.slice(num, items1.length);
  obj.additionalNonUniqueReactionCount = importDefault(dependencyMap[23]).sum(substr.map((count) => count.count + count.burst_count));
  return obj;
};
export const useMaxPossibleForumPostReactions = function useMaxPossibleForumPostReactions(message) {
  let containerWidth;
  let digitWidth;
  let reactionEmojiWidth;
  message = message.message;
  const arg1 = message;
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
    return closure_27(reactions);
  }, items);
  let items1 = [];
  if (null != tmp2) {
    let obj = { emoji: tmp2 };
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
      let sum = reactionEmojiWidth + digitWidth * Math.ceil(Math.log10(tmp4.burst_count > 0 ? tmp4.burst_count : tmp4.count + 1));
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
  const arg1 = thread;
  let obj = arg1(closure_2[20]);
  const items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const count = count.getCount(arg0.id);
    let num = 0;
    if (null != count) {
      num = count;
    }
    return num;
  });
  const importDefault = stateFromStores;
  const messageCountText = arg1(closure_2[29]).getMessageCountText(stateFromStores, thread.id);
  const obj2 = arg1(closure_2[29]);
  const items1 = [closure_13];
  closure_2 = arg1(closure_2[20]).useStateFromStores(items1, () => {
    const items = [closure_13];
    return arg0(closure_2[21]).canDisplayPostUnreadMessageCount(arg0.id, items);
  });
  const obj3 = arg1(closure_2[20]);
  const items2 = [closure_17];
  obj = { messageCount: stateFromStores };
  let tmp4 = null != stateFromStores;
  const stateFromStores1 = arg1(closure_2[20]).useStateFromStores(items2, () => {
    if (closure_2) {
      const count = count2.getCount(arg0.id);
      if (null != count) {
        if (count > 0) {
          const _Math = Math;
          let bound = Math.min(count, stateFromStores);
          if (bound >= closure_25) {
            const _HermesInternal = HermesInternal;
            bound = "" + closure_25 + "+";
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
    const _HermesInternal = HermesInternal;
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
  thread = id;
  const guildId = thread.getGuildId();
  const importDefault = guildId;
  let obj = thread(dependencyMap[20]);
  const items = [closure_14];
  const stateFromStores = obj.useStateFromStores(items, () => user.getUser(id));
  const nullableMessageAuthor = thread(dependencyMap[30]).useNullableMessageAuthor(message);
  const items1 = [guildId, id];
  const effect = React.useEffect(() => {
    let tmp = null != id;
    if (tmp) {
      tmp = null != guildId;
    }
    if (tmp) {
      const member = closure_10.requestMember(guildId, id);
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
  const arg1 = thread;
  let author;
  const items = [closure_14];
  const user = arg1(dependencyMap[20]).useStateFromStores(items, () => user.getUser(arg0.ownerId));
  const obj = arg1(dependencyMap[20]);
  const items1 = [closure_16];
  const stateFromStores1 = arg1(dependencyMap[20]).useStateFromStores(items1, () => {
    const message = message.getMessage(arg0.id);
    let firstMessage;
    if (null != message) {
      firstMessage = message.firstMessage;
    }
    return firstMessage;
  });
  const obj2 = arg1(dependencyMap[20]);
  if (null != stateFromStores1) {
    author = stateFromStores1.author;
  }
  let tmp4 = user;
  if (null != author) {
    tmp4 = author;
  }
  const items2 = [, ];
  ({ guild_id: arr3[0], ownerId: arr3[1] } = thread);
  author = arg1(dependencyMap[30]).useNullableUserAuthor(tmp4, thread);
  const effect = React.useEffect((self) => {
    if (null != self.ownerId) {
      const member = closure_10.requestMember(self.guild_id, self.ownerId);
    }
  }, items2);
  return { user, author };
};
export const getForumPostAuthor = function getForumPostAuthor(ownerId) {
  let user = user.getUser(ownerId.ownerId);
  const message = message.getMessage(ownerId.id);
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
  obj.author = arg1(dependencyMap[30]).getUserAuthor(user, ownerId);
  return obj;
};
export const useForumPostFirstMessageMarkup = function useForumPostFirstMessageMarkup(firstMessage) {
  firstMessage = firstMessage.firstMessage;
  const arg1 = firstMessage;
  let flag = firstMessage.formatInline;
  if (flag === undefined) {
    flag = true;
  }
  const importDefault = flag;
  let flag2 = firstMessage.noStyleAndInteraction;
  if (flag2 === undefined) {
    flag2 = true;
  }
  const dependencyMap = flag2;
  let flag3 = firstMessage.hasUnreads;
  if (flag3 === undefined) {
    flag3 = true;
  }
  let closure_3;
  let str = "text-muted";
  if (flag3) {
    str = "text-default";
  }
  closure_3 = str;
  const items = [firstMessage, flag, flag2, str];
  const memo = React.useMemo(() => {
    let content;
    if (null != firstMessage) {
      content = firstMessage.content;
    }
    if (null != content) {
      if ("" !== firstMessage.content) {
        const obj = { formatInline: flag, noStyleAndInteraction: flag2, textColor: str };
        flag(flag2[31])(firstMessage, obj);
      }
      return { name: "L", padding: "L" };
    }
  }, items);
  const hasSpoilerEmbeds = memo.hasSpoilerEmbeds;
  const obj = { hasSpoilerEmbeds, content: memo.content, firstMedia: arg1(dependencyMap[32]).useFindFirstMediaProperties(firstMessage, hasSpoilerEmbeds) };
  const obj2 = arg1(dependencyMap[32]);
  obj.firstMediaIsEmbed = arg1(dependencyMap[32]).useFirstMediaIsEmbed(firstMessage, hasSpoilerEmbeds);
  return obj;
};
export const useCanManageChannel = function useCanManageChannel(channel) {
  const arg1 = channel;
  const items = [closure_12];
  return arg1(dependencyMap[20]).useStateFromStores(items, () => closure_12.can(constants.MANAGE_CHANNELS, arg0));
};
export const useForumPostReadStates = function useForumPostReadStates(stateFromStores) {
  const arg1 = stateFromStores;
  const items = [closure_11, closure_13];
  return arg1(dependencyMap[20]).useStateFromStoresObject(items, () => {
    let guildId = arg0.getGuildId();
    if (null == guildId) {
      guildId = closure_22;
    }
    const guild = guild.getGuild(guildId);
    if (null == guild) {
      let forumPostReadStates = closure_26;
    } else {
      const items = [closure_13];
      forumPostReadStates = arg0(closure_2[21]).getForumPostReadStates(arg0, guild, items);
      const obj = arg0(closure_2[21]);
    }
    return forumPostReadStates;
  });
};
export const useChannelTemplate = function useChannelTemplate(parentChannel) {
  const arg1 = parentChannel;
  const items = [parentChannel];
  return React.useMemo(() => {
    let str = "";
    if (null != arg0) {
      str = "";
      if (null != arg0.template) {
        str = arg0.template.trim();
        const str2 = arg0.template;
      }
    }
    return str;
  }, items);
};
export const useForumThreadsForChannelList = function useForumThreadsForChannelList(arg0) {
  const arg1 = arg0;
  let obj = arg1(dependencyMap[20]);
  const items = [closure_6];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ activeJoinedThreads: store.getActiveJoinedThreadsForGuild(arg0), activeUnjoinedThreads: store.getActiveUnjoinedThreadsForGuild(arg0), newThreadCounts: store.getNewThreadCountsForGuild(arg0) }));
  obj = { activeJoinedThreads: stateFromStoresObject.activeJoinedThreads, activeUnjoinedThreads: stateFromStoresObject.activeUnjoinedThreads, newThreadCounts: stateFromStoresObject.newThreadCounts };
  return obj;
};
export { useCanSearchForumPosts };
export const useCanViewArchivedPosts = function useCanViewArchivedPosts(channel) {
  const arg1 = channel;
  const items = [closure_12];
  return arg1(dependencyMap[20]).useStateFromStores(items, () => closure_12.can(constants.READ_MESSAGE_HISTORY, arg0));
};
export const useForumSearchQuery = function useForumSearchQuery(channelId) {
  const arg1 = channelId.channelId;
  const items = [closure_18];
  return arg1(dependencyMap[20]).useStateFromStores(items, () => {
    let searchQuery = null;
    if (null != channelId) {
      searchQuery = searchQuery.getSearchQuery(channelId);
    }
    return searchQuery;
  });
};
export { useForumSearchState };
export const useHasForumSearchQuery = function useHasForumSearchQuery(channelId) {
  const arg1 = channelId;
  const items = [closure_18];
  return arg1(dependencyMap[20]).useStateFromStores(items, () => null != searchQuery.getSearchQuery(arg0));
};
export const useAutomaticForumSearch = function useAutomaticForumSearch(channelId, tagFilter, tagSetting) {
  let flag = arg3;
  tagFilter = channelId;
  const importDefault = tagFilter;
  const dependencyMap = tagSetting;
  if (arg3 === undefined) {
    flag = false;
  }
  let closure_3 = flag;
  let React;
  let closure_5;
  let closure_6;
  let closure_7;
  let closure_8;
  const tmp = useForumSearchState({ channelId: channelId.id });
  const isSearchLoading = tmp.isSearchLoading;
  React = isSearchLoading;
  const searchQuery = tmp.searchQuery;
  closure_5 = searchQuery;
  const tmp2 = useCanSearchForumPosts(channelId);
  closure_6 = tmp2;
  closure_7 = React.useRef(null);
  closure_8 = React.useRef(new Set());
  const items = [tmp2, , , , , , , ];
  ({ guild_id: arr[1], id: arr[2] } = channelId);
  items[3] = flag;
  items[4] = isSearchLoading;
  items[5] = searchQuery;
  items[6] = tagFilter;
  items[7] = tagSetting;
  const effect = React.useEffect(() => {
    if (null == searchQuery) {
      if (null != ref.current) {
        arg1(arg2[33]).clearForumSearch(user.id);
        ref.current = null;
      }
    }
    if (null != searchQuery) {
      if (0 !== searchQuery.length) {
        if (!flag) {
          if (tmp2) {
            if (ref.current !== searchQuery) {
              if (!isSearchLoading) {
                const _setTimeout = setTimeout;
                // CreateGeneratorClosureLongIndex (0x67)
                const user = setTimeout(flag(globalThis), 350);
                return () => clearTimeout(closure_0);
              }
            }
          } else {
            arg1(arg2[33]).clearForumSearch(user.id);
            const obj = arg1(arg2[33]);
          }
        }
      }
    }
  }, items);
};
export { useUnreadThreadsCountForParent };
export const useForumActiveThreadIds = function useForumActiveThreadIds(channel) {
  let shouldAutomaticallyAck;
  channel = channel.channel;
  const arg1 = channel;
  ({ sortOrder: closure_1, tagFilter: closure_2, tagSetting: closure_3, shouldAutomaticallyAck } = channel);
  const React = shouldAutomaticallyAck;
  const items = [closure_15];
  const stateFromStoresArray = arg1(dependencyMap[20]).useStateFromStoresArray(items, () => store.getThreadIds(channel.id, closure_1, closure_2, closure_3));
  const tmp2 = useUnreadThreadsCountForParent(channel.guild_id, channel.id);
  let closure_5 = tmp2;
  const obj = arg1(dependencyMap[20]);
  const items1 = [closure_15];
  const items2 = [shouldAutomaticallyAck, tmp2];
  const stateFromStores = arg1(dependencyMap[20]).useStateFromStores(items1, () => {
    let tmp = shouldAutomaticallyAck;
    if (shouldAutomaticallyAck) {
      let canAckThreads = tmp2 > 0;
      if (!canAckThreads) {
        canAckThreads = store.getCanAckThreads();
      }
      tmp = canAckThreads;
    }
    return tmp;
  }, items2);
  let closure_6 = stateFromStores;
  const items3 = [channel, stateFromStores];
  const effect = React.useEffect(() => {
    if (stateFromStores) {
      let obj = channel(closure_2[34]);
      obj = { object: constants2.ACK_FORUM_ACTIVE_THREADS, objectType: constants.ACK_AUTOMATIC };
      obj.ackChannel(channel, obj);
    }
  }, items3);
  return stateFromStoresArray;
};
