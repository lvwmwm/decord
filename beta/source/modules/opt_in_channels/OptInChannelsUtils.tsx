// Module ID: 11054
// Function ID: 11055
// Name: OptInChannelsUtils
// Dependencies: [19, 2045, 6532, 4851, 4479, 1372, 1074, 2052, 6954, 5018, 6643, 5829, 4989, 6533, 6948, 11055, 6531, 1101, 4654, 2029, 504, 1115, 4421, 11, 2]
// Exports: clearRecentChannels, getActiveAgoTimestamp, getFirstRouteFor, useChannelBrowserChannelCount, useChannelBrowserSections, useFilterCategoriesByQuery

// Module 11054 (OptInChannelsUtils)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import intl2 from "intl" /* 1115 */;
import _modDef4421 from "module_4421" /* 4421 */;
import useChannelName from "useChannelName" /* 4989 */;
import ReadStateConstants from "ReadStateConstants" /* 5018 */;
import fuzzysearchDefault from "fuzzysearch" /* 5829 */;
import ReadStateActionCreators from "ReadStateActionCreators" /* 6531 */;
import ChannelListState from "ChannelListState" /* 6948 */;
import GuildSidebarConstants from "GuildSidebarConstants" /* 6954 */;
import RecentChannelsActionCreators from "RecentChannelsActionCreators" /* 11055 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildCategoryStore from "GuildCategoryStore" /* 6532 */;
import ReadStateStore from "ReadStateStore" /* 4851 */;
import RelationshipStore from "RelationshipStore" /* 4479 */;
import UserStore from "UserStore" /* 1372 */;
import Constants from "Constants" /* 1074 */;
import ChannelConstants from "ChannelConstants" /* 2052 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _null, _require, dependencyMap;

let c10;
let c9;
let closure_12;
let tmp2;
let unpackModuleId;
const router_utils = tmp2(1101);
function setIndex(arg0, index) {
  arg0.index = index;
}
({ Routes: c9, ChannelTypes: c10 } = Constants);
({ ChannelFlags: unpackModuleId, StaticChannelRoute: closure_12 } = ChannelConstants);
const ChannelListGuildActionRow = GuildSidebarConstants.ChannelListGuildActionRow;
const ReadStateTypes = ReadStateConstants.ReadStateTypes;
let result = size.fileFinishedImporting("modules/opt_in_channels/OptInChannelsUtils.tsx");

export const useFilterCategoriesByQuery = function useFilterCategoriesByQuery(guildId, stateFromStores1, stateFromStores2, str) {
  _require = stateFromStores1;
  let formatted = str.toLowerCase();
  let obj = require("OnboardingHomeUtils");
  const canSeeOnboardingHome = obj.useCanSeeOnboardingHome(guildId);
  const items = [canSeeOnboardingHome];
  const callback = canSeeOnboardingHome.useCallback((channel, arg1) => {
    let tmp = !canSeeOnboardingHome;
    if (canSeeOnboardingHome) {
      channel = channel.channel;
      tmp = !channel.hasFlag(unpackModuleId.IS_GUILD_RESOURCE_CHANNEL);
    }
    if (tmp) {
      let tmp4 = channel.channel.type !== constants.GUILD_DIRECTORY;
      if (tmp4) {
        let tmp6 = 0 === arg1.length;
        if (!tmp6) {
          const tmp9 = fuzzysearchDefault;
          const obj = useChannelName;
          const str = obj.computeChannelName(channel.channel, UserStore, RelationshipStore);
          let hasItem = tmp9(arg1, str.toLowerCase());
          if (!hasItem) {
            const str2 = channel.channel.topic;
            formatted = str2.toLowerCase();
            hasItem = formatted.includes(arg1);
          }
          tmp6 = hasItem;
        }
        tmp4 = tmp6;
      }
      tmp = tmp4;
    }
    return tmp;
  }, items);
  const items1 = [stateFromStores1, stateFromStores2, callback, formatted];
  return canSeeOnboardingHome.useMemo(() => {
    let _categories;
    const obj = { null: [], _categories: _categories.filter((channel) => "null" === channel.channel.id || 0 === formatted.length || obj[channel.channel.id].length > 0) };
    const arr = stateFromStores2[constants.GUILD_CATEGORY];
    const item = arr.forEach((channel) => {
      channel = channel.channel;
      if ("null" === channel.id) {
        _null = _null.null;
        obj.null = _null.filter((item) => closure_1_4(item, closure_1_2));
      }
      const arr2 = _null[channel.id];
      obj[channel.id] = arr2.filter((item) => closure_1_4(item, closure_1_2));
    });
    _categories = obj._categories;
    const arr3 = stateFromStores2(formatted[13])(obj._categories, obj);
    const item1 = arr3.forEach(setIndex);
    return obj;
  }, items1);
};
export const getFirstRouteFor = function getFirstRouteFor(getSections) {
  let channel;
  const sections = getSections.getSections(false);
  if (sections[ChannelListState.SECTION_INDEX_GUILD_ACTIONS] > 0) {
    const guildActionSection = getSections.getGuildActionSection();
    const row = guildActionSection.getRow(0);
    if (ChannelListGuildActionRow.GUILD_HOME === row) {
      return constants3.GUILD_HOME;
    } else if (ChannelListGuildActionRow.GUILD_ROLE_SUBSCRIPTIONS === row) {
      return constants3.ROLE_SUBSCRIPTIONS;
    } else if (ChannelListGuildActionRow.GUILD_MOD_DASH_MEMBER_SAFETY === row) {
      return constants3.MEMBER_SAFETY;
    }
  }
  let SECTION_INDEX_UNCATEGORIZED_CHANNELS = ChannelListState.SECTION_INDEX_UNCATEGORIZED_CHANNELS;
  if (SECTION_INDEX_UNCATEGORIZED_CHANNELS < getSections.voiceChannelsSectionNumber) {
    while (true) {
      if (sections[SECTION_INDEX_UNCATEGORIZED_CHANNELS] > 0) {
        let channelFromSectionRow = getSections.getChannelFromSectionRow(SECTION_INDEX_UNCATEGORIZED_CHANNELS, 0);
        channel = undefined;
        if (channelFromSectionRow != null) {
          channel = channelFromSectionRow.channel;
        }
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
export const clearRecentChannels = function clearRecentChannels(arg0, arr) {
  let tmp = arg2;
  if (arg2 === undefined) {
    tmp = null;
  }
  let obj = RecentChannelsActionCreators;
  obj.bulkClearRecents(arg0, arr);
  const obj2 = ReadStateActionCreators;
  obj2.bulkAck(arr.map((channelId) => {
    const obj = { channelId, readStateType: constants.CHANNEL, messageId: ReadStateStore.lastMessageId(channelId) };
    return obj;
  }));
  if (null != tmp) {
    const tmp2Result = router_utils;
    tmp2Result.transitionTo(React4.CHANNEL(arg0, tmp));
  }
};
export const useChannelBrowserSections = function useChannelBrowserSections(guildId, filterCategoriesByQuery, arg2, rowHeight) {
  let closure_2;
  _require = guildId;
  dependencyMap = arg2;
  let obj = require("DismissibleContentUnsafeUtils");
  let result = obj.useIsDismissibleContentDismissed_UNSAFE(require("dismissible_content").DismissibleContent.CHANNEL_BROWSER_NUX);
  const items = [ChannelStore];
  const items1 = [guildId];
  const obj2 = require("get initialized");
  let closure_3 = obj2.useStateFromStoresObject(items, () => {
    const obj = {};
    const mutableGuildChannelsForGuild = ChannelStore.getMutableGuildChannelsForGuild(guildId);
    for (const key10009 in mutableGuildChannelsForGuild) {
      let parent_id = mutableGuildChannelsForGuild[key10009].parent_id;
      if (null == parent_id) {
        continue;
      } else {
        let num = obj[parent_id] ?? 0;
        obj[parent_id] = num + 1;
        continue;
      }
      continue;
    }
    return obj;
  }, items1);
  const _categories = filterCategoriesByQuery._categories;
  const mapped = _categories.map((channel) => {
    let num;
    let num3;
    if ("null" === channel.channel.id) {
      num = arr.length;
    } else {
      num = 1;
    }
    const obj = { rowCount: num, rowHeight: num3 };
    num3 = 0;
    if (0 !== filterCategoriesByQuery[channel.channel.id].length) {
      num3 = closure_2;
    }
    return obj;
  });
  if (!result) {
    let tmp2 = null;
    result = null == rowHeight;
  }
  if (!result) {
    const obj3 = { rowCount: 1, rowHeight };
    const arr = mapped.unshift(obj3);
  }
  return mapped;
};
export const useChannelBrowserChannelCount = function useChannelBrowserChannelCount(arg0) {
  let closure_0;
  _require = arg0;
  const items = [GuildCategoryStore];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => GuildCategoryStore.getCategories(closure_0));
  if (null == stateFromStores._categories[stateFromStores._categories.length - 1]) {
    return 0;
  } else {
    const channel = tmp2.channel;
    let str;
    if (channel != null) {
      str = channel.id;
    }
    if (str == null) {
      str = "null";
    }
    let num2 = 0;
    if (null != stateFromStores[str]) {
      let diff;
      if (0 === stateFromStores[str].length) {
        diff = tmp2.index + 2 - length;
      } else {
        diff = arr2[arr2.length - 1].index + 2 - length;
      }
      num2 = diff;
    }
    return num2;
  }
};
export const getActiveAgoTimestamp = function getActiveAgoTimestamp(id) {
  let tmp2Result;
  const intl = intl2.intl;
  const formatToPlainString = intl.formatToPlainString;
  const v8N0BHR = intl2.t["8N0BHR"];
  const tmp2 = _modDef4421;
  const extractTimestamp = SnowflakeUtilsDefault.extractTimestamp;
  SnowflakeUtilsDefault;
  let lastMessageIdResult = ReadStateStore.lastMessageId(id);
  if (lastMessageIdResult == null) {
    lastMessageIdResult = id;
  }
  const obj = { timeAgo: tmp2Result.fromNow() };
  tmp2Result = tmp2(extractTimestamp(lastMessageIdResult));
  return formatToPlainString(v8N0BHR, obj);
};
