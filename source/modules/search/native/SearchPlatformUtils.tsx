// Module ID: 11398
// Function ID: 88594
// Name: _createForOfIteratorHelperLoose
// Dependencies: [5660, 10077, 9103, 11399, 653, 10078, 8276, 1360, 5784, 477, 1820, 4074, 1443, 9742, 689, 3803, 10076, 11406, 10085, 22, 620, 2]
// Exports: delayUntilNavigationComplete, getFiles, getLinks, getMedia, getMediaGridItemStyles, getUrlIcon, performKeyboardAwareNavigation, toSearchBarTag

// Module 11398 (_createForOfIteratorHelperLoose)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import SearchAutocompleteSelectAnalyticsActions from "SearchAutocompleteSelectAnalyticsActions";
import SEARCH_TEXT_INPUT_DEBOUNCE_TIME from "SEARCH_TEXT_INPUT_DEBOUNCE_TIME";
import ME from "ME";
import importDefaultResult from "apply";
import importDefaultResult1 from "apply";

let SEARCH_TEXT_INPUT_DEBOUNCE_TIME;
let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_14;
let closure_15;
let closure_16;
let closure_5;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
let require = arg1;
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function performKeyboardAwareNavigation(arg0) {
  const _require = arg0;
  if (obj.getKeyboardIsOpen()) {
    if (obj2.isIOS()) {
      const result = _require(1820).dismissGlobalKeyboard();
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => callback(), 100);
      const obj3 = _require(1820);
    }
  }
  arg0();
}
function delayUntilNavigationComplete(arg0) {
  let closure_0 = arg0;
  const timerId = setTimeout(() => callback(), 200);
}
function getUrlIcon(target) {
  let Icon;
  let REGEX;
  if (null == target) {
    return require(4074) /* LinkIcon */.LinkIcon;
  } else {
    if (null == obj.safeParseWithQuery(target)) {
      return require(4074) /* LinkIcon */.LinkIcon;
    } else {
      if (obj2.isDiscordUrl(target)) {
        return require(9742) /* ClydeIcon */.ClydeIcon;
      } else {
        let num = 0;
        if (0 < closure_13.length) {
          ({ REGEX, Icon } = closure_13[num]);
          while (null == REGEX.exec(target)) {
            num = num + 1;
            let tmp3 = closure_13;
          }
          return Icon;
        }
        return require(4074) /* LinkIcon */.LinkIcon;
      }
      obj2 = importDefault(1443);
    }
    obj = importDefault(1443);
  }
}
function getGridItemBorderStyles(numItems) {
  let itemIndex;
  let numColumns;
  ({ itemIndex, numColumns } = numItems);
  const rounded = Math.ceil(numItems.numItems / numColumns);
  if (0 === itemIndex) {
    let obj = { borderTopLeftRadius: importDefault(689).radii.lg };
    let tmp4 = obj;
  } else if (itemIndex === numColumns - 1) {
    obj = { borderTopRightRadius: importDefault(689).radii.lg };
    tmp4 = obj;
  } else {
    if (itemIndex % numColumns == 0) {
      if (tmp2 === tmp3) {
        const obj1 = { borderBottomLeftRadius: importDefault(689).radii.lg };
        tmp4 = obj1;
      }
    }
    if (itemIndex === rounded * numColumns - 1) {
      obj = { borderBottomRightRadius: importDefault(689).radii.lg };
      tmp4 = obj;
    }
  }
  return tmp4;
}
function getMediaGridItemStyles(spacing) {
  let itemIndex;
  let numColumns;
  ({ itemIndex, numColumns } = spacing);
  let obj = {};
  obj = { itemIndex, numItems: spacing.numItems, numColumns };
  const merged = Object.assign(getGridItemBorderStyles(obj));
  const merged1 = Object.assign(getGridItemSpacingStyles({ itemIndex, spacing: spacing.spacing, numColumns }));
  return obj;
}
function getGridItemSpacingStyles(numColumns) {
  numColumns = numColumns.numColumns;
  const result = numColumns.spacing * (numColumns - 1) / numColumns;
  const result1 = numColumns.itemIndex % numColumns;
  if (0 === result1) {
    let obj = { marginEnd: result };
    return obj;
  } else if (numColumns - 1 === result1) {
    obj = { marginStart: result };
    return obj;
  } else {
    obj = { marginHorizontal: result / 2 };
    return obj;
  }
}
function toSearchBarTag(id) {
  return { id: id.text, text: id.text };
}
function _getLimit(arg0) {
  return Math.min(arg0, closure_6);
}
function getInitialFetchLimit(tab) {
  return _getLimit(dependencyMap[tab]);
}
function getNextFetchLimit(arg0) {
  return _getLimit(2 * dependencyMap[arg0]);
}
function onInitialFetchMessagesSuccess(arg0) {
  let searchContext;
  let tabEntries;
  ({ tabEntries, searchContext } = arg0);
  if (tabEntries.every((arg0) => {
    let tmp;
    [, tmp] = arg0;
    let tmp2 = 0 === tmp.total_results;
    if (!tmp2) {
      tmp2 = null == tmp.total_results;
    }
    return tmp2;
  })) {
    let obj = importDefault(10076);
    obj = { searchContext };
    const result = obj.trackSearchEmptyMessageResult(obj);
  }
}
function onFetchMessagesStart(searchQueryString) {
  searchQueryString = searchQueryString.searchQueryString;
  importDefault(11406).updateSearchQuery(searchQueryString.searchContext, (setSearchResultsQuery) => setSearchResultsQuery.setSearchResultsQuery(searchQueryString));
}
function fetchInitialMessages(closure_0) {
  const _require = closure_0;
  const queryString = store2.getQueryString(closure_0);
  if (isInitialSearchQueryResult) {
    const type = closure_0.type;
    if (constants3.GUILD_CHANNEL !== type) {
      if (constants3.CHANNEL !== type) {
        let tmp6 = closure_8;
      }
    }
    tmp6 = closure_5;
  } else {
    let obj = _require(10078);
    const searchTabFetchId = obj.getSearchTabFetchId(closure_0, tmp3[0], queryString);
    if (!store.getIsFetching(searchTabFetchId)) {
      let obj1 = queryString(10085);
      const result = obj1.clearAllSearchMesssages();
      obj = { searchContext: closure_0 };
      queryString(10076).trackSearchStarted(obj);
      const obj3 = queryString(10076);
      obj = {
        searchContext: closure_0,
        searchTabs: tmp3,
        searchQueryString: queryString,
        getId(closure_1) {
              return callback(outer1_2[5]).getSearchTabFetchId(callback, closure_1, queryString);
            },
        getLimit: getInitialFetchLimit,
        onFetchStart: onFetchMessagesStart,
        onFetchSuccess: onInitialFetchMessagesSuccess
      };
      obj1 = {};
      const cursor = store.getCursor(searchTabFetchId);
      let tmp21 = null;
      if (null != cursor) {
        tmp21 = cursor;
      }
      obj1.cursor = tmp21;
      obj.pagination = obj1;
      const obj5 = queryString(10085);
      obj.trackExactTotalHits = _require(3803).SearchResultExactCountEnabled.getSetting();
      obj.searchMode = constants2.NEWEST;
      const tabMessages = obj5.fetchTabMessages(obj);
      const SearchResultExactCountEnabled = _require(3803).SearchResultExactCountEnabled;
    }
  }
}
function syncAutocomplete(searchContext) {
  const queryString = store2.getQueryString(searchContext, true);
  let obj = require(10078) /* _createForOfIteratorHelperLoose */;
  const tokenizeQueryResult = obj.tokenizeQuery(queryString);
  const selectionScope = require(10078) /* _createForOfIteratorHelperLoose */.getSelectionScope(tokenizeQueryResult, queryString.length - 1, queryString.length - 1);
  const obj2 = require(10078) /* _createForOfIteratorHelperLoose */;
  obj = { searchContext, tokens: tokenizeQueryResult, cursorScope: selectionScope, queryString };
  const result = importDefault(10085).updateAutocompleteQuery(obj);
}
function subscribeSearchQueryState(searchContext, arg1, arg2, arg3) {
  let tmp = arg3;
  let closure_0 = searchContext;
  let closure_1 = arg1;
  let closure_2 = arg2;
  function callback() {
    const tmp = callback(callback.getManager(closure_0));
    if (null == _isNativeReflectConstruct) {
      _isNativeReflectConstruct = tmp;
      dependencyMap(tmp, _isNativeReflectConstruct);
    }
  }
  let _isNativeReflectConstruct = arg1(callback.getManager(searchContext));
  if (arg3) {
    tmp = null != _isNativeReflectConstruct;
  }
  if (tmp) {
    arg2(_isNativeReflectConstruct, undefined);
  }
  callback.addChangeListener(callback);
  return () => callback.removeChangeListener(callback);
}
({ CHANNEL_SEARCH_INITIAL_MESSAGE_TABS: closure_5, MAX_SEARCH_RESULTS_LIMIT: closure_6, MESSAGE_SEARCH_RESULT_TABS: closure_7, SEARCH_INITIAL_MESSAGE_TABS: closure_8, SEARCH_TABS_TO_SEARCH_QUERY_LIMITS: closure_9, SearchFileTypes: closure_10, SearchLinkTypes: closure_11, SearchMediaTypes: closure_12 } = SearchAutocompleteSelectAnalyticsActions);
({ PLATFORM_REGEX_ICON_PAIRS: closure_13, SEARCH_TEXT_INPUT_DEBOUNCE_TIME } = SEARCH_TEXT_INPUT_DEBOUNCE_TIME);
({ MessageFlags: closure_14, SearchModes: closure_15, SearchTypes: closure_16 } = ME);
let obj = {
  performKeyboardAwareNavigation,
  delayUntilNavigationComplete,
  getUrlIcon,
  getGridItemBorderStyles,
  getMediaGridItemStyles,
  getGridItemSpacingStyles,
  toSearchBarTag,
  fetchInitialMessages,
  fetchInitialMessagesDebounced: require("apply").debounce(fetchInitialMessages, SEARCH_TEXT_INPUT_DEBOUNCE_TIME),
  fetchNextMessages(searchContext, tab, onFetchSuccess) {
    const _require = searchContext;
    const queryString = store2.getQueryString(searchContext);
    let obj = _require(10078);
    const searchTabFetchId = obj.getSearchTabFetchId(searchContext, tab, queryString);
    const tmp3 = getInitialFetchLimit(tab);
    const searchTabFetchId1 = _require(10078).getSearchTabFetchId(searchContext, tab, queryString);
    if (!store.getIsInitialFetchComplete(searchTabFetchId1)) {
      const isFetching = store.getIsFetching(searchTabFetchId);
      let flag = false;
      flag = !store.getIsInitialFetchComplete(searchTabFetchId);
      if (!flag) {
        flag = isFetching;
      }
      let tabMessages = !flag;
      if (tabMessages) {
        obj = { searchContext };
        const items = [tab];
        obj.searchTabs = items;
        obj.searchQueryString = queryString;
        obj.getLimit = getNextFetchLimit;
        obj.getId = function getId(closure_1) {
          return searchContext(outer1_2[5]).getSearchTabFetchId(searchContext, closure_1, queryString);
        };
        obj.onFetchStart = onFetchMessagesStart;
        obj.onFetchSuccess = onFetchSuccess;
        obj = {};
        const cursor = store.getCursor(searchTabFetchId);
        let tmp27 = null;
        if (null != cursor) {
          tmp27 = cursor;
        }
        obj.cursor = tmp27;
        obj.pagination = obj;
        const obj3 = queryString(10085);
        obj.trackExactTotalHits = _require(3803).SearchResultExactCountEnabled.getSetting();
        obj.searchMode = constants2.NEWEST;
        tabMessages = obj3.fetchTabMessages(obj);
        const SearchResultExactCountEnabled2 = _require(3803).SearchResultExactCountEnabled;
      }
      return tabMessages;
    } else {
      let cursor1 = store.getCursor(searchTabFetchId1);
      const totalCount = store.getTotalCount(searchTabFetchId1);
      let messages = store.getMessages(searchTabFetchId1);
      if (SearchResultExactCountEnabled.getSetting()) {
        cursor1 = null != cursor1 && null != totalCount && null != messages;
        if (cursor1) {
          messages = messages.length;
          cursor1 = messages < totalCount;
        }
        let tmp13 = cursor1;
      } else if (null == totalCount) {
        tmp13 = null != cursor1;
      }
      SearchResultExactCountEnabled = _require(3803).SearchResultExactCountEnabled;
    }
  },
  syncAutocomplete
};
obj.syncAutocompleteDebounced = require("apply").debounce(syncAutocomplete, SEARCH_TEXT_INPUT_DEBOUNCE_TIME);
obj.navigateToSearchWithPrefetch = function navigateToSearchWithPrefetch(closure_8, closure_9) {
  let obj = importDefault(10085);
  const result = obj.initializeAutocomplete(closure_9);
  const result1 = importDefault(11406).initializeSearchQuery(closure_9);
  fetchInitialMessages(closure_9);
  obj = { searchContext: closure_9 };
  closure_8.navigate("search", obj);
};
obj.subscribeSearchQueryState = subscribeSearchQueryState;
obj.subscribeTextInputValue = function subscribeTextInputValue(closure_0, debounceResult, arg2) {
  closure_0 = debounceResult;
  return subscribeSearchQueryState(closure_0, (getTextInputValue) => ({ textInputValue: getTextInputValue.getTextInputValue(), textInputChangedFromInput: getTextInputValue.getTextValueChangedFromInput() }), (textInputValue, textInputValue2) => {
    textInputValue = undefined;
    if (null != textInputValue2) {
      textInputValue = textInputValue2.textInputValue;
    }
    closure_0(textInputValue.textInputValue, textInputValue, textInputValue.textInputChangedFromInput);
  }, arg2);
};
let result = require("SearchAutocompleteSelectAnalyticsActions").fileFinishedImporting("modules/search/native/SearchPlatformUtils.tsx");

