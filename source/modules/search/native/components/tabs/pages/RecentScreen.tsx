// Module ID: 15211
// Function ID: 114798
// Name: _createForOfIteratorHelperLoose
// Dependencies: []

// Module 15211 (_createForOfIteratorHelperLoose)
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
function ClearAllHistory(searchContext) {
  const arg1 = searchContext.searchContext;
  let obj = {
    122814468: 0,
    1158220809: 3.896,
    301575: 5,
    onPress() {
      return callback(closure_2[12]).clearSearchHistory(searchContext);
    }
  };
  const intl = arg1(dependencyMap[13]).intl;
  obj.accessibilityLabel = intl.string(arg1(dependencyMap[13]).t.LFTAUp);
  obj = { hasMaxConnections: "png", isBoostOnlySubscription: "absolute" };
  const intl2 = arg1(dependencyMap[13]).intl;
  obj.children = intl2.string(arg1(dependencyMap[13]).t.LFTAUp);
  obj.children = jsx(arg1(dependencyMap[14]).Text, obj);
  return jsx(arg1(dependencyMap[11]).PressableHighlight, obj);
}
function ViewAll(onJumpToMedia) {
  let obj = { 122814468: 0, 1158220809: 3.896, 301575: 5, onPress: onJumpToMedia.onJumpToMedia };
  const intl = arg1(dependencyMap[13]).intl;
  obj.accessibilityLabel = intl.string(arg1(dependencyMap[13]).t.Ofpgwh);
  obj = { hasMaxConnections: "png", isBoostOnlySubscription: "absolute" };
  const intl2 = arg1(dependencyMap[13]).intl;
  obj.children = intl2.string(arg1(dependencyMap[13]).t.Ofpgwh);
  obj.children = jsx(arg1(dependencyMap[14]).Text, obj);
  return jsx(arg1(dependencyMap[11]).PressableHighlight, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const importAllResult = importAll(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
({ EMPTY_SEARCH_QUERY_STRING: closure_10, MESSAGE_PLACEHOLDER_ITEM_SIZE: closure_11, SearchListItemTypes: closure_12, SearchTabs: closure_13 } = arg1(dependencyMap[7]));
const EMPTY_MEDIA_RESULTS = arg1(dependencyMap[8]).EMPTY_MEDIA_RESULTS;
const SearchTypes = arg1(dependencyMap[9]).SearchTypes;
const jsx = arg1(dependencyMap[10]).jsx;
let closure_17 = importAllResult.memo((searchContext) => {
  searchContext = searchContext.searchContext;
  const arg1 = searchContext;
  const onJumpToMedia = searchContext.onJumpToMedia;
  const importDefault = onJumpToMedia;
  const suggestedData = searchContext.suggestedData;
  const dependencyMap = suggestedData;
  let obj = arg1(dependencyMap[20]);
  const items = [closure_9, closure_6];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let obj = searchContext(suggestedData[19]);
    const searchTabFetchId = obj.getSearchTabFetchId(searchContext, constants2.MEDIA, onPressMediaItem.getSearchResultsQuery(searchContext));
    obj = { messages: tmp2.getMessages(searchTabFetchId), isLoadingMediaGrid: !tmp2.getIsInitialFetchComplete(searchTabFetchId), isInitialSearchQuery: onPressMediaItem.isInitialSearchQuery(searchContext) };
    return obj;
  });
  const messages = stateFromStoresObject.messages;
  let closure_3 = messages;
  const isLoadingMediaGrid = stateFromStoresObject.isLoadingMediaGrid;
  let closure_4 = isLoadingMediaGrid;
  const isInitialSearchQuery = stateFromStoresObject.isInitialSearchQuery;
  const tmp2 = function useSearchHistory(searchContextId) {
    const searchContext = searchContextId;
    const tmp = messages(isInitialSearchQuery.useState(() => closure_8.getSearchHistory(arg0)), 2);
    let closure_1 = tmp[1];
    const items = [searchContextId];
    const focusEffect = searchContext(suggestedData[21]).useFocusEffect(isInitialSearchQuery.useCallback(() => {
      function handleChange() {
        callback(closure_8.getSearchHistory(handleChange));
      }
      const arg0 = handleChange;
      handleChange();
      const result = closure_8.addReactChangeListener(handleChange);
      return () => {
        const result = closure_8.removeReactChangeListener(handleChange);
      };
    }, items));
    return tmp[0];
  }(arg1(dependencyMap[19]).getSearchContextId(searchContext));
  closure_6 = tmp2;
  const tmp3 = importDefault(dependencyMap[22])(searchContext.width);
  let closure_7 = tmp3;
  const items1 = [messages, searchContext];
  const memo = importAllResult.useMemo(() => {
    if (null != messages) {
      if (0 !== messages.length) {
        const items = [];
        const searchContext = items;
        const tmp8 = callback2(messages);
        let iter2 = tmp8();
        if (!iter2.done) {
          const items1 = [iter2.value];
          const media = searchContext(suggestedData[23]).getMedia(searchContext, items1);
          const item = media.forEach((arg0) => items.push(arg0));
          while (items.length < 9) {
            let iter = tmp8();
            iter2 = iter;
            if (iter.done) {
              break;
            }
          }
          const obj = searchContext(suggestedData[23]);
        }
        return items;
      }
    }
    return closure_14;
  }, items1);
  let closure_8 = memo;
  const obj2 = arg1(dependencyMap[19]);
  const onPressMediaItem = arg1(dependencyMap[16]).useOnPressMediaItem({ searchContext, allMediaResults: memo });
  closure_9 = onPressMediaItem;
  const items2 = [messages, onPressMediaItem];
  const callback = importAllResult.useCallback((media) => {
    media = media.media;
    const searchContext = media;
    let found;
    if (null != messages) {
      found = messages.find((id) => id.id === media.messageId);
    }
    let obj = searchContext(suggestedData[24]);
    if (obj.shouldAgeVerifyForSearchMedia(media, found)) {
      obj = { entryPoint: searchContext(suggestedData[26]).AgeVerificationModalEntryPoint.SEARCH_MEDIA_PREVIEW };
      const result = onJumpToMedia(suggestedData[25]).showAgeVerificationGetStartedModal(obj);
      const obj2 = onJumpToMedia(suggestedData[25]);
    } else {
      onPressMediaItem(media, media.originView);
    }
  }, items2);
  const obj3 = arg1(dependencyMap[16]);
  obj = { placeholderHeight: fullscreenPlaceholderCount, numColumns: 1 };
  const fullscreenPlaceholderCount = arg1(dependencyMap[27]).useFullscreenPlaceholderCount(obj);
  const items3 = [callback, isInitialSearchQuery, memo, tmp3, onJumpToMedia, fullscreenPlaceholderCount, searchContext, tmp2, suggestedData];
  const items4 = [isLoadingMediaGrid, tmp3];
  const data = importAllResult.useMemo(() => {
    let tmp3;
    const items = [];
    const searchContext = items;
    if (!isInitialSearchQuery) {
      if (0 === items.length) {
        let num2 = 0;
        if (0 < fullscreenPlaceholderCount) {
          do {
            let obj = {};
            tmp3 = closure_12;
            obj.type = closure_12.MESSAGE_PLACEHOLDER;
            let _HermesInternal = HermesInternal;
            obj.key = "message-placeholder-" + num2;
            let arr = items.push(obj);
            num2 = num2 + 1;
            let tmp5 = closure_11;
          } while (num2 < closure_11);
        }
        return items;
      }
    }
    if (tmp2.length > 0) {
      obj = { type: constants.SECTION };
      obj = {};
      const intl = searchContext(suggestedData[13]).intl;
      obj.title = intl.string(searchContext(suggestedData[13]).t.ZZpBr4);
      const obj1 = { searchContext };
      obj.trailing = callback(closure_22, obj1);
      obj.props = obj;
      items.push(obj);
      const item = tmp2.forEach((searchHistoryItem) => {
        let obj = { type: constants.SEARCH_HISTORY_ITEM, props: obj };
        obj = { searchHistoryItem, searchContext: items };
        items.push(obj);
      });
    }
    if (null != suggestedData) {
      const item1 = suggestedData.forEach((arg0) => items.push(arg0));
    }
    if (memo.length > 0) {
      const obj2 = { type: constants.SECTION };
      const obj3 = {};
      const intl2 = searchContext(suggestedData[13]).intl;
      obj3.title = intl2.string(searchContext(suggestedData[13]).t.LBYpDH);
      const obj4 = { onJumpToMedia };
      obj3.trailing = callback(closure_23, obj4);
      obj2.props = obj3;
      items.push(obj2);
      const obj5 = { type: constants.MEDIA_GRID };
      const obj6 = { media: memo.slice(0, 9), mediaSize: tmp3, onPress: callback, animate: true };
      obj5.props = obj6;
      items.push(obj5);
    }
    return items;
  }, items3);
  const ListFooterComponent = importAllResult.useMemo(() => {
    let fn = null;
    if (isLoadingMediaGrid) {
      fn = () => callback2(callback(closure_2[28]).RecentsMediaGridPlaceholder, { size: closure_7 });
    }
    return fn;
  }, items4);
  return jsx(importDefault(dependencyMap[29]), { data, ListFooterComponent });
});
let closure_18 = importAllResult.memo((searchContext) => {
  let obj = { searchContext: searchContext.searchContext };
  obj = {};
  const merged = Object.assign(searchContext);
  obj["suggestedData"] = function useSuggestedUsersData(searchContext) {
    searchContext = searchContext.searchContext;
    const tmp = tmp(onPressDMItem[15])({ query: closure_10 });
    const onPressDMItem = searchContext(onPressDMItem[16]).useOnPressDMItem({ searchContext });
    const items = [onPressDMItem, searchContext];
    const callback = React.useCallback(() => {
      // CreateGeneratorClosureLongIndex (0x67)
      let closure_0 = callback(tmp);
      return function() {
        return callback(...arguments);
      };
    }(), items);
    const items1 = [callback, tmp];
    return React.useMemo(() => {
      const items = [];
      const searchContext = items;
      if (0 !== tmp.length) {
        const item = tmp.forEach((arg0) => {
          let items;
          let title;
          ({ title, items } = arg0);
          let tmp = 0 !== items.length;
          if (tmp) {
            tmp = null != title;
          }
          if (tmp) {
            let obj = { type: constants.SECTION };
            obj = { title };
            obj.props = obj;
            items.push(obj);
            const item = items.forEach((user) => {
              let obj = { type: constants.DM, props: obj };
              obj = { user: user.user, onPress: closure_3 };
            });
          }
        });
      }
      return items;
    }, items1);
  }(obj);
  return <closure_17 {...obj} />;
});
let closure_19 = importAllResult.memo((searchContext) => {
  let obj = { searchContext: searchContext.searchContext };
  obj = {};
  const merged = Object.assign(searchContext);
  obj["suggestedData"] = function useSuggestedChannelsData(searchContext) {
    searchContext = searchContext.searchContext;
    const searchContextId = searchContext(stateFromStores[19]).getSearchContextId(searchContext);
    const obj = searchContext(stateFromStores[19]);
    const items = [closure_7];
    const stateFromStores = searchContext(stateFromStores[20]).useStateFromStores(items, () => textChannels.getTextChannels(closure_1));
    const obj2 = searchContext(stateFromStores[20]);
    const onPressGuildTextChannel = searchContext(stateFromStores[16]).useOnPressGuildTextChannel({ searchContext });
    const items1 = [stateFromStores];
    const memo = callback.useMemo(() => stateFromStores.slice(0, 3), items1);
    const items2 = [onPressGuildTextChannel, searchContext];
    const callback = callback.useCallback((channelId) => {
      let obj = callback(stateFromStores[18]);
      obj = { searchContext, channelId };
      const result = obj.trackSuggestedSearchClicked(obj);
      onPressGuildTextChannel(channelId);
    }, items2);
    const items3 = [callback, memo];
    return callback.useMemo(() => {
      const items = [];
      const searchContext = items;
      if (0 !== memo.length) {
        let obj = { type: constants.SECTION };
        obj = {};
        const intl = searchContext(stateFromStores[13]).intl;
        obj.title = intl.string(searchContext(stateFromStores[13]).t.HbJ7eD);
        obj.props = obj;
        items.push(obj);
        const item = memo.forEach((channel) => {
          let obj = { type: constants.GUILD_TEXT_CHANNEL, props: obj };
          obj = { channel: channel.channel, lastMessageId: channel.lastMessageId, onPress: closure_5 };
          items.push(obj);
        });
      }
      return items;
    }, items3);
  }(obj);
  return <closure_17 {...obj} />;
});
const tmp2 = arg1(dependencyMap[7]);
const memoResult = importAllResult.memo(function RecentScreenContainer(arg0) {
  let onJumpToMedia;
  let searchContext;
  let width;
  ({ searchContext, onJumpToMedia, width } = arg0);
  const type = searchContext.type;
  if (SearchTypes.DMS === type) {
    let obj = { searchContext, onJumpToMedia, width };
    return <closure_18 {...obj} />;
  } else if (SearchTypes.GUILD === type) {
    obj = { searchContext, onJumpToMedia, width };
    return <closure_19 {...obj} />;
  } else {
    if (SearchTypes.GUILD_CHANNEL !== type) {
      if (SearchTypes.CHANNEL !== type) {
        return null;
      }
    }
    obj = { searchContext, onJumpToMedia, width };
    return <closure_17 {...obj} />;
  }
});
const result = arg1(dependencyMap[30]).fileFinishedImporting("modules/search/native/components/tabs/pages/RecentScreen.tsx");

export default memoResult;
