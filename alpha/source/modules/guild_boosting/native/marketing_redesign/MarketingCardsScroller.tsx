// Module ID: 14088
// Function ID: 14089
// Name: MarketingCardsScroller
// Dependencies: [32, 19, 17, 5010, 21, 5009, 5006, 575, 504, 5269, 1114, 1377, 6974, 10234, 13868, 2]
// Exports: MarketingCardsScroller

// Module 14088 (MarketingCardsScroller)
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1114 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1377 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 5010 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import ColorUtils_mod from "ColorUtils" /* 5006 */;
import size_mod from "module_2" /* 2 */;

let ColorUtils;
let c9;
let hasOwnProperty;
let items;
let metroImportAll;
let metroRequire;
let size;
let react = react_mod;
({ ScrollView: hasOwnProperty, View: metroRequire } = react_native);
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
const previous = "previous";
const next = "next";
let createStyles = createStyles_mod;
let obj = { wrapper: { position: "relative" }, navigationButton: size, navigationButtonPrevious: { left: 16 }, navigationButtonNext: { right: 16 } };
size = { alignItems: "center", backgroundColor: ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.BLACK, 0.56), borderRadius: nativeDefault.radii.round, height: 44, justifyContent: "center", position: "absolute", top: "50%", transform: items, width: 44, zIndex: 1 };
createStyles = createStyles.createStyles;
ColorUtils = ColorUtils_mod;
items = [{ translateY: -22 }];
let closure_12 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/guild_boosting/native/marketing_redesign/MarketingCardsScroller.tsx");

export function MarketingCardsScroller(ref) {
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
  let contentContainerStyle;
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
  react = undefined;
  ref = undefined;
  let first;
  let closure_7;
  c8 = undefined;
  c9 = undefined;
  let stateFromStores;
  let ref2;
  closure_12 = undefined;
  let closure_13;
  let closure_14;
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
  let tmp2 = closure_12();
  let obj = react;
  ref1 = react.useRef(null);
  const sum = cardWidth + cardMarginRight;
  react = sum;
  ref = react.useRef(Math.max(0, Math.min(itemCount - 1, num)) * sum);
  const tmp5 = ref1(react.useState(() => Math.max(0, Math.min(itemCount - 1, num))), 2);
  first = tmp5[0];
  closure_7 = tmp5[1];
  [tmp8, c8] = ref1(react.useState(0), 2);
  const tmp7 = ref1(react.useState(0), 2);
  [tmp10, c9] = ref1(react.useState(0), 2);
  const tmp9 = ref1(react.useState(0), 2);
  let obj2 = num(onScrollingChange[8]);
  let items = [closure_7];
  stateFromStores = obj2.useStateFromStores(items, () => closure_7.useReducedMotion);
  ref2 = react.useRef(stateFromStores);
  let tmp15 = tmp10 > 0;
  const obj3 = num(onScrollingChange[9]);
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
    onMomentumScrollEnd: function handleMomentumScrollEnd(nativeEvent) {
      handleScrollEnd(nativeEvent);
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
      const tmp = metroImportAll;
      const tmp2 = metroRequire;
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
  const tmp24 = c9;
  const tmp25 = first;
  const tmp27 = ref;
  if (tmp15) {
    tmp15 = !isScreenReaderEnabled;
  }
  Children = obj.Children;
  items7 = [c8(tmp27, obj5), , ];
  if (tmp26Result) {
    function handleNavigatePrevious() {
      const tmp = closure_13;
      if (tmp) {
        callback(first - 1);
      }
    }
    const obj6 = { accessibilityLabel: intl.string(num(onScrollingChange[10]).t.vgfxaA), accessibilityRole: "button", onPress: handleNavigatePrevious, style: items8, children: c8(ChevronLargeLeftIcon, obj7) };
    const PressableOpacity = tmp11(tmp12[12]).PressableOpacity;
    intl = tmp11(tmp12[10]).intl;
    items8 = [, ];
    ({ navigationButton: arr10[0], navigationButtonPrevious: arr10[1] } = tmp2);
    obj7 = { color: itemCount(onScrollingChange[7]).colors.WHITE, size: "sm" };
    ChevronLargeLeftIcon = tmp11(tmp12[13]).ChevronLargeLeftIcon;
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
    const obj8 = { accessibilityLabel: intl2.string(num(onScrollingChange[10]).t.XiOHRX), accessibilityRole: "button", onPress: handleNavigateNext, style: items9, children: c8(ChevronLargeRightIcon, obj9) };
    const PressableOpacity2 = tmp11(tmp12[12]).PressableOpacity;
    intl2 = tmp11(tmp12[10]).intl;
    items9 = [, ];
    ({ navigationButton: arr11[0], navigationButtonNext: arr11[1] } = tmp2);
    obj9 = { color: itemCount(onScrollingChange[7]).colors.WHITE, size: "sm" };
    ChevronLargeRightIcon = tmp11(tmp12[14]).ChevronLargeRightIcon;
    tmp26Result2 = tmp26(PressableOpacity2, obj8);
  }
  items7[2] = tmp26Result2;
  return tmp24(tmp25, obj4);
}
