// Module ID: 16688
// Function ID: 16689
// Name: SearchNavigatorScreen
// Dependencies: [19, 17, 21, 4836, 576, 16439, 4697, 16689, 5435, 1115, 5940, 5437, 15999, 16441, 16450, 2]
// Exports: default

// Module 16688 (SearchNavigatorScreen)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl2 from "intl" /* 1115 */;
import useBaseAppContainerDimensionsDefault from "useBaseAppContainerDimensions" /* 4697 */;
import Pressables from "Pressables" /* 5435 */;
import ThemedGradientDefault from "ThemedGradient" /* 5437 */;
import ArrowLargeLeftIcon2 from "ArrowLargeLeftIcon" /* 5940 */;
import SearchScreenSearchBarDefault from "SearchScreenSearchBar" /* 16441 */;
import SearchScreenLayoutDefault from "SearchScreenLayout" /* 16450 */;
import useSearchLayoutInsetTopDefault from "useSearchLayoutInsetTop" /* 16689 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let importDefault;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire, Fragment: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { wrapper: obj2, tabs: obj3, back: obj4 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
createStyles = createStyles.createStyles;
obj3 = { flex: 1, marginTop: nativeDefault.space.PX_16 };
obj4 = { marginLeft: nativeDefault.space.PX_16, marginRight: nativeDefault.space.PX_12 };
let closure_8 = createStyles(obj);
const result = size.fileFinishedImporting("modules/search/native/components/navigator/SearchNavigatorScreen.tsx");

export default function SearchNavigatorScreen(navigation) {
  let NonCollapsableGestureDetector;
  let back;
  let detectorRef;
  let gesture;
  let items1;
  let items2;
  let items3;
  let obj4;
  let obj5;
  let suggestionsContext;
  navigation = navigation.navigation;
  const searchContext = navigation.route.params.searchContext;
  const tmp = closure_8();
  importDefault = tmp;
  let obj = navigation(16439);
  const searchSuggestionsGesture = obj.useSearchSuggestionsGesture(searchContext);
  ({ gesture, detectorRef, suggestionsContext } = searchSuggestionsGesture);
  const width = useBaseAppContainerDimensionsDefault().width;
  const items = [navigation.goBack, tmp.back];
  let obj2 = { children: items1 };
  const tmp3 = useSearchLayoutInsetTopDefault();
  const memo = react.useMemo(() => {
    let ArrowLargeLeftIcon;
    let PressableOpacity;
    let intl;
    let obj2;
    let obj3;
    const obj = { children: hasOwnProperty(PressableOpacity, obj2) };
    obj2 = { style: back.back, accessibilityLabel: intl.string(intl2.t["13/7kX"]), accessibilityRole: "button", onPress: navigation.goBack, children: hasOwnProperty(ArrowLargeLeftIcon, obj3) };
    PressableOpacity = Pressables.PressableOpacity;
    intl = intl2.intl;
    obj3 = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
    ArrowLargeLeftIcon = ArrowLargeLeftIcon2.ArrowLargeLeftIcon;
    return hasOwnProperty(View, obj);
  }, items);
  items1 = [closure_5(ThemedGradientDefault, { absolute: true, wide: true, tall: true }), ];
  let obj3 = { value: suggestionsContext, children: closure_5(NonCollapsableGestureDetector, obj4) };
  const SearchSuggestionsProvider = navigation(16439).SearchSuggestionsProvider;
  obj4 = { gesture, children: closure_6(View, obj5) };
  obj5 = { ref: detectorRef, style: items2, children: items3 };
  items2 = [tmp.wrapper, { paddingTop: tmp3 }];
  NonCollapsableGestureDetector = navigation(15999).NonCollapsableGestureDetector;
  items3 = [closure_5(SearchScreenSearchBarDefault, { searchContext, backButton: memo }), ];
  const obj6 = { style: tmp.tabs, children: closure_5(SearchScreenLayoutDefault, { searchContext, width }) };
  items3[1] = closure_5(View, obj6);
  items1[1] = closure_5(SearchSuggestionsProvider, obj3);
  return closure_6(closure_7, obj2);
};
