// Module ID: 10099
// Function ID: 10100
// Name: TabBar
// Dependencies: [32, 19, 17, 21, 5014, 575, 7294, 5303, 1113, 2]
// Exports: default

// Module 10099 (TabBar)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5303 */;
import defaultMVCPConfig from "defaultMVCPConfig" /* 7294 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
function Tab(index) {
  let children;
  let isSelected;
  let onSelect;
  let tabKey;
  let tabStyle;
  let tabStyleActive;
  let tabStyleSelected;
  let tmp3;
  let tmp4;
  index = index.index;
  ({ isSelected, onSelect } = index);
  ({ children, tabKey, tabStyle, tabStyleActive, tabStyleSelected } = index);
  const tmp = closure_8();
  const items = [tabKey];
  const obj = defaultMVCPConfig;
  [tmp3, tmp4] = obj.useRecyclingState(false, items);
  let c2 = tmp4;
  const items1 = [tmp4];
  const items2 = [tmp4];
  _slicedToArray(obj.useRecyclingState(false, items), 2);
  const callback = react.useCallback(() => _undefined(true), items1);
  const items3 = [onSelect, index];
  const callback1 = react.useCallback(() => _undefined(false), items2);
  const items4 = [tmp.tab, tabStyle, , , , ];
  let tabSelected = null;
  if (isSelected) {
    tabSelected = tmp.tabSelected;
  }
  items4[2] = tabSelected;
  let tabActive = null;
  if (tmp3) {
    tabActive = tmp.tabActive;
  }
  items4[3] = tabActive;
  let tmp12 = null;
  if (isSelected) {
    tmp12 = tabStyleSelected;
  }
  items4[4] = tmp12;
  let tmp13 = null;
  if (tmp3) {
    tmp13 = tabStyleActive;
  }
  items4[5] = tmp13;
  return <tmp8 accessibilityRole="tab" onPressIn={callback} onPressOut={callback1} onPress={react.useCallback(() => onSelect(index), items3)}>{null}</tmp8>;
}
function TabBarScrollView(ref) {
  ref = ref.ref;
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  const obj = LegacyBaseButton;
  const nativeGesture = obj.useNativeGesture({ disallowInterruption: true });
  const GestureDetector = LegacyBaseButton.GestureDetector;
  const merged1 = Object.assign(merged);
  return <GestureDetector gesture={nativeGesture}>{null}</GestureDetector>;
}
({ View: closure_4, TouchableWithoutFeedback: hasOwnProperty, ScrollView: metroRequire } = react_native);
let jsx = Fragment.jsx;
let obj = { tab: { flexBasis: "auto", flexShrink: 0, alignItems: "center", justifyContent: "center", marginBottom: 1, marginHorizontal: 1, padding: 10, borderBottomWidth: 2, borderBottomColor: "transparent" }, tabActive: { backgroundColor: "rgba(0,0,0,0.1)" }, tabSelected: obj2, container: { flex: 0 } };
obj2 = { borderBottomColor: nativeDefault.unsafe_rawColors.BRAND_600 };
let closure_8 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("components_native/common/TabBar.tsx");

export default function TabBar(tabIndexSelected) {
  let closure_7;
  let containerStyle;
  let tabs;
  tabIndexSelected = tabIndexSelected.tabIndexSelected;
  const tabStyle = tabIndexSelected.tabStyle;
  const tabStyleActive = tabIndexSelected.tabStyleActive;
  const tabStyleSelected = tabIndexSelected.tabStyleSelected;
  const onSelect = tabIndexSelected.onSelect;
  let flag = tabIndexSelected.hideHorizontalScrollbar;
  ({ tabs, containerStyle } = tabIndexSelected);
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = tabIndexSelected.scrollToSelectedIndex;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let callback;
  const tmp = callback();
  const ref = tabStyleSelected.useRef(null);
  jsx = tabStyleSelected.useRef(tabIndexSelected);
  const items = [tabIndexSelected];
  const effect = tabStyleSelected.useEffect(() => {
    closure_7.current = tabIndexSelected;
  }, items);
  const items1 = [onSelect];
  callback = tabStyleSelected.useCallback((index) => {
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
  const callback1 = tabStyleSelected.useCallback((key, arg1) => {
    if (tabStyleSelected.isValidElement(key)) {
      let StringResult;
      if (null != key.key) {
        const _String = String;
        StringResult = String(key.key);
      }
      return StringResult;
    }
    StringResult = "tab-" + arg1;
  }, []);
  const items3 = [callback1, tabIndexSelected, tabStyle, tabStyleActive, tabStyleSelected, flag2, onSelect, callback];
  const callback2 = tabStyleSelected.useCallback((arg0) => {
    let index;
    let item;
    ({ item, index } = arg0);
    return <Tab tabKey={callback1(item, index)} index={index} isSelected={index === tabIndexSelected} tabStyle={tabStyle} tabStyleActive={tabStyleActive} tabStyleSelected={tabStyleSelected} onSelect={flag2 ? callback : onSelect}>{item}</Tab>;
  }, items3);
  const intl = tabIndexSelected(tabStyle[8]).intl;
  return <onSelect style={tmp.container} accessibilityRole="tablist" accessibilityLabel={intl.string(tabIndexSelected(tabStyle[8]).t.t1qXlK)}>{null}</onSelect>;
};
