// Module ID: 19092
// Function ID: 19093
// Name: SearchTabsLayout
// Dependencies: [19, 17, 6951, 14166, 14178, 9950, 1072, 21, 5170, 12, 14173, 504, 14155, 19093, 19094, 19099, 1113, 14159, 19100, 14174, 14176, 14152, 19195, 14264, 5452, 1652, 14177, 14186, 14187, 1108, 19196, 19197, 14468, 19198, 19199, 19200, 19201, 2]
// Exports: default

// Module 19092 (SearchTabsLayout)
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1072 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1108 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5452 */;
import SmartSearchUtils from "SmartSearchUtils" /* 14155 */;
import SearchUtils from "SearchUtils" /* 14159 */;
import TrackingDefault from "Tracking" /* 14173 */;
import SearchSessionAnalyticsManagerDefault from "SearchSessionAnalyticsManager" /* 14174 */;
import SmartSearchAnalyticsManagerDefault from "SmartSearchAnalyticsManager" /* 14176 */;
import SearchPlatformActionCreatorsDefault from "SearchPlatformActionCreators" /* 14177 */;
import SearchActionCreatorsDefault from "SearchActionCreators" /* 14186 */;
import SearchTabsFetchManagerDefault from "SearchTabsFetchManager" /* 14187 */;
import SearchTabsPageDefault from "SearchTabsPage" /* 19100 */;
import react from "react" /* 19 */;
import SearchMessageStore from "SearchMessageStore" /* 6951 */;
import SearchQueryStore from "SearchQueryStore" /* 14166 */;
import SearchTabsLayoutStore from "SearchTabsLayoutStore" /* 14178 */;
import SearchConstants from "SearchConstants" /* 9950 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5170 */;
import module_12 from "module_12" /* 12 */;
import size from "module_2" /* 2 */;

let set;

