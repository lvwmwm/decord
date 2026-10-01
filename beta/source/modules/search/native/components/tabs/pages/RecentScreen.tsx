// Module ID: 16456
// Function ID: 16457
// Name: RecentScreen
// Dependencies: [32, 5, 19, 6699, 11850, 16457, 11822, 7303, 11836, 1074, 21, 5435, 11844, 1115, 4832, 10322, 16458, 4849, 11841, 11823, 504, 1486, 16461, 11821, 14362, 7859, 7861, 16462, 16463, 16466, 2]

// Module 16456 (RecentScreen)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1074 */;
import intl3 from "intl" /* 1115 */;
import Text_Text from "Text/Text" /* 4832 */;
import Pressables from "Pressables" /* 5435 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 7859 */;
import SearchPlatformUtils from "SearchPlatformUtils" /* 11821 */;
import SearchUtils from "SearchUtils" /* 11823 */;
import SearchPlatformConstants from "SearchPlatformConstants" /* 11836 */;
import search_tracking_TrackingDefault from "search/tracking/Tracking" /* 11841 */;
import SearchPlatformActionCreatorsDefault from "SearchPlatformActionCreators" /* 11844 */;
import ExplicitMediaRedactionNativeUtils from "ExplicitMediaRedactionNativeUtils" /* 14362 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import SearchMessageStore from "SearchMessageStore" /* 6699 */;
import SearchGuildChannelTabStore from "SearchGuildChannelTabStore" /* 11850 */;
import SearchHistoryStore from "SearchHistoryStore" /* 16457 */;
import SearchQueryStore from "SearchQueryStore" /* 11822 */;
import SearchConstants from "SearchConstants" /* 7303 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let channelId, importDefault;

let c10;
let closure_12;
let map1;
let tmp2;
let unpackModuleId;
const AgeVerificationAnalyticsUtils = tmp2(7861);
function ClearAllHistory(searchContext) {
  let intl2;
  searchContext = searchContext.searchContext;
  const PressableHighlight = searchContext(5435).PressableHighlight;
  const intl = searchContext(1115).intl;
  ({ variant: "text-sm/semibold", color: "text-brand", children: intl2.string(searchContext(1115).t.LFTAUp) });
  const Text = searchContext(4832).Text;
  intl2 = searchContext(1115).intl;
  return <PressableHighlight onPress={function onPress() {
    const obj = SearchPlatformActionCreatorsDefault;
    return obj.clearSearchHistory(searchContext);
  }} accessibilityRole="button" unstable_pressDelay={130} accessibilityLabel={intl.string(searchContext(1115).t.LFTAUp)}>{null}</PressableHighlight>;
}
function ViewAll(onJumpToMedia) {
  let intl2;
  const PressableHighlight = Pressables.PressableHighlight;
  const intl = intl3.intl;
  ({ variant: "text-sm/semibold", color: "text-brand", children: intl2.string(intl3.t.Ofpgwh) });
  const Text = Text_Text.Text;
  intl2 = intl3.intl;
  return <PressableHighlight onPress={arg0.onJumpToMedia} accessibilityRole="button" unstable_pressDelay={130} accessibilityLabel={intl.string(intl3.t.Ofpgwh)}>{null}</PressableHighlight>;
}
({ EMPTY_SEARCH_QUERY_STRING: c10, MESSAGE_PLACEHOLDER_ITEM_SIZE: unpackModuleId, SearchListItemTypes: closure_12, SearchTabs: map1 } = SearchConstants);
const EMPTY_MEDIA_RESULTS = SearchPlatformConstants.EMPTY_MEDIA_RESULTS;
const SearchTypes = Constants.SearchTypes;
const jsx = Fragment.jsx;
let closure_19 = react.memo((searchContext) => {
  let _undefined;
  let c1;
  let tmp4;
  const f120051 = () => memo.getSearchHistory(searchContextId);
  searchContext = searchContext.searchContext;
  const onJumpToMedia = searchContext.onJumpToMedia;
  const suggestedData = searchContext.suggestedData;
  let c6;
  let onPressMediaItem;
  let fullscreenPlaceholderCount;
  const width = searchContext.width;
  let obj = searchContext(suggestedData[20]);
  let items = [onPressMediaItem, c6];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const searchResultsQuery = SearchQueryStore.getSearchResultsQuery(searchContext);
    const obj = SearchUtils;
    const searchTabFetchId = obj.getSearchTabFetchId(searchContext, map1.MEDIA, searchResultsQuery);
    const obj2 = { messages: SearchMessageStore.getMessages(searchTabFetchId), isLoadingMediaGrid: !SearchMessageStore.getIsInitialFetchComplete(searchTabFetchId), isInitialSearchQuery: SearchQueryStore.isInitialSearchQuery(searchContext) };
    return obj2;
  });
  const messages = stateFromStoresObject.messages;
  const isLoadingMediaGrid = stateFromStoresObject.isLoadingMediaGrid;
  const isInitialSearchQuery = stateFromStoresObject.isInitialSearchQuery;
  let obj2 = searchContext(suggestedData[19]);
  const searchContextId = obj2.getSearchContextId(searchContext);
  c1 = undefined;
  [tmp4, c1] = messages(isInitialSearchQuery.useState(f120051), 2);
  const tmp3 = messages(isInitialSearchQuery.useState(f120051), 2);
  const obj3 = searchContext(suggestedData[21]);
  let items1 = [searchContextId];
  const focusEffect = obj3.useFocusEffect(isInitialSearchQuery.useCallback(() => {
    function handleChange() {
      _undefined(memo.getSearchHistory(handleChange));
    }
    _undefined(memo.getSearchHistory(handleChange));
    let result = memo.addReactChangeListener(handleChange);
    return () => {
      const result = memo.removeReactChangeListener(handleChange);
    };
  }, items1));
  c6 = tmp4;
  let tmp6 = onJumpToMedia(suggestedData[22])(width);
  const mediaSize = tmp6;
  const items2 = [messages, searchContext];
  const memo = isInitialSearchQuery.useMemo(() => {
    if (null != messages) {
      if (0 !== messages.length) {
        const items = [];
        const obj2 = messages[Symbol.iterator]();
        while (obj2 !== undefined) {
          let obj = SearchPlatformUtils;
          let items1 = [tmp2];
          let media = obj.getMedia(searchContext, items1);
          let item = media.forEach((item) => items.push(item));
          if (items.length >= 9) {
            obj2.return();
            break;
          }
          return items;
        }
      }
    }
    return EMPTY_MEDIA_RESULTS;
  }, items2);
  let obj4 = searchContext(suggestedData[16]);
  onPressMediaItem = obj4.useOnPressMediaItem({ searchContext, allMediaResults: memo });
  const items3 = [messages, onPressMediaItem];
  const onPress = isInitialSearchQuery.useCallback((media) => {
    media = media.media;
    let found;
    const originView = media.originView;
    const arr = messages;
    if (messages != null) {
      found = arr.find((id) => id.id === media.messageId);
    }
    const obj = ExplicitMediaRedactionNativeUtils;
    if (obj.shouldAgeVerifyForSearchMedia(media, found)) {
      const obj2 = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.SEARCH_MEDIA_PREVIEW };
      const showAgeVerificationGetStartedModal = AgeVerificationActionCreatorsDefault.showAgeVerificationGetStartedModal;
      AgeVerificationActionCreatorsDefault;
      const result = showAgeVerificationGetStartedModal(obj2);
    } else {
      onPressMediaItem(media, originView);
    }
  }, items3);
  const obj5 = searchContext(suggestedData[27]);
  let obj6 = { placeholderHeight: fullscreenPlaceholderCount, numColumns: 1 };
  fullscreenPlaceholderCount = obj5.useFullscreenPlaceholderCount(obj6);
  const items4 = [onPress, isInitialSearchQuery, memo, tmp6, onJumpToMedia, fullscreenPlaceholderCount, searchContext, tmp4, suggestedData];
  const items5 = [isLoadingMediaGrid, tmp6];
  const data = isInitialSearchQuery.useMemo(() => {
    let intl;
    let intl2;
    let obj2;
    let obj4;
    let obj6;
    const items = [];
    const tmp = isInitialSearchQuery;
    if (!tmp) {
      if (0 === items.length) {
        let num3 = 0;
        if (0 < fullscreenPlaceholderCount) {
          do {
            let obj = { type: constants.MESSAGE_PLACEHOLDER, key: "message-placeholder-" + num3 };
            let _HermesInternal = HermesInternal;
            let push = items.push;
            let arr = push(obj);
            num3 = num3 + 1;
          } while (num3 < fullscreenPlaceholderCount);
        }
        return items;
      }
    }
    const arr2 = _undefined;
    if (_undefined.length > 0) {
      let element = { type: constants.SECTION, props: obj2 };
      const push2 = items.push;
      obj2 = { title: intl.string(searchContext(suggestedData[13]).t.ZZpBr4), trailing: null };
      intl = searchContext(suggestedData[13]).intl;
      push2(element);
      const item = arr2.forEach((searchHistoryItem) => {
        let obj;
        const element = { type: constants.SEARCH_HISTORY_ITEM, props: obj };
        obj = { searchHistoryItem, searchContext };
        items.push(element);
      });
    }
    const arr3 = suggestedData;
    if (suggestedData != null) {
      const item1 = arr3.forEach((item) => items.push(item));
    }
    const arr4 = memo;
    if (memo.length > 0) {
      const element1 = { type: constants.SECTION, props: obj4 };
      const push3 = items.push;
      obj4 = { title: intl2.string(searchContext(suggestedData[13]).t.LBYpDH), trailing: null };
      intl2 = searchContext(suggestedData[13]).intl;
      push3(element1);
      const element2 = { type: constants.MEDIA_GRID, props: obj6 };
      const push4 = items.push;
      obj6 = { media: arr4.slice(0, 9), mediaSize, onPress, animate: true };
      push4(element2);
    }
    return items;
  }, items4);
  const ListFooterComponent = isInitialSearchQuery.useMemo(() => {
    let fn = null;
    if (isLoadingMediaGrid) {
      fn = () => jsx(searchContext(suggestedData[28]).RecentsMediaGridPlaceholder, { numRows: 3, visible: true, size });
    }
    return fn;
  }, items5);
  return jsx(onJumpToMedia(suggestedData[29]), { data, ListFooterComponent });
});
let closure_20 = react.memo((searchContext) => {
  let length;
  searchContext = searchContext.searchContext;
  importDefault = undefined;
  let onPressDMItem;
  let obj = { query, withGuildMembers: false, withAffinitySuggestions: true, affinitySuggestionsLimit: 3, withFriends: false, withFriendSuggestions: false, withFriendRequests: false, withFriendRequestsIncoming: false, withFriendRequestsOutgoing: false, excludeCurrentUser: true };
  let tmp = require("useUserListData")(obj);
  importDefault = tmp;
  const obj2 = searchContext(onPressDMItem[16]);
  onPressDMItem = obj2.useOnPressDMItem({ searchContext });
  const useCallback = react.useCallback;
  let closure_0 = _asyncToGenerator(async (searchContext) => {
    let closure_2;
    let c3 = 0;
    let c4 = 0;
    return (async (arg0, value) => {
      let obj4;
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              return { value, done: true };
            } else {
              channelId = undefined;
              c3 = 1;
              c4 = 1;
              const obj5 = { value: obj4.getOrEnsurePrivateChannel(searchContext), done: false };
              obj4 = length(onPressDMItem[17]);
              return obj5;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            return { value, done: true };
          } else {
            channelId = value;
            const obj7 = { searchContext, channelId };
            const obj = length(onPressDMItem[18]);
            const result = obj.trackSuggestedSearchClicked(obj7);
            tmp4(searchContext, channelId);
            c4 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp19) {
          c4 = 3;
          throw tmp19;
        }
      }
    })();
  });
  let items = [onPressDMItem, searchContext];
  const callback = useCallback(function() {
    return closure_0(...arguments);
  }, items);
  const items1 = [callback, tmp];
  const memo = react.useMemo(() => {
    let onPress;
    const items = [];
    const arr2 = length;
    if (0 !== length.length) {
      let item = arr2.forEach((item) => {
        let obj;
        let title;
        ({ title, items } = item);
        const tmp = 0 !== items.length && null != title;
        if (tmp) {
          let element = { type: constants.SECTION, props: obj };
          obj = { title };
          items.push(element);
          item = items.forEach((user) => {
            let obj;
            const element = { type: constants.DM, props: obj };
            obj = { user: user.user, onPress };
            items.push(element);
          });
        }
      });
    }
    return items;
  }, items1);
  const merged = Object.assign(searchContext);
  return <closure_19 suggestedData={memo} />;
});
let closure_21 = react.memo((searchContext) => {
  let closure_1;
  searchContext = searchContext.searchContext;
  let stateFromStores;
  let onPress;
  let obj = searchContext(stateFromStores[19]);
  const searchContextId = obj.getSearchContextId(searchContext);
  let obj2 = searchContext(stateFromStores[20]);
  let items = [SearchGuildChannelTabStore];
  stateFromStores = obj2.useStateFromStores(items, () => SearchGuildChannelTabStore.getTextChannels(closure_1));
  const obj3 = searchContext(stateFromStores[16]);
  const onPressGuildTextChannel = obj3.useOnPressGuildTextChannel({ searchContext });
  const items1 = [stateFromStores];
  const memo = onPress.useMemo(() => stateFromStores.slice(0, 3), items1);
  const items2 = [onPressGuildTextChannel, searchContext];
  onPress = onPress.useCallback((channelId) => {
    const obj = search_tracking_TrackingDefault;
    const obj2 = { searchContext, channelId };
    const result = obj.trackSuggestedSearchClicked(obj2);
    onPressGuildTextChannel(channelId);
  }, items2);
  const items3 = [onPress, memo];
  const memo1 = onPress.useMemo(() => {
    let intl;
    let obj;
    const items = [];
    const arr2 = memo;
    if (0 !== memo.length) {
      let element = { type: constants.SECTION, props: obj };
      obj = { title: intl.string(searchContext(stateFromStores[13]).t.HbJ7eD) };
      const push = items.push;
      intl = searchContext(stateFromStores[13]).intl;
      push(element);
      const item = arr2.forEach((channel) => {
        let obj;
        const element = { type: constants.GUILD_TEXT_CHANNEL, props: obj };
        obj = { channel: channel.channel, lastMessageId: channel.lastMessageId, onPress };
        items.push(element);
      });
    }
    return items;
  }, items3);
  const merged = Object.assign(searchContext);
  return <closure_19 suggestedData={memo1} />;
});
const memoResult = react.memo(function RecentScreenContainer(arg0) {
  let onJumpToMedia;
  let searchContext;
  let width;
  ({ searchContext, onJumpToMedia, width } = arg0);
  const type = searchContext.type;
  if (SearchTypes.DMS === type) {
    return <closure_20 searchContext={searchContext} onJumpToMedia={onJumpToMedia} width={width} />;
  } else if (SearchTypes.GUILD === type) {
    return <closure_21 searchContext={searchContext} onJumpToMedia={onJumpToMedia} width={width} />;
  } else {
    if (SearchTypes.GUILD_CHANNEL !== type) {
      if (SearchTypes.CHANNEL !== type) {
        return null;
      }
    }
    return <closure_19 searchContext={searchContext} onJumpToMedia={onJumpToMedia} width={width} />;
  }
});
let result = size.fileFinishedImporting("modules/search/native/components/tabs/pages/RecentScreen.tsx");

export default memoResult;
