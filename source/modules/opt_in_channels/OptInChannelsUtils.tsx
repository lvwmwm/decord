// Module ID: 9971
// Function ID: 77051
// Name: setIndex
// Dependencies: []
// Exports: clearRecentChannels, getActiveAgoTimestamp, getFirstRouteFor, useChannelBrowserChannelCount, useChannelBrowserSections, useFilterCategoriesByQuery

// Module 9971 (setIndex)
function setIndex(arg0, index) {
  arg0.index = index;
}
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
({ Routes: closure_9, ChannelTypes: closure_10 } = arg1(dependencyMap[6]));
const tmp2 = arg1(dependencyMap[6]);
({ ChannelFlags: closure_11, StaticChannelRoute: closure_12 } = arg1(dependencyMap[7]));
const ChannelListGuildActionRow = arg1(dependencyMap[8]).ChannelListGuildActionRow;
const ReadStateTypes = arg1(dependencyMap[9]).ReadStateTypes;
const tmp3 = arg1(dependencyMap[7]);
const result = arg1(dependencyMap[24]).fileFinishedImporting("modules/opt_in_channels/OptInChannelsUtils.tsx");

export const useFilterCategoriesByQuery = function useFilterCategoriesByQuery(guildId, stateFromStores1, stateFromStores2, str) {
  const importDefault = stateFromStores2;
  const formatted = str.toLowerCase();
  const dependencyMap = formatted;
  const canSeeOnboardingHome = stateFromStores1(dependencyMap[10]).useCanSeeOnboardingHome(guildId);
  const React = canSeeOnboardingHome;
  const items = [canSeeOnboardingHome];
  const callback = React.useCallback((channel) => {
    let tmp = !canSeeOnboardingHome;
    if (!tmp) {
      channel = channel.channel;
      tmp = !channel.hasFlag(constants2.IS_GUILD_RESOURCE_CHANNEL);
    }
    if (tmp) {
      let tmp4 = channel.channel.type !== constants.GUILD_DIRECTORY;
      if (tmp4) {
        let tmp5 = 0 === arg1.length;
        if (!tmp5) {
          const tmp8 = arg2(formatted[11]);
          const obj = arg1(formatted[12]);
          let hasItem = tmp8(arg1, arg1(formatted[12]).computeChannelName(channel.channel, closure_8, closure_7).toLowerCase());
          if (!hasItem) {
            const formatted = channel.channel.topic.toLowerCase();
            hasItem = formatted.includes(arg1);
            const str2 = channel.channel.topic;
          }
          tmp5 = hasItem;
          const str = arg1(formatted[12]).computeChannelName(channel.channel, closure_8, closure_7);
        }
        tmp4 = tmp5;
      }
      tmp = tmp4;
    }
    return tmp;
  }, items);
  let closure_4 = callback;
  const items1 = [stateFromStores1, stateFromStores2, callback, formatted];
  return React.useMemo(() => {
    const obj = { null: [], _categories: [] };
    const arg1 = obj;
    const item = arg2[closure_10.GUILD_CATEGORY].forEach((channel) => {
      channel = channel.channel;
      if ("null" === channel.id) {
        const _null = obj.null;
        obj.null = _null.filter((arg0) => callback(arg0, closure_2));
      }
      obj[channel.id] = obj[channel.id].filter((arg0) => callback(arg0, closure_2));
    });
    const _categories = arg1._categories;
    obj._categories = _categories.filter((channel) => {
      let tmp = "null" === channel.channel.id;
      if (!tmp) {
        tmp = 0 === length.length;
      }
      if (!tmp) {
        tmp = obj[channel.channel.id].length > 0;
      }
      return tmp;
    });
    const item1 = arg2(formatted[13])(obj._categories, obj).forEach(closure_15);
    return obj;
  }, items1);
};
export const getFirstRouteFor = function getFirstRouteFor(getSections) {
  let channel;
  const sections = getSections.getSections(false);
  if (sections[closure_0(undefined, closure_2[14]).SECTION_INDEX_GUILD_ACTIONS] > 0) {
    const guildActionSection = getSections.getGuildActionSection();
    const row = guildActionSection.getRow(0);
    if (ChannelListGuildActionRow.GUILD_HOME === row) {
      return constants.GUILD_HOME;
    } else if (ChannelListGuildActionRow.GUILD_ROLE_SUBSCRIPTIONS === row) {
      return constants.ROLE_SUBSCRIPTIONS;
    } else if (ChannelListGuildActionRow.GUILD_MOD_DASH_MEMBER_SAFETY === row) {
      return constants.MEMBER_SAFETY;
    }
  }
  let SECTION_INDEX_UNCATEGORIZED_CHANNELS = arg1(dependencyMap[14]).SECTION_INDEX_UNCATEGORIZED_CHANNELS;
  if (SECTION_INDEX_UNCATEGORIZED_CHANNELS < getSections.voiceChannelsSectionNumber) {
    while (true) {
      if (sections[SECTION_INDEX_UNCATEGORIZED_CHANNELS] > 0) {
        let channelFromSectionRow = getSections.getChannelFromSectionRow(SECTION_INDEX_UNCATEGORIZED_CHANNELS, 0);
        channel = undefined;
        if (null != channelFromSectionRow) {
          channel = channelFromSectionRow.channel;
        }
        let tmp6 = channelFromSectionRow;
        let tmp7 = channel;
        if (null != channel) {
          break;
        }
      }
      SECTION_INDEX_UNCATEGORIZED_CHANNELS = SECTION_INDEX_UNCATEGORIZED_CHANNELS + 1;
    }
    return channel.id;
  }
  return null;
};
export const clearRecentChannels = function clearRecentChannels(closure_0, closure_1) {
  let tmp = arg2;
  if (arg2 === undefined) {
    tmp = null;
  }
  closure_1(dependencyMap[15]).bulkClearRecents(closure_0, closure_1);
  const obj = closure_1(dependencyMap[15]);
  closure_1(dependencyMap[16]).bulkAck(closure_1.map((channelId) => ({ channelId, readStateType: constants.CHANNEL, messageId: closure_6.lastMessageId(channelId) })));
  if (null != tmp) {
    closure_1(dependencyMap[17]).transitionTo(closure_9.CHANNEL(closure_0, tmp));
    const obj3 = closure_1(dependencyMap[17]);
  }
};
export const useChannelBrowserSections = function useChannelBrowserSections(guildId, filterCategoriesByQuery, arg2) {
  filterCategoriesByQuery = guildId;
  const importDefault = filterCategoriesByQuery;
  const dependencyMap = arg2;
  let obj = filterCategoriesByQuery(dependencyMap[18]);
  let result = obj.useIsDismissibleContentDismissed_UNSAFE(filterCategoriesByQuery(dependencyMap[19]).DismissibleContent.CHANNEL_BROWSER_NUX);
  const items = [closure_4];
  const items1 = [guildId];
  let closure_3 = filterCategoriesByQuery(dependencyMap[20]).useStateFromStoresObject(items, () => {
    const obj = {};
    const mutableGuildChannelsForGuild = mutableGuildChannelsForGuild.getMutableGuildChannelsForGuild(arg0);
    for (const key10010 in mutableGuildChannelsForGuild) {
      let tmp3 = key10010;
      let parent_id = mutableGuildChannelsForGuild[key10010].parent_id;
      if (null == parent_id) {
        continue;
      } else {
        let tmp2 = obj[parent_id];
        let num = 0;
        if (null != tmp2) {
          num = tmp2;
        }
        obj[parent_id] = num + 1;
        // continue
      }
      continue;
    }
    return obj;
  }, items1);
  const _categories = filterCategoriesByQuery._categories;
  const mapped = _categories.map((channel) => {
    const obj = {};
    if ("null" === channel.channel.id) {
      let num = arr.length;
    } else {
      num = 1;
    }
    obj.rowCount = num;
    let num3 = 0;
    if (0 !== arg1[channel.channel.id].length) {
      num3 = arg2;
    }
    obj.rowHeight = num3;
    return obj;
  });
  if (!result) {
    result = null == arg3;
  }
  if (!result) {
    obj = { rowCount: 1, rowHeight: arg3 };
    mapped.unshift(obj);
  }
  return mapped;
};
export const useChannelBrowserChannelCount = function useChannelBrowserChannelCount(arg0) {
  const arg1 = arg0;
  const items = [closure_5];
  const stateFromStores = arg1(dependencyMap[20]).useStateFromStores(items, () => categories.getCategories(arg0));
  let sum = stateFromStores._categories[stateFromStores._categories.length - 1];
  if (null == sum) {
    return 0;
  } else {
    const channel = sum.channel;
    let id;
    if (null != channel) {
      id = channel.id;
    }
    let str = "null";
    if (null != id) {
      str = id;
    }
    if (null == stateFromStores[str]) {
      return 0;
    } else if (0 === arr2.length) {
      sum = sum.index + 2;
      let diff = sum - length;
    } else {
      diff = arr2[arr2.length - 1].index + 2 - length;
    }
  }
};
export const getActiveAgoTimestamp = function getActiveAgoTimestamp(id) {
  let tmp = id;
  const intl = arg1(dependencyMap[21]).intl;
  const obj = {};
  const tmp2 = importDefault(dependencyMap[22]);
  const lastMessageIdResult = closure_6.lastMessageId(id);
  if (null != lastMessageIdResult) {
    tmp = lastMessageIdResult;
  }
  const obj2 = importDefault(dependencyMap[23]);
  obj.timeAgo = tmp2(importDefault(dependencyMap[23]).extractTimestamp(tmp)).fromNow();
  return intl.formatToPlainString(arg1(dependencyMap[21]).t.8N0BHR, obj);
};