let c10;
let c9;
let closure_12;
let closure_14;
let map1;
let metroImportAll;
let tmp;
const SearchPlatformUtilsDefault = tmp(14152);
function NoSearchResultsScreen(searchContext) {
  let intl;
  searchContext = searchContext.searchContext;
  let obj = searchContext(504);
  const items = [SearchQueryStore];
  const items1 = [searchContext];
  const stateFromStores = obj.useStateFromStores(items, () => SearchQueryStore.getSearchResultsQuery(searchContext), items1);
  const items2 = [searchContext, stateFromStores];
  const memo = react.useMemo(() => {
    const obj = SmartSearchUtils;
    return obj.getSmartSearchQuery(searchContext, stateFromStores);
  }, items2);
  let obj2 = searchContext(19093);
  const items3 = [searchContext];
  const smartSearchStatus = obj2.useSmartSearchStatus(memo);
  const effect = react.useEffect(() => {
    const obj = TrackingDefault;
    const obj2 = { searchContext };
    const result = obj.trackSearchEmptyResult(obj2);
  }, items3);
  if (null != memo) {
    let tmp8;
    const tmpResult = searchContext(14155);
    if (tmpResult.isSmartSearchEmptyOrErrored(smartSearchStatus)) {
      const obj3 = { smartSearchQuery: memo };
      tmp8 = closure_12(stateFromStores(19094), obj3);
    }
    return tmp8;
  }
  const obj4 = { text: intl.string(searchContext(1113).t.V6nAfF) };
  const tmp7 = stateFromStores(19099);
  intl = tmp(1113).intl;
  tmp8 = closure_12(tmp7, obj4);
}
const View = react_native.View;
({ MESSAGE_SEARCH_RESULT_TABS_SET: metroImportAll, SEARCH_MESSAGE_TAB_SENTINEL: c9, SearchTabs: c10 } = SearchConstants);
const ComponentActions = Constants.ComponentActions;
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = Fragment);
let closure_15 = createStyles.createStyles({ controls: { flex: 0, minHeight: 32 }, pages: { flex: 1 } });
let closure_16 = module_12.debounce((searchContext) => {
  const obj = TrackingDefault;
  const obj2 = { searchContext };
  return obj.trackSearchTabSelected(obj2);
}, 500);
let closure_18 = { code: "(function SearchTabsLayoutTsx1({contentOffset:contentOffset}){let[isDragging,disallowMemberListGesture]=this.__closure;var _disallowMemberListGe;isDragging.set(true);(_disallowMemberListGe=disallowMemberListGesture)===null||_disallowMemberListGe===void 0||_disallowMemberListGe.set(contentOffset.x>0);})" };
let closure_19 = { code: "(function SearchTabsLayoutTsx2(){let[isDragging,disallowMemberListGesture]=this.__closure;var _disallowMemberListGe;isDragging.set(false);(_disallowMemberListGe=disallowMemberListGesture)===null||_disallowMemberListGe===void 0||_disallowMemberListGe.set(false);})" };
let closure_20 = { code: "(function SearchTabsLayoutTsx3({contentOffset:contentOffset}){let[isDragging,disallowMemberListGesture]=this.__closure;if(isDragging.get()){var _disallowMemberListGe;(_disallowMemberListGe=disallowMemberListGesture)===null||_disallowMemberListGe===void 0||_disallowMemberListGe.set(contentOffset.x>0);}})" };
let closure_21 = react.memo(function SearchTabsLayout(searchContext) {
  let Provider;
  let SegmentedControlPages;
  let channelId;
  let disallowGesture;
  let items17;
  let obj10;
  let obj9;
  let segmentedControlState;
  let selectedTab;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp21;
  let tmp22;
  let tmp23;
  let tmp28;
  let tmp29;
  let tmp30;
  let tmp34Result;
  searchContext = searchContext.searchContext;
  const visibleTabs = searchContext.visibleTabs;
  const visibleTabCounts = searchContext.visibleTabCounts;
  const width = searchContext.width;
  selectedTab = undefined;
  let gesture;
  channelId = undefined;
  let screenIndex;
  let callback5;
  let tmp = closure_15();
  let obj = width;
  let items = [visibleTabCounts, visibleTabs, searchContext, width];
  const items1 = [searchContext];
  const memo = width.useMemo(() => {
    const items = [];
    const item = visibleTabs.forEach((id) => {
      let obj2;
      let obj3;
      let tmp2;
      const push = items.push;
      const obj = { label: obj2.getTabTitle(id), id, page: authStore2(SearchTabsPageDefault, obj3), count: tmp2 };
      tmp2 = undefined;
      obj2 = SearchUtils;
      obj3 = { tab: id, searchContext, width };
      if (visibleTabCounts != null) {
        tmp2 = visibleTabCounts[id];
      }
      push(obj);
    });
    return items;
  }, items);
  const callback = width.useCallback((arg0) => {
    const obj = SearchSessionAnalyticsManagerDefault;
    obj.setSelectedTab(searchContext, arg0);
    const obj2 = SmartSearchAnalyticsManagerDefault;
    obj2.setIsTabActive(arg0 === screenIndex.MESSAGES, SearchSessionAnalyticsManagerDefault);
    closure_16(searchContext);
    const queryString = SearchQueryStore.getQueryString(searchContext);
    const obj3 = SearchUtils;
    const searchTabFetchId = obj3.getSearchTabFetchId(searchContext, React4, queryString);
    const isFetching = SearchMessageStore.getIsFetching(searchTabFetchId);
    const isInitialFetchComplete = SearchMessageStore.getIsInitialFetchComplete(searchTabFetchId);
    const hasItem = metroImportAll.has(arg0);
    let tmp12 = !hasItem;
    const tmp3 = searchContext;
    if (hasItem) {
      tmp12 = isInitialFetchComplete;
    }
    if (!tmp12) {
      tmp12 = isFetching;
    }
    if (!tmp12) {
      const tmpResult = SearchPlatformUtilsDefault;
      const initialMessagesDebounced = tmpResult.fetchInitialMessagesDebounced(tmp3);
    }
  }, items1);
  let obj2 = searchContext(visibleTabCounts[22]);
  const searchSegmentedControlState = obj2.useSearchSegmentedControlState({ items: memo, visibleTabs, onSelectedTabChange: callback, width });
  ({ segmentedControlState, selectedTab } = searchSegmentedControlState);
  const setActiveIndex = segmentedControlState.setActiveIndex;
  let closure_2 = width.useRef(() => {
    setActiveIndex(visibleTabs.findIndex((item) => item === constants.MEDIA));
  });
  const items2 = [visibleTabs, setActiveIndex];
  const effect = width.useEffect(() => {
    ref.current = () => {
      setActiveIndex(visibleTabs.findIndex((item) => item === constants.MEDIA));
    };
  }, items2);
  const callback1 = width.useCallback(() => ref.current(), []);
  const items3 = [callback1, selectedTab];
  const memo1 = width.useMemo(() => ({ selectedTab, selectMediaTab: callback1 }), items3);
  const context = width.useContext(searchContext(visibleTabCounts[23]).SwipeForMemberListContext);
  let obj3 = context;
  if (context == null) {
    obj3 = {};
  }
  gesture = obj3.gesture;
  ({ disallowGesture, channelId } = obj3);
  screenIndex = obj3.screenIndex;
  const items4 = [gesture];
  const memo2 = obj.useMemo(() => {
    if (null != gesture) {
      const Gesture = LegacyBaseButton.Gesture;
      const NativeResult = Gesture.Native();
      return NativeResult.simultaneousWithExternalGesture(tmp);
    }
  }, items4);
  const tmp4Result = searchContext(visibleTabCounts[25]);
  const sharedValue = tmp4Result.useSharedValue(false);
  const items5 = [closure_18, sharedValue, disallowGesture];
  let c0;
  let c1;
  [tmp13, tmp14, tmp15] = items5;
  class SearchTabsLayoutTsx1 {
    constructor(contentOffset) {
      contentOffset = contentOffset.contentOffset;
      const result = _undefined.set(true);
      const obj = c1;
      if (c1 != null) {
        const result1 = obj.set(contentOffset.x > 0);
      }
    }
  }
  const items6 = [tmp14, tmp15];
  SearchTabsLayoutTsx1.__closure = items6;
  SearchTabsLayoutTsx1.__workletHash = 10796280126110;
  SearchTabsLayoutTsx1.__initData = tmp13;
  const items7 = [disallowGesture, sharedValue];
  const items8 = [closure_19, sharedValue, disallowGesture];
  c0 = undefined;
  c1 = undefined;
  [tmp17, tmp18, tmp19] = items8;
  class SearchTabsLayoutTsx2 {
    constructor() {
      const result = _undefined.set(false);
      const obj = c1;
      if (c1 != null) {
        const result1 = obj.set(false);
      }
    }
  }
  const items9 = [tmp18, tmp19];
  SearchTabsLayoutTsx2.__closure = items9;
  SearchTabsLayoutTsx2.__workletHash = 15287790770091;
  SearchTabsLayoutTsx2.__initData = tmp17;
  const items10 = [disallowGesture, sharedValue];
  const callback2 = obj.useCallback(SearchTabsLayoutTsx1, items7);
  const items11 = [closure_20, sharedValue, disallowGesture];
  c0 = undefined;
  c1 = undefined;
  [tmp21, tmp22, tmp23] = items11;
  class SearchTabsLayoutTsx3 {
    constructor(contentOffset) {
      contentOffset = contentOffset.contentOffset;
      if (_undefined.get()) {
        const obj = c1;
        if (c1 != null) {
          const result = obj.set(contentOffset.x > 0);
        }
      }
    }
  }
  const items12 = [tmp22, tmp23];
  SearchTabsLayoutTsx3.__closure = items12;
  SearchTabsLayoutTsx3.__workletHash = 8136690643693;
  SearchTabsLayoutTsx3.__initData = tmp21;
  const items13 = [disallowGesture, sharedValue];
  const callback3 = obj.useCallback(SearchTabsLayoutTsx2, items10);
  const items14 = [searchContext];
  const callback4 = obj.useCallback(SearchTabsLayoutTsx3, items13);
  callback5 = obj.useCallback(() => {
    const obj = SmartSearchAnalyticsManagerDefault;
    obj.resetSession(SearchSessionAnalyticsManagerDefault);
    const obj2 = SearchPlatformActionCreatorsDefault;
    obj2.deleteSearchQuery(searchContext);
    const obj3 = SearchActionCreatorsDefault;
    const result = obj3.clearAllSearchMesssages();
    const obj4 = SearchActionCreatorsDefault;
    const result1 = obj4.clearSearchRecentMessages();
    const obj5 = SearchUtils;
    const searchContextId = obj5.getSearchContextId(searchContext);
    const obj6 = SearchTabsFetchManagerDefault;
    obj6.cleanUp(searchContextId);
  }, items14);
  const items15 = [context, callback5];
  const effect1 = obj.useEffect(() => null == context ? (() => callback5()) : undefined, items15);
  const items16 = [channelId, screenIndex, setActiveIndex, context, callback5];
  const effect2 = obj.useEffect(() => {
    function handleChannelDetailsHidden(channelId) {
      const tmp2 = channelId.channelId === channelId && tmp === screenIndex;
      if (tmp2) {
        setActiveIndex(0, false, true);
        callback5();
      }
    }
    if (null != context) {
      const tmp = searchContext;
      let tmp2 = visibleTabCounts;
      let ComponentDispatch = searchContext(visibleTabCounts[29]).ComponentDispatch;
      const subscription = ComponentDispatch.subscribe(callback5.CHANNEL_DETAILS_HIDDEN, handleChannelDetailsHidden);
      return () => {
        const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
        ComponentDispatch.unsubscribe(ComponentActions.CHANNEL_DETAILS_HIDDEN, handleChannelDetailsHidden);
      };
    }
  }, items16);
  if (0 === segmentedControlState.items.length) {
    let obj4 = { searchContext };
    tmp34Result = closure_12(NoSearchResultsScreen, obj4);
  } else {
    let obj5 = { style: tmp.controls, children: items17 };
    let obj6 = { state: segmentedControlState };
    items17 = [closure_12(visibleTabs(tmp5[30]), obj6), ];
    const obj7 = { state: segmentedControlState };
    items17[1] = closure_12(visibleTabs(visibleTabCounts[31]), obj7);
    const items18 = [closure_13(selectedTab, obj5), ];
    const obj8 = { style: tmp.pages, children: closure_12(Provider, obj9) };
    obj9 = { value: memo1, children: closure_12(SegmentedControlPages, obj10) };
    Provider = tmp4(tmp5[18]).SearchTabsPageContext.Provider;
    obj10 = { state: segmentedControlState, bounces: null == context, nativeGesture: memo2, onBeginDragWorklet: tmp28, onEndDragWorklet: tmp29, onScrollWorklet: tmp30 };
    tmp28 = undefined;
    SegmentedControlPages = tmp4(tmp5[32]).SegmentedControlPages;
    const tmp34 = closure_13;
    const tmp35 = closure_14;
    const tmp36 = selectedTab;
    if (null != context) {
      tmp28 = callback2;
    }
    tmp29 = undefined;
    if (null != context) {
      tmp29 = callback3;
    }
    tmp30 = undefined;
    if (null != context) {
      tmp30 = callback4;
    }
    const obj11 = { children: items18 };
    items18[1] = closure_12(tmp36, obj8);
    tmp34Result = tmp34(tmp35, obj11);
  }
  return tmp34Result;
});
let result = size.fileFinishedImporting("modules/search/native/components/tabs/SearchTabsLayout.tsx");

