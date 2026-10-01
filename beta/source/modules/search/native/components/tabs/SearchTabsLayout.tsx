// Module ID: 16451
// Function ID: 16452
// Name: SearchTabsLayout
// Dependencies: [19, 17, 6699, 11822, 11845, 7303, 1074, 21, 4836, 12, 11841, 16452, 11849, 16453, 16454, 1115, 11823, 16455, 11842, 11821, 16544, 16435, 6073, 4566, 11844, 11830, 11831, 1110, 16545, 16546, 12113, 504, 16547, 16548, 16549, 16550, 2]
// Exports: default

// Module 16451 (SearchTabsLayout)
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1074 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1110 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6073 */;
import SearchUtils from "SearchUtils" /* 11823 */;
import SearchActionCreatorsDefault from "SearchActionCreators" /* 11830 */;
import SearchTabsFetchManagerDefault from "SearchTabsFetchManager" /* 11831 */;
import search_tracking_TrackingDefault from "search/tracking/Tracking" /* 11841 */;
import SearchSessionAnalyticsManagerDefault from "SearchSessionAnalyticsManager" /* 11842 */;
import SearchPlatformActionCreatorsDefault from "SearchPlatformActionCreators" /* 11844 */;
import ErrorScreenDefault from "ErrorScreen" /* 16454 */;
import SearchTabsPageDefault from "SearchTabsPage" /* 16455 */;
import react from "react" /* 19 */;
import SearchMessageStore from "SearchMessageStore" /* 6699 */;
import SearchQueryStore from "SearchQueryStore" /* 11822 */;
import SearchTabsLayoutStore from "SearchTabsLayoutStore" /* 11845 */;
import SearchConstants from "SearchConstants" /* 7303 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
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
const SearchPlatformUtilsDefault = tmp(11821);
function NoSearchResultsScreen(searchContext) {
  let intl;
  let tmp4Result;
  searchContext = searchContext.searchContext;
  let obj = searchContext(16452);
  const items = [searchContext];
  const status = obj.useIntelligenceSearchStatus(searchContext).status;
  const effect = react.useEffect(() => {
    const obj = search_tracking_TrackingDefault;
    const obj2 = { searchContext };
    const result = obj.trackSearchEmptyResult(obj2);
  }, items);
  let obj2 = searchContext(11849);
  if (obj2.isIntelligenceSearchEmptyOrErrored(status)) {
    tmp4Result = tmp4(tmp5(16453), {});
  } else {
    const obj3 = { text: intl.string(searchContext(1115).t.V6nAfF) };
    const tmp5Result = ErrorScreenDefault;
    intl = tmp(1115).intl;
    tmp4Result = tmp4(tmp5Result, obj3);
  }
  return tmp4Result;
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
let closure_21 = react.memo((searchContext) => {
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
      const obj = { label: obj2.getTabTitle(id), id, page: closure_12(SearchTabsPageDefault, obj3), count: tmp2 };
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
    closure_16(searchContext);
    const queryString = SearchQueryStore.getQueryString(searchContext);
    const obj2 = SearchUtils;
    const searchTabFetchId = obj2.getSearchTabFetchId(searchContext, React4, queryString);
    const isFetching = SearchMessageStore.getIsFetching(searchTabFetchId);
    const isInitialFetchComplete = SearchMessageStore.getIsInitialFetchComplete(searchTabFetchId);
    const hasItem = metroImportAll.has(arg0);
    let tmp11 = !hasItem;
    const tmp3 = searchContext;
    if (hasItem) {
      tmp11 = isInitialFetchComplete;
    }
    if (!tmp11) {
      tmp11 = isFetching;
    }
    if (!tmp11) {
      const tmpResult = SearchPlatformUtilsDefault;
      const initialMessagesDebounced = tmpResult.fetchInitialMessagesDebounced(tmp3);
    }
  }, items1);
  let obj2 = searchContext(visibleTabCounts[20]);
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
  const context = width.useContext(searchContext(visibleTabCounts[21]).SwipeForMemberListContext);
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
  const tmp4Result = searchContext(visibleTabCounts[23]);
  sharedValue = tmp4Result.useSharedValue(false);
  class D {
    constructor(contentOffset) {
      contentOffset = contentOffset.contentOffset;
      const result = sharedValue.set(true);
      const obj = disallowGesture;
      if (disallowGesture != null) {
        const result1 = obj.set(contentOffset.x > 0);
      }
    }
  }
  D.__closure = { isDragging: sharedValue, disallowMemberListGesture: disallowGesture };
  D.__workletHash = 766628353255;
  D.__initData = __initData;
  const items5 = [disallowGesture, sharedValue];
  class G {
    constructor() {
      const result = sharedValue.set(false);
      const obj = disallowGesture;
      if (disallowGesture != null) {
        const result1 = obj.set(false);
      }
    }
  }
  G.__closure = { isDragging: sharedValue, disallowMemberListGesture: disallowGesture };
  G.__workletHash = 5683301645106;
  G.__initData = __initData2;
  const items6 = [disallowGesture, sharedValue];
  const callback2 = obj.useCallback(D, items5);
  class I {
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
  I.__closure = { isDragging: sharedValue, disallowMemberListGesture: disallowGesture };
  I.__workletHash = 229712012692;
  I.__initData = __initData3;
  const items7 = [disallowGesture, sharedValue];
  const callback3 = obj.useCallback(G, items6);
  const items8 = [searchContext];
  const callback4 = obj.useCallback(I, items7);
  callback5 = obj.useCallback(() => {
    const obj = SearchPlatformActionCreatorsDefault;
    obj.deleteSearchQuery(searchContext);
    const obj2 = SearchActionCreatorsDefault;
    const result = obj2.clearAllSearchMesssages();
    const obj3 = SearchActionCreatorsDefault;
    const result1 = obj3.clearSearchRecentMessages();
    const obj4 = SearchUtils;
    const searchContextId = obj4.getSearchContextId(searchContext);
    const obj5 = SearchTabsFetchManagerDefault;
    obj5.cleanUp(searchContextId);
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
      let ComponentDispatch = searchContext(visibleTabCounts[27]).ComponentDispatch;
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
    const obj6 = { state: segmentedControlState };
    items11 = [sharedValue(visibleTabs(tmp5[28]), obj6), ];
    const obj7 = { state: segmentedControlState };
    items11[1] = sharedValue(visibleTabs(visibleTabCounts[29]), obj7);
    const items12 = [callback5(selectedTab, obj5), ];
    const obj8 = { style: tmp.pages, children: sharedValue(Provider, obj9) };
    obj9 = { value: memo1, children: sharedValue(SegmentedControlPages, obj10) };
    Provider = tmp4(tmp5[17]).SearchTabsPageContext.Provider;
    obj10 = { state: segmentedControlState, bounces: null == context, nativeGesture: memo2, onBeginDragWorklet: tmp19, onEndDragWorklet: tmp20, onScrollWorklet: tmp21 };
    tmp19 = undefined;
    SegmentedControlPages = tmp4(tmp5[30]).SegmentedControlPages;
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
  const obj3 = searchContext(16547);
  const autoSearchGuildChannelTab = obj3.useAutoSearchGuildChannelTab(searchContext, !memo.has(constants.GUILD_CHANNELS));
  const obj4 = searchContext(16548);
  const autoSearchMembersTab = obj4.useAutoSearchMembersTab(searchContext, !memo.has(constants.MEMBERS));
  const obj5 = searchContext(16549);
  const autoSearchPeopleTab = obj5.useAutoSearchPeopleTab(searchContext, !memo.has(constants.PEOPLE));
  const obj6 = searchContext(16550);
  const autoTrackSearchTabCountsViewedAnalytics = obj6.useAutoTrackSearchTabCountsViewedAnalytics({ searchContext, visibleTabCounts, visibleTabs });
  return closure_12(closure_21, { searchContext, visibleTabs, visibleTabCounts, width });
};
