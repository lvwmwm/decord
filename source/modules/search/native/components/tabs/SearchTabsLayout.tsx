// Module ID: 15332
// Function ID: 116973
// Name: NoSearchResultsScreen
// Dependencies: [31, 27, 5660, 10077, 11407, 9103, 653, 33, 4130, 22, 10076, 15333, 1212, 10078, 15334, 10091, 11398, 15409, 15316, 5217, 3991, 11406, 10085, 10086, 1207, 15410, 15411, 8758, 566, 15412, 15413, 15414, 15415, 2]
// Exports: default

// Module 15332 (NoSearchResultsScreen)
import importAllResult from "useAutoSearchPeopleTab";
import { View } from "SegmentedControlPage";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import SearchAutocompleteSelectAnalyticsActions from "SearchAutocompleteSelectAnalyticsActions";
import { ComponentActions } from "ME";
import jsxProd from "set";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import apply from "module_10085";

let closure_10;
let closure_12;
let closure_13;
let closure_14;
let closure_8;
let closure_9;
const require = arg1;
function NoSearchResultsScreen(searchContext) {
  searchContext = searchContext.searchContext;
  const items = [searchContext];
  const effect = importAllResult.useEffect(() => {
    let obj = outer1_1(outer1_2[10]);
    obj = { searchContext };
    const result = obj.trackSearchEmptyResult(obj);
  }, items);
  let obj = {};
  const intl = searchContext(1212).intl;
  obj.text = intl.string(searchContext(1212).t.V6nAfF);
  return callback(importDefault(15333), obj);
}
({ MESSAGE_SEARCH_RESULT_TABS_SET: closure_8, SEARCH_MESSAGE_TAB_SENTINEL: closure_9, SearchTabs: closure_10 } = SearchAutocompleteSelectAnalyticsActions);
({ jsx: closure_12, jsxs: closure_13, Fragment: closure_14 } = jsxProd);
let closure_15 = _createForOfIteratorHelperLoose.createStyles({ controls: { flex: 0, minHeight: 32 }, pages: { flex: 1 } });
let closure_16 = apply.debounce((searchContext) => {
  let obj = importDefault(10076);
  obj = { searchContext };
  return obj.trackSearchTabSelected(obj);
}, 500);
let closure_17 = { code: "function SearchTabsLayoutTsx1({contentOffset:contentOffset}){const{isDragging,disallowMemberListGesture}=this.__closure;var _disallowMemberListGe;isDragging.set(true);(_disallowMemberListGe=disallowMemberListGesture)===null||_disallowMemberListGe===void 0||_disallowMemberListGe.set(contentOffset.x>0);}" };
let closure_18 = { code: "function SearchTabsLayoutTsx2(){const{isDragging,disallowMemberListGesture}=this.__closure;var _disallowMemberListGe;isDragging.set(false);(_disallowMemberListGe=disallowMemberListGesture)===null||_disallowMemberListGe===void 0||_disallowMemberListGe.set(false);}" };
let closure_19 = { code: "function SearchTabsLayoutTsx3({contentOffset:contentOffset}){const{isDragging,disallowMemberListGesture}=this.__closure;if(isDragging.get()){var _disallowMemberListGe;(_disallowMemberListGe=disallowMemberListGesture)===null||_disallowMemberListGe===void 0||_disallowMemberListGe.set(contentOffset.x>0);}}" };
let closure_20 = importAllResult.memo((searchContext) => {
  let segmentedControlState;
  let selectedTab;
  searchContext = searchContext.searchContext;
  const visibleTabs = searchContext.visibleTabs;
  const visibleTabCounts = searchContext.visibleTabCounts;
  const width = searchContext.width;
  let gesture;
  let disallowGesture;
  let channelId;
  let screenIndex;
  let sharedValue;
  let callback4;
  const tmp = callback2();
  let items = [visibleTabCounts, visibleTabs, searchContext, width];
  const items1 = [searchContext];
  const memo = width.useMemo(() => {
    const items = [];
    const item = visibleTabs.forEach((id) => {
      let obj = { label: searchContext(visibleTabCounts[13]).getTabTitle(id), id };
      obj = { tab: id, searchContext: items, width: outer1_3 };
      obj.page = sharedValue(visibleTabs(visibleTabCounts[14]), obj);
      let tmp2;
      if (null != outer1_2) {
        tmp2 = outer1_2[id];
      }
      let tmp4;
      if (null != tmp2) {
        tmp4 = tmp2;
      }
      obj.count = tmp4;
      items.push(obj);
    });
    return items;
  }, items);
  const callback = width.useCallback((arg0) => {
    visibleTabs(visibleTabCounts[15]).setSelectedTab(searchContext, arg0);
    outer1_16(searchContext);
    const queryString = tmp5.getQueryString(searchContext);
    const obj = visibleTabs(visibleTabCounts[15]);
    const searchTabFetchId = searchContext(visibleTabCounts[13]).getSearchTabFetchId(searchContext, disallowGesture, queryString);
    const isFetching = setActiveIndex.getIsFetching(searchTabFetchId);
    const isInitialFetchComplete = setActiveIndex.getIsInitialFetchComplete(searchTabFetchId);
    const obj2 = searchContext(visibleTabCounts[13]);
    if (!tmp7) {
      const initialMessagesDebounced = visibleTabs(visibleTabCounts[16]).fetchInitialMessagesDebounced(searchContext);
      const obj3 = visibleTabs(visibleTabCounts[16]);
    }
  }, items1);
  let obj = searchContext(visibleTabCounts[17]);
  const searchSegmentedControlState = obj.useSearchSegmentedControlState({ items: memo, visibleTabs, onSelectedTabChange: callback, width });
  ({ segmentedControlState, selectedTab } = searchSegmentedControlState);
  let setActiveIndex = segmentedControlState.setActiveIndex;
  const tmp5 = (function useSelectMediaTab(searchTabs) {
    searchTabs = searchTabs.searchTabs;
    const setActiveIndex = searchTabs.setActiveIndex;
    let closure_2 = width.useRef(() => {
      setActiveIndex(searchTabs.findIndex((arg0) => arg0 === channelId.MEDIA));
    });
    const items = [searchTabs, setActiveIndex];
    const effect = width.useEffect(() => {
      closure_2.current = () => {
        outer1_1(outer1_0.findIndex((arg0) => arg0 === channelId.MEDIA));
      };
    }, items);
    return width.useCallback(() => ref.current(), []);
  })({ searchTabs: visibleTabs, setActiveIndex });
  let closure_6 = tmp5;
  const items2 = [tmp5, selectedTab];
  const memo1 = width.useMemo(() => ({ selectedTab, selectMediaTab: closure_6 }), items2);
  const context = width.useContext(searchContext(visibleTabCounts[18]).SwipeForMemberListContext);
  obj = context;
  if (null == context) {
    obj = {};
  }
  gesture = obj.gesture;
  disallowGesture = obj.disallowGesture;
  channelId = obj.channelId;
  screenIndex = obj.screenIndex;
  const items3 = [gesture];
  const memo2 = width.useMemo(() => {
    if (null != gesture) {
      const Gesture = searchContext(visibleTabCounts[19]).Gesture;
      return Gesture.Native().simultaneousWithExternalGesture(gesture);
    }
  }, items3);
  let obj2 = searchContext(visibleTabCounts[20]);
  sharedValue = obj2.useSharedValue(false);
  class D {
    constructor(arg0) {
      result = c12.set(true);
      if (null != disallowGesture) {
        tmp2 = disallowGesture;
        num = 0;
        result1 = disallowGesture.set(searchContext.contentOffset.x > 0);
      }
      return;
    }
  }
  D.__closure = { isDragging: sharedValue, disallowMemberListGesture: disallowGesture };
  D.__workletHash = 766628353255;
  D.__initData = closure_17;
  const items4 = [disallowGesture, sharedValue];
  class G {
    constructor() {
      result = c12.set(false);
      if (null != disallowGesture) {
        tmp2 = disallowGesture;
        result1 = disallowGesture.set(false);
      }
      return;
    }
  }
  G.__closure = { isDragging: sharedValue, disallowMemberListGesture: disallowGesture };
  G.__workletHash = 5683301645106;
  G.__initData = closure_18;
  const items5 = [disallowGesture, sharedValue];
  const callback1 = width.useCallback(D, items4);
  class A {
    constructor(arg0) {
      if (c12.get()) {
        tmp = disallowGesture;
        tmp2 = null;
        if (null != disallowGesture) {
          tmp3 = disallowGesture;
          num = 0;
          result = disallowGesture.set(searchContext.contentOffset.x > 0);
        }
      }
      return;
    }
  }
  A.__closure = { isDragging: sharedValue, disallowMemberListGesture: disallowGesture };
  A.__workletHash = 229712012692;
  A.__initData = closure_19;
  const items6 = [disallowGesture, sharedValue];
  callback2 = width.useCallback(G, items5);
  const items7 = [searchContext];
  const callback3 = width.useCallback(A, items6);
  callback4 = width.useCallback(() => {
    visibleTabs(visibleTabCounts[21]).deleteSearchQuery(searchContext);
    const obj = visibleTabs(visibleTabCounts[21]);
    const result = visibleTabs(visibleTabCounts[22]).clearAllSearchMesssages();
    const obj2 = visibleTabs(visibleTabCounts[22]);
    const result1 = visibleTabs(visibleTabCounts[22]).clearSearchRecentMessages();
    const obj3 = visibleTabs(visibleTabCounts[22]);
    const searchContextId = searchContext(visibleTabCounts[13]).getSearchContextId(searchContext);
    const obj4 = searchContext(visibleTabCounts[13]);
    visibleTabs(visibleTabCounts[23]).cleanUp(searchContextId);
  }, items7);
  const items8 = [context, callback4];
  let effect = width.useEffect(() => null == context ? (() => outer1_13()) : undefined, items8);
  const items9 = [channelId, screenIndex, setActiveIndex, context, callback4];
  const effect1 = width.useEffect(() => {
    function handleChannelDetailsHidden(channelId) {
      let tmp2 = channelId.channelId === outer1_10;
      if (tmp2) {
        tmp2 = tmp === outer1_11;
      }
      if (tmp2) {
        outer1_5(0, false, true);
        outer1_13();
      }
    }
    if (null != context) {
      let ComponentDispatch = searchContext(visibleTabCounts[24]).ComponentDispatch;
      const subscription = ComponentDispatch.subscribe(screenIndex.CHANNEL_DETAILS_HIDDEN, handleChannelDetailsHidden);
      return () => {
        const ComponentDispatch = searchContext(visibleTabCounts[24]).ComponentDispatch;
        ComponentDispatch.unsubscribe(screenIndex.CHANNEL_DETAILS_HIDDEN, handleChannelDetailsHidden);
      };
    }
  }, items9);
  if (0 === segmentedControlState.items.length) {
    obj = { searchContext };
    let tmp22Result = sharedValue(NoSearchResultsScreen, obj);
  } else {
    const obj1 = {};
    obj2 = { style: tmp.controls };
    let obj3 = { state: segmentedControlState };
    const items10 = [sharedValue(visibleTabs(visibleTabCounts[25]), obj3), ];
    let obj4 = { state: segmentedControlState };
    items10[1] = sharedValue(visibleTabs(visibleTabCounts[26]), obj4);
    obj2.children = items10;
    const items11 = [callback4(selectedTab, obj2), ];
    const obj5 = { style: tmp.pages };
    const obj6 = { value: memo1 };
    const obj7 = { state: segmentedControlState, bounces: null == context, nativeGesture: memo2 };
    let tmp16;
    if (null != context) {
      tmp16 = callback1;
    }
    obj7.onBeginDragWorklet = tmp16;
    let tmp17;
    if (null != context) {
      tmp17 = callback2;
    }
    obj7.onEndDragWorklet = tmp17;
    let tmp18;
    if (null != context) {
      tmp18 = callback3;
    }
    obj7.onScrollWorklet = tmp18;
    obj6.children = sharedValue(searchContext(visibleTabCounts[27]).SegmentedControlPages, obj7);
    obj5.children = sharedValue(searchContext(visibleTabCounts[14]).SearchTabsPageContext.Provider, obj6);
    items11[1] = sharedValue(selectedTab, obj5);
    obj1.children = items11;
    tmp22Result = callback4(closure_14, obj1);
    const tmp22 = callback4;
    const tmp23 = closure_14;
    const tmp24 = selectedTab;
    const tmp29 = sharedValue;
    const tmp30 = sharedValue;
    const tmp32 = sharedValue;
  }
  return tmp22Result;
});
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/search/native/components/tabs/SearchTabsLayout.tsx");

