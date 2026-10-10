// Module ID: 12034
// Function ID: 12035
// Name: SearchPlatformUtils
// Dependencies: [12035, 6062, 12048, 9312, 12050, 1085, 12036, 12041, 8392, 1403, 6304, 1382, 1894, 5038, 1384, 10171, 587, 2041, 12055, 12059, 12068, 12056, 12073, 12, 12037, 12075, 568, 2]
// Exports: delayUntilNavigationComplete, getFiles, getGridItemSpacingStyles, getLinks, getMedia, getMediaGridItemStyles, getUrlIcon, performKeyboardAwareNavigation, toSearchBarTag

// Module 12034 (SearchPlatformUtils)
import nativeDefault from "native" /* 587 */;
import PlatformUtils from "PlatformUtils" /* 1382 */;
import URLUtilsDefault from "URLUtils" /* 1384 */;
import FlagUtils from "FlagUtils" /* 1403 */;
import KeyboardManagerUtils from "KeyboardManagerUtils" /* 1894 */;
import LinkIcon from "LinkIcon" /* 5038 */;
import useKeyboardIsOpen from "useKeyboardIsOpen" /* 6304 */;
import MediaSourceUtil from "MediaSourceUtil" /* 8392 */;
import ClydeIcon from "ClydeIcon" /* 10171 */;
import SmartSearchConstants from "SmartSearchConstants" /* 12036 */;
import SmartSearchUtils from "SmartSearchUtils" /* 12037 */;
import SearchUtils from "SearchUtils" /* 12041 */;
import search_tracking_TrackingDefault from "search/tracking/Tracking" /* 12055 */;
import SearchPlatformActionCreatorsDefault from "SearchPlatformActionCreators" /* 12059 */;
import SearchActionCreatorsDefault from "SearchActionCreators" /* 12068 */;
import SmartSearchActionCreatorsAll from "SmartSearchActionCreators" /* 12073 */;
import SuggestedSearchStore from "SuggestedSearchStore" /* 12035 */;
import SearchMessageStore from "SearchMessageStore" /* 6062 */;
import SearchQueryStore from "SearchQueryStore" /* 12048 */;
import SearchConstants from "SearchConstants" /* 9312 */;
import SearchPlatformConstants from "SearchPlatformConstants" /* 12050 */;
import Constants from "Constants" /* 1085 */;
import "module_12";
import module_12_mod from "module_12" /* 12 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, mediaIndex;

let SEARCH_TEXT_INPUT_DEBOUNCE_TIME;
let c10;
let c9;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let map1;
let metroImportAll;
let metroImportDefault;
let module_12;
let tmp6;
let unpackModuleId;
const SuggestedSearchActionCreators = tmp6(12075);
function performKeyboardAwareNavigation(fn) {
  let closure_0 = fn;
  const obj = useKeyboardIsOpen;
  if (obj.getKeyboardIsOpen()) {
    const tmpResult = PlatformUtils;
    if (tmpResult.isIOS()) {
      const tmpResult2 = KeyboardManagerUtils;
      const result = tmpResult2.dismissGlobalKeyboard();
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => closure_0(), 100);
    }
  }
  fn();
}
function delayUntilNavigationComplete(arg0) {
  let closure_0 = arg0;
  const timerId = setTimeout(() => closure_0(), 200);
}
function getUrlIcon(target) {
  if (null == target) {
    return LinkIcon.LinkIcon;
  } else {
    const obj = URLUtilsDefault;
    const tmp10 = importDefault;
    if (null == obj.safeParseWithQuery(target)) {
      return LinkIcon.LinkIcon;
    } else {
      const tmp10Result = tmp10(1384);
      if (tmp10Result.isDiscordUrl(target)) {
        return ClydeIcon.ClydeIcon;
      } else {
        let num = 0;
        if (0 < length.length) {
          const REGEX = tmp2.REGEX;
          const Icon = tmp2.Icon;
          while (null == REGEX.exec(target)) {
            num = num + 1;
          }
          return Icon;
        }
        return LinkIcon.LinkIcon;
      }
    }
  }
}
function getGridItemBorderStyles(numItems) {
  let itemIndex;
  let numColumns;
  let tmp4;
  ({ itemIndex, numColumns } = numItems);
  const rounded = Math.ceil(numItems.numItems / numColumns);
  if (0 === itemIndex) {
    tmp4 = { borderTopLeftRadius: nativeDefault.radii.lg };
    const obj2 = { borderTopLeftRadius: nativeDefault.radii.lg };
  } else if (itemIndex === numColumns - 1) {
    tmp4 = { borderTopRightRadius: nativeDefault.radii.lg };
    const obj3 = { borderTopRightRadius: nativeDefault.radii.lg };
  } else {
    if (itemIndex % numColumns == 0) {
      if (tmp2 === tmp3) {
        tmp4 = { borderBottomLeftRadius: nativeDefault.radii.lg };
        const obj4 = { borderBottomLeftRadius: nativeDefault.radii.lg };
      }
    }
    if (itemIndex === rounded * numColumns - 1) {
      tmp4 = { borderBottomRightRadius: nativeDefault.radii.lg };
      const obj = { borderBottomRightRadius: nativeDefault.radii.lg };
    }
  }
  return tmp4;
}
function getMediaGridItemStyles(numItems) {
  let itemIndex;
  let numColumns;
  let obj5;
  ({ itemIndex, numColumns } = numItems);
  const spacing = numItems.spacing;
  const obj = {};
  const obj2 = { itemIndex, numItems: numItems.numItems, numColumns };
  const merged = Object.assign(getGridItemBorderStyles(obj2));
  const result = spacing * (numColumns - 1) / numColumns;
  const result1 = itemIndex % numColumns;
  if (0 === result1) {
    obj5 = { marginEnd: result };
    const obj3 = { marginEnd: result };
  } else if (numColumns - 1 === result1) {
    obj5 = { marginStart: result };
    const obj4 = { marginStart: result };
  } else {
    obj5 = { marginHorizontal: result / 2 };
  }
  const merged1 = Object.assign(obj5);
  return obj;
}
function getGridItemSpacingStyles(numColumns) {
  numColumns = numColumns.numColumns;
  const result = numColumns.spacing * (numColumns - 1) / numColumns;
  const result1 = numColumns.itemIndex % numColumns;
  if (0 === result1) {
    return { marginEnd: result };
  } else if (numColumns - 1 === result1) {
    return { marginStart: result };
  } else {
    return { marginHorizontal: result / 2 };
  }
}
function toSearchBarTag(id) {
  return { id: id.text, text: id.text };
}
function getInitialFetchLimit(arg0) {
  return Math.min(unpackModuleId[arg0], metroImportAll);
}
function getNextFetchLimit(arg0) {
  return Math.min(2 * unpackModuleId[arg0], metroImportAll);
}
function onInitialFetchMessagesSuccess(tabEntries) {
  tabEntries = tabEntries.tabEntries;
  const searchContext = tabEntries.searchContext;
  if (tabEntries.every((item) => {
    let tmp;
    [, tmp] = item;
    return 0 === tmp.total_results || null == tmp.total_results;
  })) {
    const tmp = importDefault;
    const obj2 = { searchContext };
    const obj = search_tracking_TrackingDefault;
    const result = obj.trackSearchEmptyMessageResult(obj2);
  }
}
function onFetchMessagesStart(searchQueryString) {
  searchQueryString = searchQueryString.searchQueryString;
  const searchContext = searchQueryString.searchContext;
  const obj = SearchPlatformActionCreatorsDefault;
  obj.updateSearchQuery(searchContext, (setSearchResultsQuery) => setSearchResultsQuery.setSearchResultsQuery(searchQueryString));
}
function fetchInitialMessages(searchContext) {
  let SearchResultExactCountEnabled;
  let obj7;
  let tmp3;
  let tmp5Result;
  _require = searchContext;
  const isInitialSearchQueryResult = SearchQueryStore.isInitialSearchQuery(searchContext);
  const queryString = SearchQueryStore.getQueryString(searchContext);
  if (isInitialSearchQueryResult) {
    const type = searchContext.type;
    if (constants6.GUILD_CHANNEL !== type) {
      let tmp4;
      if (constants6.CHANNEL !== type) {
        tmp4 = closure_10;
      }
      tmp3 = tmp4;
    }
    tmp4 = closure_7;
  } else {
    tmp3 = closure_9;
  }
  let obj = require("SearchUtils");
  const searchTabFetchId = obj.getSearchTabFetchId(searchContext, tmp3[0], queryString);
  const obj2 = SearchMessageStore;
  if (!SearchMessageStore.getIsFetching(searchTabFetchId)) {
    const obj3 = queryString(12068);
    const result = obj3.clearAllSearchMesssages();
    const obj5 = { searchContext };
    const obj4 = queryString(12055);
    obj4.trackSearchStarted(obj5);
    const obj6 = {
      searchContext,
      searchTabs: tmp3,
      searchQueryString: queryString,
      getId(tab) {
          const obj = SearchUtils;
          return obj.getSearchTabFetchId(searchContext, tab, queryString);
        },
      getLimit: getInitialFetchLimit,
      onFetchStart: onFetchMessagesStart,
      onFetchSuccess: onInitialFetchMessagesSuccess,
      pagination: obj7,
      trackExactTotalHits: SearchResultExactCountEnabled.getSetting(),
      searchMode: constants5.NEWEST,
      searchAnalyticsIds: tmp5Result.getSearchAnalyticsIds(searchContext, queryString(12056))
    };
    const fetchTabMessages = queryString(12068).fetchTabMessages;
    queryString(12068);
    let cursor = obj2.getCursor(searchTabFetchId);
    if (cursor == null) {
      cursor = null;
    }
    obj7 = { cursor };
    SearchResultExactCountEnabled = require("UserSettings").SearchResultExactCountEnabled;
    tmp5Result = require("SearchUtils");
    const tabMessages = fetchTabMessages(obj6);
    const obj8 = { searchContext, searchQueryString: queryString, SearchSessionAnalyticsManager: queryString(12056) };
    const fetchAnswer = SmartSearchActionCreatorsAll.fetchAnswer;
    SmartSearchActionCreatorsAll;
    const answer = fetchAnswer(obj8);
  }
}
function syncAutocomplete(searchContext) {
  const queryString = SearchQueryStore.getQueryString(searchContext, true);
  const obj = SearchUtils;
  const tokenizeQueryResult = obj.tokenizeQuery(queryString);
  const obj2 = SearchUtils;
  const selectionScope = obj2.getSelectionScope(tokenizeQueryResult, queryString.length - 1, queryString.length - 1);
  const obj3 = SearchActionCreatorsDefault;
  const obj4 = { searchContext, tokens: tokenizeQueryResult, cursorScope: selectionScope, queryString };
  const result = obj3.updateAutocompleteQuery(obj4);
}
({ CHANNEL_SEARCH_INITIAL_MESSAGE_TABS: metroImportDefault, MAX_SEARCH_RESULTS_LIMIT: metroImportAll, MESSAGE_SEARCH_RESULT_TABS: c9, SEARCH_INITIAL_MESSAGE_TABS: c10, SEARCH_TABS_TO_SEARCH_QUERY_LIMITS: unpackModuleId, SearchFileTypes: closure_12, SearchLinkTypes: map1, SearchMediaTypes: closure_14 } = SearchConstants);
({ PLATFORM_REGEX_ICON_PAIRS: closure_15, SEARCH_TEXT_INPUT_DEBOUNCE_TIME } = SearchPlatformConstants);
({ MessageFlags: closure_16, SearchModes: closure_17, SearchTypes: closure_18 } = Constants);
let closure_19 = SmartSearchConstants.SUGGESTED_SEARCHES_WINDOW_SIZE;
let obj = {
  performKeyboardAwareNavigation,
  delayUntilNavigationComplete,
  getUrlIcon,
  getGridItemBorderStyles,
  getMediaGridItemStyles,
  getGridItemSpacingStyles,
  toSearchBarTag,
  fetchInitialMessages,
  fetchInitialMessagesDebounced: module_12.debounce(fetchInitialMessages, SEARCH_TEXT_INPUT_DEBOUNCE_TIME),
  fetchNextMessages(searchContext, tab, onFetchSuccess) {
    let SearchResultExactCountEnabled2;
    let items;
    let obj5;
    let tmp17;
    let tmp2Result;
    _require = searchContext;
    const queryString = SearchQueryStore.getQueryString(searchContext);
    let obj = require("SearchUtils");
    const searchTabFetchId = obj.getSearchTabFetchId(searchContext, tab, queryString);
    const bound = Math.min(closure_11[tab], closure_8);
    const obj2 = require("SearchUtils");
    const searchTabFetchId1 = obj2.getSearchTabFetchId(searchContext, tab, queryString);
    let flag = true;
    if (SearchMessageStore.getIsInitialFetchComplete(searchTabFetchId1)) {
      let tmp10;
      const cursor = obj3.getCursor(searchTabFetchId1);
      const totalCount = obj3.getTotalCount(searchTabFetchId1);
      const messages = obj3.getMessages(searchTabFetchId1);
      const SearchResultExactCountEnabled = require("UserSettings").SearchResultExactCountEnabled;
      if (SearchResultExactCountEnabled.getSetting()) {
        tmp10 = null != cursor && null != totalCount && null != messages && messages.length < totalCount;
      } else {
        tmp10 = null != cursor;
      }
      flag = tmp10;
    }
    const isFetching = obj3.getIsFetching(searchTabFetchId);
    let tmp14 = !flag;
    if (flag) {
      tmp14 = !obj3.getIsInitialFetchComplete(searchTabFetchId);
    }
    if (!tmp14) {
      tmp14 = isFetching;
    }
    let tabMessages = !tmp14;
    if (tabMessages) {
      const obj4 = {
        searchContext,
        searchTabs: items,
        searchQueryString: queryString,
        getLimit: getNextFetchLimit,
        getId(tab) {
            const obj = SearchUtils;
            return obj.getSearchTabFetchId(searchContext, tab, queryString);
          },
        onFetchStart: onFetchMessagesStart,
        onFetchSuccess,
        pagination: obj5,
        trackExactTotalHits: SearchResultExactCountEnabled2.getSetting(),
        searchMode: constants5.NEWEST,
        searchAnalyticsIds: tmp2Result.getSearchAnalyticsIds(searchContext, tmp17(12056))
      };
      items = [tab];
      const fetchTabMessages = queryString(12068).fetchTabMessages;
      queryString(12068);
      let cursor1 = obj3.getCursor(searchTabFetchId);
      tmp17 = queryString;
      if (cursor1 == null) {
        cursor1 = null;
      }
      obj5 = { cursor: cursor1 };
      SearchResultExactCountEnabled2 = require("UserSettings").SearchResultExactCountEnabled;
      tmp2Result = require("SearchUtils");
      tabMessages = fetchTabMessages(obj4);
    }
    return tabMessages;
  },
  syncAutocomplete,
  syncAutocompleteDebounced: module_12.debounce(syncAutocomplete, SEARCH_TEXT_INPUT_DEBOUNCE_TIME),
  navigateToSearchWithPrefetch(rootNavigationRef, guildSearchContext) {
    const obj = SearchActionCreatorsDefault;
    const result = obj.initializeAutocomplete(guildSearchContext);
    const obj2 = SearchPlatformActionCreatorsDefault;
    const result1 = obj2.initializeSearchQuery(guildSearchContext);
    fetchInitialMessages(guildSearchContext);
    const obj3 = SmartSearchUtils;
    const smartSearchQuery = obj3.getSmartSearchQuery(guildSearchContext, "");
    if (null != smartSearchQuery) {
      const hasSuggestionsResult = SuggestedSearchStore.hasSuggestions(smartSearchQuery);
      const tmp6Result = SuggestedSearchActionCreators;
      if (hasSuggestionsResult) {
        const result2 = tmp6Result.advanceSuggestedSearches(smartSearchQuery, tmp(12056), closure_19);
      } else {
        const initialSuggestedSearches = tmp6Result.fetchInitialSuggestedSearches(smartSearchQuery, tmp(12056));
      }
    }
    const obj4 = { searchContext: guildSearchContext };
    rootNavigationRef.navigate("search", obj4);
  },
  subscribeSearchQueryState(searchContext, fn, fn2, arg3) {
    let closure_0 = searchContext;
    let closure_1 = fn;
    let closure_2 = fn2;
    let tmp = arg3;
    function callback() {
      const tmp = f110626(SearchQueryStore.getManager(searchContext));
      if (null == closure_3) {
        closure_3 = tmp;
        f110627(tmp, closure_3);
      }
    }
    const tmp2 = fn(SearchQueryStore.getManager(searchContext));
    let closure_3 = tmp2;
    const obj = SearchQueryStore;
    if (arg3) {
      tmp = null != tmp2;
    }
    if (tmp) {
      fn2(closure_3, undefined);
    }
    obj.addChangeListener(callback);
    return () => SearchQueryStore.removeChangeListener(callback);
  },
  subscribeTextInputValue(searchContext, debounceResult, arg2) {
    let flag = arg2;
    let closure_0 = searchContext;
    const f110626 = (getTextInputValue) => {
      const obj = { textInputValue: getTextInputValue.getTextInputValue(), textInputChangedFromInput: getTextInputValue.getTextValueChangedFromInput() };
      return obj;
    };
    const f110627 = (textInputValue, textInputValue2) => {
      let textInputValue1;
      textInputValue = textInputValue.textInputValue;
      const tmp = closure_0;
      if (textInputValue2 != null) {
        textInputValue1 = textInputValue2.textInputValue;
      }
      tmp(textInputValue, textInputValue1, textInputValue.textInputChangedFromInput);
    };
    function callback() {
      const tmp = f110626(SearchQueryStore.getManager(searchContext));
      if (null == closure_3) {
        closure_3 = tmp;
        f110627(tmp, closure_3);
      }
    }
    let obj = SearchQueryStore;
    const manager = SearchQueryStore.getManager(searchContext);
    const obj2 = { textInputValue: manager.getTextInputValue(), textInputChangedFromInput: manager.getTextValueChangedFromInput() };
    let closure_3 = obj2;
    if (arg2) {
      flag = true;
    }
    if (flag) {
      let tmp = debounceResult(obj2.textInputValue, undefined, obj2.textInputChangedFromInput);
    }
    obj.addChangeListener(callback);
    return () => SearchQueryStore.removeChangeListener(callback);
  }
};
module_12 = module_12_mod;
let result = size.fileFinishedImporting("modules/search/native/SearchPlatformUtils.tsx");

export default obj;
export const getMedia = function getMedia(searchContext, items1) {
  let guildIdFromSearchContext;
  let obj = guildIdFromSearchContext(12041);
  guildIdFromSearchContext = obj.getGuildIdFromSearchContext(searchContext);
  const items = [];
  let item = items1.forEach((getContentMessage) => {
    let closure_0 = getContentMessage;
    mediaIndex = 0;
    const contentMessage = getContentMessage.getContentMessage();
    const attachments = contentMessage.attachments;
    if (attachments != null) {
      const item = attachments.forEach((attachment, index) => {
        const obj = MediaSourceUtil;
        if (!obj.isThumbnailAttachment(attachment)) {
          const tmpResult = MediaSourceUtil;
          if (tmpResult.isValidImageAttachment(attachment)) {
            const tmpResult3 = MediaSourceUtil;
            const result = tmpResult3.extractMediaFromAttachment(attachment, getContentMessage, index, guildIdFromSearchContext);
            const tmp4 = getContentMessage;
            if (null != result) {
              const obj2 = { type: constants.ATTACHMENT, attachment, messageId: null, channelId: null, author: null, mediaIndex, sources: result };
              ({ id: obj5.messageId, channel_id: obj5.channelId, author: obj5.author } = tmp4);
              items.push(obj2);
              mediaIndex = mediaIndex + 1;
            }
          } else {
            MediaSourceUtil;
          }
        }
      });
    }
    const embeds = contentMessage.embeds;
    if (embeds != null) {
      const item1 = embeds.forEach((embed, index) => {
        const obj = MediaSourceUtil;
        if (obj.isValidImageEmbed(embed)) {
          const tmpResult = MediaSourceUtil;
          const result = tmpResult.extractMediaFromEmbed(embed, getContentMessage, contentMessage, index, guildIdFromSearchContext);
          const tmp4 = getContentMessage;
          if (null != result) {
            const obj2 = { type: constants.EMBED, embed, messageId: null, channelId: null, author: null, mediaIndex, sources: result };
            ({ id: obj4.messageId, channel_id: obj4.channelId, author: obj4.author } = tmp4);
            items.push(obj2);
            mediaIndex = mediaIndex + 1;
          }
        } else {
          MediaSourceUtil;
        }
      });
    }
    let obj = guildIdFromSearchContext(dependencyMap[8]);
    let result = obj.extractMediaFromMessageComponents(getContentMessage, contentMessage, closure_0);
    const iter = result[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let obj6 = { type: constants.COMPONENT, messageId: null, channelId: null, author: null, mediaIndex, sources: null, unfurledMediaItem: null };
      ({ id: obj2.messageId, channel_id: obj2.channelId, author: obj2.author } = getContentMessage);
      ({ sources: obj2.sources, unfurledMediaItem: obj2.unfurledMediaItem } = nextResult);
      let arr = mediaIndex.push(obj6);
      mediaIndex = mediaIndex + 1;
      continue;
    }
    const obj3 = guildIdFromSearchContext(dependencyMap[9]);
    if (obj3.hasFlag(contentMessage.flags, constants2.IS_VOICE_MESSAGE)) {
      const obj7 = { type: constants.AUDIO, messageId: null, channelId: null, author: null, mediaIndex };
      ({ id: obj4.messageId, channel_id: obj4.channelId, author: obj4.author } = getContentMessage);
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
      const obj = MediaSourceUtil;
      if (!obj.isValidImageAttachment(attachment)) {
        const tmpResult = MediaSourceUtil;
        if (!tmpResult.isValidVideoAttachment(attachment)) {
          const push = items.push;
          const obj2 = { type: null, messageId: null, channelId: null, author: null, fileIndex: null, attachment: null };
          const tmpResult2 = FlagUtils;
          if (tmpResult2.hasFlag(contentMessage.flags, constants2.IS_VOICE_MESSAGE)) {
            obj2.type = constants.AUDIO;
            ({ id: obj4.messageId, channel_id: obj4.channelId, author: obj4.author } = getContentMessage);
            obj2.fileIndex = fileIndex;
            obj2.attachment = attachment;
            push(obj2);
          } else {
            obj2.type = constants.ATTACHMENT;
            ({ id: obj4.messageId, channel_id: obj4.channelId, author: obj4.author } = getContentMessage);
            obj2.fileIndex = fileIndex;
            obj2.attachment = attachment;
            push(obj2);
          }
        }
      }
      const obj3 = { type: constants.MEDIA_ATTACHMENT, messageId: getContentMessage.id, channelId: getContentMessage.channel_id, author: getContentMessage.author, fileIndex, attachment };
      items.push(obj3);
    });
  }
  return items;
};
export const getLinks = function getLinks(searchContext, getContentMessage) {
  let contentMessage;
  _require = getContentMessage;
  let obj = require("SearchUtils");
  const guildIdFromSearchContext = obj.getGuildIdFromSearchContext(searchContext);
  const items = [];
  contentMessage = getContentMessage.getContentMessage();
  let linkIndex = 0;
  const embeds = contentMessage.embeds;
  if (embeds != null) {
    const item = embeds.forEach((embed, index) => {
      const obj = MediaSourceUtil;
      if (obj.isValidImageEmbed(embed)) {
        const tmpResult = MediaSourceUtil;
        const result = tmpResult.extractMediaFromEmbed(embed, getContentMessage, contentMessage, index, guildIdFromSearchContext);
        const tmp4 = getContentMessage;
        if (null != result) {
          const obj2 = { type: map1.EMBED, messageId: null, channelId: null, author: null, linkIndex, sources: result, embed };
          ({ id: obj4.messageId, channel_id: obj4.channelId, author: obj4.author } = tmp4);
          items.push(obj2);
          linkIndex = linkIndex + 1;
        }
      } else {
        MediaSourceUtil;
      }
    });
  }
  if (0 === items.length) {
    let tmp4 = constants2;
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
