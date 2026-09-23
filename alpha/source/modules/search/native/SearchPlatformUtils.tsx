// Module ID: 12672
// Function ID: 12673
// Name: SearchPlatformUtils
// Dependencies: [7609, 12673, 8207, 12687, 1074, 12674, 8611, 1385, 6953, 1364, 1875, 4769, 1366, 11162, 576, 2020, 12692, 12695, 12681, 12693, 12708, 12, 558, 2]
// Exports: delayUntilNavigationComplete, getFiles, getGridItemSpacingStyles, getLinks, getMedia, getMediaGridItemStyles, getUrlIcon, performKeyboardAwareNavigation, toSearchBarTag

// Module 12672 (SearchPlatformUtils)
import nativeDefault from "native" /* 576 */;
import URLUtilsDefault from "URLUtils" /* 1366 */;
import LinkIcon from "LinkIcon" /* 4769 */;
import ClydeIcon from "ClydeIcon" /* 11162 */;
import SearchUtils from "SearchUtils" /* 12674 */;
import SearchActionCreatorsDefault from "SearchActionCreators" /* 12681 */;
import search_tracking_TrackingDefault from "search/tracking/Tracking" /* 12692 */;
import SearchPlatformActionCreatorsDefault from "SearchPlatformActionCreators" /* 12695 */;
import IntelligenceSearchActionCreatorsAll from "IntelligenceSearchActionCreators" /* 12708 */;
import SearchMessageStore from "SearchMessageStore" /* 7609 */;
import SearchQueryStore from "SearchQueryStore" /* 12673 */;
import apply_mod from "module_12" /* 12 */;

const require = globalThis.__r;

