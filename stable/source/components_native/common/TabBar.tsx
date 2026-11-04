// Module ID: 10018
// Function ID: 10019
// Name: TabBar
// Dependencies: [109, 32, 19, 17, 21, 5003, 587, 558, 576, 7252, 5329, 1128, 2]
// Exports: default

// Module 10018 (TabBar)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5329 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles from "createStyles" /* 5003 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let tmp;
const defaultMVCPConfig = tmp(7252);
let closure_2 = ["ref"];
({ View: metroRequire, TouchableWithoutFeedback: metroImportDefault, ScrollView: metroImportAll } = react_native);
const jsx = Fragment.jsx;
let obj = { tab: { flexBasis: "auto", flexShrink: 0, alignItems: "center", justifyContent: "center", marginBottom: 1, marginHorizontal: 1, padding: 10, borderBottomWidth: 2, borderBottomColor: "transparent" }, tabActive: { backgroundColor: "rgba(0,0,0,0.1)" }, tabSelected: obj2, container: { flex: 0 } };
obj2 = { borderBottomColor: nativeDefault.unsafe_rawColors.BRAND_600 };
let closure_10 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function Tab(arg0) {
  let children;
  let index;
  let isSelected;
  let onSelect;
  let tabKey;
  let tabStyle;
  let tabStyleActive;
  let tabStyleSelected;
  let tmp10;
  let tmp5;
  let tmp7;
  let tmp8;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(24);
  ({ children, tabKey, index } = arg0);
  ({ isSelected, tabStyle, onSelect } = arg0);
  ({ tabStyleActive, tabStyleSelected } = arg0);
  const tmp4 = closure_10();
  if (cResult[0] !== tabKey) {
    const items = [tabKey];
    cResult[0] = tabKey;
    cResult[1] = items;
    tmp5 = items;
  } else {
    tmp5 = cResult[1];
  }
  const tmpResult = defaultMVCPConfig;
  [tmp7, tmp8] = tmpResult.useRecyclingState(false, tmp5);
  closure_2 = tmp8;
  _slicedToArray(tmpResult.useRecyclingState(false, tmp5), 2);
  if (cResult[2] !== tmp8) {
    const fn = function k() {
      return tmp8(true);
    };
    cResult[2] = tmp8;
    cResult[3] = fn;
    tmp9 = fn;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] !== tmp8) {
    const fn2 = function _() {
      return tmp8(false);
    };
    cResult[4] = tmp8;
    cResult[5] = fn2;
    tmp10 = fn2;
  } else {
    tmp10 = cResult[5];
  }
  if (cResult[6] === index) {
    let tmp11;
    if (cResult[7] === onSelect) {
      tmp11 = cResult[8];
    }
    let tabSelected = null;
    if (isSelected) {
      tabSelected = tmp4.tabSelected;
    }
    let tabActive = null;
    if (tmp7) {
      tabActive = tmp4.tabActive;
    }
    let tmp14 = null;
    if (isSelected) {
      tmp14 = tabStyleSelected;
    }
    let tmp15 = null;
    if (tmp7) {
      tmp15 = tabStyleActive;
    }
    if (cResult[9] === tmp4.tab) {
      if (cResult[10] === tabSelected) {
        if (cResult[11] === tabActive) {
          if (cResult[12] === tmp14) {
            if (cResult[13] === tmp15) {
              if (cResult[16] === children) {
                let tmp17;
                if (cResult[17] === tmp16) {
                  tmp17 = cResult[18];
                }
                if (cResult[19] === tmp17) {
                  if (cResult[20] === tmp11) {
                    if (cResult[21] === tmp9) {
                      let tmp21;
                      if (cResult[22] === tmp10) {
                        tmp21 = cResult[23];
                      }
                      return tmp21;
                    }
                  }
                }
                const tmp24 = <metroImportDefault accessibilityRole="tab" onPressIn={tmp9} onPressOut={tmp10} onPress={tmp11}>{tmp17}</metroImportDefault>;
                cResult[19] = tmp17;
                cResult[20] = tmp11;
                cResult[21] = tmp9;
                cResult[22] = tmp10;
                cResult[23] = tmp24;
                tmp21 = tmp24;
              }
              const tmp20 = <metroRequire style={tmp16}>{children}</metroRequire>;
              cResult[16] = children;
              cResult[17] = tmp16;
              cResult[18] = tmp20;
              tmp17 = tmp20;
            }
          }
        }
      }
    }
    const items1 = [tmp4.tab, tabStyle, tabSelected, tabActive, tmp14, tmp15];
    cResult[9] = tmp4.tab;
    cResult[10] = tabSelected;
    cResult[11] = tabActive;
    cResult[12] = tmp14;
    cResult[13] = tmp15;
    cResult[14] = tabStyle;
    cResult[15] = items1;
    class E {
      constructor() {
        return onSelect(index);
      }
    }
  }
  class E {
    constructor() {
      return onSelect(index);
    }
  }
  cResult[6] = index;
  cResult[7] = onSelect;
  cResult[8] = E;
  tmp11 = E;
}) : (function Tab(index) {
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
  const tmp = closure_10();
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
});
ReactCompilerGating = ReactCompilerGating_mod;
const renderScrollComponent = ReactCompilerGating.isReactCompilerEnabled() ? (function TabBarScrollView(ref) {
  let tmp4;
  let tmp5;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(10);
  if (cResult[0] !== ref) {
    const tmp8 = _objectWithoutProperties(ref, closure_2);
    cResult[0] = ref;
    cResult[1] = tmp8;
    cResult[2] = ref.ref;
    tmp5 = ref;
    tmp4 = tmp8;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { disallowInterruption: true };
    cResult[3] = obj2;
    tmp9 = obj2;
  } else {
    tmp9 = cResult[3];
  }
  const tmpResult = LegacyBaseButton;
  const nativeGesture = tmpResult.useNativeGesture(tmp9);
  if (cResult[4] === tmp4) {
    let tmp11;
    if (cResult[5] === tmp5) {
      tmp11 = cResult[6];
    }
    if (cResult[7] === nativeGesture) {
      let tmp14;
      if (cResult[8] === tmp11) {
        tmp14 = cResult[9];
      }
      return tmp14;
    }
    const tmp16 = jsx(LegacyBaseButton.GestureDetector, { gesture: nativeGesture, children: tmp11 });
    cResult[7] = nativeGesture;
    cResult[8] = tmp11;
    cResult[9] = tmp16;
    tmp14 = tmp16;
  }
  const merged = Object.assign(tmp4);
  const tmp13 = <metroImportAll ref={tmp5} nestedScrollEnabled />;
  cResult[4] = tmp4;
  cResult[5] = tmp5;
  cResult[6] = tmp13;
  tmp11 = tmp13;
}) : (function TabBarScrollView(ref) {
  ref = ref.ref;
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  const obj = LegacyBaseButton;
  const nativeGesture = obj.useNativeGesture({ disallowInterruption: true });
  const GestureDetector = LegacyBaseButton.GestureDetector;
  const merged1 = Object.assign(merged);
  return <GestureDetector gesture={nativeGesture}>{null}</GestureDetector>;
});
const result = size.fileFinishedImporting("components_native/common/TabBar.tsx");

