// Module ID: 13342
// Function ID: 13343
// Name: ExpandableList
// Dependencies: [32, 19, 17, 21, 5243, 6773, 1652, 5485, 5488, 7379, 1113, 5866, 2]
// Exports: default

// Module 13342 (ExpandableList)
import react_native from "react-native" /* 17 */;
import _mod1652 from "module_1652" /* 1652 */;
import timing_timing from "timing/timing" /* 5485 */;
import timingPresets from "timingPresets" /* 5488 */;
import usePreviousDefault from "usePrevious" /* 6773 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

let importDefault;

let metroImportAll;
let metroImportDefault;
let metroRequire;
let tmp4;
const _modDef1652 = tmp4(1652);
let View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault, Fragment: metroImportAll } = Fragment);
let closure_9 = createStyles.createStyles({ animatedListContainer: { overflow: "hidden" }, expandCTALabelContainer: { alignItems: "center" } });
let closure_10 = { code: "(function ExpandableListTsx1(){let[expanded,collapsedListHeight,remainingListHeight]=this.__closure;if(expanded&&collapsedListHeight.get()!==0&&remainingListHeight.get()!==0){return collapsedListHeight.get()+remainingListHeight.get();}return collapsedListHeight.get();})" };
let closure_11 = { code: "(function ExpandableListTsx2(){let[collapsedListHeight,withTiming,containerHeight,timingStandard]=this.__closure;if(collapsedListHeight.get()!==0){return{height:withTiming(containerHeight.get(),timingStandard)};}else{return{};}})" };
let result = size.fileFinishedImporting("modules/app_launcher/native/base_components/ExpandableList.tsx");

export default function ExpandableList(onExpand) {
  let Text;
  let closure_129_2;
  let closure_129_4;
  let expandedOverride;
  let first;
  let items10;
  let items9;
  let obj10;
  let obj12;
  let showsExpandCTAOverride;
  let title;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp19;
  let tmp20;
  let tmp21;
  let tmp22;
  let tmp23;
  const f131667 = (fn, index) => {
    const isLastRow = closure_1 && index === memo1.length - 1;
    return fn({ isLastRow });
  };
  const items = onExpand.items;
  onExpand = onExpand.onExpand;
  ({ onExpandCTAPress: closure_129_2, expandedOverride } = onExpand);
  ({ showsExpandCTAOverride, disableExpanding: closure_129_4, title } = onExpand);
  metroRequire = undefined;
  first = undefined;
  let bound;
  let sharedValue;
  let sharedValue1;
  let tmp = closure_9();
  let obj = react;
  let flag = expandedOverride;
  const useState = react.useState;
  if (expandedOverride == null) {
    flag = false;
  }
  [first, metroRequire] = useState(flag);
  const tmp4 = importDefault;
  let tmp6 = usePreviousDefault(first);
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
  let obj2 = _mod1652;
  sharedValue = obj2.useSharedValue(0);
  const obj3 = _mod1652;
  sharedValue1 = obj3.useSharedValue(0);
  const items3 = [closure_10, first, sharedValue, sharedValue1];
  let c0;
  let c1;
  let c2;
  [tmp13, tmp14, tmp15, tmp16] = items3;
  const obj4 = _mod1652;
  class ExpandableListTsx1 {
    constructor() {
      const tmp = c0;
      if (tmp) {
        const obj = _undefined;
        if (0 !== _undefined.get()) {
          let sum;
          const obj2 = _undefined2;
          if (0 !== _undefined2.get()) {
            const value = obj.get();
            sum = value + obj2.get();
          }
          return sum;
        }
      }
      sum = _undefined.get();
    }
  }
  const items4 = [tmp14, tmp15, tmp16];
  ExpandableListTsx1.__closure = items4;
  ExpandableListTsx1.__workletHash = 3023496786140;
  ExpandableListTsx1.__initData = tmp13;
  const items5 = [items, bound];
  const derivedValue = obj4.useDerivedValue(ExpandableListTsx1);
  const memo = obj.useMemo(() => items.slice(0, bound), items5);
  const items6 = [items, bound];
  const memo1 = obj.useMemo(() => items.slice(bound, items.length), items6);
  const items7 = [closure_11, sharedValue, , , ];
  const useAnimatedStyle = _mod1652.useAnimatedStyle;
  _mod1652;
  items7[2] = timing_timing.withTiming;
  items7[3] = derivedValue;
  items7[4] = timingPresets.timingStandard;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  let c3;
  [tmp19, tmp20, tmp21, tmp22, tmp23] = items7;
  class ExpandableListTsx2 {
    constructor() {
      let obj;
      if (0 !== _undefined.get()) {
        obj = { height: _undefined2(_undefined3.get(), c3) };
        const obj2 = { height: _undefined2(_undefined3.get(), c3) };
      } else {
        obj = {};
      }
      return obj;
    }
  }
  const items8 = [tmp20, tmp21, tmp22, tmp23];
  ExpandableListTsx2.__closure = items8;
  ExpandableListTsx2.__workletHash = 10519564962816;
  ExpandableListTsx2.__initData = tmp19;
  const animatedStyle = useAnimatedStyle(ExpandableListTsx2);
  const obj5 = { style: items9, children: items10 };
  items9 = [tmp.animatedListContainer, animatedStyle];
  let tmp29 = !showsExpandCTAOverride;
  const obj6 = {
    onLayout: function handleCollapsedListLayout(nativeEvent) {
      const result = sharedValue.set(nativeEvent.nativeEvent.layout.height);
    },
    children: memo.map(f131667)
  };
  View = _modDef1652.View;
  const tmp26 = metroImportAll;
  if (!showsExpandCTAOverride) {
    tmp29 = !first;
  }
  importDefault = tmp29;
  items10 = [metroRequire(View, obj6), ];
  let tmp27Result = memo1.length > 0;
  if (tmp27Result) {
    importDefault = !showsExpandCTAOverride;
    const obj7 = {
      onLayout: function handleRemainingListLayout(nativeEvent) {
          const result = sharedValue1.set(nativeEvent.nativeEvent.layout.height);
        },
      accessibilityElementsHidden: !first,
      importantForAccessibility: "no-hide-descendants",
      children: memo1.map(f131667)
    };
    tmp27Result = tmp27(tmp28, obj7);
  }
  items10[1] = tmp27Result;
  const children = [metroImportDefault(View, obj5), ];
  if (showsExpandCTAOverride) {
    let stringResult;
    let stringResult1;
    const TableRow = tmp10(7379).TableRow;
    if (first) {
      const intl2 = tmp10(1113).intl;
      stringResult = intl2.string(tmp10(1113).t.nPGLFQ);
    } else if (null != title) {
      const intl = tmp10(1113).intl;
      const obj8 = { title };
      stringResult = intl.formatToPlainString(tmp10(1113).t["bj/2kV"], obj8);
    }
    const obj9 = {
      accessibilityLabel: stringResult,
      label: metroRequire(View, obj10),
      onPress: function handleExpandCTAPress() {
          closure_6(true !== closure_1_4 && !first);
          if (closure_1_2 != null) {
            const obj = { expanded: true !== closure_1_4 && !first };
            tmp4(obj);
          }
        },
      end: true
    };
    obj10 = { style: tmp.expandCTALabelContainer, children: metroRequire(Text, obj12) };
    Text = tmp10(5866).Text;
    const intl3 = tmp10(1113).intl;
    if (first) {
      stringResult1 = intl3.string(tmp10(1113).t.nPGLFQ);
    } else {
      stringResult1 = intl3.format(tmp10(1113).t.gVw57p, {});
    }
    const obj11 = { children: metroRequire(TableRow, obj9) };
    obj12 = { color: "text-brand", variant: "body-md/semibold", children: stringResult1 };
    showsExpandCTAOverride = tmp27(tmp28, obj11);
  }
  children[1] = showsExpandCTAOverride;
  return metroImportDefault(tmp26, { children });
};
export const COLLAPSED_LIST_ITEM_MAX = 4;
