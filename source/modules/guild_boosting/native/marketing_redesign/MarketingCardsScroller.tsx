// Module ID: 11624
// Function ID: 90368
// Name: getClampedIndex
// Dependencies: [57, 31, 27, 4122, 33, 4130, 3974, 689, 566, 1212, 478, 4660, 9625, 11441, 2]

// Module 11624 (getClampedIndex)
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import hexToRgb from "hexToRgb";

let closure_5;
let closure_6;
let closure_8;
let closure_9;
const require = arg1;
function getClampedIndex(arg0, itemCount) {
  return Math.max(0, Math.min(itemCount - 1, arg0));
}
({ ScrollView: closure_5, View: closure_6 } = get_ActivityIndicator);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let obj = { wrapper: { position: "relative" } };
obj = { alignItems: "center", backgroundColor: null, borderRadius: null, height: 44, justifyContent: "center", position: "absolute", top: "50%", transform: null, width: 44, zIndex: 1 };
obj.backgroundColor = hexToRgb.hexWithOpacity(require("_createForOfIteratorHelperLoose").unsafe_rawColors.BLACK, 0.56);
obj.borderRadius = require("_createForOfIteratorHelperLoose").radii.round;
let items = [{ translateY: -22 }];
obj.transform = items;
obj.navigationButton = obj;
obj.navigationButtonPrevious = { left: 16 };
obj.navigationButtonNext = { right: 16 };
let closure_10 = _createForOfIteratorHelperLoose.createStyles(obj);
const forwardRefResult = importAllResult.forwardRef((initialIndex) => {
  let cardMarginRight;
  let cardWidth;
  let children;
  let contentContainerStyle;
  function handleNavigatePrevious() {
    if (closure_10) {
      callback(first - 1);
    }
  }
  function handleNavigateNext() {
    if (closure_11) {
      callback(first + 1);
    }
  }
  function handleScrollEnd(nativeEvent) {
    lib(tmp8(Math.round(nativeEvent.nativeEvent.contentOffset.x / closure_4), itemCount));
    if (obj.isIOS()) {
      const velocity = nativeEvent.nativeEvent.velocity;
      let tmp3 = null == velocity;
      if (!tmp3) {
        tmp3 = 0 === velocity.x && 0 === velocity.y;
        const tmp4 = 0 === velocity.x && 0 === velocity.y;
      }
      if (tmp3) {
        if (null != onScrollingChange) {
          onScrollingChange(false);
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
  let tmp = callback();
  const ref = sum.useRef(null);
  sum = cardWidth + cardMarginRight;
  let closure_5 = sum.useRef(getClampedIndex(num, itemCount) * sum);
  let tmp4 = ref(sum.useState(() => tmp8(num, itemCount)), 2);
  const first = tmp4[0];
  let _isNativeReflectConstruct = tmp4[1];
  let obj = num(onScrollingChange[8]);
  let items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => lib.useReducedMotion);
  let closure_9 = sum.useRef(stateFromStores);
  let tmp7 = first > 0;
  callback = tmp7;
  let tmp8 = first < itemCount - 1;
  getClampedIndex = tmp8;
  const items1 = [itemCount, sum];
  const items2 = [stateFromStores];
  const memo = sum.useMemo(() => {
    const array = new Array(itemCount);
    return array.fill(0).map((arg0, arg1) => arg1 * outer1_4);
  }, items1);
  const effect = sum.useEffect(() => {
    closure_9.current = stateFromStores;
  }, items2);
  const effect1 = sum.useEffect(() => {
    const current = ref.current;
    if (0 !== current) {
      const current2 = ref.current;
      if (null != current2) {
        const obj = { x: current, animated: false };
        current2.scrollTo(obj);
      }
    }
  }, []);
  const items3 = [itemCount, sum];
  callback = sum.useCallback((arg0) => {
    const tmp = tmp8(arg0, itemCount);
    lib(tmp);
    const current = ref.current;
    if (null != current) {
      const obj = { x: tmp * closure_4, animated: !ref2.current };
      current.scrollTo(obj);
    }
  }, items3);
  const items4 = [callback];
  const imperativeHandle = sum.useImperativeHandle(arg1, () => ({ scrollToIndex: callback }), items4);
  const items5 = [tmp8, tmp7];
  obj = { style: items6 };
  items6 = [initialIndex.style, tmp.wrapper];
  obj = {
    accessibilityActions: sum.useMemo(() => {
      const items = [];
      if (closure_10) {
        let obj = { name: "previous" };
        const intl = num(onScrollingChange[9]).intl;
        obj.label = intl.string(9(onScrollingChange[9]).t.vgfxaA);
        items.push(obj);
      }
      if (closure_11) {
        obj = { name: "next" };
        const intl2 = num(onScrollingChange[9]).intl;
        obj.label = intl2.string(num(onScrollingChange[9]).t.XiOHRX);
        items.push(obj);
      }
      return items;
    }, items5),
    centerContent: true,
    contentContainerStyle,
    decelerationRate: 0.1,
    horizontal: true,
    onAccessibilityAction(nativeEvent) {
      const actionName = nativeEvent.nativeEvent.actionName;
      if ("previous" === actionName) {
        handleNavigatePrevious();
      } else if ("next" === actionName) {
        handleNavigateNext();
      }
    },
    onMomentumScrollEnd(closure_0) {
      handleScrollEnd(closure_0);
      if (null != onScrollingChange) {
        onScrollingChange(false);
      }
    },
    onScrollBeginDrag() {
      if (null != onScrollingChange) {
        onScrollingChange(true);
      }
    },
    onScrollEndDrag: handleScrollEnd,
    ref,
    snapToOffsets: memo,
    children
  };
  const items7 = [stateFromStores(closure_5, obj), , ];
  if (tmp7) {
    const obj1 = {};
    let intl = num(onScrollingChange[9]).intl;
    obj1.accessibilityLabel = intl.string(num(onScrollingChange[9]).t.vgfxaA);
    obj1.accessibilityRole = "button";
    obj1.onPress = handleNavigatePrevious;
    const items8 = [, ];
    ({ navigationButton: arr9[0], navigationButtonPrevious: arr9[1] } = tmp);
    obj1.style = items8;
    const obj2 = { color: itemCount(onScrollingChange[7]).colors.WHITE, size: "sm" };
    obj1.children = stateFromStores(num(onScrollingChange[12]).ChevronLargeLeftIcon, obj2);
    tmp7 = stateFromStores(num(onScrollingChange[11]).PressableOpacity, obj1);
  }
  items7[1] = tmp7;
  if (tmp8) {
    const obj3 = {};
    let intl2 = num(onScrollingChange[9]).intl;
    obj3.accessibilityLabel = intl2.string(num(onScrollingChange[9]).t.XiOHRX);
    obj3.accessibilityRole = "button";
    obj3.onPress = handleNavigateNext;
    const items9 = [, ];
    ({ navigationButton: arr10[0], navigationButtonNext: arr10[1] } = tmp);
    obj3.style = items9;
    const obj4 = { color: itemCount(onScrollingChange[7]).colors.WHITE, size: "sm" };
    obj3.children = stateFromStores(num(onScrollingChange[13]).ChevronLargeRightIcon, obj4);
    tmp8 = stateFromStores(num(onScrollingChange[11]).PressableOpacity, obj3);
  }
  items7[2] = tmp8;
  obj.children = items7;
  return closure_9(first, obj);
});
const result = require("get ActivityIndicator").fileFinishedImporting("modules/guild_boosting/native/marketing_redesign/MarketingCardsScroller.tsx");

export const MarketingCardsScroller = forwardRefResult;