export default function TabBar(tabIndexSelected) {
  let containerStyle;
  let intl;
  let obj2;
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
  const tmp = closure_10();
  const ref = flag2.useRef(null);
  let closure_7 = flag2.useRef(tabIndexSelected);
  const items = [tabIndexSelected];
  const effect = flag2.useEffect(() => {
    closure_7.current = tabIndexSelected;
  }, items);
  const items1 = [onSelect];
  const callback = flag2.useCallback((index) => {
    onSelect(index);
    const current = ref.current;
    if (current != null) {
      const obj = { index };
      current.scrollToIndex(obj);
    }
  }, items1);
  const first = onSelect(flag2.useState(() => tabIndexSelected), 1)[0];
  const items2 = [first];
  const effect1 = flag2.useEffect(() => {
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
  const callback1 = flag2.useCallback((key, arg1) => {
    if (flag2.isValidElement(key)) {
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
  let obj = { style: tmp.container, accessibilityRole: "tablist", accessibilityLabel: intl.string(tabIndexSelected(tabStyle[11]).t.t1qXlK), children: callback1(tabIndexSelected(tabStyle[9]).FlashList, obj2) };
  const callback2 = flag2.useCallback((arg0) => {
    let index;
    let item;
    ({ item, index } = arg0);
    return <closure_11 tabKey={callback1(item, index)} index={index} isSelected={index === tabIndexSelected} tabStyle={tabStyle} tabStyleActive={tabStyleActive} tabStyleSelected={tabStyleSelected} onSelect={flag2 ? callback : onSelect}>{item}</closure_11>;
  }, items3);
  intl = tabIndexSelected(tabStyle[11]).intl;
  obj2 = { ref, contentContainerStyle: containerStyle, horizontal: true, renderScrollComponent, data: tabs, extraData: tabIndexSelected, renderItem: callback2, keyExtractor: callback1, showsHorizontalScrollIndicator: !flag };
  return callback1(ref, obj);
};
