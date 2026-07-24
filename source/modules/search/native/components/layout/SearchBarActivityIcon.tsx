// Module ID: 15369
// Function ID: 117227
// Name: items
// Dependencies: [31, 27, 5660, 10109, 9141, 33, 4130, 689, 624, 10110, 3991, 4131, 5786, 477, 2]

// Module 15369 (items)
import importAllResult from "result";
import { ActivityIndicator } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import { SEARCH_MESSAGE_TAB_SENTINEL as closure_7 } from "SearchAutocompleteSelectAnalyticsActions";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_8;
let closure_9;
const require = arg1;
({ jsx: closure_8, Fragment: closure_9, jsxs: closure_10 } = jsxProd);
let obj = {};
obj = { color: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_DEFAULT };
obj.spinnerColor = obj;
obj.spinner = { width: 18, height: 18, alignItems: "center", justifyContent: "center", position: "absolute" };
obj.icon = { marginLeft: 12, marginRight: 4 };
let closure_11 = _createForOfIteratorHelperLoose.createStyles(obj);
_createForOfIteratorHelperLoose = { START: 0, [0]: "START", END: 1, [1]: "END" };
let items = [, ];
({ START: arr[0], END: arr[1] } = _createForOfIteratorHelperLoose);
let closure_14 = { code: "function SearchBarActivityIconTsx1(){const{interpolate,fadeAnimationState,ANIMATION_STATE_INPUT}=this.__closure;return{opacity:interpolate(fadeAnimationState.get(),ANIMATION_STATE_INPUT,[0,0.5])};}" };
let closure_15 = { code: "function SearchBarActivityIconTsx2(){const{interpolate,fadeAnimationState,ANIMATION_STATE_INPUT}=this.__closure;return{opacity:interpolate(fadeAnimationState.get(),ANIMATION_STATE_INPUT,[1,0])};}" };
const memoResult = importAllResult.memo(function SearchBarActivityIcon(searchContext) {
  searchContext = searchContext.searchContext;
  const tmp = callback2();
  let obj = searchContext(sharedValue[8]);
  const items = [closure_6, _isNativeReflectConstruct];
  const items1 = [searchContext];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const searchResultsQuery = outer1_6.getSearchResultsQuery(searchContext);
    let tmp2 = !outer1_5.getIsInitialFetchComplete(searchContext(sharedValue[9]).getSearchTabFetchId(searchContext, outer1_7, searchResultsQuery));
    const obj = searchContext(sharedValue[9]);
    const result = outer1_6.isAutocompleteVisible(searchContext);
    if (tmp2) {
      tmp2 = !isInitialSearchQueryResult;
    }
    if (tmp2) {
      tmp2 = !result;
    }
    return tmp2;
  }, items1);
  let obj1 = searchContext(sharedValue[10]);
  sharedValue = obj1.useSharedValue(_createForOfIteratorHelperLoose.START);
  const items2 = [stateFromStores, sharedValue];
  const effect = importAllResult.useEffect(() => {
    const withTiming = searchContext(sharedValue[11]).withTiming;
    if (stateFromStores) {
      const result = set(withTiming(tmp3.END));
    } else {
      const result1 = set(withTiming(tmp3.START));
    }
  }, items2);
  let obj2 = searchContext(sharedValue[10]);
  class E {
    constructor() {
      obj = {};
      obj2 = searchContext(outer1_2[10]);
      obj.opacity = obj2.interpolate(closure_2.get(), outer1_13, [0, 0.5]);
      return obj;
    }
  }
  obj = { interpolate: searchContext(sharedValue[10]).interpolate, fadeAnimationState: sharedValue, ANIMATION_STATE_INPUT: items };
  E.__closure = obj;
  E.__workletHash = 12880513119188;
  E.__initData = closure_14;
  const animatedStyle = obj2.useAnimatedStyle(E);
  let obj4 = searchContext(sharedValue[10]);
  const fn = function v() {
    const obj = { opacity: searchContext(sharedValue[10]).interpolate(sharedValue.get(), outer1_13, [1, 0]) };
    return obj;
  };
  obj = { interpolate: searchContext(sharedValue[10]).interpolate, fadeAnimationState: sharedValue, ANIMATION_STATE_INPUT: items };
  fn.__closure = obj;
  fn.__workletHash = 11061952032557;
  fn.__initData = closure_15;
  obj1 = {};
  const animatedStyle1 = obj4.useAnimatedStyle(fn);
  obj2 = { style: animatedStyle };
  const items3 = [, ];
  ({ icon: arr4[0], spinner: arr4[1] } = tmp);
  obj2.children = callback(ActivityIndicator, { color: tmp.spinnerColor.color, style: items3 });
  const items4 = [callback(stateFromStores(sharedValue[10]).View, obj2), ];
  obj4 = { style: animatedStyle1 };
  const obj5 = { style: tmp.icon };
  let str = "xs";
  if (obj12.isAndroid()) {
    str = "sm";
  }
  obj5.size = str;
  obj5.color = "interactive-text-default";
  obj4.children = callback(searchContext(sharedValue[12]).MagnifyingGlassIcon, obj5);
  items4[1] = callback(stateFromStores(sharedValue[10]).View, obj4);
  obj1.children = items4;
  return closure_10(closure_9, obj1);
});
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/search/native/components/layout/SearchBarActivityIcon.tsx");

export default memoResult;
