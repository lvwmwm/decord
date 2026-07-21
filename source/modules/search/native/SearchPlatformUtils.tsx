// Module ID: 11387
// Function ID: 88531
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: delayUntilNavigationComplete, getFiles, getLinks, getMedia, getMediaGridItemStyles, getUrlIcon, performKeyboardAwareNavigation, toSearchBarTag

// Module 11387 (_createForOfIteratorHelperLoose)
let SEARCH_TEXT_INPUT_DEBOUNCE_TIME;
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
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
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
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
  const arg1 = arg0;
  if (obj.getKeyboardIsOpen()) {
    if (obj2.isIOS()) {
      const result = arg1(dependencyMap[10]).dismissGlobalKeyboard();
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => arg0(), 100);
      const obj3 = arg1(dependencyMap[10]);
    }
  }
  arg0();
}
function delayUntilNavigationComplete(arg0) {
  const arg1 = arg0;
  const timerId = setTimeout(() => arg0(), 200);
}
function getUrlIcon(target) {
  let Icon;
  let REGEX;
  if (null == target) {
    return arg1(dependencyMap[11]).LinkIcon;
  } else {
    if (null == obj.safeParseWithQuery(target)) {
      return arg1(dependencyMap[11]).LinkIcon;
    } else {
      if (obj2.isDiscordUrl(target)) {
        return arg1(dependencyMap[13]).ClydeIcon;
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
        return arg1(dependencyMap[11]).LinkIcon;
      }
      const obj2 = importDefault(dependencyMap[12]);
    }
    const obj = importDefault(dependencyMap[12]);
  }
}
function getGridItemBorderStyles(numItems) {
  let itemIndex;
  let numColumns;
  ({ itemIndex, numColumns } = numItems);
  const rounded = Math.ceil(numItems.numItems / numColumns);
  if (0 === itemIndex) {
    let obj = { borderTopLeftRadius: importDefault(dependencyMap[14]).radii.lg };
    let tmp4 = obj;
  } else if (itemIndex === numColumns - 1) {
    obj = { borderTopRightRadius: importDefault(dependencyMap[14]).radii.lg };
    tmp4 = obj;
  } else {
    if (itemIndex % numColumns == 0) {
      if (tmp2 === tmp3) {
        const obj1 = { borderBottomLeftRadius: importDefault(dependencyMap[14]).radii.lg };
        tmp4 = obj1;
      }
    }
    if (itemIndex === rounded * numColumns - 1) {
      obj = { borderBottomRightRadius: importDefault(dependencyMap[14]).radii.lg };
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
  return _getLimit(closure_9[tab]);
}
function getNextFetchLimit(arg0) {
  return _getLimit(2 * closure_9[arg0]);
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
    let obj = importDefault(dependencyMap[16]);
    obj = { searchContext };
    const result = obj.trackSearchEmptyMessageResult(obj);
  }
}
function onFetchMessagesStart(searchQueryString) {
  const arg1 = searchQueryString.searchQueryString;
  importDefault(dependencyMap[17]).updateSearchQuery(searchQueryString.searchContext, (setSearchResultsQuery) => setSearchResultsQuery.setSearchResultsQuery(searchQueryString));
}
function fetchInitialMessages(searchContext) {
  const arg1 = searchContext;
  const queryString = store2.getQueryString(searchContext);
  const importDefault = queryString;
  if (isInitialSearchQueryResult) {
    const type = searchContext.type;
    if (constants3.GUILD_CHANNEL !== type) {
      if (constants3.CHANNEL !== type) {
        let tmp6 = closure_8;
      }
    }
    tmp6 = closure_5;
  } else {
    let obj = arg1(dependencyMap[5]);
    const searchTabFetchId = obj.getSearchTabFetchId(searchContext, tmp3[0], queryString);
    if (!store.getIsFetching(searchTabFetchId)) {
      let obj1 = importDefault(dependencyMap[18]);
      const result = obj1.clearAllSearchMesssages();
      obj = { searchContext };
      importDefault(dependencyMap[16]).trackSearchStarted(obj);
      const obj3 = importDefault(dependencyMap[16]);
      obj = {
        searchContext,
        searchTabs: tmp3,
        searchQueryString: queryString,
        getId(closure_1) {
              return closure_1(closure_2[5]).getSearchTabFetchId(closure_1, closure_1, queryString);
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
      const obj5 = importDefault(dependencyMap[18]);
      obj.trackExactTotalHits = arg1(dependencyMap[15]).SearchResultExactCountEnabled.getSetting();
      obj.searchMode = constants2.NEWEST;
      const tabMessages = obj5.fetchTabMessages(obj);
      const SearchResultExactCountEnabled = arg1(dependencyMap[15]).SearchResultExactCountEnabled;
    }
  }
}
function syncAutocomplete(searchContext) {
  const queryString = store2.getQueryString(searchContext, true);
  let obj = arg1(dependencyMap[5]);
  const tokenizeQueryResult = obj.tokenizeQuery(queryString);
  const selectionScope = arg1(dependencyMap[5]).getSelectionScope(tokenizeQueryResult, queryString.length - 1, queryString.length - 1);
  const obj2 = arg1(dependencyMap[5]);
  obj = { searchContext, tokens: tokenizeQueryResult, cursorScope: selectionScope, queryString };
  const result = importDefault(dependencyMap[18]).updateAutocompleteQuery(obj);
}
function subscribeSearchQueryState(searchContext, arg1, arg2, arg3) {
  let tmp = arg3;
  arg1 = searchContext;
  const importDefault = arg1;
  const dependencyMap = arg2;
  function callback() {
    const tmp = arg1(callback.getManager(arg0));
    if (null == closure_3) {
      closure_3 = tmp;
      arg2(tmp, closure_3);
    }
  }
  const store2 = callback;
  let closure_3 = arg1(store2.getManager(searchContext));
  if (arg3) {
    tmp = null != closure_3;
  }
  if (tmp) {
    arg2(closure_3, undefined);
  }
  store2.addChangeListener(callback);
  return () => callback.removeChangeListener(callback);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
({ CHANNEL_SEARCH_INITIAL_MESSAGE_TABS: closure_5, MAX_SEARCH_RESULTS_LIMIT: closure_6, MESSAGE_SEARCH_RESULT_TABS: closure_7, SEARCH_INITIAL_MESSAGE_TABS: closure_8, SEARCH_TABS_TO_SEARCH_QUERY_LIMITS: closure_9, SearchFileTypes: closure_10, SearchLinkTypes: closure_11, SearchMediaTypes: closure_12 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
({ PLATFORM_REGEX_ICON_PAIRS: closure_13, SEARCH_TEXT_INPUT_DEBOUNCE_TIME } = arg1(dependencyMap[3]));
const tmp3 = arg1(dependencyMap[3]);
({ MessageFlags: closure_14, SearchModes: closure_15, SearchTypes: closure_16 } = arg1(dependencyMap[4]));
const obj = { performKeyboardAwareNavigation, delayUntilNavigationComplete, getUrlIcon, getGridItemBorderStyles, getMediaGridItemStyles, getGridItemSpacingStyles, toSearchBarTag, fetchInitialMessages };
const tmp4 = arg1(dependencyMap[4]);
obj.fetchInitialMessagesDebounced = importDefault(dependencyMap[19]).debounce(fetchInitialMessages, SEARCH_TEXT_INPUT_DEBOUNCE_TIME);
obj.fetchNextMessages = function fetchNextMessages(searchContext, tab, onFetchSuccess) {
  tab = searchContext;
  const queryString = store2.getQueryString(searchContext);
  const importDefault = queryString;
  let obj = tab(dependencyMap[5]);
  const searchTabFetchId = obj.getSearchTabFetchId(searchContext, tab, queryString);
  const tmp3 = getInitialFetchLimit(tab);
  const searchTabFetchId1 = tab(dependencyMap[5]).getSearchTabFetchId(searchContext, tab, queryString);
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
        return closure_1(closure_2[5]).getSearchTabFetchId(closure_1, closure_1, queryString);
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
      const obj3 = importDefault(dependencyMap[18]);
      obj.trackExactTotalHits = tab(dependencyMap[15]).SearchResultExactCountEnabled.getSetting();
      obj.searchMode = constants2.NEWEST;
      tabMessages = obj3.fetchTabMessages(obj);
      const SearchResultExactCountEnabled2 = tab(dependencyMap[15]).SearchResultExactCountEnabled;
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
    const SearchResultExactCountEnabled = tab(dependencyMap[15]).SearchResultExactCountEnabled;
  }
};
obj.syncAutocomplete = syncAutocomplete;
const importDefaultResult = importDefault(dependencyMap[19]);
obj.syncAutocompleteDebounced = importDefault(dependencyMap[19]).debounce(syncAutocomplete, SEARCH_TEXT_INPUT_DEBOUNCE_TIME);
obj.navigateToSearchWithPrefetch = function navigateToSearchWithPrefetch(closure_8, closure_9) {
  let obj = importDefault(dependencyMap[18]);
  const result = obj.initializeAutocomplete(closure_9);
  const result1 = importDefault(dependencyMap[17]).initializeSearchQuery(closure_9);
  fetchInitialMessages(closure_9);
  obj = { searchContext: closure_9 };
  closure_8.navigate("search", obj);
};
obj.subscribeSearchQueryState = subscribeSearchQueryState;
obj.subscribeTextInputValue = function subscribeTextInputValue(searchContext, debounceResult, arg2) {
  return subscribeSearchQueryState(searchContext, (getTextInputValue) => ({ textInputValue: getTextInputValue.getTextInputValue(), textInputChangedFromInput: getTextInputValue.getTextValueChangedFromInput() }), (textInputValue, textInputValue2) => {
    textInputValue = undefined;
    if (null != textInputValue2) {
      textInputValue = textInputValue2.textInputValue;
    }
    textInputValue2(textInputValue.textInputValue, textInputValue, textInputValue.textInputChangedFromInput);
  }, arg2);
};
const importDefaultResult1 = importDefault(dependencyMap[19]);
const result = arg1(dependencyMap[21]).fileFinishedImporting("modules/search/native/SearchPlatformUtils.tsx");

export default obj;
export const getMedia = function getMedia(searchContext, items1) {
  let tmp;
  const guildIdFromSearchContext = items1(dependencyMap[5]).getGuildIdFromSearchContext(searchContext);
  if (null != guildIdFromSearchContext) {
    tmp = guildIdFromSearchContext;
  }
  items1 = tmp;
  const items = [];
  const importDefault = items;
  const item = items1.forEach((getContentMessage) => {
    let done;
    let arr = 0;
    const contentMessage = getContentMessage.getContentMessage();
    const attachments = contentMessage.attachments;
    if (null != attachments) {
      const item = attachments.forEach((attachment, index) => {
        let obj = attachment(contentMessage[6]);
        if (!obj.isThumbnailAttachment(attachment)) {
          if (obj2.isValidImageAttachment(attachment)) {
            const obj4 = attachment(contentMessage[6]);
            const result = obj4.extractMediaFromAttachment(attachment, attachment, index, attachment);
            if (null != result) {
              obj = { type: constants.ATTACHMENT, attachment };
              ({ id: obj5.messageId, channel_id: obj5.channelId, author: obj5.author } = attachment);
              obj.mediaIndex = arr;
              obj.sources = result;
              let arr = arr.push(obj);
              arr = arr + 1;
            }
          } else {
            const obj3 = attachment(contentMessage[6]);
          }
          const obj2 = attachment(contentMessage[6]);
        }
      });
    }
    const embeds = contentMessage.embeds;
    if (null != embeds) {
      const item1 = embeds.forEach((embed, mediaIndex) => {
        let obj = embed(contentMessage[6]);
        if (obj.isValidImageEmbed(embed)) {
          const obj3 = embed(contentMessage[6]);
          const result = obj3.extractMediaFromEmbed(embed, embed, contentMessage, mediaIndex, embed);
          if (null != result) {
            obj = { type: constants.EMBED, embed };
            ({ id: obj4.messageId, channel_id: obj4.channelId, author: obj4.author } = embed);
            obj.mediaIndex = arr;
            obj.sources = result;
            let arr = arr.push(obj);
            arr = arr + 1;
          }
        } else {
          const obj2 = embed(contentMessage[6]);
        }
      });
    }
    let obj = tmp(contentMessage[6]);
    const tmp4 = callback(obj.extractMediaFromMessageComponents(getContentMessage, contentMessage, getContentMessage));
    let iter = tmp4();
    if (!iter.done) {
      do {
        let value = iter.value;
        let tmp5 = closure_1;
        obj = {};
        let tmp6 = closure_12;
        obj.type = closure_12.COMPONENT;
        obj.messageId = getContentMessage.id;
        obj.channelId = getContentMessage.channel_id;
        obj.author = getContentMessage.author;
        let tmp7 = closure_1;
        obj.mediaIndex = closure_1;
        obj.sources = value.sources;
        obj.unfurledMediaItem = value.unfurledMediaItem;
        arr = closure_1.push(obj);
        let tmp9 = closure_1;
        closure_1 = closure_1 + 1;
        let iter2 = tmp4();
        iter = iter2;
        done = iter2.done;
      } while (!done);
    }
    if (obj3.hasFlag(contentMessage.flags, constants2.IS_VOICE_MESSAGE)) {
      obj = { type: constants.AUDIO };
      ({ id: obj4.messageId, channel_id: obj4.channelId, author: obj4.author } = getContentMessage);
      obj.mediaIndex = arr;
      arr = arr.push(obj);
      arr = arr + 1;
    }
  });
  return items;
};
export const getFiles = function getFiles(id) {
  const arg1 = id;
  const items = [];
  const importDefault = items;
  const contentMessage = id.getContentMessage();
  const dependencyMap = contentMessage;
  const attachments = contentMessage.attachments;
  if (null != attachments) {
    const item = attachments.forEach((attachment, fileIndex) => {
      let obj = attachment(contentMessage[6]);
      if (!obj.isValidImageAttachment(attachment)) {
        if (!obj2.isValidVideoAttachment(attachment)) {
          const push = items.push;
          obj = {};
          if (obj3.hasFlag(contentMessage.flags, constants2.IS_VOICE_MESSAGE)) {
            obj.type = tmp8.AUDIO;
            ({ id: obj4.messageId, channel_id: obj4.channelId, author: obj4.author } = attachment);
            obj.fileIndex = fileIndex;
            obj.attachment = attachment;
            push(obj);
          } else {
            obj.type = tmp8.ATTACHMENT;
            ({ id: obj4.messageId, channel_id: obj4.channelId, author: obj4.author } = attachment);
            obj.fileIndex = fileIndex;
            obj.attachment = attachment;
            push(obj);
          }
          const obj3 = attachment(contentMessage[7]);
        }
      }
      obj = { type: constants.MEDIA_ATTACHMENT, messageId: attachment.id, channelId: attachment.channel_id, author: attachment.author, fileIndex, attachment };
      items.push(obj);
    });
  }
  return items;
};
export const getLinks = function getLinks(items, getContentMessage) {
  let tmp;
  let obj = getContentMessage(dependencyMap[5]);
  const guildIdFromSearchContext = obj.getGuildIdFromSearchContext(items);
  if (null != guildIdFromSearchContext) {
    tmp = guildIdFromSearchContext;
  }
  const importDefault = tmp;
  items = [];
  const dependencyMap = items;
  const contentMessage = getContentMessage.getContentMessage();
  let closure_3 = contentMessage;
  let closure_4 = 0;
  const embeds = contentMessage.embeds;
  if (null != embeds) {
    const item = embeds.forEach((embed, mediaIndex) => {
      let obj = mediaIndex(items[6]);
      if (obj.isValidImageEmbed(embed)) {
        const obj3 = mediaIndex(items[6]);
        const result = obj3.extractMediaFromEmbed(embed, mediaIndex, contentMessage, mediaIndex, tmp);
        if (null != result) {
          obj = { type: constants.EMBED };
          ({ id: obj4.messageId, channel_id: obj4.channelId, author: obj4.author } = mediaIndex);
          obj.linkIndex = closure_4;
          obj.sources = result;
          obj.embed = embed;
          items.push(obj);
          closure_4 = closure_4 + 1;
        }
      } else {
        const obj2 = mediaIndex(items[6]);
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
