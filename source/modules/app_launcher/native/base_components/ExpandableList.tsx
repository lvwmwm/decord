// Module ID: 11257
// Function ID: 87659
// Name: ExpandableList
// Dependencies: [57, 31, 27, 33, 4130, 8328, 3991, 4131, 4134, 5165, 1212, 4126, 2]
// Exports: default

// Module 11257 (ExpandableList)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
let closure_8;
const require = arg1;
({ jsx: closure_6, jsxs: closure_7, Fragment: closure_8 } = jsxProd);
let closure_9 = _createForOfIteratorHelperLoose.createStyles({ animatedListContainer: { overflow: "hidden" }, expandCTALabelContainer: { alignItems: "center" } });
let closure_10 = { code: "function ExpandableListTsx1(){const{expanded,collapsedListHeight,remainingListHeight}=this.__closure;if(expanded&&collapsedListHeight.get()!==0&&remainingListHeight.get()!==0){return collapsedListHeight.get()+remainingListHeight.get();}return collapsedListHeight.get();}" };
let closure_11 = { code: "function ExpandableListTsx2(){const{collapsedListHeight,withTiming,containerHeight,timingStandard}=this.__closure;if(collapsedListHeight.get()!==0){return{height:withTiming(containerHeight.get(),timingStandard)};}else{return{};}}" };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/app_launcher/native/base_components/ExpandableList.tsx");

