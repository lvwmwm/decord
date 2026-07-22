// Module ID: 15432
// Function ID: 117760
// Name: SearchNavigatorScreen
// Dependencies: []
// Exports: default

// Module 15432 (SearchNavigatorScreen)
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_5, jsxs: closure_6, Fragment: closure_7 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BASE_LOW, flex: 1 };
obj.wrapper = obj;
const tmp2 = arg1(dependencyMap[2]);
obj.tabs = { flex: 1, marginTop: importDefault(dependencyMap[4]).space.PX_16 };
const obj1 = { flex: 1, marginTop: importDefault(dependencyMap[4]).space.PX_16 };
obj.back = { marginLeft: importDefault(dependencyMap[4]).space.PX_16, marginRight: importDefault(dependencyMap[4]).space.PX_12 };
let closure_8 = obj.createStyles(obj);
const obj2 = { marginLeft: importDefault(dependencyMap[4]).space.PX_16, marginRight: importDefault(dependencyMap[4]).space.PX_12 };
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/search/native/components/navigator/SearchNavigatorScreen.tsx");

export default function SearchNavigatorScreen(navigation) {
  let dismissed;
  let gesture;
  let onLayoutMeasure;
  let setDismissed;
  navigation = navigation.navigation;
  const arg1 = navigation;
  const searchContext = navigation.route.params.searchContext;
  const tmp = callback3();
  const importDefault = tmp;
  let obj = arg1(dependencyMap[5]);
  const searchSuggestionsGesture = obj.useSearchSuggestionsGesture(searchContext);
  ({ gesture, dismissed, setDismissed, onLayoutMeasure } = searchSuggestionsGesture);
  const items = [navigation.goBack, tmp.back];
  obj = {};
  const memo = React.useMemo(() => {
    let obj = {};
    obj = { style: tmp.back };
    const intl = navigation(closure_2[9]).intl;
    obj.accessibilityLabel = intl.string(navigation(closure_2[9]).t.13/7kX);
    obj.accessibilityRole = "button";
    obj.onPress = navigation.goBack;
    obj = { color: tmp(closure_2[4]).colors.INTERACTIVE_TEXT_DEFAULT };
    obj.children = callback(navigation(closure_2[10]).ArrowLargeLeftIcon, obj);
    obj.children = callback(navigation(closure_2[8]).PressableOpacity, obj);
    return callback(closure_4, obj);
  }, items);
  const items1 = [callback(importDefault(dependencyMap[11]), {}), ];
  obj = { gesture };
  const obj1 = { style: items2 };
  const items2 = [tmp.wrapper, { paddingTop: importDefault(dependencyMap[7])() }];
  const items3 = [callback(importDefault(dependencyMap[13]), { searchContext, suggestionsDismissed: dismissed, setSuggestionsDismissed: setDismissed, onSuggestionsLayoutMesure: onLayoutMeasure, backButton: memo }), ];
  const tmp3 = importDefault(dependencyMap[7])();
  items3[1] = callback(View, { style: tmp.tabs, children: callback(importDefault(dependencyMap[14]), { searchContext, width: importDefault(dependencyMap[6])().width }) });
  obj1.children = items3;
  obj.children = callback2(View, obj1);
  items1[1] = callback(arg1(dependencyMap[12]).NonCollapsableGestureDetector, obj);
  obj.children = items1;
  return callback2(closure_7, obj);
};
