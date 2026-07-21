// Module ID: 11586
// Function ID: 90056
// Name: getClampedIndex
// Dependencies: []

// Module 11586 (getClampedIndex)
function getClampedIndex(arg0, itemCount) {
  return Math.max(0, Math.min(itemCount - 1, arg0));
}
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
({ ScrollView: closure_5, View: closure_6 } = arg1(dependencyMap[2]));
let closure_7 = importDefault(dependencyMap[3]);
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_8, jsxs: closure_9 } = arg1(dependencyMap[4]));
const tmp3 = arg1(dependencyMap[4]);
let obj = { wrapper: { position: "relative" } };
obj = { 9223372036854775807: false, 9223372036854775807: false, 0: false, -9223372036854775808: false, 9223372036854775807: false, 9223372036854775807: false, 0: false, 9223372036854775807: false, 0: false, 0: false };
const obj2 = arg1(dependencyMap[5]);
obj.backgroundColor = arg1(dependencyMap[6]).hexWithOpacity(importDefault(dependencyMap[7]).unsafe_rawColors.BLACK, 0.56);
obj.borderRadius = importDefault(dependencyMap[7]).radii.round;
const items = [{ translateY: -22 }];
obj.transform = items;
obj.navigationButton = obj;
obj.navigationButtonPrevious = { left: 16 };
obj.navigationButtonNext = { right: 16 };
let closure_10 = obj2.createStyles(obj);
const obj5 = arg1(dependencyMap[6]);
const forwardRefResult = importAllResult.forwardRef((initialIndex) => {
  let cardMarginRight;
  let cardWidth;
  let children;
  let contentContainerStyle;
  function handleNavigatePrevious() {
    if (tmp7) {
      callback(first - 1);
    }
  }
  function handleNavigateNext() {
    if (tmp8) {
      callback(first + 1);
    }
  }
  function handleScrollEnd(nativeEvent) {
    lib(tmp8(Math.round(nativeEvent.nativeEvent.contentOffset.x / sum), itemCount));
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
  const arg1 = num;
  const itemCount = initialIndex.itemCount;
  const importDefault = itemCount;
  const dependencyMap = initialIndex.onScrollingChange;
  const tmp = callback2();
  const ref = importAllResult.useRef(null);
  let callback = ref;
  const sum = cardWidth + cardMarginRight;
  let closure_5 = importAllResult.useRef(getClampedIndex(num, itemCount) * sum);
  const tmp4 = callback(sum.useState(() => tmp8(num, itemCount)), 2);
  const first = tmp4[0];
  let closure_7 = tmp4[1];
  let obj = arg1(dependencyMap[8]);
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => lib.useReducedMotion);
  let closure_9 = importAllResult.useRef(stateFromStores);
  let tmp7 = first > 0;
  const callback2 = tmp7;
  let tmp8 = first < itemCount - 1;
  const getClampedIndex = tmp8;
  const items1 = [itemCount, sum];
  const items2 = [stateFromStores];
  const memo = importAllResult.useMemo(() => {
    const array = new Array(itemCount);
    return array.fill(0).map((arg0, arg1) => arg1 * closure_4);
  }, items1);
  const effect = importAllResult.useEffect(() => {
    closure_9.current = stateFromStores;
  }, items2);
  const effect1 = importAllResult.useEffect(() => {
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
  callback = importAllResult.useCallback((arg0) => {
    const tmp = tmp8(arg0, itemCount);
    lib(tmp);
    const current = ref.current;
    if (null != current) {
      const obj = { x: tmp * sum, animated: !ref2.current };
      current.scrollTo(obj);
    }
  }, items3);
  const items4 = [callback];
  const imperativeHandle = importAllResult.useImperativeHandle(arg1, () => ({ scrollToIndex: callback }), items4);
  const items5 = [tmp8, tmp7];
  obj = { style: items6 };
  const items6 = [initialIndex.style, tmp.wrapper];
  obj = {
    accessibilityActions: importAllResult.useMemo(() => {
      const items = [];
      if (tmp7) {
        let obj = { name: "previous" };
        const intl = num(onScrollingChange[9]).intl;
        obj.label = intl.string(9(onScrollingChange[9]).t.vgfxaA);
        items.push(obj);
      }
      if (tmp8) {
        obj = { name: "next" };
        const intl2 = num(onScrollingChange[9]).intl;
        obj.label = intl2.string(num(onScrollingChange[9]).t.XiOHRX);
        items.push(obj);
      }
      return items;
    }, items5),
    contentContainerStyle,
    onAccessibilityAction(nativeEvent) {
      const actionName = nativeEvent.nativeEvent.actionName;
      if ("previous" === actionName) {
        handleNavigatePrevious();
      } else if ("next" === actionName) {
        handleNavigateNext();
      }
    },
    onMomentumScrollEnd(nativeEvent) {
      handleScrollEnd(nativeEvent);
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
    const intl = arg1(dependencyMap[9]).intl;
    obj1.accessibilityLabel = intl.string(arg1(dependencyMap[9]).t.vgfxaA);
    obj1.accessibilityRole = "button";
    obj1.onPress = handleNavigatePrevious;
    const items8 = [, ];
    ({ navigationButton: arr9[0], navigationButtonPrevious: arr9[1] } = tmp);
    obj1.style = items8;
    const obj2 = { color: importDefault(dependencyMap[7]).colors.WHITE, size: "sm" };
    obj1.children = stateFromStores(arg1(dependencyMap[12]).ChevronLargeLeftIcon, obj2);
    tmp7 = stateFromStores(arg1(dependencyMap[11]).PressableOpacity, obj1);
  }
  items7[1] = tmp7;
  if (tmp8) {
    const obj3 = {};
    const intl2 = arg1(dependencyMap[9]).intl;
    obj3.accessibilityLabel = intl2.string(arg1(dependencyMap[9]).t.XiOHRX);
    obj3.accessibilityRole = "button";
    obj3.onPress = handleNavigateNext;
    const items9 = [, ];
    ({ navigationButton: arr10[0], navigationButtonNext: arr10[1] } = tmp);
    obj3.style = items9;
    const obj4 = { color: importDefault(dependencyMap[7]).colors.WHITE, size: "sm" };
    obj3.children = stateFromStores(arg1(dependencyMap[13]).ChevronLargeRightIcon, obj4);
    tmp8 = stateFromStores(arg1(dependencyMap[11]).PressableOpacity, obj3);
  }
  items7[2] = tmp8;
  obj.children = items7;
  return closure_9(first, obj);
});
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/guild_boosting/native/marketing_redesign/MarketingCardsScroller.tsx");

export const MarketingCardsScroller = forwardRefResult;
