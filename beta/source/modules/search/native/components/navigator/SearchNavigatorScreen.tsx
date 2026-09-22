// Module ID: 17338
// Function ID: 17339
// Name: SearchNavigatorScreen
// Dependencies: [19, 17, 21, 4758, 580, 558, 568, 17099, 4621, 17339, 1119, 5843, 5341, 5343, 17101, 17110, 16704, 2]

// Module 17338 (SearchNavigatorScreen)
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import util from "util" /* 1119 */;
import useBaseAppContainerDimensionsDefault from "useBaseAppContainerDimensions" /* 4621 */;
import Pressables from "Pressables" /* 5341 */;
import ThemedGradientDefault from "ThemedGradient" /* 5343 */;
import ArrowLargeLeftIcon from "ArrowLargeLeftIcon" /* 5843 */;
import useSearchSuggestionsGesture from "useSearchSuggestionsGesture" /* 17099 */;
import SearchScreenSearchBarDefault from "SearchScreenSearchBar" /* 17101 */;
import SearchScreenLayoutDefault from "SearchScreenLayout" /* 17110 */;
import useSearchLayoutInsetTopDefault from "useSearchLayoutInsetTop" /* 17339 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire, Fragment: closure_7 } = jsxProd);
const createStyles = fn(4758);
let obj2 = { wrapper: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 }, tabs: null, back: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
obj2.tabs = { flex: 1, marginTop: nativeDefault.space.PX_16 };
let obj4 = { flex: 1, marginTop: nativeDefault.space.PX_16 };
obj2.back = { marginLeft: nativeDefault.space.PX_16, marginRight: nativeDefault.space.PX_12 };
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj5 = { marginLeft: nativeDefault.space.PX_16, marginRight: nativeDefault.space.PX_12 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/components/navigator/SearchNavigatorScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((navigation) => {
  const cResult = c.c(30);
  navigation = navigation.navigation;
  const searchContext = navigation.route.params.searchContext;
  const tmp4 = closure_8();
  const searchSuggestionsGesture = useSearchSuggestionsGesture.useSearchSuggestionsGesture(searchContext);
  ({ gesture, dismissed, setDismissed, onLayoutMeasure } = searchSuggestionsGesture);
  const width = useBaseAppContainerDimensionsDefault().width;
  const tmp7 = useSearchLayoutInsetTopDefault();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1119).intl;
    const stringResult = intl.string(tmp(1119).t["13/7kX"]);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { color: tmp6(580).colors.INTERACTIVE_TEXT_DEFAULT };
    const tmp12 = hasOwnProperty(tmp(5843).ArrowLargeLeftIcon, obj3);
    cResult[1] = tmp12;
    let tmp10 = tmp12;
  } else {
    tmp10 = cResult[1];
  }
  if (cResult[2] === navigation.goBack) {
    if (cResult[3] === tmp4.back) {
      let tmp13 = cResult[4];
    }
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp17 = hasOwnProperty(tmp6(5343), { absolute: true, wide: true, tall: true });
      cResult[5] = tmp17;
      let tmp15 = tmp17;
    } else {
      tmp15 = cResult[5];
    }
    if (cResult[6] !== tmp7) {
      const obj4 = { paddingTop: tmp7 };
      cResult[6] = tmp7;
      cResult[7] = obj4;
      let tmp18 = obj4;
    } else {
      tmp18 = cResult[7];
    }
    if (cResult[8] === tmp4.wrapper) {
      if (cResult[9] === tmp18) {
        let tmp19 = cResult[10];
      }
      if (cResult[11] === tmp13) {
        if (cResult[12] === dismissed) {
          if (cResult[13] === onLayoutMeasure) {
            if (cResult[14] === searchContext) {
              if (cResult[15] === setDismissed) {
                let tmp20 = cResult[16];
              }
              if (cResult[17] === searchContext) {
                if (cResult[18] === width) {
                  let tmp23 = cResult[19];
                }
                if (cResult[20] === tmp4.tabs) {
                  if (cResult[21] === tmp23) {
                    let tmp26 = cResult[22];
                  }
                  if (cResult[23] === tmp20) {
                    if (cResult[24] === tmp26) {
                      if (cResult[25] === tmp19) {
                        let tmp30 = cResult[26];
                      }
                      if (cResult[27] === gesture) {
                        if (cResult[28] === tmp30) {
                          let tmp34 = cResult[29];
                        }
                        return tmp34;
                      }
                      const obj5 = { children: null };
                      const items = [tmp15, ];
                      const obj6 = { gesture, children: tmp30 };
                      items[1] = hasOwnProperty(tmp(16704).NonCollapsableGestureDetector, obj6);
                      obj5.children = items;
                      const tmp38 = timestampProducer(React5, obj5);
                      cResult[27] = gesture;
                      cResult[28] = tmp30;
                      cResult[29] = tmp38;
                      tmp34 = tmp38;
                    }
                  }
                  const obj7 = { style: tmp19, children: null };
                  const items1 = [tmp20, tmp26];
                  obj7.children = items1;
                  const tmp33 = timestampProducer(View, obj7);
                  cResult[23] = tmp20;
                  cResult[24] = tmp26;
                  cResult[25] = tmp19;
                  cResult[26] = tmp33;
                  tmp30 = tmp33;
                }
                const obj8 = { style: tmp4.tabs, children: tmp23 };
                const tmp29 = hasOwnProperty(View, obj8);
                cResult[20] = tmp4.tabs;
                cResult[21] = tmp23;
                cResult[22] = tmp29;
                tmp26 = tmp29;
              }
              const obj9 = { searchContext, width };
              const tmp25 = hasOwnProperty(tmp6(17110), obj9);
              cResult[17] = searchContext;
              cResult[18] = width;
              cResult[19] = tmp25;
              tmp23 = tmp25;
            }
          }
        }
      }
      const obj10 = { searchContext, suggestionsDismissed: dismissed, setSuggestionsDismissed: setDismissed, onSuggestionsLayoutMesure: onLayoutMeasure, backButton: tmp13 };
      const tmp22 = hasOwnProperty(tmp6(17101), obj10);
      cResult[11] = tmp13;
      cResult[12] = dismissed;
      cResult[13] = onLayoutMeasure;
      cResult[14] = searchContext;
      cResult[15] = setDismissed;
      cResult[16] = tmp22;
      tmp20 = tmp22;
    }
    const items2 = [tmp4.wrapper, tmp18];
    cResult[8] = tmp4.wrapper;
    cResult[9] = tmp18;
    cResult[10] = items2;
    tmp19 = items2;
  }
  const obj11 = { children: hasOwnProperty(Pressables.PressableOpacity, { style: tmp4.back, accessibilityLabel: first, accessibilityRole: "button", onPress: navigation.goBack, children: tmp10 }) };
  const tmp14 = hasOwnProperty(View, obj11);
  cResult[2] = navigation.goBack;
  cResult[3] = tmp4.back;
  cResult[4] = tmp14;
  tmp13 = tmp14;
}) : ((navigation) => {
  navigation = navigation.navigation;
  const searchContext = navigation.route.params.searchContext;
  const tmp = closure_8();
  importDefault = tmp;
  const searchSuggestionsGesture = navigation(17099).useSearchSuggestionsGesture(searchContext);
  ({ gesture, dismissed, setDismissed, onLayoutMeasure } = searchSuggestionsGesture);
  const items = [navigation.goBack, tmp.back];
  let obj = navigation(17099);
  let obj2 = { children: null };
  const memo = noop.useMemo(() => {
    const obj = { children: null };
    const obj2 = { style: back.back, accessibilityLabel: null, accessibilityRole: "button", onPress: null, children: null };
    const intl = util.intl;
    obj2.accessibilityLabel = intl.string(util.t["13/7kX"]);
    obj2.onPress = navigation.goBack;
    obj2.children = hasOwnProperty(ArrowLargeLeftIcon.ArrowLargeLeftIcon, { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT });
    obj.children = hasOwnProperty(Pressables.PressableOpacity, obj2);
    return hasOwnProperty(View, obj);
  }, items);
  const items1 = [closure_5(ThemedGradientDefault, { absolute: true, wide: true, tall: true }), ];
  const obj3 = { gesture, children: null };
  const obj4 = { style: null, children: null };
  const items2 = [tmp.wrapper, { paddingTop: useSearchLayoutInsetTopDefault() }];
  obj4.style = items2;
  const items3 = [closure_5(SearchScreenSearchBarDefault, { searchContext, suggestionsDismissed: dismissed, setSuggestionsDismissed: setDismissed, onSuggestionsLayoutMesure: onLayoutMeasure, backButton: memo }), ];
  const tmp3 = useSearchLayoutInsetTopDefault();
  items3[1] = closure_5(View, { style: tmp.tabs, children: closure_5(SearchScreenLayoutDefault, { searchContext, width: useBaseAppContainerDimensionsDefault().width }) });
  obj4.children = items3;
  obj3.children = closure_6(View, obj4);
  items1[1] = closure_5(navigation(16704).NonCollapsableGestureDetector, obj3);
  obj2.children = items1;
  return closure_6(closure_7, obj2);
});
