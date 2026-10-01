// Module ID: 10832
// Function ID: 10833
// Name: TabBar
// Dependencies: [32, 19, 17, 1074, 21, 4836, 576, 6073, 1115, 2]
// Exports: default

// Module 10832 (TabBar)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let onScrollToIndexFailed;

let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
function Tab(index) {
  let children;
  let isSelected;
  let onSelect;
  let tabStyle;
  let tabStyleActive;
  let tabStyleSelected;
  let tmp3;
  let tmp4;
  const f92063 = () => false;
  index = index.index;
  ({ isSelected, onSelect } = index);
  ({ children, tabStyle, tabStyleActive, tabStyleSelected } = index);
  const tmp = closure_9();
  [tmp3, tmp4] = react.useState(f92063);
  let c2 = tmp4;
  const items = [tmp4];
  const items1 = [tmp4];
  _slicedToArray(react.useState(f92063), 2);
  const callback = react.useCallback(() => _undefined(true), items);
  const items2 = [onSelect, index];
  const callback1 = react.useCallback(() => _undefined(false), items1);
  const items3 = [tmp.tab, tabStyle, , , , ];
  let tabSelected = null;
  if (isSelected) {
    tabSelected = tmp.tabSelected;
  }
  items3[2] = tabSelected;
  let tabActive = null;
  if (tmp3) {
    tabActive = tmp.tabActive;
  }
  items3[3] = tabActive;
  let tmp12 = null;
  if (isSelected) {
    tmp12 = tabStyleSelected;
  }
  items3[4] = tmp12;
  let tmp13 = null;
  if (tmp3) {
    tmp13 = tabStyleActive;
  }
  items3[5] = tmp13;
  return <tmp8 accessibilityRole="tab" onPressIn={callback} onPressOut={callback1} onPress={react.useCallback(() => onSelect(index), items2)}>{null}</tmp8>;
}
({ View: closure_4, TouchableWithoutFeedback: hasOwnProperty, FlatList: metroRequire } = react_native);
const NOOP = Constants.NOOP;
const jsx = Fragment.jsx;
let obj = { innerContainer: { flexDirection: "row", alignItems: "stretch" }, tab: { flexGrow: 1, flexBasis: "auto", flexShrink: 0, alignItems: "center", justifyContent: "center", marginBottom: 1, marginHorizontal: 1, padding: 10, borderBottomWidth: 2, borderBottomColor: "transparent" }, tabActive: { backgroundColor: "rgba(0,0,0,0.1)" }, tabSelected: obj2, container: { flex: 0 } };
obj2 = { borderBottomColor: nativeDefault.unsafe_rawColors.BRAND_600 };
let closure_9 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("components_native/common/TabBar.tsx");

export default function TabBar(tabIndexSelected) {
  let GestureDetector;
  let closure_7;
  let containerStyle;
  let initialNumTabsToRender;
  let intl;
  let items4;
  let obj2;
  let obj3;
  let tabs;
  tabIndexSelected = tabIndexSelected.tabIndexSelected;
  const tabStyle = tabIndexSelected.tabStyle;
  const tabStyleActive = tabIndexSelected.tabStyleActive;
  const tabStyleSelected = tabIndexSelected.tabStyleSelected;
  const onSelect = tabIndexSelected.onSelect;
  let flag = tabIndexSelected.hideHorizontalScrollbar;
  ({ initialNumTabsToRender, tabs, containerStyle } = tabIndexSelected);
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = tabIndexSelected.scrollToSelectedIndex;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const tmp = closure_9();
  const ref = tabStyleSelected.useRef(null);
  onScrollToIndexFailed = tabStyleSelected.useRef(tabIndexSelected);
  const items = [tabIndexSelected];
  const effect = tabStyleSelected.useEffect(() => {
    closure_7.current = tabIndexSelected;
  }, items);
  const items1 = [ref, onSelect];
  const callback = tabStyleSelected.useCallback((index) => {
    onSelect(index);
    const current = ref.current;
    if (current != null) {
      const obj = { index };
      current.scrollToIndex(obj);
    }
  }, items1);
  const first = tabStyleActive(tabStyleSelected.useState(() => tabIndexSelected), 1)[0];
  const items2 = [first];
  const effect1 = tabStyleSelected.useEffect(() => {
    let closure_0;
    const timeout = setTimeout(() => {
      if (ref2.current === first) {
        const current = ref.current;
        if (current != null) {
          const obj = { index: tmp, viewPosition: 1 };
          current.scrollToIndex(obj);
        }
      }
    }, 500);
    return () => {
      clearTimeout(closure_0);
    };
  }, items2);
  const items3 = [tabIndexSelected, tabStyle, tabStyleActive, tabStyleSelected, flag2, onSelect, callback];
  const callback1 = tabStyleSelected.useCallback((arg0, arg1) => "tab-" + arg1, []);
  const callback2 = tabStyleSelected.useCallback((children) => {
    const index = children.index;
    return <Tab index={index} isSelected={index === tabIndexSelected} tabStyle={tabStyle} tabStyleActive={tabStyleActive} tabStyleSelected={tabStyleSelected} onSelect={flag2 ? callback : onSelect}>{arg0.item}</Tab>;
  }, items3);
  let obj = { style: tmp.container, accessibilityRole: "tablist", accessibilityLabel: intl.string(tabIndexSelected(tabStyle[8]).t.t1qXlK), children: callback(GestureDetector, obj2) };
  const memo = tabStyleSelected.useMemo(() => {
    const Gesture = tabIndexSelected(tabStyle[7]).Gesture;
    const NativeResult = Gesture.Native();
    return NativeResult.disallowInterruption(true);
  }, []);
  intl = tabIndexSelected(tabStyle[8]).intl;
  obj2 = { gesture: memo, children: callback(ref, obj3) };
  obj3 = { ref, contentContainerStyle: items4, horizontal: true, data: tabs, renderItem: callback2, keyExtractor: callback1, initialNumToRender: initialNumTabsToRender, onScrollToIndexFailed, showsHorizontalScrollIndicator: !flag };
  items4 = [containerStyle, tmp.innerContainer];
  GestureDetector = tabIndexSelected(tabStyle[7]).GestureDetector;
  return callback(onSelect, obj);
};
