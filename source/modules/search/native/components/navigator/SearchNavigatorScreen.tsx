// Module ID: 15830
// Function ID: 15831
// Name: SearchNavigatorScreen
// Dependencies: [19, 17, 21, 4285, 712, 15599, 4140, 15831, 4827, 1236, 5257, 4829, 15376, 15601, 15612, 2]
// Exports: default

// Module 15830 (SearchNavigatorScreen)
import noop from "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c5;
let closure_6;
let error;
const require = arg1;
({ jsx: c5, jsxs: closure_6, Fragment: error } = jsxProd);
createCacheKey = { wrapper: null, tabs: null, back: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, flex: 1 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1, marginTop: require("Themes").space.PX_16 };
let obj1 = { flex: 1, marginTop: require("Themes").space.PX_16 };
createCacheKey[2] = { marginLeft: require("Themes").space.PX_16, marginRight: require("Themes").space.PX_12 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const obj2 = { marginLeft: require("Themes").space.PX_16, marginRight: require("Themes").space.PX_12 };
const result = require("jsxProd").fileFinishedImporting("modules/search/native/components/navigator/SearchNavigatorScreen.tsx");

export default function SearchNavigatorScreen(navigation) {
  let dismissed;
  let gesture;
  let onLayoutMeasure;
  let setDismissed;
  navigation = navigation.navigation;
  const searchContext = navigation.route.params.searchContext;
  let importDefault;
  const tmp = createCacheKey();
  importDefault = tmp;
  let obj = navigation(15599);
  const searchSuggestionsGesture = obj.useSearchSuggestionsGesture(searchContext);
  ({ gesture, dismissed, setDismissed, onLayoutMeasure } = searchSuggestionsGesture);
  const items = [navigation.goBack, tmp.back];
  obj = { children: null };
  const memo = React.useMemo(() => {
    let obj = { children: null };
    obj = { style: _undefined.back, accessibilityLabel: null, accessibilityRole: "button", onPress: null, children: null };
    const intl = navigation(outer1_2[9]).intl;
    obj[1] = intl.string(navigation(outer1_2[9]).t["13/7kX"]);
    obj[3] = navigation.goBack;
    obj = { color: null };
    obj[0] = _undefined(outer1_2[4]).colors.INTERACTIVE_TEXT_DEFAULT;
    obj[4] = outer1_5(navigation(outer1_2[10]).ArrowLargeLeftIcon, obj);
    obj[0] = outer1_5(navigation(outer1_2[8]).PressableOpacity, obj);
    return outer1_5(outer1_4, obj);
  }, items);
  const items1 = [callback(importDefault(4829), { absolute: true, wide: true, tall: true }), ];
  obj = { gesture, children: null };
  const obj1 = { style: items2, children: null };
  items2 = [tmp.wrapper, { paddingTop: importDefault(15831)() }];
  const items3 = [callback(importDefault(15601), { searchContext, suggestionsDismissed: dismissed, setSuggestionsDismissed: setDismissed, onSuggestionsLayoutMesure: onLayoutMeasure, backButton: memo }), ];
  const tmp3 = importDefault(15831)();
  items3[1] = callback(View, { style: tmp.tabs, children: callback(importDefault(15612), { searchContext, width: importDefault(4140)().width }) });
  obj1[1] = items3;
  obj[1] = callback2(View, obj1);
  items1[1] = callback(navigation(15376).NonCollapsableGestureDetector, obj);
  obj[0] = items1;
  return callback2(closure_7, obj);
};
