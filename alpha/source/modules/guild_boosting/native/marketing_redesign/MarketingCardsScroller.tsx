// Module ID: 12321
// Function ID: 12322
// Name: MarketingCardsScroller
// Dependencies: [32, 109, 19, 17, 5079, 21, 5090, 4927, 587, 558, 576, 504, 5360, 1126, 1382, 6189, 9697, 12085, 2]

// Module 12321 (MarketingCardsScroller)
import nativeDefault from "native" /* 587 */;
import intl3 from "intl" /* 1126 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1382 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import _objectWithoutProperties_mod from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 5079 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5090 */;
import ColorUtils_mod from "ColorUtils" /* 4927 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let closure_12, name;

let ColorUtils;
let c10;
let items;
let metroImportAll;
let metroImportDefault;
let size;
let unpackModuleId;
let closure_3 = ["ref"];
let _slicedToArray = _slicedToArray_mod;
let _objectWithoutProperties = _objectWithoutProperties_mod;
({ ScrollView: metroImportDefault, View: metroImportAll } = react_native);
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
const previous = "previous";
const next = "next";
let createStyles = createStyles_mod;
let obj = { wrapper: { position: "relative" }, navigationButton: size, navigationButtonPrevious: { left: 16 }, navigationButtonNext: { right: 16 } };
size = { alignItems: "center", backgroundColor: ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.BLACK, 0.56), borderRadius: nativeDefault.radii.round, height: 44, justifyContent: "center", position: "absolute", top: "50%", transform: items, width: 44, zIndex: 1 };
createStyles = createStyles.createStyles;
ColorUtils = ColorUtils_mod;
items = [{ translateY: -22 }];
let closure_14 = createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function MarketingCardsScroller(arg0) {
  let cardMarginRight;
  let cardWidth;
  let children;
  let closure_7;
  let closure_8;
  let contentContainerStyle;
  let first;
  let initialIndex;
  let itemCount;
  let num;
  let ref;
  let style;
  let tmp11;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp = itemCount;
  let tmp2 = num;
  let obj = itemCount(num[10]);
  const cResult = obj.c(65);
  let tmp4 = _objectWithoutProperties(arg0, ref);
  ({ contentContainerStyle, initialIndex, itemCount } = tmp4);
  const onScrollingChange = tmp4.onScrollingChange;
  num = 0;
  ({ cardMarginRight, cardWidth, children, style } = tmp4);
  if (undefined !== initialIndex) {
    num = initialIndex;
  }
  const tmp5 = closure_14();
  ref = first.useRef(null);
  const sum = cardWidth + cardMarginRight;
  _slicedToArray = sum;
  _objectWithoutProperties = first.useRef(Math.max(0, Math.min(itemCount - 1, num)) * sum);
  [first, closure_7] = first.useState(() => Math.max(0, Math.min(itemCount - 1, num)));
  [tmp11, closure_8] = first.useState(0);
  _slicedToArray(first.useState(0), 2);
  [tmp13, AccessibilityStore] = first.useState(0);
  _slicedToArray(first.useState(0), 2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    class C {
      constructor() {
        return AccessibilityStore.useReducedMotion;
      }
    }
    cResult[0] = items;
    cResult[1] = C;
    tmp14 = items;
    tmp15 = C;
  } else {
    [tmp14, tmp15] = cResult;
  }
  const tmpResult = tmp(tmp2[11]);
  const stateFromStores = tmpResult.useStateFromStores(tmp14, tmp15);
  const ref2 = obj2.useRef(stateFromStores);
  tmp(tmp2[12]);
  if (cResult[2] === tmp11) {
    let tmp20;
    let tmp26;
    if (cResult[3] === tmp13) {
      tmp20 = cResult[4];
    }
    name = tmp20;
    class C {
      constructor() {
        return AccessibilityStore.useReducedMotion;
      }
    }
    closure_14 = tmp24;
    if (cResult[5] === itemCount) {
      let tmp25;
      let tmp31;
      let tmp30;
      let tmp34;
      let tmp33;
      if (cResult[6] === sum) {
        tmp25 = cResult[7];
      }
      if (cResult[10] !== stateFromStores) {
        function oe() {
          ref2.current = stateFromStores;
        }
        const items1 = [stateFromStores];
        class C {
          constructor() {
            return AccessibilityStore.useReducedMotion;
          }
        }
        cResult[10] = stateFromStores;
        cResult[11] = oe;
        cResult[12] = items1;
        tmp31 = items1;
        tmp30 = oe;
      } else {
        tmp30 = cResult[11];
        tmp31 = cResult[12];
      }
      const effect = obj2.useEffect(tmp30, tmp31);
      class C {
        constructor() {
          return AccessibilityStore.useReducedMotion;
        }
      }
      if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
        function le() {
          const current = ref.current;
          if (0 !== current) {
            const current2 = ref.current;
            if (current2 != null) {
              const obj = { x: current, animated: false };
              current2.scrollTo(obj);
            }
          }
        }
        const items2 = [];
        class C {
          constructor() {
            return AccessibilityStore.useReducedMotion;
          }
        }
        cResult[14] = items2;
        tmp34 = items2;
        tmp33 = le;
      } else {
        tmp33 = cResult[13];
        tmp34 = cResult[14];
      }
      const effect1 = obj2.useEffect(tmp33, tmp34);
      if (cResult[15] === itemCount) {
        let tmp36;
        if (cResult[16] === sum) {
          tmp36 = cResult[17];
        }
        const scrollToIndex = tmp36;
        if (cResult[18] !== tmp36) {
          function de() {
            return { scrollToIndex };
          }
          const items3 = [tmp36];
          class C {
            constructor() {
              return AccessibilityStore.useReducedMotion;
            }
          }
          cResult[18] = tmp36;
          cResult[19] = de;
          cResult[20] = items3;
        }
        class C {
          constructor() {
            return AccessibilityStore.useReducedMotion;
          }
        }
        if (cResult[21] === (tmp20 && first < itemCount - 1)) {
          let tmp39;
          if (cResult[22] === (tmp20 && first > 0)) {
            tmp39 = cResult[23];
          }
          if (cResult[26] === first) {
            if (cResult[27] === (tmp20 && first > 0)) {
              let tmp44;
              if (cResult[28] === tmp36) {
                tmp44 = cResult[29];
              }
              let closure_16 = tmp44;
              if (cResult[30] === first) {
                if (cResult[31] === (tmp20 && first < itemCount - 1)) {
                  let closure_17 = tmp45;
                  if (cResult[34] === tmp45) {
                    let tmp47;
                    if (cResult[35] === tmp44) {
                      tmp47 = cResult[36];
                    }
                    const _Symbol3 = Symbol;
                    class C {
                      constructor() {
                        return AccessibilityStore.useReducedMotion;
                      }
                    }
                    const _Symbol4 = Symbol;
                    if (cResult[38] === Symbol.for("react.memo_cache_sentinel")) {
                      function handleContentSizeChange(arg0) {
                        closure_8(arg0);
                      }
                      cResult[38] = handleContentSizeChange;
                      class C {
                        constructor() {
                          return AccessibilityStore.useReducedMotion;
                        }
                      }
                    }
                    function handleScrollEnd(nativeEvent) {
                      closure_7(Math.max(0, Math.min(itemCount - 1, Math.round(nativeEvent.nativeEvent.contentOffset.x / _slicedToArray))));
                      const obj = utils_PlatformUtils;
                      if (obj.isIOS()) {
                        const velocity = nativeEvent.nativeEvent.velocity;
                        let tmp3 = null == velocity;
                        if (!tmp3) {
                          tmp3 = 0 === velocity.x && 0 === velocity.y;
                        }
                        if (tmp3) {
                          if (onScrollingChange != null) {
                            tmp5(false);
                          }
                        }
                      }
                    }
                    if (cResult[39] === first) {
                      let tmp54;
                      if (cResult[40] === tmp20) {
                        tmp54 = cResult[41];
                      }
                      function handleScrollBeginDrag() {
                        if (onScrollingChange != null) {
                          tmp(true);
                        }
                      }
                      function handleMomentumScrollEnd(arg0) {
                        handleScrollEnd(arg0);
                        if (onScrollingChange != null) {
                          tmp2(false);
                        }
                      }
                      class C {
                        constructor() {
                          return AccessibilityStore.useReducedMotion;
                        }
                      }
                      const mapped = arr7.map(children, tmp54);
                      if (cResult[42] === closure_7) {
                        if (cResult[43] === tmp39) {
                          if (cResult[44] === contentContainerStyle) {
                            if (cResult[45] === tmp47) {
                              if (cResult[46] === tmp51) {
                                if (cResult[47] === tmp50) {
                                  if (cResult[48] === handleMomentumScrollEnd) {
                                    if (cResult[49] === handleScrollBeginDrag) {
                                      if (cResult[50] === handleScrollEnd) {
                                        if (cResult[51] === tmp25) {
                                          if (cResult[52] === (tmp20 && !tmp19)) {
                                            let tmp56;
                                            if (cResult[53] === mapped) {
                                              tmp56 = cResult[54];
                                            }
                                            if (cResult[55] === (tmp20 && first > 0)) {
                                              if (cResult[56] === tmp44) {
                                                if (cResult[57] === tmp5.navigationButton) {
                                                  let tmp59;
                                                  if (cResult[58] === tmp5.navigationButtonPrevious) {
                                                    tmp59 = cResult[59];
                                                  }
                                                  if (cResult[60] === (tmp20 && first < itemCount - 1)) {
                                                    if (cResult[61] === tmp45) {
                                                      if (cResult[62] === tmp5.navigationButton) {
                                                        let tmp61;
                                                        if (cResult[63] === tmp5.navigationButtonNext) {
                                                          tmp61 = cResult[64];
                                                        }
                                                        class C {
                                                          constructor() {
                                                            return AccessibilityStore.useReducedMotion;
                                                          }
                                                        }
                                                        const items4 = [style, tmp5.wrapper];
                                                        tmp65[0] = items4;
                                                        const items5 = [tmp56, tmp59, tmp61];
                                                        class Me {
                                                          constructor(children, arg1) {
                                                            let str;
                                                            let tmp4 = closure_12;
                                                            const tmp = authStore;
                                                            const tmp2 = metroImportAll;
                                                            if (closure_12) {
                                                              tmp4 = arg1 !== first;
                                                            }
                                                            const obj = { accessibilityElementsHidden: tmp4, importantForAccessibility: str, children };
                                                            str = undefined;
                                                            if (closure_12) {
                                                              if (arg1 !== first) {
                                                                str = "no-hide-descendants";
                                                              }
                                                            }
                                                            return tmp(tmp2, obj);
                                                          }
                                                        }
                                                        return ref2(closure_8, tmp65);
                                                      }
                                                    }
                                                  }
                                                  class C {
                                                    constructor() {
                                                      return AccessibilityStore.useReducedMotion;
                                                    }
                                                  }
                                                  cResult[60] = tmp20 && first < itemCount - 1;
                                                  cResult[61] = tmp45;
                                                  cResult[62] = tmp5.navigationButton;
                                                  cResult[63] = tmp5.navigationButtonNext;
                                                  class Me {
                                                    constructor(children, arg1) {
                                                      let str;
                                                      let tmp4 = closure_12;
                                                      const tmp = authStore;
                                                      const tmp2 = metroImportAll;
                                                      if (closure_12) {
                                                        tmp4 = arg1 !== first;
                                                      }
                                                      const obj = { accessibilityElementsHidden: tmp4, importantForAccessibility: str, children };
                                                      str = undefined;
                                                      if (closure_12) {
                                                        if (arg1 !== first) {
                                                          str = "no-hide-descendants";
                                                        }
                                                      }
                                                      return tmp(tmp2, obj);
                                                    }
                                                  }
                                                  cResult[64] = tmp20 && first < itemCount - 1;
                                                  tmp61 = tmp62;
                                                }
                                              }
                                            }
                                            class C {
                                              constructor() {
                                                return AccessibilityStore.useReducedMotion;
                                              }
                                            }
                                            cResult[55] = tmp20 && first > 0;
                                            cResult[56] = tmp44;
                                            cResult[57] = tmp5.navigationButton;
                                            cResult[58] = tmp5.navigationButtonPrevious;
                                            class Me {
                                              constructor(children, arg1) {
                                                let str;
                                                let tmp4 = closure_12;
                                                const tmp = authStore;
                                                const tmp2 = metroImportAll;
                                                if (closure_12) {
                                                  tmp4 = arg1 !== first;
                                                }
                                                const obj = { accessibilityElementsHidden: tmp4, importantForAccessibility: str, children };
                                                str = undefined;
                                                if (closure_12) {
                                                  if (arg1 !== first) {
                                                    str = "no-hide-descendants";
                                                  }
                                                }
                                                return tmp(tmp2, obj);
                                              }
                                            }
                                            cResult[59] = tmp20 && first > 0;
                                            tmp59 = tmp60;
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                      const obj3 = { accessibilityActions: tmp39, centerContent: true, contentContainerStyle, decelerationRate: 0.1, horizontal: true, onAccessibilityAction: tmp47, onContentSizeChange: tmp51, onLayout: null, onMomentumScrollEnd: handleMomentumScrollEnd, onScrollBeginDrag: handleScrollBeginDrag, onScrollEndDrag: handleScrollEnd, ref, scrollEnabled: tmp20 && !tmp19, snapToOffsets: tmp25, children: mapped };
                      class Me {
                        constructor(children, arg1) {
                          let str;
                          let tmp4 = closure_12;
                          const tmp = authStore;
                          const tmp2 = metroImportAll;
                          if (closure_12) {
                            tmp4 = arg1 !== first;
                          }
                          const obj = { accessibilityElementsHidden: tmp4, importantForAccessibility: str, children };
                          str = undefined;
                          if (closure_12) {
                            if (arg1 !== first) {
                              str = "no-hide-descendants";
                            }
                          }
                          return tmp(tmp2, obj);
                        }
                      }
                      const tmp58 = stateFromStores(closure_7, obj3);
                      cResult[42] = closure_7;
                      cResult[43] = tmp39;
                      cResult[44] = contentContainerStyle;
                      cResult[45] = tmp47;
                      cResult[46] = tmp51;
                      cResult[47] = tmp50;
                      cResult[48] = handleMomentumScrollEnd;
                      cResult[49] = handleScrollBeginDrag;
                      cResult[50] = handleScrollEnd;
                      cResult[51] = tmp25;
                      cResult[52] = tmp20 && !tmp19;
                      cResult[53] = mapped;
                      cResult[54] = tmp58;
                      tmp56 = tmp58;
                    }
                    class Me {
                      constructor(children, arg1) {
                        let str;
                        let tmp4 = closure_12;
                        const tmp = authStore;
                        const tmp2 = metroImportAll;
                        if (closure_12) {
                          tmp4 = arg1 !== first;
                        }
                        const obj = { accessibilityElementsHidden: tmp4, importantForAccessibility: str, children };
                        str = undefined;
                        if (closure_12) {
                          if (arg1 !== first) {
                            str = "no-hide-descendants";
                          }
                        }
                        return tmp(tmp2, obj);
                      }
                    }
                    cResult[39] = first;
                    cResult[40] = tmp20;
                    cResult[41] = Me;
                    tmp54 = Me;
                  }
                  class C {
                    constructor() {
                      return AccessibilityStore.useReducedMotion;
                    }
                  }
                  cResult[34] = tmp45;
                  cResult[35] = tmp44;
                  cResult[36] = tmp48;
                  tmp47 = tmp48;
                }
              }
              class C {
                constructor() {
                  return AccessibilityStore.useReducedMotion;
                }
              }
              cResult[30] = first;
              cResult[31] = tmp20 && first < itemCount - 1;
              cResult[32] = tmp36;
              cResult[33] = tmp46;
            }
          }
          function handleNavigatePrevious() {
            const tmp = next;
            if (tmp) {
              scrollToIndex(first - 1);
            }
          }
          class C {
            constructor() {
              return AccessibilityStore.useReducedMotion;
            }
          }
          cResult[26] = first;
          cResult[27] = tmp20 && first > 0;
          cResult[28] = tmp36;
          cResult[29] = handleNavigatePrevious;
          tmp44 = handleNavigatePrevious;
        }
        const items6 = [];
        if (tmp20 && first > 0) {
          const _Symbol = Symbol;
          if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
            const obj5 = { name, label: obj6.string(tmp(tmp2[13]).t.vgfxaA) };
            class C {
              constructor() {
                return AccessibilityStore.useReducedMotion;
              }
            }
            cResult[24] = obj5;
          }
          class C {
            constructor() {
              return AccessibilityStore.useReducedMotion;
            }
          }
        }
        if (tmp20 && first < itemCount - 1) {
          const _Symbol2 = Symbol;
          if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
            const obj7 = { name: next, label: obj8.string(tmp(tmp2[13]).t.XiOHRX) };
            class C {
              constructor() {
                return AccessibilityStore.useReducedMotion;
              }
            }
            cResult[25] = obj7;
          }
          class C {
            constructor() {
              return AccessibilityStore.useReducedMotion;
            }
          }
        }
        cResult[21] = tmp20 && first < itemCount - 1;
        cResult[22] = tmp20 && first > 0;
        cResult[23] = items6;
        tmp39 = items6;
      }
      function ce(arg0) {
        const bound = Math.max(0, Math.min(itemCount - 1, arg0));
        closure_7(bound);
        const current = ref.current;
        if (current != null) {
          const obj = { x: bound * _slicedToArray, animated: !ref2.current };
          current.scrollTo(obj);
        }
      }
      cResult[15] = itemCount;
      cResult[17] = ce;
      tmp36 = ce;
    }
    if (cResult[8] !== sum) {
      function ne(arg0, arg1) {
        return arg1 * _slicedToArray;
      }
      cResult[8] = sum;
      class C {
        constructor() {
          return AccessibilityStore.useReducedMotion;
        }
      }
      cResult[9] = ne;
      tmp26 = ne;
    } else {
      tmp26 = cResult[9];
    }
    const _Array = Array;
    const self = this;
    const self2 = this;
    const fillResult = obj4.fill(0);
    const mapped1 = fillResult.map(tmp26);
    cResult[5] = itemCount;
    cResult[6] = sum;
    cResult[7] = mapped1;
    tmp25 = mapped1;
  }
  if (tmp13 > 0) {
    const _Math = Math;
    const _Math2 = Math;
    const rounded = Math.round(tmp11);
    class C {
      constructor() {
        return AccessibilityStore.useReducedMotion;
      }
    }
  }
  cResult[2] = tmp11;
  cResult[3] = tmp13;
  cResult[4] = tmp13 > 0;
  tmp20 = tmp21;
}) : (function MarketingCardsScroller(ref) {
  let ChevronLargeLeftIcon;
  let ChevronLargeRightIcon;
  let Children;
  let _undefined;
  let _undefined2;
  let c4;
  let c8;
  let c9;
  let cardMarginRight;
  let cardWidth;
  let children;
  let closure_7;
  let contentContainerStyle;
  let first;
  let intl;
  let intl2;
  let items6;
  let items7;
  let items8;
  let items9;
  let obj7;
  let obj9;
  let tmp10;
  let tmp8;
  ref = ref.ref;
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  let itemCount;
  let onScrollingChange;
  let ref1;
  _slicedToArray = undefined;
  ref = undefined;
  first = undefined;
  closure_7 = undefined;
  c8 = undefined;
  c9 = undefined;
  let stateFromStores;
  let ref2;
  closure_12 = undefined;
  let closure_13;
  closure_14 = undefined;
  let scrollToIndex;
  function handleScrollEnd(nativeEvent) {
    closure_7(Math.max(0, Math.min(itemCount - 1, Math.round(nativeEvent.nativeEvent.contentOffset.x / c4))));
    const obj = utils_PlatformUtils;
    if (obj.isIOS()) {
      const velocity = nativeEvent.nativeEvent.velocity;
      let tmp3 = null == velocity;
      if (!tmp3) {
        tmp3 = 0 === velocity.x && 0 === velocity.y;
      }
      if (tmp3) {
        if (onScrollingChange != null) {
          tmp5(false);
        }
      }
    }
  }
  const initialIndex = merged.initialIndex;
  let num = 0;
  ({ cardMarginRight, cardWidth, children, contentContainerStyle } = merged);
  if (undefined !== initialIndex) {
    num = initialIndex;
  }
  itemCount = merged.itemCount;
  onScrollingChange = merged.onScrollingChange;
  const style = merged.style;
  let tmp2 = closure_14();
  let obj = first;
  ref1 = first.useRef(null);
  const sum = cardWidth + cardMarginRight;
  _slicedToArray = sum;
  ref = first.useRef(Math.max(0, Math.min(itemCount - 1, num)) * sum);
  [first, closure_7] = first.useState(() => Math.max(0, Math.min(itemCount - 1, num)));
  [tmp8, c8] = _slicedToArray(first.useState(0), 2);
  const tmp7 = _slicedToArray(first.useState(0), 2);
  [tmp10, c9] = _slicedToArray(first.useState(0), 2);
  const tmp9 = _slicedToArray(first.useState(0), 2);
  let obj2 = num(onScrollingChange[11]);
  let items = [c9];
  stateFromStores = obj2.useStateFromStores(items, () => _undefined2.useReducedMotion);
  ref2 = first.useRef(stateFromStores);
  let tmp15 = tmp10 > 0;
  const obj3 = num(onScrollingChange[12]);
  const isScreenReaderEnabled = obj3.useIsScreenReaderEnabled();
  if (tmp15) {
    const _Math = Math;
    const _Math2 = Math;
    const rounded = Math.round(tmp8);
    tmp15 = rounded > Math.round(tmp10);
  }
  closure_12 = tmp15;
  let tmp26Result = tmp15 && first > 0;
  closure_13 = tmp26Result;
  let tmp26Result2 = tmp15 && first < itemCount - 1;
  closure_14 = tmp26Result2;
  const items1 = [itemCount, sum];
  const items2 = [stateFromStores];
  const memo = obj.useMemo(() => {
    const array = new Array(itemCount);
    const fillResult = array.fill(0);
    return fillResult.map((item, index) => index * closure_1_4);
  }, items1);
  const effect = obj.useEffect(() => {
    ref2.current = stateFromStores;
  }, items2);
  const effect1 = obj.useEffect(() => {
    const current = ref.current;
    if (0 !== current) {
      const current2 = ref1.current;
      if (current2 != null) {
        const obj = { x: current, animated: false };
        current2.scrollTo(obj);
      }
    }
  }, []);
  const items3 = [itemCount, sum];
  scrollToIndex = obj.useCallback((arg0) => {
    const bound = Math.max(0, Math.min(itemCount - 1, arg0));
    closure_7(bound);
    const current = ref1.current;
    if (current != null) {
      const obj = { x: bound * c4, animated: !ref2.current };
      current.scrollTo(obj);
    }
  }, items3);
  const items4 = [scrollToIndex];
  const imperativeHandle = obj.useImperativeHandle(ref, () => ({ scrollToIndex }), items4);
  const items5 = [tmp26Result2, tmp26Result];
  const obj4 = { style: items6, children: items7 };
  items6 = [style, tmp2.wrapper];
  const obj5 = {
    accessibilityActions: obj.useMemo(() => {
      let intl;
      let intl2;
      const items = [];
      const tmp = closure_13;
      if (tmp) {
        const push = items.push;
        const obj = { name: previous, label: intl.string(intl3.t.vgfxaA) };
        intl = intl3.intl;
        push(obj);
      }
      const tmp8 = closure_14;
      if (tmp8) {
        const push2 = items.push;
        const obj2 = { name: next, label: intl2.string(intl3.t.XiOHRX) };
        intl2 = intl3.intl;
        push2(obj2);
      }
      return items;
    }, items5),
    centerContent: true,
    contentContainerStyle,
    decelerationRate: 0.1,
    horizontal: true,
    onAccessibilityAction: function handleAccessibilityAction(nativeEvent) {
      const actionName = nativeEvent.nativeEvent.actionName;
      if (previous === actionName) {
        const tmp6 = closure_13;
        if (tmp6) {
          callback(first - 1);
        }
      } else if (next === actionName) {
        const tmp2 = closure_14;
        if (tmp2) {
          callback(first + 1);
        }
      }
    },
    onContentSizeChange: function handleContentSizeChange(arg0) {
      _undefined(arg0);
    },
    onLayout: function handleLayout(nativeEvent) {
      _undefined2(nativeEvent.nativeEvent.layout.width);
    },
    onMomentumScrollEnd: function handleMomentumScrollEnd(arg0) {
      handleScrollEnd(arg0);
      if (onScrollingChange != null) {
        tmp2(false);
      }
    },
    onScrollBeginDrag: function handleScrollBeginDrag() {
      if (onScrollingChange != null) {
        tmp(true);
      }
    },
    onScrollEndDrag: handleScrollEnd,
    ref: ref1,
    scrollEnabled: tmp15,
    snapToOffsets: memo,
    children: Children.map(children, (children, arg1) => {
      let str;
      let tmp4 = closure_12;
      const tmp = authStore;
      const tmp2 = metroImportAll;
      if (closure_12) {
        tmp4 = arg1 !== first;
      }
      const obj = { accessibilityElementsHidden: tmp4, importantForAccessibility: str, children };
      str = undefined;
      if (closure_12) {
        if (arg1 !== first) {
          str = "no-hide-descendants";
        }
      }
      return tmp(tmp2, obj);
    })
  };
  const tmp24 = ref2;
  const tmp25 = c8;
  const tmp27 = closure_7;
  if (tmp15) {
    tmp15 = !isScreenReaderEnabled;
  }
  Children = obj.Children;
  items7 = [stateFromStores(tmp27, obj5), , ];
  if (tmp26Result) {
    function handleNavigatePrevious() {
      const tmp = closure_13;
      if (tmp) {
        callback(first - 1);
      }
    }
    const obj6 = { accessibilityLabel: intl.string(num(onScrollingChange[13]).t.vgfxaA), accessibilityRole: "button", onPress: handleNavigatePrevious, style: items8, children: stateFromStores(ChevronLargeLeftIcon, obj7) };
    const PressableOpacity = tmp11(tmp12[15]).PressableOpacity;
    intl = tmp11(tmp12[13]).intl;
    items8 = [, ];
    ({ navigationButton: arr10[0], navigationButtonPrevious: arr10[1] } = tmp2);
    obj7 = { color: itemCount(onScrollingChange[8]).colors.WHITE, size: "sm" };
    ChevronLargeLeftIcon = tmp11(tmp12[16]).ChevronLargeLeftIcon;
    tmp26Result = tmp26(PressableOpacity, obj6);
  }
  items7[1] = tmp26Result;
  if (tmp26Result2) {
    function handleNavigateNext() {
      const tmp = closure_14;
      if (tmp) {
        callback(first + 1);
      }
    }
    const obj8 = { accessibilityLabel: intl2.string(num(onScrollingChange[13]).t.XiOHRX), accessibilityRole: "button", onPress: handleNavigateNext, style: items9, children: stateFromStores(ChevronLargeRightIcon, obj9) };
    const PressableOpacity2 = tmp11(tmp12[15]).PressableOpacity;
    intl2 = tmp11(tmp12[13]).intl;
    items9 = [, ];
    ({ navigationButton: arr11[0], navigationButtonNext: arr11[1] } = tmp2);
    obj9 = { color: itemCount(onScrollingChange[8]).colors.WHITE, size: "sm" };
    ChevronLargeRightIcon = tmp11(tmp12[17]).ChevronLargeRightIcon;
    tmp26Result2 = tmp26(PressableOpacity2, obj8);
  }
  items7[2] = tmp26Result2;
  return tmp24(tmp25, obj4);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/guild_boosting/native/marketing_redesign/MarketingCardsScroller.tsx");

export const MarketingCardsScroller = tmp5;