export default function ExpandableList(items) {
  let result;
  let dependencyMap;
  let expandedOverride;
  let showsExpandCTAOverride;
  let title;
  items = items.items;
  const onExpand = items.onExpand;
  ({ onExpandCTAPress: dependencyMap, expandedOverride } = items);
  ({ showsExpandCTAOverride, disableExpanding: result, title } = items);
  let first;
  let closure_6;
  let c7;
  let bound;
  let sharedValue;
  let sharedValue1;
  let derivedValue;
  function renderItems(items) {
    items = items.items;
    let flag = items.hasListEnd;
    if (flag === undefined) {
      flag = false;
    }
    return items.map((arg0, arg1) => {
      const obj = {};
      let tmp2 = !tmp;
      if (!!flag) {
        tmp2 = arg1 === items.length - 1;
      }
      obj.isLastRow = tmp2;
      return arg0(obj);
    });
  }
  let tmp = sharedValue();
  let tmp3 = null != expandedOverride;
  if (tmp3) {
    tmp3 = expandedOverride;
  }
  const tmp4 = expandedOverride(React.useState(tmp3), 2);
  first = tmp4[0];
  closure_6 = tmp4[1];
  const tmp6 = onExpand(8328)(first);
  let tmp7 = first;
  if (null != tmp6) {
    tmp7 = tmp6;
  }
  c7 = tmp7;
  const items1 = [first, onExpand, tmp7];
  const effect = React.useEffect(() => {
    if (tmp) {
      if (null != onExpand) {
        onExpand();
      }
    }
  }, items1);
  const items2 = [expandedOverride];
  const effect1 = React.useEffect(() => {
    if (undefined !== expandedOverride) {
      callback2(expandedOverride);
    }
  }, items2);
  bound = Math.min(4, items.length);
  if (null == showsExpandCTAOverride) {
    showsExpandCTAOverride = items.length > bound;
  }
  let obj = items(3991);
  sharedValue = obj.useSharedValue(0);
  let obj1 = items(3991);
  sharedValue1 = obj1.useSharedValue(0);
  let obj2 = items(3991);
  class A {
    constructor() {
      if (c5) {
        tmp = c9;
        num = 0;
        if (0 !== c9.get()) {
          tmp2 = c10;
          if (0 !== c10.get()) {
            tmp4 = c9;
            tmp6 = c10;
            value = c9.get();
            sum = value + c10.get();
          }
          return sum;
        }
      }
      sum = c9.get();
      return;
    }
  }
  A.__closure = { expanded: first, collapsedListHeight: sharedValue, remainingListHeight: sharedValue1 };
  A.__workletHash = 17033418452229;
  A.__initData = sharedValue1;
  derivedValue = obj2.useDerivedValue(A);
  const items3 = [items, bound];
  const items4 = [items, bound];
  const memo = React.useMemo(() => items.slice(0, bound), items3);
  const memo1 = React.useMemo(() => items.slice(bound, items.length), items4);
  let obj3 = items(3991);
  class I {
    constructor() {
      if (0 !== c9.get()) {
        obj = {};
        tmp = items;
        tmp2 = onExpandCTAPress;
        num = 7;
        obj3 = items(onExpandCTAPress[7]);
        tmp3 = c11;
        num2 = 8;
        value = c11.get();
        obj.height = obj3.withTiming(value, items(onExpandCTAPress[8]).timingStandard);
      } else {
        obj = {};
      }
      return obj;
    }
  }
  obj = { collapsedListHeight: sharedValue, withTiming: items(4131).withTiming, containerHeight: derivedValue, timingStandard: items(4134).timingStandard };
  I.__closure = obj;
  I.__workletHash = 2086836441465;
  I.__initData = derivedValue;
  obj = {};
  const animatedStyle = obj3.useAnimatedStyle(I);
  obj1 = { style: items5 };
  items5 = [tmp.animatedListContainer, animatedStyle];
  obj2 = {
    onLayout(nativeEvent) {
      const result = sharedValue.set(nativeEvent.nativeEvent.layout.height);
    }
  };
  obj3 = { items: memo };
  let tmp20 = !showsExpandCTAOverride;
  if (tmp20) {
    tmp20 = !first;
  }
  obj3.hasListEnd = tmp20;
  obj2.children = renderItems(obj3);
  const items6 = [closure_6(first, obj2), ];
  let tmp22Result = memo1.length > 0;
  if (tmp22Result) {
    const obj4 = {
      onLayout(nativeEvent) {
          const result = sharedValue1.set(nativeEvent.nativeEvent.layout.height);
        },
      accessibilityElementsHidden: !first,
      importantForAccessibility: "no-hide-descendants"
    };
    const obj5 = { items: memo1, hasListEnd: !showsExpandCTAOverride };
    obj4.children = renderItems(obj5);
    tmp22Result = closure_6(first, obj4);
    const tmp22 = closure_6;
    const tmp23 = first;
  }
  items6[1] = tmp22Result;
  obj1.children = items6;
  const items7 = [c7(onExpand(3991).View, obj1), ];
  if (!showsExpandCTAOverride) {
    items7[1] = showsExpandCTAOverride;
    obj.children = items7;
    return tmp16(bound, obj);
  } else {
    const obj6 = {};
    let obj7 = {};
    if (first) {
      const intl2 = items(1212).intl;
      let stringResult = intl2.string(items(1212).t.nPGLFQ);
    } else if (null != title) {
      const intl = items(1212).intl;
      const obj8 = { title };
      stringResult = intl.formatToPlainString(items(1212).t["bj/2kV"], obj8);
    }
    obj7.accessibilityLabel = stringResult;
    let obj9 = { style: tmp.expandCTALabelContainer };
    let obj10 = { color: "text-brand", variant: "text-md/semibold" };
    let num5 = 10;
    const intl3 = items(1212).intl;
    if (first) {
      num5 = tmp37(tmp38[num5]).t.nPGLFQ;
      let stringResult1 = intl3.string(num5);
    } else {
      stringResult1 = intl3.format(tmp37(tmp38[num5]).t.gVw57p, {});
    }
    obj10.children = stringResult1;
    obj10 = tmp33(items(4126).Text, obj10);
    obj9.children = obj10;
    obj9 = tmp33(first, obj9);
    obj7.label = obj9;
    obj7.onPress = function onPress() {
      let tmp = true !== result;
      if (tmp) {
        tmp = !first;
      }
      callback2(tmp);
      if (null != callback) {
        const obj = { expanded: tmp };
        callback(obj);
      }
    };
    obj7.end = true;
    obj7 = tmp24(items(5165).TableRow, obj7);
    obj6.children = obj7;
    closure_6(first, obj6);
    const tmp25 = first;
    const tmp34 = first;
  }
};
export const COLLAPSED_LIST_ITEM_MAX = 4;
