// Module ID: 15382
// Function ID: 117333
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 5, 31, 5660, 11436, 15383, 10109, 9141, 11427, 653, 33, 4660, 11434, 1212, 4126, 8859, 15384, 4140, 10108, 10110, 566, 1457, 15386, 11426, 13775, 7581, 7583, 15387, 15388, 15391, 2]

// Module 15382 (_createForOfIteratorHelperLoose)
import _slicedToArray from "_slicedToArray";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import importAllResult from "result";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import SearchAutocompleteSelectAnalyticsActions from "SearchAutocompleteSelectAnalyticsActions";
import { EMPTY_MEDIA_RESULTS } from "SEARCH_TEXT_INPUT_DEBOUNCE_TIME";
import { SearchTypes } from "ME";
import { jsx } from "jsxProd";

let closure_10;
let closure_11;
let closure_12;
let closure_13;
const require = arg1;
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
function ClearAllHistory(searchContext) {
  searchContext = searchContext.searchContext;
  let obj = {
    onPress() {
      return outer1_1(outer1_2[12]).clearSearchHistory(searchContext);
    },
    accessibilityRole: "button",
    unstable_pressDelay: 130
  };
  const intl = searchContext(1212).intl;
  obj.accessibilityLabel = intl.string(searchContext(1212).t.LFTAUp);
  obj = { variant: "text-sm/semibold", color: "text-brand" };
  const intl2 = searchContext(1212).intl;
  obj.children = intl2.string(searchContext(1212).t.LFTAUp);
  obj.children = jsx(searchContext(4126).Text, { variant: "text-sm/semibold", color: "text-brand" });
  return jsx(searchContext(4660).PressableHighlight, { variant: "text-sm/semibold", color: "text-brand" });
}
function ViewAll(onJumpToMedia) {
  let obj = { onPress: onJumpToMedia.onJumpToMedia, accessibilityRole: "button", unstable_pressDelay: 130 };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.accessibilityLabel = intl.string(require(1212) /* getSystemLocale */.t.Ofpgwh);
  obj = { variant: "text-sm/semibold", color: "text-brand" };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.children = intl2.string(require(1212) /* getSystemLocale */.t.Ofpgwh);
  obj.children = jsx(require(4126) /* Text */.Text, { variant: "text-sm/semibold", color: "text-brand" });
  return jsx(require(4660) /* PressableBase */.PressableHighlight, { variant: "text-sm/semibold", color: "text-brand" });
}
({ EMPTY_SEARCH_QUERY_STRING: closure_10, MESSAGE_PLACEHOLDER_ITEM_SIZE: closure_11, SearchListItemTypes: closure_12, SearchTabs: closure_13 } = SearchAutocompleteSelectAnalyticsActions);
let closure_17 = importAllResult.memo((searchContext) => {
  searchContext = searchContext.searchContext;
  const onJumpToMedia = searchContext.onJumpToMedia;
  const suggestedData = searchContext.suggestedData;
  let obj = searchContext(suggestedData[20]);
  let items = [onPressMediaItem, closure_6];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let obj = searchContext(suggestedData[19]);
    const searchTabFetchId = obj.getSearchTabFetchId(searchContext, outer1_13.MEDIA, onPressMediaItem.getSearchResultsQuery(searchContext));
    obj = { messages: tmp2.getMessages(searchTabFetchId), isLoadingMediaGrid: !tmp2.getIsInitialFetchComplete(searchTabFetchId), isInitialSearchQuery: onPressMediaItem.isInitialSearchQuery(searchContext) };
    return obj;
  });
  const messages = stateFromStoresObject.messages;
  const isLoadingMediaGrid = stateFromStoresObject.isLoadingMediaGrid;
  const isInitialSearchQuery = stateFromStoresObject.isInitialSearchQuery;
  const tmp2 = (function useSearchHistory(searchContextId) {
    let closure_0 = searchContextId;
    const tmp = messages(isInitialSearchQuery.useState(() => memo.getSearchHistory(closure_0)), 2);
    let closure_1 = tmp[1];
    const items = [searchContextId];
    const focusEffect = searchContext(suggestedData[21]).useFocusEffect(isInitialSearchQuery.useCallback(() => {
      function handleChange() {
        outer1_1(memo.getSearchHistory(handleChange));
      }
      handleChange();
      let result = memo.addReactChangeListener(handleChange);
      return () => {
        const result = memo.removeReactChangeListener(handleChange);
      };
    }, items));
    return tmp[0];
  })(searchContext(suggestedData[19]).getSearchContextId(searchContext));
  closure_6 = tmp2;
  let tmp3 = onJumpToMedia(suggestedData[22])(searchContext.width);
  let closure_7 = tmp3;
  let items1 = [messages, searchContext];
  const memo = isInitialSearchQuery.useMemo(() => {
    if (null != messages) {
      if (0 !== messages.length) {
        const items = [];
        const tmp8 = outer1_20(messages);
        let iter2 = tmp8();
        if (!iter2.done) {
          const items1 = [iter2.value];
          const media = searchContext(suggestedData[23]).getMedia(items, items1);
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
    return outer1_14;
  }, items1);
  let obj2 = searchContext(suggestedData[19]);
  onPressMediaItem = searchContext(suggestedData[16]).useOnPressMediaItem({ searchContext, allMediaResults: memo });
  const items2 = [messages, onPressMediaItem];
  const callback = isInitialSearchQuery.useCallback((media) => {
    media = media.media;
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
  let obj3 = searchContext(suggestedData[16]);
  obj = { placeholderHeight: fullscreenPlaceholderCount, numColumns: 1 };
  fullscreenPlaceholderCount = searchContext(suggestedData[27]).useFullscreenPlaceholderCount(obj);
  const items3 = [callback, isInitialSearchQuery, memo, tmp3, onJumpToMedia, fullscreenPlaceholderCount, searchContext, tmp2, suggestedData];
  const items4 = [isLoadingMediaGrid, tmp3];
  const data = isInitialSearchQuery.useMemo(() => {
    const items = [];
    if (!isInitialSearchQuery) {
      if (0 === items.length) {
        let num2 = 0;
        if (0 < fullscreenPlaceholderCount) {
          do {
            let obj = {};
            let tmp3 = outer1_12;
            obj.type = outer1_12.MESSAGE_PLACEHOLDER;
            let _HermesInternal = HermesInternal;
            obj.key = "message-placeholder-" + num2;
            let arr = items.push(obj);
            num2 = num2 + 1;
            let tmp5 = fullscreenPlaceholderCount;
          } while (num2 < fullscreenPlaceholderCount);
        }
        return items;
      }
    }
    if (tmp2.length > 0) {
      obj = { type: outer1_12.SECTION };
      obj = {};
      const intl = searchContext(suggestedData[13]).intl;
      obj.title = intl.string(searchContext(suggestedData[13]).t.ZZpBr4);
      const obj1 = { searchContext: items };
      obj.trailing = outer1_16(outer1_22, obj1);
      obj.props = obj;
      items.push(obj);
      const item = tmp2.forEach((searchHistoryItem) => {
        obj = { type: outer2_12.SEARCH_HISTORY_ITEM, props: obj };
        obj = { searchHistoryItem, searchContext: items };
        items.push(obj);
      });
    }
    if (null != suggestedData) {
      const item1 = suggestedData.forEach((arg0) => items.push(arg0));
    }
    if (memo.length > 0) {
      const obj2 = { type: outer1_12.SECTION };
      const obj3 = {};
      const intl2 = searchContext(suggestedData[13]).intl;
      obj3.title = intl2.string(searchContext(suggestedData[13]).t.LBYpDH);
      const obj4 = { onJumpToMedia };
      obj3.trailing = outer1_16(outer1_23, obj4);
      obj2.props = obj3;
      items.push(obj2);
      const obj5 = { type: outer1_12.MEDIA_GRID };
      const obj6 = { media: memo.slice(0, 9), mediaSize: closure_7, onPress: callback, animate: true };
      obj5.props = obj6;
      items.push(obj5);
    }
    return items;
  }, items3);
  const ListFooterComponent = isInitialSearchQuery.useMemo(() => {
    let fn = null;
    if (isLoadingMediaGrid) {
      fn = () => {
        const obj = { numRows: 3, visible: true, size: outer1_7 };
        return outer2_16(searchContext(suggestedData[28]).RecentsMediaGridPlaceholder, obj);
      };
    }
    return fn;
  }, items4);
  return jsx(onJumpToMedia(suggestedData[29]), { data, ListFooterComponent });
});
let closure_18 = importAllResult.memo((searchContext) => {
  let obj = { searchContext: searchContext.searchContext };
  obj = {};
  const merged = Object.assign(searchContext);
  obj["suggestedData"] = (function useSuggestedUsersData(searchContext) {
    searchContext = searchContext.searchContext;
    let obj = { query: outer1_10, withGuildMembers: false, withAffinitySuggestions: true, affinitySuggestionsLimit: 3, withFriends: false, withFriendSuggestions: false, withFriendRequests: false, withFriendRequestsIncoming: false, withFriendRequestsOutgoing: false, excludeCurrentUser: true };
    let tmp = outer1_1(outer1_2[15])(obj);
    let closure_1 = tmp;
    const onPressDMItem = outer1_0(outer1_2[16]).useOnPressDMItem({ searchContext });
    let items = [onPressDMItem, searchContext];
    const callback = outer1_5.useCallback((() => {
      // CreateGeneratorClosureLongIndex (0x67)
      let closure_0 = outer2_4(tmp);
      return function() {
        return callback(...arguments);
      };
    })(), items);
    const items1 = [callback, tmp];
    return outer1_5.useMemo(() => {
      const items = [];
      if (0 !== tmp.length) {
        let item = tmp.forEach((arg0) => {
          let items;
          let title;
          ({ title, items } = arg0);
          let tmp = 0 !== items.length;
          if (tmp) {
            tmp = null != title;
          }
          if (tmp) {
            let obj = { type: outer3_12.SECTION };
            obj = { title };
            obj.props = obj;
            items.push(obj);
            const item = items.forEach((user) => {
              obj = { type: outer4_12.DM, props: obj };
              obj = { user: user.user, onPress: outer2_3 };
              outer1_0.push(obj);
            });
          }
        });
      }
      return items;
    }, items1);
  })(obj);
  return <closure_17 />;
});
let closure_19 = importAllResult.memo((searchContext) => {
  let obj = { searchContext: searchContext.searchContext };
  obj = {};
  const merged = Object.assign(searchContext);
  obj["suggestedData"] = (function useSuggestedChannelsData(searchContext) {
    searchContext = searchContext.searchContext;
    const searchContextId = outer1_0(outer1_2[19]).getSearchContextId(searchContext);
    let obj = outer1_0(outer1_2[19]);
    let items = [outer1_7];
    const stateFromStores = outer1_0(outer1_2[20]).useStateFromStores(items, () => outer2_7.getTextChannels(closure_1));
    const obj2 = outer1_0(outer1_2[20]);
    const onPressGuildTextChannel = outer1_0(outer1_2[16]).useOnPressGuildTextChannel({ searchContext });
    const items1 = [stateFromStores];
    const memo = outer1_5.useMemo(() => stateFromStores.slice(0, 3), items1);
    const items2 = [onPressGuildTextChannel, searchContext];
    const callback = outer1_5.useCallback((channelId) => {
      let obj = outer2_1(outer2_2[18]);
      obj = { searchContext, channelId };
      const result = obj.trackSuggestedSearchClicked(obj);
      onPressGuildTextChannel(channelId);
    }, items2);
    const items3 = [callback, memo];
    return outer1_5.useMemo(() => {
      const items = [];
      if (0 !== memo.length) {
        let obj = { type: outer2_12.SECTION };
        obj = {};
        const intl = outer2_0(outer2_2[13]).intl;
        obj.title = intl.string(outer2_0(outer2_2[13]).t.HbJ7eD);
        obj.props = obj;
        items.push(obj);
        const item = memo.forEach((channel) => {
          obj = { type: outer3_12.GUILD_TEXT_CHANNEL, props: obj };
          obj = { channel: channel.channel, lastMessageId: channel.lastMessageId, onPress: outer1_5 };
          items.push(obj);
        });
      }
      return items;
    }, items3);
  })(obj);
  return <closure_17 />;
});
const memoResult = importAllResult.memo(function RecentScreenContainer(arg0) {
  let onJumpToMedia;
  let searchContext;
  let width;
  ({ searchContext, onJumpToMedia, width } = arg0);
  const type = searchContext.type;
  if (SearchTypes.DMS === type) {
    let obj = { searchContext, onJumpToMedia, width };
    return <closure_18 searchContext={searchContext} onJumpToMedia={onJumpToMedia} width={width} />;
  } else if (SearchTypes.GUILD === type) {
    obj = { searchContext, onJumpToMedia, width };
    return <closure_19 searchContext={searchContext} onJumpToMedia={onJumpToMedia} width={width} />;
  } else {
    if (SearchTypes.GUILD_CHANNEL !== type) {
      if (SearchTypes.CHANNEL !== type) {
        return null;
      }
    }
    obj = { searchContext, onJumpToMedia, width };
    return <closure_17 searchContext={searchContext} onJumpToMedia={onJumpToMedia} width={width} />;
  }
});
let result = require("result").fileFinishedImporting("modules/search/native/components/tabs/pages/RecentScreen.tsx");

export default memoResult;
