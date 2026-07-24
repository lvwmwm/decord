// Module ID: 10012
// Function ID: 77309
// Name: setIndex
// Dependencies: [31, 1348, 5070, 4142, 3767, 1849, 653, 1355, 6766, 4326, 5605, 5045, 4320, 5071, 6760, 10013, 5069, 1198, 3946, 1334, 566, 1212, 3712, 21, 2]
// Exports: clearRecentChannels, getActiveAgoTimestamp, getFirstRouteFor, useChannelBrowserChannelCount, useChannelBrowserSections, useFilterCategoriesByQuery

// Module 10012 (setIndex)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import ME from "ME";
import set from "set";
import { ChannelListGuildActionRow } from "ChannelListGuildActionRow";
import { ReadStateTypes } from "ReadStateTypes";
import set from "_isNativeReflectConstruct";

let closure_10;
let closure_11;
let closure_12;
let closure_9;
const require = arg1;
function setIndex(arg0, index) {
  arg0.index = index;
}
({ Routes: closure_9, ChannelTypes: closure_10 } = ME);
({ ChannelFlags: closure_11, StaticChannelRoute: closure_12 } = set);
let result = set.fileFinishedImporting("modules/opt_in_channels/OptInChannelsUtils.tsx");

export const useFilterCategoriesByQuery = function useFilterCategoriesByQuery(guildId, stateFromStores1, stateFromStores2, str) {
  const _require = stateFromStores1;
  let closure_1 = stateFromStores2;
  let formatted = str.toLowerCase();
  const canSeeOnboardingHome = _require(formatted[10]).useCanSeeOnboardingHome(guildId);
  const items = [canSeeOnboardingHome];
  const callback = canSeeOnboardingHome.useCallback((channel) => {
    let tmp = !canSeeOnboardingHome;
    if (!tmp) {
      channel = channel.channel;
      tmp = !channel.hasFlag(outer1_11.IS_GUILD_RESOURCE_CHANNEL);
    }
    if (tmp) {
      let tmp4 = channel.channel.type !== outer1_10.GUILD_DIRECTORY;
      if (tmp4) {
        let tmp5 = 0 === arg1.length;
        if (!tmp5) {
          const tmp8 = stateFromStores2(formatted[11]);
          const obj = stateFromStores1(formatted[12]);
          let hasItem = tmp8(arg1, stateFromStores1(formatted[12]).computeChannelName(channel.channel, outer1_8, outer1_7).toLowerCase());
          if (!hasItem) {
            formatted = channel.channel.topic.toLowerCase();
            hasItem = formatted.includes(arg1);
            const str2 = channel.channel.topic;
          }
          tmp5 = hasItem;
          const str = stateFromStores1(formatted[12]).computeChannelName(channel.channel, outer1_8, outer1_7);
        }
        tmp4 = tmp5;
      }
      tmp = tmp4;
    }
    return tmp;
  }, items);
  const items1 = [stateFromStores1, stateFromStores2, callback, formatted];
  return canSeeOnboardingHome.useMemo(() => {
    const obj = { null: [], _categories: [] };
    const item = stateFromStores2[outer1_10.GUILD_CATEGORY].forEach((channel) => {
      channel = channel.channel;
      if ("null" === channel.id) {
        const _null = obj.null;
        obj.null = _null.filter((arg0) => outer2_4(arg0, outer2_2));
      }
      obj[channel.id] = obj[channel.id].filter((arg0) => outer2_4(arg0, outer2_2));
    });
    const _categories = obj._categories;
    obj._categories = _categories.filter((channel) => {
      let tmp = "null" === channel.channel.id;
      if (!tmp) {
        tmp = 0 === outer1_2.length;
      }
      if (!tmp) {
        tmp = obj[channel.channel.id].length > 0;
      }
      return tmp;
    });
    const item1 = stateFromStores2(formatted[13])(obj._categories, obj).forEach(outer1_15);
    return obj;
  }, items1);
};
export const getFirstRouteFor = function getFirstRouteFor(getSections) {
  let channel;
  const sections = getSections.getSections(false);
  if (sections[require(undefined, 6760) /* _superPropGet */.SECTION_INDEX_GUILD_ACTIONS] > 0) {
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
  let SECTION_INDEX_UNCATEGORIZED_CHANNELS = require(6760) /* _superPropGet */.SECTION_INDEX_UNCATEGORIZED_CHANNELS;
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
export const clearRecentChannels = function clearRecentChannels(outer1_0, outer1_1) {
  let tmp = arg2;
  if (arg2 === undefined) {
    tmp = null;
  }
  require(10013) /* _bulkClearRecents */.bulkClearRecents(outer1_0, outer1_1);
  const obj = require(10013) /* _bulkClearRecents */;
  require(5069) /* _createForOfIteratorHelperLoose */.bulkAck(outer1_1.map((channelId) => ({ channelId, readStateType: outer1_14.CHANNEL, messageId: outer1_6.lastMessageId(channelId) })));
  if (null != tmp) {
    require(1198) /* shouldNavigate */.transitionTo(closure_9.CHANNEL(outer1_0, tmp));
    const obj3 = require(1198) /* shouldNavigate */;
  }
};
export const useChannelBrowserSections = function useChannelBrowserSections(guildId, filterCategoriesByQuery, arg2) {
  const _require = guildId;
  let closure_1 = filterCategoriesByQuery;
  const dependencyMap = arg2;
  let obj = _require(3946);
  let result = obj.useIsDismissibleContentDismissed_UNSAFE(_require(1334).DismissibleContent.CHANNEL_BROWSER_NUX);
  const items = [_isNativeReflectConstruct];
  const items1 = [guildId];
  let result = _require(566).useStateFromStoresObject(items, () => {
    const obj = {};
    const mutableGuildChannelsForGuild = outer1_4.getMutableGuildChannelsForGuild(closure_0);
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
        continue;
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
    if (0 !== table[channel.channel.id].length) {
      num3 = closure_2;
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
  const _require = arg0;
  const items = [closure_5];
  const stateFromStores = _require(566).useStateFromStores(items, () => outer1_5.getCategories(closure_0));
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
  const intl = require(1212) /* getSystemLocale */.intl;
  const obj = {};
  const tmp2 = importDefault(3712);
  const lastMessageIdResult = closure_6.lastMessageId(id);
  if (null != lastMessageIdResult) {
    tmp = lastMessageIdResult;
  }
  const obj2 = importDefault(21);
  obj.timeAgo = tmp2(importDefault(21).extractTimestamp(tmp)).fromNow();
  return intl.formatToPlainString(require(1212) /* getSystemLocale */.t["8N0BHR"], obj);
};
