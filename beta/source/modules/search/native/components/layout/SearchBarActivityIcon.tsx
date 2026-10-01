// Module ID: 16443
// Function ID: 16444
// Name: SearchBarActivityIcon
// Dependencies: [19, 17, 6699, 11822, 7303, 21, 4836, 576, 563, 11823, 4566, 4837, 6472, 1364, 2]

// Module 16443 (SearchBarActivityIcon)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import timing from "timing" /* 4837 */;
import SearchConstants from "SearchConstants" /* 7303 */;
import SearchUtils from "SearchUtils" /* 11823 */;
import react from "react" /* 19 */;
import SearchMessageStore from "SearchMessageStore" /* 6699 */;
import SearchQueryStore from "SearchQueryStore" /* 11822 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
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
const __initData = { code: "function SearchBarActivityIconTsx1(){const{interpolate,fadeAnimationState,ANIMATION_STATE_INPUT}=this.__closure;return{opacity:interpolate(fadeAnimationState.get(),ANIMATION_STATE_INPUT,[0,0.5])};}" };
const __initData2 = { code: "function SearchBarActivityIconTsx2(){const{interpolate,fadeAnimationState,ANIMATION_STATE_INPUT}=this.__closure;return{opacity:interpolate(fadeAnimationState.get(),ANIMATION_STATE_INPUT,[1,0])};}" };
const memoResult = react.memo(function SearchBarActivityIcon(searchContext) {
  let MagnifyingGlassIcon;
  let items3;
  let obj10;
  let obj8;
  let str;
  searchContext = searchContext.searchContext;
  let sharedValue;
  const tmp = closure_11();
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
  let obj2 = searchContext(sharedValue[10]);
  sharedValue = obj2.useSharedValue(obj3.START);
  const items2 = [stateFromStores, sharedValue];
  const effect = react.useEffect(() => {
    const withTiming = timing.withTiming;
    timing;
    if (stateFromStores) {
      const result = set(withTiming(tmp3.END));
    } else {
      const result1 = set(withTiming(tmp3.START));
    }
  }, items2);
  obj3 = searchContext(sharedValue[10]);
  class E {
    constructor() {
      let obj2;
      const obj = { opacity: obj2.interpolate(sharedValue.get(), items, [0, 0.5]) };
      obj2 = ReanimatedRexport;
      return obj;
    }
  }
  E.__closure = { interpolate: searchContext(sharedValue[10]).interpolate, fadeAnimationState: sharedValue, ANIMATION_STATE_INPUT: items };
  E.__workletHash = 12880513119188;
  E.__initData = __initData;
  ({ interpolate: searchContext(sharedValue[10]).interpolate, fadeAnimationState: sharedValue, ANIMATION_STATE_INPUT: items });
  const animatedStyle = obj3.useAnimatedStyle(E);
  const fn = function v() {
    let obj2;
    const obj = { opacity: obj2.interpolate(sharedValue.get(), items, [1, 0]) };
    obj2 = ReanimatedRexport;
    return obj;
  };
  const obj5 = searchContext(sharedValue[10]);
  fn.__closure = { interpolate: searchContext(sharedValue[10]).interpolate, fadeAnimationState: sharedValue, ANIMATION_STATE_INPUT: items };
  fn.__workletHash = 11061952032557;
  fn.__initData = __initData2;
  ({ interpolate: searchContext(sharedValue[10]).interpolate, fadeAnimationState: sharedValue, ANIMATION_STATE_INPUT: items });
  const animatedStyle1 = obj5.useAnimatedStyle(fn);
  const obj7 = { style: animatedStyle, children: closure_8(ActivityIndicator, obj8) };
  obj8 = { color: tmp.spinnerColor.color, style: items3 };
  items3 = [, ];
  ({ icon: arr4[0], spinner: arr4[1] } = tmp);
  const View = stateFromStores(sharedValue[10]).View;
  const items4 = [closure_8(View, obj7), ];
  const obj9 = { style: animatedStyle1, children: closure_8(MagnifyingGlassIcon, obj10) };
  const View2 = stateFromStores(sharedValue[10]).View;
  obj10 = { style: tmp.icon, size: str, color: "interactive-text-default" };
  MagnifyingGlassIcon = searchContext(sharedValue[12]).MagnifyingGlassIcon;
  str = "xs";
  const obj11 = searchContext(sharedValue[13]);
  const tmp7 = closure_10;
  const tmp8 = closure_9;
  if (obj11.isAndroid()) {
    str = "sm";
  }
  const obj12 = { children: items4 };
  items4[1] = closure_8(View2, obj9);
  return tmp7(tmp8, obj12);
});
let result = size.fileFinishedImporting("modules/search/native/components/layout/SearchBarActivityIcon.tsx");

export default memoResult;