export default function ConnectedSearchTabsLayout(searchContext) {
  let candidateTabs;
  let visibleTabCounts;
  let visibleTabs;
  searchContext = searchContext.searchContext;
  candidateTabs = undefined;
  const width = searchContext.width;
  let obj = searchContext(504);
  const items = [SearchTabsLayoutStore];
  const items1 = [searchContext];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = { visibleTabs: SearchTabsLayoutStore.getVisibleTabs(searchContext), visibleTabCounts: SearchTabsLayoutStore.getVisibleTabCounts(searchContext), candidateTabs: SearchTabsLayoutStore.getCandidateTabs(searchContext) };
    return obj;
  }, items1);
  ({ visibleTabs, visibleTabCounts, candidateTabs } = stateFromStoresObject);
  const items2 = [candidateTabs];
  const memo = react.useMemo(() => {
    set = new Set(candidateTabs);
    return set;
  }, items2);
  const obj3 = searchContext(19198);
  const autoSearchGuildChannelTab = obj3.useAutoSearchGuildChannelTab(searchContext, !memo.has(constants.GUILD_CHANNELS));
  const obj4 = searchContext(19199);
  const autoSearchMembersTab = obj4.useAutoSearchMembersTab(searchContext, !memo.has(constants.MEMBERS));
  const obj5 = searchContext(19200);
  const autoSearchPeopleTab = obj5.useAutoSearchPeopleTab(searchContext, !memo.has(constants.PEOPLE));
  const obj6 = searchContext(19201);
  const autoTrackSearchTabCountsViewedAnalytics = obj6.useAutoTrackSearchTabCountsViewedAnalytics({ searchContext, visibleTabCounts, visibleTabs });
  return closure_12(closure_21, { searchContext, visibleTabs, visibleTabCounts, width });
};
