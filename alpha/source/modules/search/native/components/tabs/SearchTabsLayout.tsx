// Module ID: 18647
// Function ID: 18648
// Name: SearchTabsLayout
// Dependencies: [19, 17, 6857, 13850, 13862, 9806, 1072, 21, 5009, 12, 13857, 504, 13839, 18648, 18649, 18654, 1114, 13843, 18655, 13858, 13860, 13836, 18750, 13948, 5298, 5090, 13861, 13870, 13871, 1109, 18751, 18752, 11445, 18753, 18754, 18755, 18756, 2]
// Exports: default

// Module 18647 (SearchTabsLayout)
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1072 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1109 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5298 */;
import SmartSearchUtils from "SmartSearchUtils" /* 13839 */;
import SearchUtils from "SearchUtils" /* 13843 */;
import search_tracking_TrackingDefault from "search/tracking/Tracking" /* 13857 */;
import SearchSessionAnalyticsManagerDefault from "SearchSessionAnalyticsManager" /* 13858 */;
import SmartSearchAnalyticsManagerDefault from "SmartSearchAnalyticsManager" /* 13860 */;
import SearchPlatformActionCreatorsDefault from "SearchPlatformActionCreators" /* 13861 */;
import SearchActionCreatorsDefault from "SearchActionCreators" /* 13870 */;
import SearchTabsFetchManagerDefault from "SearchTabsFetchManager" /* 13871 */;
import SearchTabsPageDefault from "SearchTabsPage" /* 18655 */;
import react from "react" /* 19 */;
import SearchMessageStore from "SearchMessageStore" /* 6857 */;
import SearchQueryStore from "SearchQueryStore" /* 13850 */;
import SearchTabsLayoutStore from "SearchTabsLayoutStore" /* 13862 */;
import SearchConstants from "SearchConstants" /* 9806 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
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
const SearchPlatformUtilsDefault = tmp(13836);
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
  let obj2 = searchContext(18648);
  const items3 = [searchContext];
  const smartSearchStatus = obj2.useSmartSearchStatus(memo);
  const effect = react.useEffect(() => {
    const obj = search_tracking_TrackingDefault;
    const obj2 = { searchContext };
    const result = obj.trackSearchEmptyResult(obj2);
  }, items3);
  if (null != memo) {
    let tmp8;
    const tmpResult = searchContext(13839);
    if (tmpResult.isSmartSearchEmptyOrErrored(smartSearchStatus)) {
      const obj3 = { smartSearchQuery: memo };
      tmp8 = closure_12(stateFromStores(18649), obj3);
    }
    return tmp8;
  }
  const obj4 = { text: intl.string(searchContext(1114).t.V6nAfF) };
  const tmp7 = stateFromStores(18654);
  intl = tmp(1114).intl;
  tmp8 = closure_12(tmp7, obj4);
}
const View = react_native.View;
({ MESSAGE_SEARCH_RESULT_TABS_SET: metroImportAll, SEARCH_MESSAGE_TAB_SENTINEL: c9, SearchTabs: c10 } = SearchConstants);
const ComponentActions = Constants.ComponentActions;
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = Fragment);
let closure_15 = createStyles.createStyles({ controls: { flex: 0, minHeight: 32 }, pages: { flex: 1 } });
let closure_16 = module_12.debounce((searchContext) => {
  const obj = search_tracking_TrackingDefault;
  const obj2 = { searchContext };
  return obj.trackSearchTabSelected(obj2);
}, 500);
const __initData = { code: "function SearchTabsLayoutTsx1({contentOffset:contentOffset}){const{isDragging,disallowMemberListGesture}=this.__closure;var _disallowMemberListGe;isDragging.set(true);(_disallowMemberListGe=disallowMemberListGesture)===null||_disallowMemberListGe===void 0||_disallowMemberListGe.set(contentOffset.x>0);}" };
const __initData2 = { code: "function SearchTabsLayoutTsx2(){const{isDragging,disallowMemberListGesture}=this.__closure;var _disallowMemberListGe;isDragging.set(false);(_disallowMemberListGe=disallowMemberListGesture)===null||_disallowMemberListGe===void 0||_disallowMemberListGe.set(false);}" };
const __initData3 = { code: "function SearchTabsLayoutTsx3({contentOffset:contentOffset}){const{isDragging,disallowMemberListGesture}=this.__closure;if(isDragging.get()){var _disallowMemberListGe;(_disallowMemberListGe=disallowMemberListGesture)===null||_disallowMemberListGe===void 0||_disallowMemberListGe.set(contentOffset.x>0);}}" };
let closure_21 = react.memo(function SearchTabsLayout(searchContext) {
  let Provider;
  let SegmentedControlPages;
  let items11;
  let obj10;
  let obj9;
  let segmentedControlState;
  let selectedTab;
  let tmp19;
  let tmp20;
  let tmp21;
  let tmp25Result;
  searchContext = searchContext.searchContext;
  const visibleTabs = searchContext.visibleTabs;
  const visibleTabCounts = searchContext.visibleTabCounts;
  const width = searchContext.width;
  selectedTab = undefined;
  let gesture;
  let disallowGesture;
  let channelId;
  let screenIndex;
  let sharedValue;
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
    obj2.setIsTabActive(arg0 === channelId.MESSAGES, SearchSessionAnalyticsManagerDefault);
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
  disallowGesture = obj3.disallowGesture;
  channelId = obj3.channelId;
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
  sharedValue = tmp4Result.useSharedValue(false);
  class G {
    constructor(contentOffset) {
      contentOffset = contentOffset.contentOffset;
      const result = sharedValue.set(true);
      const obj = disallowGesture;
      if (disallowGesture != null) {
        const result1 = obj.set(contentOffset.x > 0);
      }
    }
  }
  G.__closure = { isDragging: sharedValue, disallowMemberListGesture: disallowGesture };
  G.__workletHash = 766628353255;
  G.__initData = __initData;
  const items5 = [disallowGesture, sharedValue];
  class D {
    constructor() {
      const result = sharedValue.set(false);
      const obj = disallowGesture;
      if (disallowGesture != null) {
        const result1 = obj.set(false);
      }
    }
  }
  D.__closure = { isDragging: sharedValue, disallowMemberListGesture: disallowGesture };
  D.__workletHash = 5683301645106;
  D.__initData = __initData2;
  const items6 = [disallowGesture, sharedValue];
  const callback2 = obj.useCallback(G, items5);
  class A {
    constructor(contentOffset) {
      contentOffset = contentOffset.contentOffset;
      if (sharedValue.get()) {
        const obj = disallowGesture;
        if (disallowGesture != null) {
          const result = obj.set(contentOffset.x > 0);
        }
      }
    }
  }
  A.__closure = { isDragging: sharedValue, disallowMemberListGesture: disallowGesture };
  A.__workletHash = 229712012692;
  A.__initData = __initData3;
  const items7 = [disallowGesture, sharedValue];
  const callback3 = obj.useCallback(D, items6);
  const items8 = [searchContext];
  const callback4 = obj.useCallback(A, items7);
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
  }, items8);
  const items9 = [context, callback5];
  const effect1 = obj.useEffect(() => null == context ? (() => callback5()) : undefined, items9);
  const items10 = [channelId, screenIndex, setActiveIndex, context, callback5];
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
      const subscription = ComponentDispatch.subscribe(screenIndex.CHANNEL_DETAILS_HIDDEN, handleChannelDetailsHidden);
      return () => {
        const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
        ComponentDispatch.unsubscribe(ComponentActions.CHANNEL_DETAILS_HIDDEN, handleChannelDetailsHidden);
      };
    }
  }, items10);
  if (0 === segmentedControlState.items.length) {
    let obj4 = { searchContext };
    tmp25Result = sharedValue(NoSearchResultsScreen, obj4);
  } else {
    let obj5 = { style: tmp.controls, children: items11 };
    let obj6 = { state: segmentedControlState };
    items11 = [sharedValue(visibleTabs(tmp5[30]), obj6), ];
    const obj7 = { state: segmentedControlState };
    items11[1] = sharedValue(visibleTabs(visibleTabCounts[31]), obj7);
    const items12 = [callback5(selectedTab, obj5), ];
    const obj8 = { style: tmp.pages, children: sharedValue(Provider, obj9) };
    obj9 = { value: memo1, children: sharedValue(SegmentedControlPages, obj10) };
    Provider = tmp4(tmp5[18]).SearchTabsPageContext.Provider;
    obj10 = { state: segmentedControlState, bounces: null == context, nativeGesture: memo2, onBeginDragWorklet: tmp19, onEndDragWorklet: tmp20, onScrollWorklet: tmp21 };
    tmp19 = undefined;
    SegmentedControlPages = tmp4(tmp5[32]).SegmentedControlPages;
    const tmp25 = callback5;
    const tmp26 = closure_14;
    const tmp27 = selectedTab;
    if (null != context) {
      tmp19 = callback2;
    }
    tmp20 = undefined;
    if (null != context) {
      tmp20 = callback3;
    }
    tmp21 = undefined;
    if (null != context) {
      tmp21 = callback4;
    }
    const obj11 = { children: items12 };
    items12[1] = sharedValue(tmp27, obj8);
    tmp25Result = tmp25(tmp26, obj11);
  }
  return tmp25Result;
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
  const obj3 = searchContext(18753);
  const autoSearchGuildChannelTab = obj3.useAutoSearchGuildChannelTab(searchContext, !memo.has(constants.GUILD_CHANNELS));
  const obj4 = searchContext(18754);
  const autoSearchMembersTab = obj4.useAutoSearchMembersTab(searchContext, !memo.has(constants.MEMBERS));
  const obj5 = searchContext(18755);
  const autoSearchPeopleTab = obj5.useAutoSearchPeopleTab(searchContext, !memo.has(constants.PEOPLE));
  const obj6 = searchContext(18756);
  const autoTrackSearchTabCountsViewedAnalytics = obj6.useAutoTrackSearchTabCountsViewedAnalytics({ searchContext, visibleTabCounts, visibleTabs });
  return closure_12(closure_21, { searchContext, visibleTabs, visibleTabCounts, width });
};
