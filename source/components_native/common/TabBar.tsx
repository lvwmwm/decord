// Module ID: 9470
// Function ID: 73636
// Name: Tab
// Dependencies: [57, 31, 27, 653, 33, 4130, 689, 5217, 1212, 2]
// Exports: default

// Module 9470 (Tab)
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { NOOP } from "ME";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
let closure_6;
const require = arg1;
function Tab(index) {
  let children;
  let isSelected;
  let onSelect;
  let tabStyle;
  let tabStyleActive;
  let tabStyleSelected;
  index = index.index;
  ({ isSelected, onSelect } = index);
  ({ children, tabStyle, tabStyleActive, tabStyleSelected } = index);
  const tmp = _createForOfIteratorHelperLoose();
  const tmp2 = callback(React.useState(() => false), 2);
  const first = tmp2[0];
  callback = tmp4;
  const items = [tmp2[1]];
  const items1 = [tmp2[1]];
  callback = React.useCallback(() => tmp4(true), items);
  const items2 = [onSelect, index];
  const callback1 = React.useCallback(() => tmp4(false), items1);
  let obj = { accessibilityRole: "tab", onPressIn: callback, onPressOut: callback1, onPress: React.useCallback(() => onSelect(index), items2) };
  obj = {};
  const items3 = [tmp.tab, tabStyle, , , , ];
  let tabSelected = null;
  if (isSelected) {
    tabSelected = tmp.tabSelected;
  }
  items3[2] = tabSelected;
  let tabActive = null;
  if (first) {
    tabActive = tmp.tabActive;
  }
  items3[3] = tabActive;
  let tmp13 = null;
  if (isSelected) {
    tmp13 = tabStyleSelected;
  }
  items3[4] = tmp13;
  let tmp14 = null;
  if (first) {
    tmp14 = tabStyleActive;
  }
  items3[5] = tmp14;
  obj.style = items3;
  obj.children = children;
  obj.children = <closure_4 />;
  return <closure_5 />;
}
({ View: closure_4, TouchableWithoutFeedback: closure_5, FlatList: closure_6 } = get_ActivityIndicator);
_createForOfIteratorHelperLoose = { innerContainer: { flexDirection: "row", alignItems: "stretch" }, tab: { flexGrow: 1, flexBasis: "auto", flexShrink: 0, alignItems: "center", justifyContent: "center", marginBottom: 1, marginHorizontal: 1, padding: 10, borderBottomWidth: 2, borderBottomColor: "transparent" }, tabActive: { backgroundColor: "rgba(0,0,0,0.1)" } };
_createForOfIteratorHelperLoose = { borderBottomColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.BRAND_600 };
_createForOfIteratorHelperLoose.tabSelected = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.container = { flex: 0 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("get ActivityIndicator").fileFinishedImporting("components_native/common/TabBar.tsx");

export default function TabBar(tabIndexSelected) {
  let containerStyle;
  let initialNumTabsToRender;
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
  let ref;
  let closure_7;
  let callback;
  const tmp = _createForOfIteratorHelperLoose();
  ref = tabStyleSelected.useRef(null);
  closure_7 = tabStyleSelected.useRef(tabIndexSelected);
  let items = [tabIndexSelected];
  let effect = tabStyleSelected.useEffect(() => {
    closure_7.current = tabIndexSelected;
  }, items);
  const items1 = [ref, onSelect];
  callback = tabStyleSelected.useCallback((index) => {
    onSelect(index);
    const current = ref.current;
    if (null != current) {
      const obj = { index };
      current.scrollToIndex(obj);
    }
  }, items1);
  const items2 = [tabIndexSelected, tabStyle, tabStyleActive, tabStyleSelected, flag2, onSelect, callback];
  const callback1 = tabStyleSelected.useCallback((arg0, arg1) => "tab-" + arg1, []);
  const callback2 = tabStyleSelected.useCallback((children) => {
    const index = children.index;
    return callback(outer1_10, { index, isSelected: index === tabIndexSelected, tabStyle, tabStyleActive, tabStyleSelected, onSelect: flag2 ? callback : onSelect, children: children.item });
  }, items2);
  let obj = { style: tmp.container, accessibilityRole: "tablist" };
  const memo = tabStyleSelected.useMemo(() => {
    const Gesture = tabIndexSelected(tabStyle[7]).Gesture;
    return Gesture.Native().disallowInterruption(true);
  }, []);
  const intl = tabIndexSelected(tabStyle[8]).intl;
  obj.accessibilityLabel = intl.string(tabIndexSelected(tabStyle[8]).t.t1qXlK);
  obj = { gesture: memo };
  obj = {
    ref: ((tabIndexSelected) => {
      let closure_0 = tabIndexSelected;
      const first = tabStyleActive(tabStyleSelected.useState(() => closure_0), 1)[0];
      const items = [first];
      const effect = tabStyleSelected.useEffect(() => {
        const timeout = setTimeout(() => {
          if (outer2_7.current === outer1_1) {
            const current = outer2_6.current;
            if (null != current) {
              const obj = { index: outer1_1, viewPosition: 1 };
              current.scrollToIndex(obj);
            }
          }
        }, 500);
        return () => {
          clearTimeout(closure_0);
        };
      }, items);
      return ref;
    })(tabIndexSelected),
    contentContainerStyle: items3,
    horizontal: true,
    data: tabs,
    renderItem: callback2,
    keyExtractor: callback1,
    initialNumToRender: initialNumTabsToRender,
    onScrollToIndexFailed: closure_7
  };
  items3 = [containerStyle, tmp.innerContainer];
  obj.showsHorizontalScrollIndicator = !flag;
  obj.children = callback(ref, obj);
  obj.children = callback(tabIndexSelected(tabStyle[7]).GestureDetector, obj);
  return callback(onSelect, obj);
};
