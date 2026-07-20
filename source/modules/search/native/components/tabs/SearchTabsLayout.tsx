// Module ID: 15198
// Function ID: 114702
// Name: NoSearchResultsScreen
// Dependencies: []
// Exports: default

// Module 15198 (NoSearchResultsScreen)
function NoSearchResultsScreen(searchContext) {
  searchContext = searchContext.searchContext;
  const arg1 = searchContext;
  const items = [searchContext];
  const effect = importAllResult.useEffect(() => {
    let obj = callback(closure_2[10]);
    obj = { searchContext };
    const result = obj.trackSearchEmptyResult(obj);
  }, items);
  const obj = {};
  const intl = arg1(dependencyMap[12]).intl;
  obj.text = intl.string(arg1(dependencyMap[12]).t.V6nAfF);
  return callback(importDefault(dependencyMap[11]), obj);
}
const importAllResult = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
({ MESSAGE_SEARCH_RESULT_TABS_SET: closure_8, SEARCH_MESSAGE_TAB_SENTINEL: closure_9, SearchTabs: closure_10 } = arg1(dependencyMap[5]));
const ComponentActions = arg1(dependencyMap[6]).ComponentActions;
const tmp2 = arg1(dependencyMap[5]);
({ jsx: closure_12, jsxs: closure_13, Fragment: closure_14 } = arg1(dependencyMap[7]));
const tmp3 = arg1(dependencyMap[7]);
let closure_15 = arg1(dependencyMap[8]).createStyles({ controls: { "Null": "Array", "Null": "isArray" }, pages: { flex: 1 } });
const obj2 = arg1(dependencyMap[8]);
let closure_16 = arg1(dependencyMap[9]).debounce((searchContext) => {
  let obj = importDefault(dependencyMap[10]);
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
  const arg1 = searchContext;
  const visibleTabs = searchContext.visibleTabs;
  const importDefault = visibleTabs;
  const visibleTabCounts = searchContext.visibleTabCounts;
  const dependencyMap = visibleTabCounts;
  const width = searchContext.width;
  let gesture;
  let disallowGesture;
  let channelId;
  let ComponentActions;
  let sharedValue;
  let callback4;
  const tmp = callback2();
  const items = [visibleTabCounts, visibleTabs, searchContext, width];
  const items1 = [searchContext];
  const memo = importAllResult.useMemo(() => {
    const items = [];
    const searchContext = items;
    const item = visibleTabs.forEach((id) => {
      let obj = { label: items(closure_2[13]).getTabTitle(id), id };
      obj = { tab: id, searchContext: items, width: closure_3 };
      obj.page = callback2(callback(closure_2[14]), obj);
      let tmp2;
      if (null != closure_2) {
        tmp2 = closure_2[id];
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
  const callback = importAllResult.useCallback((arg0) => {
    visibleTabs(visibleTabCounts[15]).setSelectedTab(searchContext, arg0);
    callback(searchContext);
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
  let obj = arg1(dependencyMap[17]);
  const searchSegmentedControlState = obj.useSearchSegmentedControlState({ items: memo, visibleTabs, onSelectedTabChange: callback, width });
  ({ segmentedControlState, selectedTab } = searchSegmentedControlState);
  const View = selectedTab;
  const setActiveIndex = segmentedControlState.setActiveIndex;
  let closure_5 = setActiveIndex;
  const tmp5 = function useSelectMediaTab(searchTabs) {
    searchTabs = searchTabs.searchTabs;
    const searchContext = searchTabs;
    const setActiveIndex = searchTabs.setActiveIndex;
    const visibleTabs = setActiveIndex;
    let closure_2 = width.useRef(() => {
      setActiveIndex(searchTabs.findIndex((arg0) => arg0 === constants.MEDIA));
    });
    const items = [searchTabs, setActiveIndex];
    const effect = width.useEffect(() => {
      closure_2.current = () => {
        callback(closure_0.findIndex((arg0) => arg0 === constants.MEDIA));
      };
    }, items);
    return width.useCallback(() => ref.current(), []);
  }({ searchTabs: visibleTabs, setActiveIndex });
  let closure_6 = tmp5;
  const items2 = [tmp5, selectedTab];
  const memo1 = importAllResult.useMemo(() => ({ selectedTab, selectMediaTab: tmp5 }), items2);
  const context = importAllResult.useContext(arg1(dependencyMap[18]).SwipeForMemberListContext);
  let closure_7 = context;
  obj = context;
  if (null == context) {
    obj = {};
  }
  gesture = obj.gesture;
  disallowGesture = obj.disallowGesture;
  channelId = obj.channelId;
  const screenIndex = obj.screenIndex;
  ComponentActions = screenIndex;
  const items3 = [gesture];
  const memo2 = importAllResult.useMemo(() => {
    if (null != gesture) {
      const Gesture = searchContext(visibleTabCounts[19]).Gesture;
      return Gesture.Native().simultaneousWithExternalGesture(gesture);
    }
  }, items3);
  let obj2 = arg1(dependencyMap[20]);
  sharedValue = obj2.useSharedValue(false);
  class D {
    constructor(arg0) {
      result = closure_12.set(true);
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
      result = closure_12.set(false);
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
  const callback1 = importAllResult.useCallback(D, items4);
  class A {
    constructor(arg0) {
      if (closure_12.get()) {
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
  const callback2 = importAllResult.useCallback(G, items5);
  const items7 = [searchContext];
  const callback3 = importAllResult.useCallback(A, items6);
  callback4 = importAllResult.useCallback(() => {
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
  const effect = importAllResult.useEffect(() => null == context ? () => callback() : undefined, items8);
  const items9 = [channelId, screenIndex, setActiveIndex, context, callback4];
  const effect1 = importAllResult.useEffect(() => {
    function handleChannelDetailsHidden(channelId) {
      let tmp2 = channelId.channelId === closure_10;
      if (tmp2) {
        tmp2 = tmp === closure_11;
      }
      if (tmp2) {
        callback(0, false, true);
        callback2();
      }
    }
    const searchContext = handleChannelDetailsHidden;
    if (null != context) {
      const ComponentDispatch = searchContext(visibleTabCounts[24]).ComponentDispatch;
      const subscription = ComponentDispatch.subscribe(screenIndex.CHANNEL_DETAILS_HIDDEN, handleChannelDetailsHidden);
      return () => {
        const ComponentDispatch = handleChannelDetailsHidden(closure_2[24]).ComponentDispatch;
        ComponentDispatch.unsubscribe(constants.CHANNEL_DETAILS_HIDDEN, handleChannelDetailsHidden);
      };
    }
  }, items9);
  if (0 === segmentedControlState.items.length) {
    obj = { searchContext };
    let tmp22Result = sharedValue(NoSearchResultsScreen, obj);
  } else {
    const obj1 = {};
    obj2 = { style: tmp.controls };
    const obj3 = { state: segmentedControlState };
    const items10 = [sharedValue(importDefault(dependencyMap[25]), obj3), ];
    const obj4 = { state: segmentedControlState };
    items10[1] = sharedValue(importDefault(dependencyMap[26]), obj4);
    obj2.children = items10;
    const items11 = [callback4(View, obj2), ];
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
    obj6.children = sharedValue(arg1(dependencyMap[27]).SegmentedControlPages, obj7);
    obj5.children = sharedValue(arg1(dependencyMap[14]).SearchTabsPageContext.Provider, obj6);
    items11[1] = sharedValue(View, obj5);
    obj1.children = items11;
    tmp22Result = callback4(closure_14, obj1);
    const tmp22 = callback4;
    const tmp23 = closure_14;
    const tmp24 = View;
    const tmp29 = sharedValue;
    const tmp30 = sharedValue;
    const tmp32 = sharedValue;
  }
  return tmp22Result;
});
const obj3 = arg1(dependencyMap[9]);
const result = arg1(dependencyMap[33]).fileFinishedImporting("modules/search/native/components/tabs/SearchTabsLayout.tsx");

export default function ConnectedSearchTabsLayout(width) {
  let candidateTabs;
  let visibleTabCounts;
  let visibleTabs;
  const searchContext = width.searchContext;
  const arg1 = searchContext;
  const items = [closure_7];
  const items1 = [searchContext];
  const stateFromStoresObject = arg1(dependencyMap[28]).useStateFromStoresObject(items, () => ({ visibleTabs: uiStore.getVisibleTabs(searchContext), visibleTabCounts: uiStore.getVisibleTabCounts(searchContext), candidateTabs: uiStore.getCandidateTabs(searchContext) }), items1);
  ({ visibleTabs, visibleTabCounts, candidateTabs } = stateFromStoresObject);
  const importDefault = candidateTabs;
  const items2 = [candidateTabs];
  const memo = importAllResult.useMemo(() => new Set(candidateTabs), items2);
  const obj = arg1(dependencyMap[28]);
  const autoSearchGuildChannelTab = arg1(dependencyMap[29]).useAutoSearchGuildChannelTab(searchContext, !memo.has(constants.GUILD_CHANNELS));
  const obj3 = arg1(dependencyMap[29]);
  const autoSearchMembersTab = arg1(dependencyMap[30]).useAutoSearchMembersTab(searchContext, !memo.has(constants.MEMBERS));
  const obj4 = arg1(dependencyMap[30]);
  const autoSearchPeopleTab = arg1(dependencyMap[31]).useAutoSearchPeopleTab(searchContext, !memo.has(constants.PEOPLE));
  const obj5 = arg1(dependencyMap[31]);
  const autoTrackSearchTabCountsViewedAnalytics = arg1(dependencyMap[32]).useAutoTrackSearchTabCountsViewedAnalytics({ searchContext, visibleTabCounts, visibleTabs });
  return callback(closure_20, { searchContext, visibleTabs, visibleTabCounts, width: width.width });
};
