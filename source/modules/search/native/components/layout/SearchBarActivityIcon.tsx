// Module ID: 15198
// Function ID: 114692
// Name: items
// Dependencies: []

// Module 15198 (items)
const importAllResult = importAll(dependencyMap[0]);
const ActivityIndicator = arg1(dependencyMap[1]).ActivityIndicator;
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = arg1(dependencyMap[4]).SEARCH_MESSAGE_TAB_SENTINEL;
({ jsx: closure_8, Fragment: closure_9, jsxs: closure_10 } = arg1(dependencyMap[5]));
let obj1 = arg1(dependencyMap[6]);
let obj = {};
obj = { color: importDefault(dependencyMap[7]).colors.INTERACTIVE_TEXT_DEFAULT };
obj.spinnerColor = obj;
obj.spinner = { defaultColor: 285213055, lineClamp: 17313345, ellipsizeMode: -1743433472, style: 23644225, pointerEvents: -1743433216 };
obj.icon = {};
let closure_11 = obj1.createStyles(obj);
obj1 = { START: 0, [0]: "START", END: 1, [1]: "END" };
const items = [, ];
({ START: arr[0], END: arr[1] } = obj1);
let closure_14 = { code: "function SearchBarActivityIconTsx1(){const{interpolate,fadeAnimationState,ANIMATION_STATE_INPUT}=this.__closure;return{opacity:interpolate(fadeAnimationState.get(),ANIMATION_STATE_INPUT,[0,0.5])};}" };
let closure_15 = { code: "function SearchBarActivityIconTsx2(){const{interpolate,fadeAnimationState,ANIMATION_STATE_INPUT}=this.__closure;return{opacity:interpolate(fadeAnimationState.get(),ANIMATION_STATE_INPUT,[1,0])};}" };
const tmp2 = arg1(dependencyMap[5]);
const memoResult = importAllResult.memo(function SearchBarActivityIcon(searchContext) {
  searchContext = searchContext.searchContext;
  const arg1 = searchContext;
  const tmp = callback2();
  let obj = arg1(dependencyMap[8]);
  const items = [closure_6, closure_5];
  const items1 = [searchContext];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const searchResultsQuery = closure_6.getSearchResultsQuery(searchContext);
    let tmp2 = !isInitialFetchComplete.getIsInitialFetchComplete(searchContext(sharedValue[9]).getSearchTabFetchId(searchContext, closure_7, searchResultsQuery));
    const obj = searchContext(sharedValue[9]);
    const result = closure_6.isAutocompleteVisible(searchContext);
    if (tmp2) {
      tmp2 = !isInitialSearchQueryResult;
    }
    if (tmp2) {
      tmp2 = !result;
    }
    return tmp2;
  }, items1);
  const importDefault = stateFromStores;
  let obj1 = arg1(dependencyMap[10]);
  const sharedValue = obj1.useSharedValue(obj1.START);
  const dependencyMap = sharedValue;
  const items2 = [stateFromStores, sharedValue];
  const effect = importAllResult.useEffect(() => {
    const withTiming = searchContext(sharedValue[11]).withTiming;
    if (stateFromStores) {
      const result = set(withTiming(tmp3.END));
    } else {
      const result1 = set(withTiming(tmp3.START));
    }
  }, items2);
  let obj2 = arg1(dependencyMap[10]);
  class E {
    constructor() {
      obj = {};
      obj2 = searchContext(closure_2[10]);
      obj.opacity = obj2.interpolate(closure_2.get(), closure_13, [null, null]);
      return obj;
    }
  }
  obj = { interpolate: arg1(dependencyMap[10]).interpolate, fadeAnimationState: sharedValue, ANIMATION_STATE_INPUT: items };
  E.__closure = obj;
  E.__workletHash = 12880513119188;
  E.__initData = closure_14;
  const animatedStyle = obj2.useAnimatedStyle(E);
  let obj4 = arg1(dependencyMap[10]);
  const fn = function v() {
    const obj = { opacity: searchContext(sharedValue[10]).interpolate(sharedValue.get(), closure_13, []) };
    return obj;
  };
  obj = { interpolate: arg1(dependencyMap[10]).interpolate, fadeAnimationState: sharedValue, ANIMATION_STATE_INPUT: items };
  fn.__closure = obj;
  fn.__workletHash = 11061952032557;
  fn.__initData = closure_15;
  obj1 = {};
  const animatedStyle1 = obj4.useAnimatedStyle(fn);
  obj2 = { style: animatedStyle };
  const items3 = [, ];
  ({ icon: arr4[0], spinner: arr4[1] } = tmp);
  obj2.children = callback(ActivityIndicator, { color: tmp.spinnerColor.color, style: items3 });
  const items4 = [callback(importDefault(dependencyMap[10]).View, obj2), ];
  obj4 = { style: animatedStyle1 };
  const obj5 = { style: tmp.icon };
  let str = "xs";
  if (obj12.isAndroid()) {
    str = "sm";
  }
  obj5.size = str;
  obj5.color = "interactive-text-default";
  obj4.children = callback(arg1(dependencyMap[12]).MagnifyingGlassIcon, obj5);
  items4[1] = callback(importDefault(dependencyMap[10]).View, obj4);
  obj1.children = items4;
  return closure_10(closure_9, obj1);
});
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/search/native/components/layout/SearchBarActivityIcon.tsx");

export default memoResult;
