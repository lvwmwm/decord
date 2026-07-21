// Module ID: 11217
// Function ID: 87344
// Name: ExpandableList
// Dependencies: []
// Exports: default

// Module 11217 (ExpandableList)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
({ jsx: closure_6, jsxs: closure_7, Fragment: closure_8 } = arg1(dependencyMap[3]));
const tmp2 = arg1(dependencyMap[3]);
let closure_9 = arg1(dependencyMap[4]).createStyles({ animatedListContainer: { overflow: "hidden" }, expandCTALabelContainer: { alignItems: "center" } });
let closure_10 = { code: "function ExpandableListTsx1(){const{expanded,collapsedListHeight,remainingListHeight}=this.__closure;if(expanded&&collapsedListHeight.get()!==0&&remainingListHeight.get()!==0){return collapsedListHeight.get()+remainingListHeight.get();}return collapsedListHeight.get();}" };
let closure_11 = { code: "function ExpandableListTsx2(){const{collapsedListHeight,withTiming,containerHeight,timingStandard}=this.__closure;if(collapsedListHeight.get()!==0){return{height:withTiming(containerHeight.get(),timingStandard)};}else{return{};}}" };
const obj = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/app_launcher/native/base_components/ExpandableList.tsx");

export default function ExpandableList(items) {
  let expandedOverride;
  let showsExpandCTAOverride;
  let title;
  items = items.items;
  const arg1 = items;
  const onExpand = items.onExpand;
  const importDefault = onExpand;
  ({ onExpandCTAPress: closure_2, expandedOverride } = items);
  const callback = expandedOverride;
  ({ showsExpandCTAOverride, disableExpanding: closure_4, title } = items);
  let View;
  let closure_6;
  let tmp7;
  let bound;
  let callback2;
  let closure_10;
  let closure_11;
  function renderItems(items) {
    items = items.items;
    let flag = items.hasListEnd;
    if (flag === undefined) {
      flag = false;
    }
    const onExpand = flag;
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
  const tmp = callback2();
  let tmp3 = null != expandedOverride;
  if (tmp3) {
    tmp3 = expandedOverride;
  }
  const tmp4 = callback(React.useState(tmp3), 2);
  const first = tmp4[0];
  View = first;
  closure_6 = tmp4[1];
  const tmp6 = importDefault(dependencyMap[5])(first);
  tmp7 = first;
  if (null != tmp6) {
    tmp7 = tmp6;
  }
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
  let obj = arg1(dependencyMap[6]);
  const sharedValue = obj.useSharedValue(0);
  callback2 = sharedValue;
  let obj1 = arg1(dependencyMap[6]);
  const sharedValue1 = obj1.useSharedValue(0);
  closure_10 = sharedValue1;
  let obj2 = arg1(dependencyMap[6]);
  class A {
    constructor() {
      if (closure_5) {
        tmp = closure_9;
        num = 0;
        if (0 !== closure_9.get()) {
          tmp2 = closure_10;
          if (0 !== closure_10.get()) {
            tmp4 = closure_9;
            tmp6 = closure_10;
            value = closure_9.get();
            sum = value + closure_10.get();
          }
          return sum;
        }
      }
      sum = closure_9.get();
      return;
    }
  }
  A.__closure = { expanded: first, collapsedListHeight: sharedValue, remainingListHeight: sharedValue1 };
  A.__workletHash = 17033418452229;
  A.__initData = closure_10;
  const derivedValue = obj2.useDerivedValue(A);
  closure_11 = derivedValue;
  const items3 = [items, bound];
  const items4 = [items, bound];
  const memo = React.useMemo(() => items.slice(0, bound), items3);
  const memo1 = React.useMemo(() => items.slice(bound, items.length), items4);
  let obj3 = arg1(dependencyMap[6]);
  class I {
    constructor() {
      if (0 !== closure_9.get()) {
        obj = {};
        tmp = items;
        tmp2 = onExpandCTAPress;
        num = 7;
        obj3 = items(onExpandCTAPress[7]);
        tmp3 = closure_11;
        num2 = 8;
        value = closure_11.get();
        obj.height = obj3.withTiming(value, items(onExpandCTAPress[8]).timingStandard);
      } else {
        obj = {};
      }
      return obj;
    }
  }
  obj = { collapsedListHeight: sharedValue, withTiming: arg1(dependencyMap[7]).withTiming, containerHeight: derivedValue, timingStandard: arg1(dependencyMap[8]).timingStandard };
  I.__closure = obj;
  I.__workletHash = 2086836441465;
  I.__initData = closure_11;
  obj = {};
  const animatedStyle = obj3.useAnimatedStyle(I);
  obj1 = { style: items5 };
  const items5 = [tmp.animatedListContainer, animatedStyle];
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
  const items6 = [closure_6(View, obj2), ];
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
    tmp22Result = closure_6(View, obj4);
    const tmp22 = closure_6;
    const tmp23 = View;
  }
  items6[1] = tmp22Result;
  obj1.children = items6;
  const items7 = [tmp7(importDefault(dependencyMap[6]).View, obj1), ];
  if (!showsExpandCTAOverride) {
    items7[1] = showsExpandCTAOverride;
    obj.children = items7;
    return tmp16(bound, obj);
  } else {
    const obj6 = {};
    let obj7 = {};
    if (first) {
      const intl2 = arg1(dependencyMap[10]).intl;
      let stringResult = intl2.string(arg1(dependencyMap[10]).t.nPGLFQ);
    } else if (null != title) {
      const intl = arg1(dependencyMap[10]).intl;
      const obj8 = { title };
      stringResult = intl.formatToPlainString(arg1(dependencyMap[10]).t.bj/2kV, obj8);
    }
    obj7.accessibilityLabel = stringResult;
    let obj9 = { style: tmp.expandCTALabelContainer };
    let obj10 = {};
    let num5 = 10;
    const intl3 = arg1(dependencyMap[10]).intl;
    if (first) {
      num5 = tmp37(tmp38[num5]).t.nPGLFQ;
      let stringResult1 = intl3.string(num5);
    } else {
      stringResult1 = intl3.format(tmp37(tmp38[num5]).t.gVw57p, {});
    }
    obj10.children = stringResult1;
    obj10 = tmp33(arg1(dependencyMap[11]).Text, obj10);
    obj9.children = obj10;
    obj9 = tmp33(View, obj9);
    obj7.label = obj9;
    obj7.onPress = function onPress() {
      let tmp = true !== closure_4;
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
    obj7 = tmp24(arg1(dependencyMap[9]).TableRow, obj7);
    obj6.children = obj7;
    closure_6(View, obj6);
    const tmp25 = View;
    const tmp34 = View;
  }
};
export const COLLAPSED_LIST_ITEM_MAX = 4;