export default function ConnectedSearchTabsLayout(width) {
  let candidateTabs;
  let visibleTabCounts;
  let visibleTabs;
  const searchContext = width.searchContext;
  const items = [closure_7];
  const items1 = [searchContext];
  const stateFromStoresObject = searchContext(566).useStateFromStoresObject(items, () => ({ visibleTabs: outer1_7.getVisibleTabs(searchContext), visibleTabCounts: outer1_7.getVisibleTabCounts(searchContext), candidateTabs: outer1_7.getCandidateTabs(searchContext) }), items1);
  ({ visibleTabs, visibleTabCounts, candidateTabs } = stateFromStoresObject);
  const items2 = [candidateTabs];
  const memo = importAllResult.useMemo(() => new Set(candidateTabs), items2);
  const obj = searchContext(566);
  const autoSearchGuildChannelTab = searchContext(15412).useAutoSearchGuildChannelTab(searchContext, !memo.has(constants.GUILD_CHANNELS));
  const obj3 = searchContext(15412);
  const autoSearchMembersTab = searchContext(15413).useAutoSearchMembersTab(searchContext, !memo.has(constants.MEMBERS));
  const obj4 = searchContext(15413);
  const autoSearchPeopleTab = searchContext(15414).useAutoSearchPeopleTab(searchContext, !memo.has(constants.PEOPLE));
  const obj5 = searchContext(15414);
  const autoTrackSearchTabCountsViewedAnalytics = searchContext(15415).useAutoTrackSearchTabCountsViewedAnalytics({ searchContext, visibleTabCounts, visibleTabs });
  return callback(closure_20, { searchContext, visibleTabs, visibleTabCounts, width: width.width });
};