export default obj;
export const getMedia = function getMedia(items, items1) {
  let tmp;
  const guildIdFromSearchContext = require(10078) /* _createForOfIteratorHelperLoose */.getGuildIdFromSearchContext(items);
  if (null != guildIdFromSearchContext) {
    tmp = guildIdFromSearchContext;
  }
  require = tmp;
  items = [];
  let item = items1.forEach((getContentMessage) => {
    let done;
    let items = 0;
    const contentMessage = getContentMessage.getContentMessage();
    const attachments = contentMessage.attachments;
    if (null != attachments) {
      const item = attachments.forEach((attachment, index) => {
        let obj = getContentMessage(outer2_2[6]);
        if (!obj.isThumbnailAttachment(attachment)) {
          if (obj2.isValidImageAttachment(attachment)) {
            const obj4 = getContentMessage(outer2_2[6]);
            const result = obj4.extractMediaFromAttachment(attachment, getContentMessage, index, getContentMessage);
            if (null != result) {
              obj = { type: outer2_12.ATTACHMENT, attachment };
              ({ id: obj5.messageId, channel_id: obj5.channelId, author: obj5.author } = getContentMessage);
              obj.mediaIndex = arr;
              obj.sources = result;
              arr = arr.push(obj);
              arr = arr + 1;
            }
          } else {
            const obj3 = getContentMessage(outer2_2[6]);
          }
          obj2 = getContentMessage(outer2_2[6]);
        }
      });
    }
    const embeds = contentMessage.embeds;
    if (null != embeds) {
      const item1 = embeds.forEach((embed, mediaIndex) => {
        let obj = getContentMessage(outer2_2[6]);
        if (obj.isValidImageEmbed(embed)) {
          const obj3 = getContentMessage(outer2_2[6]);
          const result = obj3.extractMediaFromEmbed(embed, getContentMessage, contentMessage, mediaIndex, getContentMessage);
          if (null != result) {
            obj = { type: outer2_12.EMBED, embed };
            ({ id: obj4.messageId, channel_id: obj4.channelId, author: obj4.author } = getContentMessage);
            obj.mediaIndex = arr;
            obj.sources = result;
            arr = arr.push(obj);
            arr = arr + 1;
          }
        } else {
          const obj2 = getContentMessage(outer2_2[6]);
        }
      });
    }
    let obj = tmp(outer1_2[6]);
    const tmp4 = outer1_17(obj.extractMediaFromMessageComponents(getContentMessage, contentMessage, getContentMessage));
    let iter = tmp4();
    if (!iter.done) {
      do {
        let value = iter.value;
        let tmp5 = items;
        obj = {};
        let tmp6 = outer1_12;
        obj.type = outer1_12.COMPONENT;
        obj.messageId = getContentMessage.id;
        obj.channelId = getContentMessage.channel_id;
        obj.author = getContentMessage.author;
        let tmp7 = items;
        obj.mediaIndex = items;
        obj.sources = value.sources;
        obj.unfurledMediaItem = value.unfurledMediaItem;
        let arr = items.push(obj);
        let tmp9 = items;
        items = items + 1;
        let iter2 = tmp4();
        iter = iter2;
        done = iter2.done;
      } while (!done);
    }
    if (obj3.hasFlag(contentMessage.flags, outer1_14.IS_VOICE_MESSAGE)) {
      obj = { type: outer1_12.AUDIO };
      ({ id: obj4.messageId, channel_id: obj4.channelId, author: obj4.author } = getContentMessage);
      obj.mediaIndex = items;
      items.push(obj);
      items = items + 1;
    }
  });
  return items;
};
export const getFiles = function getFiles(id) {
  let closure_0 = id;
  const items = [];
  const contentMessage = id.getContentMessage();
  const attachments = contentMessage.attachments;
  if (null != attachments) {
    const item = attachments.forEach((attachment, fileIndex) => {
      let obj = id(contentMessage[6]);
      if (!obj.isValidImageAttachment(attachment)) {
        if (!obj2.isValidVideoAttachment(attachment)) {
          const push = items.push;
          obj = {};
          if (obj3.hasFlag(contentMessage.flags, outer1_14.IS_VOICE_MESSAGE)) {
            obj.type = tmp8.AUDIO;
            ({ id: obj4.messageId, channel_id: obj4.channelId, author: obj4.author } = id);
            obj.fileIndex = fileIndex;
            obj.attachment = attachment;
            push(obj);
          } else {
            obj.type = tmp8.ATTACHMENT;
            ({ id: obj4.messageId, channel_id: obj4.channelId, author: obj4.author } = id);
            obj.fileIndex = fileIndex;
            obj.attachment = attachment;
            push(obj);
          }
          obj3 = id(contentMessage[7]);
        }
      }
      obj = { type: outer1_10.MEDIA_ATTACHMENT, messageId: id.id, channelId: id.channel_id, author: id.author, fileIndex, attachment };
      items.push(obj);
    });
  }
  return items;
};
export const getLinks = function getLinks(items, getContentMessage) {
  const _require = getContentMessage;
  let tmp;
  let obj = _require(items[5]);
  const guildIdFromSearchContext = obj.getGuildIdFromSearchContext(items);
  if (null != guildIdFromSearchContext) {
    tmp = guildIdFromSearchContext;
  }
  const importDefault = tmp;
  items = [];
  const contentMessage = getContentMessage.getContentMessage();
  let c4 = 0;
  const embeds = contentMessage.embeds;
  if (null != embeds) {
    const item = embeds.forEach((embed, mediaIndex) => {
      let obj = getContentMessage(items[6]);
      if (obj.isValidImageEmbed(embed)) {
        const obj3 = getContentMessage(items[6]);
        const result = obj3.extractMediaFromEmbed(embed, getContentMessage, contentMessage, mediaIndex, closure_1);
        if (null != result) {
          obj = { type: outer1_11.EMBED };
          ({ id: obj4.messageId, channel_id: obj4.channelId, author: obj4.author } = getContentMessage);
          obj.linkIndex = closure_4;
          obj.sources = result;
          obj.embed = embed;
          items.push(obj);
          closure_4 = closure_4 + 1;
        }
      } else {
        const obj2 = getContentMessage(items[6]);
      }
    });
  }
  if (0 === items.length) {
    obj = { type: constants.TEXT };
    ({ id: obj2.messageId, channel_id: obj2.channelId, author: obj2.author } = getContentMessage);
    obj.linkIndex = 0;
    items.push(obj);
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
