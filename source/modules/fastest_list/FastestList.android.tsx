// Module ID: 9236
// Function ID: 72240
// Dependencies: []

// Module 9236
importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
({ jsx: closure_4, Fragment: closure_5, jsxs: closure_6 } = arg1(dependencyMap[2]));
const tmp3 = arg1(dependencyMap[2]);
const animatedComponent = importDefault(dependencyMap[3]).createAnimatedComponent(importDefault(dependencyMap[4]));
const importDefaultResult1 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[3]).createAnimatedComponent(importDefault(dependencyMap[4]));
const importDefaultResult2 = importDefault(dependencyMap[3]);
let closure_8 = arg1(dependencyMap[5]).createBottomSheetScrollableComponent(arg1(dependencyMap[5]).SCROLLABLE_TYPE.SCROLLVIEW, animatedComponent);
let closure_9 = 0;
const obj4 = arg1(dependencyMap[5]);
const forwardRefResult = importAllResult.forwardRef(function FastestList(keyExtractor) {
  let inActionSheet;
  let itemSize;
  let keyboardDismissMode;
  let listFooterAlwaysMounted;
  let listFooterSize;
  let listHeaderAlwaysMounted;
  let listHeaderSize;
  let marginEnd;
  let marginStart;
  let onLayout;
  let onScroll;
  let onScrollBeginDrag;
  let onScrollEndDrag;
  let placeholderConfig;
  let placeholdersForceEnabled;
  let renderAhead;
  let renderItem;
  let renderListFooter;
  let renderListHeader;
  let renderSectionFooter;
  let renderSectionHeader;
  let scrollReporting;
  let sectionFooterSize;
  let sectionHeaderSize;
  let sections;
  let showsHorizontalScrollIndicator;
  let style;
  let style2;
  let wrapChildren;
  const arg1 = keyExtractor;
  const enabled = keyExtractor.enabled;
  let tmp = undefined === enabled;
  if (!tmp) {
    tmp = enabled;
  }
  const horizontal = keyExtractor.horizontal;
  let tmp2 = undefined !== horizontal;
  if (tmp2) {
    tmp2 = horizontal;
  }
  ({ keyboardDismissMode, inActionSheet } = keyExtractor);
  let tmp3 = undefined !== inActionSheet;
  if (tmp3) {
    tmp3 = inActionSheet;
  }
  const insetStart = keyExtractor.insetStart;
  let num = 0;
  if (undefined !== insetStart) {
    num = insetStart;
  }
  const insetEnd = keyExtractor.insetEnd;
  let num2 = 0;
  if (undefined !== insetEnd) {
    num2 = insetEnd;
  }
  const listId = keyExtractor.listId;
  const importDefault = listId;
  ({ placeholderConfig, renderAhead } = keyExtractor);
  let str = "nominal";
  ({ itemSize, listFooterSize, listFooterAlwaysMounted, listHeaderSize, listHeaderAlwaysMounted, onLayout, placeholdersForceEnabled } = keyExtractor);
  if (undefined !== renderAhead) {
    str = renderAhead;
  }
  const scrollEventThrottle = keyExtractor.scrollEventThrottle;
  let num3 = 32;
  ({ renderItem, renderListFooter, renderListHeader, renderSectionHeader, renderSectionFooter } = keyExtractor);
  if (undefined !== scrollEventThrottle) {
    num3 = scrollEventThrottle;
  }
  ({ scrollReporting, showsHorizontalScrollIndicator } = keyExtractor);
  let tmp4 = undefined === showsHorizontalScrollIndicator;
  ({ sections, sectionHeaderSize, sectionFooterSize } = keyExtractor);
  if (!tmp4) {
    tmp4 = showsHorizontalScrollIndicator;
  }
  const showsVerticalScrollIndicator = keyExtractor.showsVerticalScrollIndicator;
  ({ style, wrapChildren } = keyExtractor);
  const ref = importAllResult.useRef(null);
  const dependencyMap = ref;
  const ref1 = importAllResult.useRef(null);
  const ref2 = importAllResult.useRef(keyExtractor);
  const items = [keyExtractor];
  const effect = importAllResult.useEffect(() => {
    ref2.current = arg0;
  }, items);
  ({ style: style2, marginEnd, marginStart } = importDefault(dependencyMap[6])({ style }));
  const imperativeHandle = importAllResult.useImperativeHandle(arg1, () => ({
    scrollToTop() {
      let flag = arg0;
      if (arg0 === undefined) {
        flag = false;
      }
      if (null != closure_2.current) {
        const Commands = callback(closure_2[4]).Commands;
        Commands.scrollToTop(closure_2.current, flag);
      }
    },
    scrollToLocation(paddingStart) {
      let animated;
      let item;
      let section;
      ({ section, item, animated } = paddingStart);
      if (animated === undefined) {
        animated = false;
      }
      let num = paddingStart.paddingStart;
      if (num === undefined) {
        num = 0;
      }
      if (null != closure_2.current) {
        const Commands = callback(closure_2[4]).Commands;
        Commands.scrollToLocation(closure_2.current, section, item, animated, num);
      }
    }
  }));
  const items1 = [ref1];
  const tmp10 = importDefault(dependencyMap[6])({ style });
  const tmp5 = undefined === showsVerticalScrollIndicator || showsVerticalScrollIndicator;
  const callback = importAllResult.useCallback((nativeEvent) => {
    const current = ref1.current;
    if (null != current) {
      current.setVisibleItems(nativeEvent.nativeEvent);
    }
  }, items1);
  let obj = { estimatedListSize: keyExtractor.estimatedListSize, horizontal: tmp2 };
  const tmp12 = importDefault(dependencyMap[7])(ref2);
  const items2 = [listId];
  const tmp14 = importDefault(dependencyMap[8])(obj);
  const memo = importAllResult.useMemo(() => {
    let str = "fst";
    if (null != listId) {
      str = listId;
    }
    let closure_9 = tmp + 1;
    return "" + str + "-" + +closure_9;
  }, items2);
  const tmp17 = importDefault(dependencyMap[10])({ fastestListId: memo, itemSize, keyExtractor: keyExtractor.keyExtractor, listFooterSize, listHeaderSize, sections, sectionHeaderSize, sectionFooterSize });
  const tmp15 = importDefault(dependencyMap[9])(placeholderConfig);
  ({ onScroll, onScrollBeginDrag, onScrollEndDrag } = importDefault(dependencyMap[11])(keyExtractor, tmp2));
  if (tmp3) {
    let tmp21 = closure_8;
  } else {
    if ("animatedScrollPosition" !== scrollReporting) {
      if ("animatedCallbacks" !== scrollReporting) {
        tmp21 = importDefault(dependencyMap[4]);
      }
    }
    tmp21 = closure_7;
  }
  obj = { accessibilityLabel: keyExtractor.accessibilityLabel, horizontal: tmp2, insetStart: num, insetEnd: num2 };
  let tmp23 = "on-drag" === keyboardDismissMode;
  if (!tmp23) {
    tmp23 = "interactive" === keyboardDismissMode;
  }
  obj.keyboardDismissOnDrag = tmp23;
  obj.onUnexpectedItemSize = tmp12;
  obj.onLayout = onLayout;
  obj.onScroll = onScroll;
  obj.onScrollBeginDrag = onScrollBeginDrag;
  obj.onScrollEndDrag = onScrollEndDrag;
  obj.onVisibleItemsChanged = callback;
  obj.placeholderConfig = tmp15;
  obj.ref = ref;
  obj.renderAhead = str;
  obj.scrollEventThrottle = num3;
  obj.sectionsVersioned = tmp17;
  obj.showsHorizontalScrollIndicator = tmp4;
  obj.showsVerticalScrollIndicator = tmp5;
  obj.style = style2;
  const tmp18 = importDefault(dependencyMap[11])(keyExtractor, tmp2);
  const tmp22 = ref2;
  obj = { estimatedListSize: tmp14, horizontal: tmp2, listFooterAlwaysMounted, listHeaderAlwaysMounted, marginEnd, marginStart, placeholdersForceEnabled, ref: ref1, renderItem, renderListFooter, renderListHeader, renderSectionFooter, renderSectionHeader, sectionsVersioned: tmp17, wrapChildren };
  if (tmp) {
    if (null != placeholderConfig) {
      const obj1 = {};
      const items3 = [tmp22Result, tmp25];
      obj1.children = items3;
      let tmp28 = callback(closure_5, obj1);
    }
    return tmp28;
  }
  const obj2 = {};
  const tmp22Result = ref2(tmp21, obj);
  const merged = Object.assign(keyExtractor);
  tmp28 = ref2(importDefault(dependencyMap[13]), obj2);
});
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/fastest_list/FastestList.android.tsx");

export default forwardRefResult;
