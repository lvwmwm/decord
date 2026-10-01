// Module ID: 12060
// Function ID: 12061
// Name: MarketingCardsScroller
// Dependencies: [32, 19, 17, 4825, 21, 4836, 4683, 576, 504, 5266, 1115, 1365, 5435, 9836, 11855, 2]

// Module 12060 (MarketingCardsScroller)
import nativeDefault from "native" /* 576 */;
import intl3 from "intl" /* 1115 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1365 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import ColorUtils_mod from "ColorUtils" /* 4683 */;
import size_mod from "module_2" /* 2 */;

let initialIndex;

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
const forwardRefResult = react.forwardRef((initialIndex, ref) => {
  let ChevronLargeLeftIcon;
  let ChevronLargeRightIcon;
  let Children;
  let cardMarginRight;
  let cardWidth;
  let children;
  let closure_8;
  let closure_9;
  let contentContainerStyle;
  let intl;
  let intl2;
  let items6;
  let items7;
  let items8;
  let items9;
  let obj7;
  let obj9;
  let tmp7;
  let tmp9;
  function handleScrollEnd(nativeEvent) {
    closure_7(Math.max(0, Math.min(itemCount - 1, Math.round(nativeEvent.nativeEvent.contentOffset.x / react))));
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
  initialIndex = initialIndex.initialIndex;
  let num = 0;
  ({ cardMarginRight, cardWidth, children, contentContainerStyle } = initialIndex);
  if (undefined !== initialIndex) {
    num = initialIndex;
  }
  const itemCount = initialIndex.itemCount;
  const onScrollingChange = initialIndex.onScrollingChange;
  const style = initialIndex.style;
  let tmp = closure_12();
  let obj = react;
  react.useRef(null);
  const sum = cardWidth + cardMarginRight;
  react = sum;
  ref = react.useRef(Math.max(0, Math.min(itemCount - 1, num)) * sum);
  let tmp4 = ref(react.useState(() => Math.max(0, Math.min(itemCount - 1, num))), 2);
  const first = tmp4[0];
  let closure_7 = tmp4[1];
  let tmp6 = ref(react.useState(0), 2);
  [tmp7, closure_8] = tmp6;
  let tmp8 = ref(react.useState(0), 2);
  [tmp9, closure_9] = tmp8;
  let obj2 = num(onScrollingChange[8]);
  let items = [closure_7];
  const stateFromStores = obj2.useStateFromStores(items, () => closure_7.useReducedMotion);
  const ref2 = react.useRef(stateFromStores);
  let tmp14 = tmp9 > 0;
  const obj3 = num(onScrollingChange[9]);
  const isScreenReaderEnabled = obj3.useIsScreenReaderEnabled();
  if (tmp14) {
    const _Math = Math;
    const _Math2 = Math;
    const rounded = Math.round(tmp7);
    tmp14 = rounded > Math.round(tmp9);
  }
  closure_12 = tmp14;
  let tmp25Result = tmp14 && first > 0;
  let closure_13 = tmp25Result;
  let tmp25Result2 = tmp14 && first < itemCount - 1;
  let closure_14 = tmp25Result2;
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
      const current2 = ref.current;
      if (current2 != null) {
        const obj = { x: current, animated: false };
        current2.scrollTo(obj);
      }
    }
  }, []);
  const items3 = [itemCount, sum];
  const scrollToIndex = obj.useCallback((arg0) => {
    const bound = Math.max(0, Math.min(itemCount - 1, arg0));
    closure_7(bound);
    const current = ref.current;
    if (current != null) {
      const obj = { x: bound * react, animated: !ref2.current };
      current.scrollTo(obj);
    }
  }, items3);
  const items4 = [scrollToIndex];
  const imperativeHandle = obj.useImperativeHandle(ref, () => ({ scrollToIndex }), items4);
  const items5 = [tmp25Result2, tmp25Result];
  const obj4 = { style: items6, children: items7 };
  items6 = [style, tmp.wrapper];
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
    onAccessibilityAction(nativeEvent) {
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
    onContentSizeChange(arg0) {
      closure_8(arg0);
    },
    onLayout(nativeEvent) {
      closure_9(nativeEvent.nativeEvent.layout.width);
    },
    onMomentumScrollEnd(nativeEvent) {
      handleScrollEnd(nativeEvent);
      if (onScrollingChange != null) {
        tmp2(false);
      }
    },
    onScrollBeginDrag() {
      if (onScrollingChange != null) {
        tmp(true);
      }
    },
    onScrollEndDrag: handleScrollEnd,
    ref,
    scrollEnabled: tmp14,
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
  const tmp23 = closure_9;
  const tmp24 = first;
  const tmp26 = ref;
  if (tmp14) {
    tmp14 = !isScreenReaderEnabled;
  }
  Children = obj.Children;
  items7 = [closure_8(tmp26, obj5), , ];
  if (tmp25Result) {
    function handleNavigatePrevious() {
      const tmp = closure_13;
      if (tmp) {
        callback(first - 1);
      }
    }
    const obj6 = { accessibilityLabel: intl.string(num(onScrollingChange[10]).t.vgfxaA), accessibilityRole: "button", onPress: handleNavigatePrevious, style: items8, children: closure_8(ChevronLargeLeftIcon, obj7) };
    const PressableOpacity = tmp10(tmp11[12]).PressableOpacity;
    intl = tmp10(tmp11[10]).intl;
    items8 = [, ];
    ({ navigationButton: arr10[0], navigationButtonPrevious: arr10[1] } = tmp);
    obj7 = { color: itemCount(onScrollingChange[7]).colors.WHITE, size: "sm" };
    ChevronLargeLeftIcon = tmp10(tmp11[13]).ChevronLargeLeftIcon;
    tmp25Result = tmp25(PressableOpacity, obj6);
  }
  items7[1] = tmp25Result;
  if (tmp25Result2) {
    function handleNavigateNext() {
      const tmp = closure_14;
      if (tmp) {
        callback(first + 1);
      }
    }
    const obj8 = { accessibilityLabel: intl2.string(num(onScrollingChange[10]).t.XiOHRX), accessibilityRole: "button", onPress: handleNavigateNext, style: items9, children: closure_8(ChevronLargeRightIcon, obj9) };
    const PressableOpacity2 = tmp10(tmp11[12]).PressableOpacity;
    intl2 = tmp10(tmp11[10]).intl;
    items9 = [, ];
    ({ navigationButton: arr11[0], navigationButtonNext: arr11[1] } = tmp);
    obj9 = { color: itemCount(onScrollingChange[7]).colors.WHITE, size: "sm" };
    ChevronLargeRightIcon = tmp10(tmp11[14]).ChevronLargeRightIcon;
    tmp25Result2 = tmp25(PressableOpacity2, obj8);
  }
  items7[2] = tmp25Result2;
  return tmp23(tmp24, obj4);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/guild_boosting/native/marketing_redesign/MarketingCardsScroller.tsx");

export const MarketingCardsScroller = forwardRefResult;