require = fn;
function performKeyboardAwareNavigation(fn) {
  closure_0 = fn;
  if (obj.getKeyboardIsOpen()) {
    if (tmpResult.isIOS()) {
      const result = tmp(1875).dismissGlobalKeyboard();
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => closure_0(), 100);
      const tmpResult2 = tmp(1875);
    }
  }
  fn();
}
function delayUntilNavigationComplete(arg0) {
  closure_0 = arg0;
  const timerId = setTimeout(() => closure_0(), 200);
}
function getUrlIcon(target) {
  if (null == target) {
    return LinkIcon.LinkIcon;
  } else {
    if (null == obj.safeParseWithQuery(target)) {
      return LinkIcon.LinkIcon;
    } else {
      if (tmp10Result.isDiscordUrl(target)) {
        return ClydeIcon.ClydeIcon;
      } else {
        let num = 0;
        if (0 < length.length) {
          const REGEX = tmp2.REGEX;
          while (null == REGEX.exec(target)) {
            num = num + 1;
          }
          return length[num].Icon;
        }
        return LinkIcon.LinkIcon;
      }
      tmp10Result = tmp10(1366);
    }
    obj = URLUtilsDefault;
    tmp10 = importDefault;
  }
}
function getGridItemBorderStyles(numItems) {
  ({ itemIndex, numColumns } = numItems);
  const rounded = Math.ceil(numItems.numItems / numColumns);
  if (0 === itemIndex) {
    const obj2 = { borderTopLeftRadius: nativeDefault.radii.lg };
    let tmp4 = obj2;
  } else if (itemIndex === numColumns - 1) {
    const obj3 = { borderTopRightRadius: nativeDefault.radii.lg };
    tmp4 = obj3;
  } else {
    if (itemIndex % numColumns == 0) {
      if (tmp2 === tmp3) {
        const obj4 = { borderBottomLeftRadius: nativeDefault.radii.lg };
        tmp4 = obj4;
      }
    }
    if (itemIndex === rounded * numColumns - 1) {
      const obj = { borderBottomRightRadius: nativeDefault.radii.lg };
      tmp4 = obj;
    }
  }
  return tmp4;
}
function getMediaGridItemStyles(numItems) {
  ({ itemIndex, numColumns } = numItems);
  const merged = Object.assign(getGridItemBorderStyles({ itemIndex, numItems: numItems.numItems, numColumns }));
  const result = numItems.spacing * (numColumns - 1) / numColumns;
  const result1 = itemIndex % numColumns;
  if (0 === result1) {
    const obj3 = { marginEnd: result };
    let obj5 = obj3;
  } else if (numColumns - 1 === result1) {
    const obj4 = { marginStart: result };
    obj5 = obj4;
  } else {
    obj5 = { marginHorizontal: result / 2 };
  }
  const merged1 = Object.assign(obj5);
  return {};
}
function getGridItemSpacingStyles(numColumns) {
  numColumns = numColumns.numColumns;
  const result = numColumns.spacing * (numColumns - 1) / numColumns;
  const result1 = numColumns.itemIndex % numColumns;
  if (0 === result1) {
    const obj2 = { marginEnd: result };
    return obj2;
  } else if (numColumns - 1 === result1) {
    const obj3 = { marginStart: result };
    return obj3;
  } else {
    const obj = { marginHorizontal: result / 2 };
    return obj;
  }
}
function toSearchBarTag(id) {
  return { id: id.text, text: id.text };
}
function getInitialFetchLimit(arg0) {
  return Math.min(dependencyMap[arg0], React5);
}
function getNextFetchLimit(arg0) {
  return Math.min(2 * dependencyMap[arg0], React5);
}
function onInitialFetchMessagesSuccess(tabEntries) {
  tabEntries = tabEntries.tabEntries;
  if (tabEntries.every((item) => {
    [, tmp] = item;
    let tmp2 = 0 === tmp.total_results;
    if (!tmp2) {
      tmp2 = null == tmp.total_results;
    }
    return tmp2;
  })) {
    const obj2 = { searchContext: tabEntries.searchContext };
    const result = search_tracking_TrackingDefault.trackSearchEmptyMessageResult(obj2);
  }
}
function onFetchMessagesStart(searchQueryString) {
  searchQueryString = searchQueryString.searchQueryString;
  SearchPlatformActionCreatorsDefault.updateSearchQuery(searchQueryString.searchContext, (setSearchResultsQuery) => setSearchResultsQuery.setSearchResultsQuery(searchQueryString));
}
function fetchInitialMessages(searchContext) {
  _require = searchContext;
  const queryString = SearchQueryStore.getQueryString(searchContext);
  if (isInitialSearchQueryResult) {
    const type = searchContext.type;
    if (constants6.GUILD_CHANNEL !== type) {
    }
  } else {
    const searchTabFetchId = require("SearchUtils").getSearchTabFetchId(searchContext, tmp3[0], queryString);
    if (!SearchMessageStore.getIsFetching(searchTabFetchId)) {
      const result = queryString(12681).clearAllSearchMesssages();
      const obj3 = queryString(12681);
      const tmp9 = queryString;
      const obj5 = { searchContext };
      queryString(12692).trackSearchStarted(obj5);
      const obj4 = queryString(12692);
      const obj7 = {
        searchContext,
        searchTabs: tmp3,
        searchQueryString: queryString,
        getId(MESSAGES) {
              return SearchUtils.getSearchTabFetchId(closure_0, MESSAGES, queryString);
            },
        getLimit: getInitialFetchLimit,
        onFetchStart: onFetchMessagesStart,
        onFetchSuccess: onInitialFetchMessagesSuccess,
        pagination: null,
        trackExactTotalHits: null,
        searchMode: null,
        searchAnalyticsIds: null
      };
      let cursor = SearchMessageStore.getCursor(searchTabFetchId);
      if (cursor == null) {
        cursor = null;
      }
      const obj8 = { cursor };
      obj7.pagination = obj8;
      const obj6 = queryString(12681);
      obj7.trackExactTotalHits = tmp6(2020).SearchResultExactCountEnabled.getSetting();
      obj7.searchMode = constants5.NEWEST;
      const SearchResultExactCountEnabled = tmp6(2020).SearchResultExactCountEnabled;
      obj7.searchAnalyticsIds = tmp6(12674).getSearchAnalyticsIds(searchContext, tmp9(12693));
      const tabMessages = obj6.fetchTabMessages(obj7);
      const tmp6Result = tmp6(12674);
      const obj9 = { searchContext, searchQueryString: queryString };
      const answer = IntelligenceSearchActionCreatorsAll.fetchAnswer(obj9);
    }
  }
}
function syncAutocomplete(searchContext) {
  const queryString = SearchQueryStore.getQueryString(searchContext, true);
  const tokenizeQueryResult = SearchUtils.tokenizeQuery(queryString);
  const selectionScope = SearchUtils.getSelectionScope(tokenizeQueryResult, queryString.length - 1, queryString.length - 1);
  const result = SearchActionCreatorsDefault.updateAutocompleteQuery({ searchContext, tokens: tokenizeQueryResult, cursorScope: selectionScope, queryString });
}
const SearchConstants = fn(8207);
({ CHANNEL_SEARCH_INITIAL_MESSAGE_TABS: metroRequire, MAX_SEARCH_RESULTS_LIMIT: closure_7, MESSAGE_SEARCH_RESULT_TABS: closure_8, SEARCH_INITIAL_MESSAGE_TABS: closure_9, SEARCH_TABS_TO_SEARCH_QUERY_LIMITS: c10, SearchFileTypes: closure_11, SearchLinkTypes: closure_12, SearchMediaTypes: map1 } = SearchConstants);
const SearchPlatformConstants = fn(12687);
({ PLATFORM_REGEX_ICON_PAIRS: closure_14, SEARCH_TEXT_INPUT_DEBOUNCE_TIME } = SearchPlatformConstants);
const Constants = fn(1074);
({ MessageFlags: closure_15, SearchModes: closure_16, SearchTypes: closure_17 } = Constants);
let obj = { performKeyboardAwareNavigation, delayUntilNavigationComplete, getUrlIcon, getGridItemBorderStyles, getMediaGridItemStyles, getGridItemSpacingStyles, toSearchBarTag, fetchInitialMessages, fetchInitialMessagesDebounced: null, fetchNextMessages: null, syncAutocomplete: null, syncAutocompleteDebounced: null, navigateToSearchWithPrefetch: null, subscribeSearchQueryState: null, subscribeTextInputValue: null };
let apply = apply_mod;
obj.fetchInitialMessagesDebounced = apply.debounce(fetchInitialMessages, SEARCH_TEXT_INPUT_DEBOUNCE_TIME);
obj.fetchNextMessages = function fetchNextMessages(searchContext, tab, onFetchSuccess) {
  _require = searchContext;
  const queryString = SearchQueryStore.getQueryString(searchContext);
  const searchTabFetchId = require("SearchUtils").getSearchTabFetchId(searchContext, tab, queryString);
  const bound = Math.min(dependencyMap[tab], closure_7);
  const obj = require("SearchUtils");
  const searchTabFetchId1 = require("SearchUtils").getSearchTabFetchId(searchContext, tab, queryString);
  if (!SearchMessageStore.getIsInitialFetchComplete(searchTabFetchId1)) {
    const isFetching = obj3.getIsFetching(searchTabFetchId);
    let flag = !obj3.getIsInitialFetchComplete(searchTabFetchId);
    if (!flag) {
      flag = isFetching;
    }
    let tabMessages = !flag;
    if (!flag) {
      const obj5 = { searchContext, searchTabs: null, searchQueryString: null, getLimit: null, getId: null, onFetchStart: null, onFetchSuccess: null, pagination: null, trackExactTotalHits: null, searchMode: null, searchAnalyticsIds: null };
      const items = [tab];
      obj5.searchTabs = items;
      obj5.searchQueryString = queryString;
      obj5.getLimit = getNextFetchLimit;
      obj5.getId = function getId(MESSAGES) {
        return SearchUtils.getSearchTabFetchId(closure_0, MESSAGES, queryString);
      };
      obj5.onFetchStart = onFetchMessagesStart;
      obj5.onFetchSuccess = onFetchSuccess;
      let cursor = obj3.getCursor(searchTabFetchId);
      if (cursor == null) {
        cursor = null;
      }
      const obj6 = { cursor };
      obj5.pagination = obj6;
      const obj4 = queryString(12681);
      const tmp17 = queryString;
      obj5.trackExactTotalHits = tmp2(2020).SearchResultExactCountEnabled.getSetting();
      obj5.searchMode = constants5.NEWEST;
      const SearchResultExactCountEnabled2 = tmp2(2020).SearchResultExactCountEnabled;
      obj5.searchAnalyticsIds = tmp2(12674).getSearchAnalyticsIds(searchContext, tmp17(12693));
      tabMessages = obj4.fetchTabMessages(obj5);
      const tmp2Result = tmp2(12674);
    }
    return tabMessages;
  } else {
    const cursor1 = obj3.getCursor(searchTabFetchId1);
    const totalCount = obj3.getTotalCount(searchTabFetchId1);
    let messages = obj3.getMessages(searchTabFetchId1);
    if (SearchResultExactCountEnabled.getSetting()) {
      let tmp12 = null != cursor1 && null != totalCount && null != messages;
      if (tmp12) {
        messages = messages.length;
        tmp12 = messages < totalCount;
      }
    } else if (null == totalCount) {
      const tmp10 = null != cursor1;
    }
    SearchResultExactCountEnabled = tmp2(2020).SearchResultExactCountEnabled;
  }
};
obj.syncAutocomplete = syncAutocomplete;
let apply = apply_mod;
obj.syncAutocompleteDebounced = apply.debounce(syncAutocomplete, SEARCH_TEXT_INPUT_DEBOUNCE_TIME);
obj.navigateToSearchWithPrefetch = function navigateToSearchWithPrefetch(rootNavigationRef, searchContext) {
  const result = SearchActionCreatorsDefault.initializeAutocomplete(searchContext);
  const result1 = SearchPlatformActionCreatorsDefault.initializeSearchQuery(searchContext);
  fetchInitialMessages(searchContext);
  rootNavigationRef.navigate("search", { searchContext });
};
obj.subscribeSearchQueryState = function subscribeSearchQueryState(searchContext, fn, fn2, arg3) {
  closure_0 = searchContext;
  closure_1 = fn;
  closure_2 = fn2;
  let tmp = arg3;
  function callback() {
    const tmp = f95416(SearchQueryStore.getManager(closure_0));
    if (null == closure_3) {
      closure_3 = tmp;
      f95417(tmp, closure_3);
    }
  }
  const tmp2 = fn(SearchQueryStore.getManager(searchContext));
  closure_3 = tmp2;
  if (arg3) {
    tmp = null != tmp2;
  }
  if (tmp) {
    fn2(closure_3, undefined);
  }
  SearchQueryStore.addChangeListener(callback);
  return () => SearchQueryStore.removeChangeListener(callback);
};
obj.subscribeTextInputValue = function subscribeTextInputValue(searchContext, debounceResult, arg2) {
  searchContext = debounceResult;
  let flag = arg2;
  const f95416 = (getTextInputValue) => ({ textInputValue: getTextInputValue.getTextInputValue(), textInputChangedFromInput: getTextInputValue.getTextValueChangedFromInput() });
  const f95417 = (textInputValue, textInputValue2) => {
    textInputValue = undefined;
    if (textInputValue2 != null) {
      textInputValue = textInputValue2.textInputValue;
    }
    searchContext(textInputValue.textInputValue, textInputValue, textInputValue.textInputChangedFromInput);
  };
  function callback() {
    const tmp = f95416(SearchQueryStore.getManager(closure_0));
    if (null == closure_3) {
      closure_3 = tmp;
      f95417(tmp, closure_3);
    }
  }
  const manager = SearchQueryStore.getManager(searchContext);
  const obj2 = { textInputValue: manager.getTextInputValue(), textInputChangedFromInput: manager.getTextValueChangedFromInput() };
  closure_3 = obj2;
  if (arg2) {
    flag = true;
  }
  if (flag) {
    debounceResult(obj2.textInputValue, undefined, obj2.textInputChangedFromInput);
  }
  SearchQueryStore.addChangeListener(callback);
  return () => SearchQueryStore.removeChangeListener(callback);
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/search/native/SearchPlatformUtils.tsx");

export default obj;
export const getMedia = function getMedia(searchContext, items1) {
  guildIdFromSearchContext = guildIdFromSearchContext(12674).getGuildIdFromSearchContext(searchContext);
  const items = [];
  let item = items1.forEach((getContentMessage) => {
    closure_0 = getContentMessage;
    mediaIndex = 0;
    const contentMessage = getContentMessage.getContentMessage();
    const attachments = contentMessage.attachments;
    if (attachments != null) {
      const item = attachments.forEach((attachment, index) => {
        if (!obj.isThumbnailAttachment(attachment)) {
          if (tmpResult.isValidImageAttachment(attachment)) {
            const tmpResult3 = tmp(8611);
            const result = tmpResult3.extractMediaFromAttachment(attachment, closure_0, index, guildIdFromSearchContext);
            if (null != result) {
              const obj2 = { type: constants3.ATTACHMENT, attachment, messageId: null, channelId: null, author: null, mediaIndex: null, sources: null };
              ({ id: obj5.messageId, channel_id: obj5.channelId, author: obj5.author } = tmp4);
              obj2.mediaIndex = mediaIndex;
              obj2.sources = result;
              items.push(obj2);
              mediaIndex = mediaIndex + 1;
            }
            tmp4 = closure_0;
          } else {
            const tmpResult4 = tmp(8611);
          }
          tmpResult = tmp(8611);
        }
      });
    }
    const embeds = contentMessage.embeds;
    if (embeds != null) {
      const item1 = embeds.forEach((embed, index) => {
        if (obj.isValidImageEmbed(embed)) {
          const tmpResult = tmp(8611);
          const result = tmpResult.extractMediaFromEmbed(embed, closure_0, contentMessage, index, guildIdFromSearchContext);
          if (null != result) {
            const obj2 = { type: constants3.EMBED, embed, messageId: null, channelId: null, author: null, mediaIndex: null, sources: null };
            ({ id: obj4.messageId, channel_id: obj4.channelId, author: obj4.author } = tmp4);
            obj2.mediaIndex = mediaIndex;
            obj2.sources = result;
            items.push(obj2);
            mediaIndex = mediaIndex + 1;
          }
          tmp4 = closure_0;
        } else {
          const tmpResult2 = tmp(8611);
        }
      });
    }
    let result = guildIdFromSearchContext(8611).extractMediaFromMessageComponents(getContentMessage, contentMessage, closure_0);
    const iter = result[Symbol.iterator]();
    const obj = guildIdFromSearchContext(8611);
    while (iter !== undefined) {
      let obj6 = { type: null, messageId: null, channelId: null, author: null, mediaIndex: null, sources: null, unfurledMediaItem: null };
      obj6.type = constants.COMPONENT;
      ({ id: obj2.messageId, channel_id: obj2.channelId, author: obj2.author } = getContentMessage);
      obj6.mediaIndex = mediaIndex;
      ({ sources: obj2.sources, unfurledMediaItem: obj2.unfurledMediaItem } = nextResult);
      let arr = mediaIndex.push(obj6);
      mediaIndex = mediaIndex + 1;
      continue;
    }
    nextResult = iter.next();
    if (obj3.hasFlag(contentMessage.flags, constants2.IS_VOICE_MESSAGE)) {
      const obj7 = { type: constants.AUDIO, messageId: null, channelId: null, author: null, mediaIndex: null };
      ({ id: obj4.messageId, channel_id: obj4.channelId, author: obj4.author } = getContentMessage);
      obj7.mediaIndex = mediaIndex;
      mediaIndex.push(obj7);
      mediaIndex = mediaIndex + 1;
    }
  });
  return items;
};
export const getFiles = function getFiles(getContentMessage) {
  const items = [];
  const contentMessage = getContentMessage.getContentMessage();
  const attachments = contentMessage.attachments;
  if (attachments != null) {
    const item = attachments.forEach((attachment, fileIndex) => {
      if (!obj.isValidImageAttachment(attachment)) {
        if (!tmpResult.isValidVideoAttachment(attachment)) {
          const push = items.push;
          const obj2 = { type: null, messageId: null, channelId: null, author: null, fileIndex: null, attachment: null };
          if (tmpResult2.hasFlag(contentMessage.flags, constants4.IS_VOICE_MESSAGE)) {
            obj2.type = tmp6.AUDIO;
            ({ id: obj4.messageId, channel_id: obj4.channelId, author: obj4.author } = getContentMessage);
            obj2.fileIndex = fileIndex;
            obj2.attachment = attachment;
            push(obj2);
          } else {
            obj2.type = tmp6.ATTACHMENT;
            ({ id: obj4.messageId, channel_id: obj4.channelId, author: obj4.author } = getContentMessage);
            obj2.fileIndex = fileIndex;
            obj2.attachment = attachment;
            push(obj2);
          }
          tmpResult2 = tmp(1385);
        }
      }
      items.push({ type: constants.MEDIA_ATTACHMENT, messageId: getContentMessage.id, channelId: getContentMessage.channel_id, author: getContentMessage.author, fileIndex, attachment });
    });
  }
  return items;
};
export const getLinks = function getLinks(searchContext, getContentMessage) {
  _require = getContentMessage;
  const guildIdFromSearchContext = require("SearchUtils").getGuildIdFromSearchContext(searchContext);
  const items = [];
  contentMessage = getContentMessage.getContentMessage();
  let linkIndex = 0;
  const embeds = contentMessage.embeds;
  if (embeds != null) {
    const item = embeds.forEach((embed, index) => {
      if (obj.isValidImageEmbed(embed)) {
        const tmpResult = tmp(8611);
        const result = tmpResult.extractMediaFromEmbed(embed, closure_0, contentMessage, index, guildIdFromSearchContext);
        if (null != result) {
          const obj2 = { type: constants2.EMBED, messageId: null, channelId: null, author: null, linkIndex: null, sources: null, embed: null };
          ({ id: obj4.messageId, channel_id: obj4.channelId, author: obj4.author } = tmp4);
          obj2.linkIndex = linkIndex;
          obj2.sources = result;
          obj2.embed = embed;
          items.push(obj2);
          linkIndex = linkIndex + 1;
        }
        tmp4 = closure_0;
      } else {
        const tmpResult2 = tmp(8611);
      }
    });
  }
  if (0 === items.length) {
    const obj3 = { type: constants2.TEXT, messageId: null, channelId: null, author: null, linkIndex: 0 };
    ({ id: obj2.messageId, channel_id: obj2.channelId, author: obj2.author } = getContentMessage);
    items.push(obj3);
  }
  return items;
};
export { performKeyboardAwareNavigation };
export { delayUntilNavigationComplete };
export { getUrlIcon };
export { getGridItemBorderStyles };
export { getMediaGridItemStyles };
export { getGridItemSpacingStyles };
export { toSearchBarTag };
