// Module ID: 18846
// Function ID: 18847
// Name: SearchBarActivityIcon
// Dependencies: [19, 17, 6983, 14031, 9958, 21, 5141, 575, 563, 14024, 1652, 5377, 7340, 1377, 2]

// Module 18846 (SearchBarActivityIcon)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import timing_timing from "timing/timing" /* 5377 */;
import SearchConstants from "SearchConstants" /* 9958 */;
import SearchUtils from "SearchUtils" /* 14024 */;
import react from "react" /* 19 */;
import SearchMessageStore from "SearchMessageStore" /* 6983 */;
import SearchQueryStore from "SearchQueryStore" /* 14031 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5141 */;
import size from "module_2" /* 2 */;

let c10;
let c9;
let metroImportAll;
let obj2;
const ActivityIndicator = react_native.ActivityIndicator;
let closure_7 = SearchConstants.SEARCH_MESSAGE_TAB_SENTINEL;
({ jsx: metroImportAll, Fragment: c9, jsxs: c10 } = Fragment);
let obj = { spinnerColor: obj2, spinner: { width: 18, height: 18, alignItems: "center", justifyContent: "center", position: "absolute" }, icon: { marginLeft: 12, marginRight: 4 } };
obj2 = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
let closure_11 = createStyles.createStyles(obj);
let obj3 = { START: 0, [0]: "START", END: 1, [1]: "END" };
let items = [, ];
({ START: arr[0], END: arr[1] } = obj3);
let closure_14 = { code: "(function SearchBarActivityIconTsx1(){let[interpolate,fadeAnimationState,ANIMATION_STATE_INPUT]=this.__closure;return{opacity:interpolate(fadeAnimationState.get(),ANIMATION_STATE_INPUT,[0,0.5])};})" };
let closure_15 = { code: "(function SearchBarActivityIconTsx2(){let[interpolate,fadeAnimationState,ANIMATION_STATE_INPUT]=this.__closure;return{opacity:interpolate(fadeAnimationState.get(),ANIMATION_STATE_INPUT,[1,0])};})" };
const memoResult = react.memo(function SearchBarActivityIcon(searchContext) {
  let MagnifyingGlassIcon;
  let items7;
  let obj4;
  let obj6;
  let str;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp9;
  searchContext = searchContext.searchContext;
  let sharedValue;
  const tmp = closure_11();
  const tmp2 = searchContext;
  let tmp3 = sharedValue;
  let obj = searchContext(sharedValue[8]);
  items = [SearchQueryStore, SearchMessageStore];
  const items1 = [searchContext];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const searchResultsQuery = SearchQueryStore.getSearchResultsQuery(searchContext);
    const obj = SearchUtils;
    const isInitialFetchComplete = SearchMessageStore.getIsInitialFetchComplete(obj.getSearchTabFetchId(searchContext, closure_7, searchResultsQuery));
    let tmp3 = !isInitialFetchComplete;
    const isInitialSearchQueryResult = SearchQueryStore.isInitialSearchQuery(searchContext);
    const result = SearchQueryStore.isAutocompleteVisible(searchContext);
    if (!isInitialFetchComplete) {
      tmp3 = !isInitialSearchQueryResult;
    }
    if (tmp3) {
      tmp3 = !result;
    }
    return tmp3;
  }, items1);
  const obj2 = searchContext(sharedValue[10]);
  sharedValue = obj2.useSharedValue(obj3.START);
  const items2 = [stateFromStores, sharedValue];
  const effect = react.useEffect(() => {
    const withTiming = timing_timing.withTiming;
    timing_timing;
    if (stateFromStores) {
      const result = set(withTiming(tmp3.END));
    } else {
      const result1 = set(withTiming(tmp3.START));
    }
  }, items2);
  const items3 = [closure_14, , , ];
  const useAnimatedStyle = searchContext(sharedValue[10]).useAnimatedStyle;
  searchContext(sharedValue[10]);
  items3[1] = searchContext(sharedValue[10]).interpolate;
  items3[2] = sharedValue;
  items3[3] = items;
  let c0;
  let c1;
  let c2;
  [tmp9, tmp10, tmp11, tmp12] = items3;
  class SearchBarActivityIconTsx1 {
    constructor() {
      const obj = { opacity: _undefined(_undefined2.get(), c2, [0, 0.5]) };
      return obj;
    }
  }
  const items4 = [tmp10, tmp11, tmp12];
  SearchBarActivityIconTsx1.__closure = items4;
  SearchBarActivityIconTsx1.__workletHash = 14380742529421;
  SearchBarActivityIconTsx1.__initData = tmp9;
  const animatedStyle = useAnimatedStyle(SearchBarActivityIconTsx1);
  const items5 = [closure_15, , , ];
  const useAnimatedStyle2 = tmp2(tmp3[10]).useAnimatedStyle;
  tmp2(tmp3[10]);
  items5[1] = tmp2(tmp3[10]).interpolate;
  items5[2] = sharedValue;
  items5[3] = items;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp15, tmp16, tmp17, tmp18] = items5;
  class SearchBarActivityIconTsx2 {
    constructor() {
      const obj = { opacity: _undefined(_undefined2.get(), c2, [1, 0]) };
      return obj;
    }
  }
  const items6 = [tmp16, tmp17, tmp18];
  SearchBarActivityIconTsx2.__closure = items6;
  SearchBarActivityIconTsx2.__workletHash = 4711746497812;
  SearchBarActivityIconTsx2.__initData = tmp15;
  const animatedStyle2 = useAnimatedStyle2(SearchBarActivityIconTsx2);
  obj3 = { style: animatedStyle, children: closure_8(ActivityIndicator, obj4) };
  obj4 = { color: tmp.spinnerColor.color, style: items7 };
  items7 = [, ];
  ({ icon: arr8[0], spinner: arr8[1] } = tmp);
  const View = stateFromStores(tmp3[10]).View;
  const items8 = [closure_8(View, obj3), ];
  const obj5 = { style: animatedStyle2, children: closure_8(MagnifyingGlassIcon, obj6) };
  const View2 = stateFromStores(tmp3[10]).View;
  obj6 = { style: tmp.icon, size: str, color: "interactive-text-default" };
  MagnifyingGlassIcon = tmp2(tmp3[12]).MagnifyingGlassIcon;
  str = "xs";
  const tmp20 = closure_10;
  const tmp21 = closure_9;
  const tmp2Result2 = tmp2(tmp3[13]);
  if (tmp2Result2.isAndroid()) {
    str = "sm";
  }
  const obj7 = { children: items8 };
  items8[1] = closure_8(View2, obj5);
  return tmp20(tmp21, obj7);
});
let result = size.fileFinishedImporting("modules/search/native/components/layout/SearchBarActivityIcon.tsx");

export default memoResult;
