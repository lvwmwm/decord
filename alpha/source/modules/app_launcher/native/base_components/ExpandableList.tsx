// Module ID: 11812
// Function ID: 11813
// Name: ExpandableList
// Dependencies: [32, 19, 17, 21, 5090, 558, 576, 5928, 4810, 5091, 5094, 6184, 1126, 5086, 2]

// Module 11812 (ExpandableList)
import react_native from "react-native" /* 17 */;
import timing from "timing" /* 5091 */;
import timingPresets from "timingPresets" /* 5094 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5090 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
let metroRequire;
let View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault, Fragment: metroImportAll } = Fragment);
let closure_9 = createStyles.createStyles({ animatedListContainer: { overflow: "hidden" }, expandCTALabelContainer: { alignItems: "center" } });
const __initData = { code: "function ExpandableListTsx1(){const{expanded,collapsedListHeight,remainingListHeight}=this.__closure;if(expanded&&collapsedListHeight.get()!==0&&remainingListHeight.get()!==0){return collapsedListHeight.get()+remainingListHeight.get();}return collapsedListHeight.get();}" };
const __initData2 = { code: "function ExpandableListTsx2(){const{collapsedListHeight,withTiming,containerHeight,timingStandard}=this.__closure;if(collapsedListHeight.get()!==0){return{height:withTiming(containerHeight.get(),timingStandard)};}else{return{};}}" };
const __initData3 = { code: "function ExpandableListTsx3(){const{expanded,collapsedListHeight,remainingListHeight}=this.__closure;if(expanded&&collapsedListHeight.get()!==0&&remainingListHeight.get()!==0){return collapsedListHeight.get()+remainingListHeight.get();}return collapsedListHeight.get();}" };
const __initData4 = { code: "function ExpandableListTsx4(){const{collapsedListHeight,withTiming,containerHeight,timingStandard}=this.__closure;if(collapsedListHeight.get()!==0){return{height:withTiming(containerHeight.get(),timingStandard)};}else{return{};}}" };
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function ExpandableList(onExpandCTAPress) {
  let Text;
  let derivedValue;
  let disableExpanding;
  let expandedOverride;
  let first;
  let items;
  let items2;
  let items3;
  let obj10;
  let obj13;
  let obj8;
  let onExpand;
  let showsExpandCTAOverride;
  let tmp = onExpand;
  const tmp2 = expandedOverride;
  let obj = onExpand(expandedOverride[6]);
  const cResult = obj.c(50);
  ({ items, onExpand } = onExpandCTAPress);
  onExpandCTAPress = onExpandCTAPress.onExpandCTAPress;
  expandedOverride = onExpandCTAPress.expandedOverride;
  ({ showsExpandCTAOverride, disableExpanding } = onExpandCTAPress);
  const title = onExpandCTAPress.title;
  const tmp4 = derivedValue();
  let obj2 = first;
  let flag = expandedOverride;
  const useState = first.useState;
  if (expandedOverride == null) {
    flag = false;
  }
  const tmp5 = disableExpanding(useState(flag), 2);
  first = tmp5[0];
  let closure_5 = tmp5[1];
  let tmp8 = onExpandCTAPress(tmp2[7])(first);
  const tmp7 = onExpandCTAPress;
  if (tmp8 == null) {
    tmp8 = first;
  }
  first = tmp8;
  if (cResult[0] === first) {
    if (cResult[1] === onExpand) {
      let tmp9;
      let tmp10;
      let tmp13;
      let tmp12;
      if (cResult[2] === tmp8) {
        tmp9 = cResult[3];
        tmp10 = cResult[4];
      }
      const effect = obj2.useEffect(tmp9, tmp10);
      if (cResult[5] !== expandedOverride) {
        const fn2 = function f() {
          if (undefined !== expandedOverride) {
            closure_5(tmp);
          }
        };
        const items1 = [expandedOverride];
        cResult[5] = expandedOverride;
        cResult[6] = fn2;
        cResult[7] = items1;
        tmp13 = items1;
        tmp12 = fn2;
      } else {
        tmp12 = cResult[6];
        tmp13 = cResult[7];
      }
      const effect1 = obj2.useEffect(tmp12, tmp13);
      const _Math = Math;
      const bound = Math.min(4, items.length);
      if (null == showsExpandCTAOverride) {
        showsExpandCTAOverride = items.length > bound;
      }
      const tmpResult = tmp(tmp2[8]);
      const sharedValue = tmpResult.useSharedValue(0);
      const tmpResult4 = tmp(tmp2[8]);
      const sharedValue1 = tmpResult4.useSharedValue(0);
      const tmpResult5 = tmp(tmp2[8]);
      class D {
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
      const obj3 = { expanded: first, collapsedListHeight: sharedValue, remainingListHeight: sharedValue1 };
      D.__closure = obj3;
      D.__workletHash = 17033418452229;
      D.__initData = __initData;
      derivedValue = tmpResult5.useDerivedValue(D);
      if (cResult[8] === bound) {
        let tmp21;
        if (cResult[9] === items) {
          tmp21 = cResult[10];
        }
        if (cResult[11] === bound) {
          let arr3;
          if (cResult[12] === items) {
            arr3 = cResult[13];
          }
          const fn3 = function q() {
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
          };
          const obj4 = { collapsedListHeight: sharedValue, withTiming: tmp(tmp2[9]).withTiming, containerHeight: derivedValue, timingStandard: tmp(tmp2[10]).timingStandard };
          const useAnimatedStyle = tmp(tmp2[8]).useAnimatedStyle;
          tmp(tmp2[8]);
          fn3.__closure = obj4;
          fn3.__workletHash = 2086836441465;
          fn3.__initData = __initData2;
          const animatedStyle = useAnimatedStyle(fn3);
          if (cResult[14] === disableExpanding) {
            if (cResult[15] === first) {
              let tmp27;
              let tmp28;
              let tmp29;
              let tmp30;
              if (cResult[16] === onExpandCTAPress) {
                tmp27 = cResult[17];
              }
              if (cResult[18] !== sharedValue) {
                function handleCollapsedListLayout(nativeEvent) {
                  const result = sharedValue.set(nativeEvent.nativeEvent.layout.height);
                }
                cResult[18] = sharedValue;
                cResult[19] = handleCollapsedListLayout;
                tmp28 = handleCollapsedListLayout;
              } else {
                tmp28 = cResult[19];
              }
              if (cResult[20] !== sharedValue1) {
                function handleRemainingListLayout(nativeEvent) {
                  const result = sharedValue1.set(nativeEvent.nativeEvent.layout.height);
                }
                cResult[20] = sharedValue1;
                cResult[21] = handleRemainingListLayout;
                tmp29 = handleRemainingListLayout;
              } else {
                tmp29 = cResult[21];
              }
              const _Symbol = Symbol;
              if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
                function renderItems(hasListEnd) {
                  const items = hasListEnd.items;
                  hasListEnd = hasListEnd.hasListEnd;
                  let closure_1 = undefined !== hasListEnd && hasListEnd;
                  return items.map((fn, index) => {
                    const isLastRow = closure_1 && index === items.length - 1;
                    return fn({ isLastRow });
                  });
                }
                cResult[22] = renderItems;
                tmp30 = renderItems;
              } else {
                tmp30 = cResult[22];
              }
              if (cResult[23] === animatedStyle) {
                if (cResult[26] === tmp21) {
                  let tmp33;
                  if (cResult[27] === (!showsExpandCTAOverride && !first)) {
                    tmp33 = cResult[28];
                  }
                  if (cResult[29] === tmp28) {
                    let tmp35;
                    if (cResult[30] === tmp33) {
                      tmp35 = cResult[31];
                    }
                    if (cResult[32] === first) {
                      if (cResult[33] === tmp29) {
                        if (cResult[34] === arr3) {
                          let tmp39;
                          if (cResult[35] === showsExpandCTAOverride) {
                            tmp39 = cResult[36];
                          }
                          if (cResult[37] === tmp31) {
                            if (cResult[38] === tmp35) {
                              let tmp43;
                              if (cResult[39] === tmp39) {
                                tmp43 = cResult[40];
                              }
                              if (cResult[41] === first) {
                                if (cResult[42] === tmp27) {
                                  if (cResult[43] === showsExpandCTAOverride) {
                                    if (cResult[44] === tmp4.expandCTALabelContainer) {
                                      let tmp46;
                                      if (cResult[45] === title) {
                                        tmp46 = cResult[46];
                                      }
                                      if (cResult[47] === tmp43) {
                                        let tmp52;
                                        if (cResult[48] === tmp46) {
                                          tmp52 = cResult[49];
                                        }
                                        return tmp52;
                                      }
                                      const obj5 = { children: items2 };
                                      items2 = [tmp43, tmp46];
                                      const tmp55 = sharedValue(sharedValue1, obj5);
                                      cResult[47] = tmp43;
                                      cResult[48] = tmp46;
                                      cResult[49] = tmp55;
                                      tmp52 = tmp55;
                                    }
                                  }
                                }
                              }
                              let tmp48Result = showsExpandCTAOverride;
                              if (tmp48Result) {
                                let stringResult;
                                let stringResult1;
                                const TableRow = tmp(tmp2[11]).TableRow;
                                if (first) {
                                  const intl2 = tmp(tmp2[12]).intl;
                                  stringResult = intl2.string(tmp(tmp2[12]).t.nPGLFQ);
                                } else if (null != title) {
                                  const intl = tmp(tmp2[12]).intl;
                                  const obj6 = { title };
                                  stringResult = intl.formatToPlainString(tmp(tmp2[12]).t["bj/2kV"], obj6);
                                }
                                ({ accessibilityLabel: stringResult, label: first(closure_5, obj8), onPress: tmp27, end: true });
                                obj8 = { style: tmp4.expandCTALabelContainer, children: first(Text, obj10) };
                                Text = tmp(tmp2[13]).Text;
                                const intl3 = tmp(tmp2[12]).intl;
                                if (first) {
                                  stringResult1 = intl3.string(tmp(tmp2[12]).t.nPGLFQ);
                                } else {
                                  stringResult1 = intl3.format(tmp(tmp2[12]).t.gVw57p, {});
                                }
                                obj10 = { color: "text-brand", variant: "text-md/semibold", children: stringResult1 };
                                const obj9 = { children: null };
                                class D {
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
                                tmp48Result = tmp48(tmp49, obj9);
                              }
                              cResult[41] = first;
                              cResult[42] = tmp27;
                              cResult[43] = showsExpandCTAOverride;
                              cResult[44] = tmp4.expandCTALabelContainer;
                              cResult[45] = title;
                              cResult[46] = tmp48Result;
                              tmp46 = tmp48Result;
                            }
                          }
                          const obj11 = { style: tmp31, children: items3 };
                          items3 = [tmp35, tmp39];
                          cResult[37] = tmp31;
                          cResult[38] = tmp35;
                          cResult[39] = tmp39;
                          const tmp45 = sharedValue(tmp7(tmp2[8]).View, obj11);
                          class D {
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
                          tmp43 = tmp45;
                        }
                      }
                    }
                    let tmp41Result = arr3.length > 0;
                    if (tmp41Result) {
                      const obj12 = { onLayout: tmp29, accessibilityElementsHidden: !first, importantForAccessibility: "no-hide-descendants", children: tmp30(obj13) };
                      obj13 = { items: arr3, hasListEnd: !showsExpandCTAOverride };
                      tmp41Result = first(closure_5, obj12);
                    }
                    cResult[32] = first;
                    cResult[33] = tmp29;
                    cResult[34] = arr3;
                    cResult[35] = showsExpandCTAOverride;
                    cResult[36] = tmp41Result;
                    tmp39 = tmp41Result;
                  }
                  const obj14 = { onLayout: tmp28, children: tmp33 };
                  const tmp38 = first(closure_5, obj14);
                  cResult[29] = tmp28;
                  cResult[30] = tmp33;
                  cResult[31] = tmp38;
                  tmp35 = tmp38;
                }
                const obj15 = { items: tmp21, hasListEnd: !showsExpandCTAOverride && !first };
                const tmp30Result = tmp30(obj15);
                cResult[26] = tmp21;
                cResult[27] = !showsExpandCTAOverride && !first;
                cResult[28] = tmp30Result;
                tmp33 = tmp30Result;
              }
              const items4 = [tmp4.animatedListContainer, animatedStyle];
              cResult[23] = animatedStyle;
              cResult[24] = tmp4.animatedListContainer;
              cResult[25] = items4;
              class D {
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
            }
          }
          function handleExpandCTAPress() {
            closure_5(true !== disableExpanding && !first);
            if (onExpandCTAPress != null) {
              const obj = { expanded: true !== disableExpanding && !first };
              tmp4(obj);
            }
          }
          class D {
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
          cResult[14] = disableExpanding;
          cResult[15] = first;
          cResult[16] = onExpandCTAPress;
          cResult[17] = handleExpandCTAPress;
          tmp27 = handleExpandCTAPress;
        }
        const substr = items.slice(bound, items.length);
        cResult[11] = bound;
        cResult[12] = items;
        cResult[13] = substr;
        arr3 = substr;
      }
      const substr1 = items.slice(0, bound);
      cResult[8] = bound;
      cResult[9] = items;
      cResult[10] = substr1;
      tmp21 = substr1;
    }
  }
  const fn = function p() {
    const tmp = first !== first && first;
    if (tmp) {
      if (onExpand != null) {
        tmp2();
      }
    }
  };
  const items5 = [first, onExpand, tmp8];
  cResult[0] = first;
  cResult[1] = onExpand;
  cResult[2] = tmp8;
  cResult[3] = fn;
  cResult[4] = items5;
  tmp10 = items5;
  tmp9 = fn;
}) : (function ExpandableList(onExpand) {
  let Text;
  let expandedOverride;
  let items5;
  let items6;
  let obj12;
  let obj14;
  let showsExpandCTAOverride;
  let title;
  const f143204 = (fn, index) => {
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
  let tmp6 = onExpand(5928)(first);
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
  let obj2 = items(4810);
  sharedValue = obj2.useSharedValue(0);
  const obj3 = items(4810);
  sharedValue1 = obj3.useSharedValue(0);
  const obj4 = items(4810);
  class S {
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
  S.__closure = { expanded: first, collapsedListHeight: sharedValue, remainingListHeight: sharedValue1 };
  S.__workletHash = 15615156859143;
  S.__initData = __initData3;
  derivedValue = obj4.useDerivedValue(S);
  const items3 = [items, bound];
  const memo = obj.useMemo(() => items.slice(0, bound), items3);
  const items4 = [items, bound];
  const memo1 = obj.useMemo(() => items.slice(bound, items.length), items4);
  const obj5 = items(4810);
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
  A.__closure = { collapsedListHeight: sharedValue, withTiming: items(5091).withTiming, containerHeight: derivedValue, timingStandard: items(5094).timingStandard };
  A.__workletHash = 16625034396799;
  A.__initData = __initData4;
  ({ collapsedListHeight: sharedValue, withTiming: items(5091).withTiming, containerHeight: derivedValue, timingStandard: items(5094).timingStandard });
  const animatedStyle = obj5.useAnimatedStyle(A);
  const obj7 = { style: items5, children: items6 };
  items5 = [tmp.animatedListContainer, animatedStyle];
  let tmp19 = !showsExpandCTAOverride;
  const obj8 = {
    onLayout: function handleCollapsedListLayout(nativeEvent) {
      const result = sharedValue.set(nativeEvent.nativeEvent.layout.height);
    },
    children: memo.map(f143204)
  };
  View = tmp4(4810).View;
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
      onLayout: function handleRemainingListLayout(nativeEvent) {
          const result = sharedValue1.set(nativeEvent.nativeEvent.layout.height);
        },
      accessibilityElementsHidden: !first,
      importantForAccessibility: "no-hide-descendants",
      children: memo1.map(f143204)
    };
    tmp17Result = tmp17(tmp18, obj9);
  }
  items6[1] = tmp17Result;
  const children = [first(View, obj7), ];
  if (showsExpandCTAOverride) {
    let stringResult;
    let stringResult1;
    const TableRow = tmp10(6184).TableRow;
    if (first) {
      const intl2 = tmp10(1126).intl;
      stringResult = intl2.string(tmp10(1126).t.nPGLFQ);
    } else if (null != title) {
      const intl = tmp10(1126).intl;
      const obj10 = { title };
      stringResult = intl.formatToPlainString(tmp10(1126).t["bj/2kV"], obj10);
    }
    const obj11 = {
      accessibilityLabel: stringResult,
      label: closure_6(first, obj12),
      onPress: function handleExpandCTAPress() {
          closure_6(true !== react && !first);
          if (dependencyMap != null) {
            const obj = { expanded: true !== react && !first };
            tmp4(obj);
          }
        },
      end: true
    };
    obj12 = { style: tmp.expandCTALabelContainer, children: closure_6(Text, obj14) };
    Text = tmp10(5086).Text;
    const intl3 = tmp10(1126).intl;
    if (first) {
      stringResult1 = intl3.string(tmp10(1126).t.nPGLFQ);
    } else {
      stringResult1 = intl3.format(tmp10(1126).t.gVw57p, {});
    }
    const obj13 = { children: closure_6(TableRow, obj11) };
    obj14 = { color: "text-brand", variant: "text-md/semibold", children: stringResult1 };
    showsExpandCTAOverride = tmp17(tmp18, obj13);
  }
  children[1] = showsExpandCTAOverride;
  return first(tmp16, { children });
});
let result = size.fileFinishedImporting("modules/app_launcher/native/base_components/ExpandableList.tsx");

export default tmp3;
export const COLLAPSED_LIST_ITEM_MAX = 4;
