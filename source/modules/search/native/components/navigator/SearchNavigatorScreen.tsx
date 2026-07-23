// Module ID: 15549
// Function ID: 119934
// Name: SearchNavigatorScreen
// Dependencies: [31, 27, 33, 4130, 689, 15318, 3986, 15550, 4660, 1212, 5091, 4662, 14808, 15320, 15331, 2]
// Exports: default

// Module 15549 (SearchNavigatorScreen)
import result from "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
let closure_7;
const require = arg1;
({ jsx: closure_5, jsxs: closure_6, Fragment: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, flex: 1 };
_createForOfIteratorHelperLoose.wrapper = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.tabs = { flex: 1, marginTop: require("_createForOfIteratorHelperLoose").space.PX_16 };
let obj1 = { flex: 1, marginTop: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.back = { marginLeft: require("_createForOfIteratorHelperLoose").space.PX_16, marginRight: require("_createForOfIteratorHelperLoose").space.PX_12 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const obj2 = { marginLeft: require("_createForOfIteratorHelperLoose").space.PX_16, marginRight: require("_createForOfIteratorHelperLoose").space.PX_12 };
const result = require("jsxProd").fileFinishedImporting("modules/search/native/components/navigator/SearchNavigatorScreen.tsx");

export default function SearchNavigatorScreen(navigation) {
  let dismissed;
  let gesture;
  let onLayoutMeasure;
  let setDismissed;
  navigation = navigation.navigation;
  const searchContext = navigation.route.params.searchContext;
  const tmp = _createForOfIteratorHelperLoose();
  const importDefault = tmp;
  let obj = navigation(15318);
  const searchSuggestionsGesture = obj.useSearchSuggestionsGesture(searchContext);
  ({ gesture, dismissed, setDismissed, onLayoutMeasure } = searchSuggestionsGesture);
  const items = [navigation.goBack, tmp.back];
  obj = {};
  const memo = React.useMemo(() => {
    let obj = {};
    obj = { style: tmp.back };
    const intl = navigation(outer1_2[9]).intl;
    obj.accessibilityLabel = intl.string(navigation(outer1_2[9]).t["13/7kX"]);
    obj.accessibilityRole = "button";
    obj.onPress = navigation.goBack;
    obj = { color: tmp(outer1_2[4]).colors.INTERACTIVE_TEXT_DEFAULT };
    obj.children = outer1_5(navigation(outer1_2[10]).ArrowLargeLeftIcon, obj);
    obj.children = outer1_5(navigation(outer1_2[8]).PressableOpacity, obj);
    return outer1_5(outer1_4, obj);
  }, items);
  const items1 = [callback(importDefault(4662), { absolute: true, wide: true, tall: true }), ];
  obj = { gesture };
  const obj1 = { style: items2 };
  items2 = [tmp.wrapper, { paddingTop: importDefault(15550)() }];
  const items3 = [callback(importDefault(15320), { searchContext, suggestionsDismissed: dismissed, setSuggestionsDismissed: setDismissed, onSuggestionsLayoutMesure: onLayoutMeasure, backButton: memo }), ];
  const tmp3 = importDefault(15550)();
  items3[1] = callback(View, { style: tmp.tabs, children: callback(importDefault(15331), { searchContext, width: importDefault(3986)().width }) });
  obj1.children = items3;
  obj.children = callback2(View, obj1);
  items1[1] = callback(navigation(14808).NonCollapsableGestureDetector, obj);
  obj.children = items1;
  return callback2(closure_7, obj);
};
