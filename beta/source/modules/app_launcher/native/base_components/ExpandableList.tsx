// Module ID: 11590
// Function ID: 11591
// Name: ExpandableList
// Dependencies: [32, 19, 17, 21, 4836, 7720, 4566, 4837, 4840, 5917, 1115, 4832, 2]
// Exports: default

// Module 11590 (ExpandableList)
import react_native from "react-native" /* 17 */;
import timing from "timing" /* 4837 */;
import timingPresets from "timingPresets" /* 4840 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
let metroRequire;
let View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault, Fragment: metroImportAll } = Fragment);
let closure_9 = createStyles.createStyles({ animatedListContainer: { overflow: "hidden" }, expandCTALabelContainer: { alignItems: "center" } });
let closure_10 = { code: "function ExpandableListTsx1(){const{expanded,collapsedListHeight,remainingListHeight}=this.__closure;if(expanded&&collapsedListHeight.get()!==0&&remainingListHeight.get()!==0){return collapsedListHeight.get()+remainingListHeight.get();}return collapsedListHeight.get();}" };
let closure_11 = { code: "function ExpandableListTsx2(){const{collapsedListHeight,withTiming,containerHeight,timingStandard}=this.__closure;if(collapsedListHeight.get()!==0){return{height:withTiming(containerHeight.get(),timingStandard)};}else{return{};}}" };
let result = size.fileFinishedImporting("modules/app_launcher/native/base_components/ExpandableList.tsx");

export default function ExpandableList(onExpand) {
  let Text;
  let expandedOverride;
  let items5;
  let items6;
  let obj12;
  let obj14;
  let showsExpandCTAOverride;
  let title;
  const f116546 = (fn, index) => {
    const isLastRow = closure_1 && index === memo1.length - 1;
    return fn({ isLastRow });
  };
  const items = onExpand.items;
  onExpand = onExpand.onExpand;
  ({ onExpandCTAPress: dependencyMap, expandedOverride } = onExpand);
  ({ showsExpandCTAOverride, disableExpanding: react, title } = onExpand);
  let closure_6;
  let first;
  let bound;
  let sharedValue;
  let sharedValue1;
  let derivedValue;
  let tmp = sharedValue();
  let obj = react;
  let flag = expandedOverride;
  const useState = react.useState;
  if (expandedOverride == null) {
    flag = false;
  }
  const tmp2 = expandedOverride(useState(flag), 2);
  first = tmp2[0];
  closure_6 = tmp2[1];
  const tmp4 = onExpand;
  let tmp6 = onExpand(7720)(first);
  if (tmp6 == null) {
    tmp6 = first;
  }
  first = tmp6;
  const items1 = [first, onExpand, tmp6];
  const effect = obj.useEffect(() => {
    const tmp = first !== first && first;
    if (tmp) {
      if (onExpand != null) {
        tmp2();
      }
    }
  }, items1);
  const items2 = [expandedOverride];
  const effect1 = obj.useEffect(() => {
    if (undefined !== expandedOverride) {
      closure_6(tmp);
    }
  }, items2);
  bound = Math.min(4, items.length);
  if (null == showsExpandCTAOverride) {
    showsExpandCTAOverride = items.length > bound;
  }
  let obj2 = items(4566);
  sharedValue = obj2.useSharedValue(0);
  const obj3 = items(4566);
  sharedValue1 = obj3.useSharedValue(0);
  const obj4 = items(4566);
  class C {
    constructor() {
      const tmp = first;
      if (tmp) {
        const obj = sharedValue;
        if (0 !== sharedValue.get()) {
          let sum;
          const obj2 = sharedValue1;
          if (0 !== sharedValue1.get()) {
            const value = obj.get();
            sum = value + obj2.get();
          }
          return sum;
        }
      }
      sum = sharedValue.get();
    }
  }
  C.__closure = { expanded: first, collapsedListHeight: sharedValue, remainingListHeight: sharedValue1 };
  C.__workletHash = 17033418452229;
  C.__initData = sharedValue1;
  derivedValue = obj4.useDerivedValue(C);
  const items3 = [items, bound];
  const memo = obj.useMemo(() => items.slice(0, bound), items3);
  const items4 = [items, bound];
  const memo1 = obj.useMemo(() => items.slice(bound, items.length), items4);
  const obj5 = items(4566);
  class A {
    constructor() {
      let obj;
      let value;
      let withTiming;
      if (0 !== sharedValue.get()) {
        const obj2 = { height: withTiming(value, timingPresets.timingStandard) };
        withTiming = timing.withTiming;
        timing;
        value = derivedValue.get();
        obj = obj2;
      } else {
        obj = {};
      }
      return obj;
    }
  }
  A.__closure = { collapsedListHeight: sharedValue, withTiming: items(4837).withTiming, containerHeight: derivedValue, timingStandard: items(4840).timingStandard };
  A.__workletHash = 2086836441465;
  A.__initData = derivedValue;
  ({ collapsedListHeight: sharedValue, withTiming: items(4837).withTiming, containerHeight: derivedValue, timingStandard: items(4840).timingStandard });
  const animatedStyle = obj5.useAnimatedStyle(A);
  const obj7 = { style: items5, children: items6 };
  items5 = [tmp.animatedListContainer, animatedStyle];
  let tmp19 = !showsExpandCTAOverride;
  const obj8 = {
    onLayout(nativeEvent) {
      const result = sharedValue.set(nativeEvent.nativeEvent.layout.height);
    },
    children: memo.map(f116546)
  };
  View = tmp4(4566).View;
  const tmp16 = bound;
  if (!showsExpandCTAOverride) {
    tmp19 = !first;
  }
  let closure_1 = tmp19;
  items6 = [closure_6(first, obj8), ];
  let tmp17Result = memo1.length > 0;
  if (tmp17Result) {
    closure_1 = !showsExpandCTAOverride;
    const obj9 = {
      onLayout(nativeEvent) {
          const result = sharedValue1.set(nativeEvent.nativeEvent.layout.height);
        },
      accessibilityElementsHidden: !first,
      importantForAccessibility: "no-hide-descendants",
      children: memo1.map(f116546)
    };
    tmp17Result = tmp17(tmp18, obj9);
  }
  items6[1] = tmp17Result;
  const children = [first(View, obj7), ];
  if (showsExpandCTAOverride) {
    let stringResult;
    let stringResult1;
    const TableRow = tmp10(5917).TableRow;
    if (first) {
      const intl2 = tmp10(1115).intl;
      stringResult = intl2.string(tmp10(1115).t.nPGLFQ);
    } else if (null != title) {
      const intl = tmp10(1115).intl;
      const obj10 = { title };
      stringResult = intl.formatToPlainString(tmp10(1115).t["bj/2kV"], obj10);
    }
    const obj11 = {
      accessibilityLabel: stringResult,
      label: closure_6(first, obj12),
      onPress() {
          closure_6(true !== react && !first);
          if (dependencyMap != null) {
            const obj = { expanded: true !== react && !first };
            tmp4(obj);
          }
        },
      end: true
    };
    obj12 = { style: tmp.expandCTALabelContainer, children: closure_6(Text, obj14) };
    Text = tmp10(4832).Text;
    const intl3 = tmp10(1115).intl;
    if (first) {
      stringResult1 = intl3.string(tmp10(1115).t.nPGLFQ);
    } else {
      stringResult1 = intl3.format(tmp10(1115).t.gVw57p, {});
    }
    const obj13 = { children: closure_6(TableRow, obj11) };
    obj14 = { color: "text-brand", variant: "text-md/semibold", children: stringResult1 };
    showsExpandCTAOverride = tmp17(tmp18, obj13);
  }
  children[1] = showsExpandCTAOverride;
  return first(tmp16, { children });
};
export const COLLAPSED_LIST_ITEM_MAX = 4;
