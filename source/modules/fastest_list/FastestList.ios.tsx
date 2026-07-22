// Module ID: 9252
// Function ID: 72309
// Name: getBatchesToRender
// Dependencies: []

// Module 9252 (getBatchesToRender)
function getBatchesToRender(renderAhead) {
  if ("nominal" !== renderAhead) {
    if ("half" === renderAhead) {
      return 14;
    } else if ("full" === renderAhead) {
      return 16;
    }
  }
}
const importAllResult = importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const forwardRefResult = importAllResult.forwardRef((keyExtractor, ref) => {
  let accessibilityLabel;
  let enabled;
  let estimatedListSize;
  let horizontal;
  let inActionSheet;
  let insetEnd;
  let insetStart;
  let itemSize;
  let keyboardDismissMode;
  let keyboardShouldPersistTaps;
  let listFooterAlwaysMounted;
  let listFooterSize;
  let listHeaderAlwaysMounted;
  let listHeaderSize;
  let onLayout;
  let onScroll;
  let onScrollBeginDrag;
  let onScrollEndDrag;
  let renderAhead;
  let renderItem;
  let renderListFooter;
  let renderListHeader;
  let renderSectionFooter;
  let renderSectionHeader;
  let scrollEventThrottle;
  let sectionFooterSize;
  let sectionHeaderIsSticky;
  let sectionHeaderSize;
  let sections;
  let showsHorizontalScrollIndicator;
  let showsVerticalScrollIndicator;
  let style;
  ({ enabled, horizontal } = keyExtractor);
  ({ accessibilityLabel, estimatedListSize } = keyExtractor);
  if (horizontal === undefined) {
    horizontal = false;
  }
  ref = horizontal;
  keyExtractor = keyExtractor.keyExtractor;
  const importDefault = keyExtractor;
  ({ listFooterAlwaysMounted, inActionSheet, insetStart, insetEnd, itemSize, keyboardDismissMode, keyboardShouldPersistTaps, listFooterSize } = keyExtractor);
  if (listFooterAlwaysMounted === undefined) {
    listFooterAlwaysMounted = false;
  }
  ({ listHeaderAlwaysMounted, listHeaderSize } = keyExtractor);
  if (listHeaderAlwaysMounted === undefined) {
    listHeaderAlwaysMounted = false;
  }
  ({ renderAhead, onLayout } = keyExtractor);
  if (renderAhead === undefined) {
    renderAhead = "nominal";
  }
  const scrollIndicatorInsetEnd = keyExtractor.scrollIndicatorInsetEnd;
  const dependencyMap = scrollIndicatorInsetEnd;
  const scrollIndicatorInsetStart = keyExtractor.scrollIndicatorInsetStart;
  ({ sectionHeaderIsSticky, renderItem, renderListFooter, renderListHeader, renderSectionHeader, renderSectionFooter, scrollEventThrottle, sectionHeaderSize } = keyExtractor);
  if (sectionHeaderIsSticky === undefined) {
    sectionHeaderIsSticky = true;
  }
  let obj = {};
  ({ sectionFooterSize, sections, showsHorizontalScrollIndicator, showsVerticalScrollIndicator, style } = keyExtractor);
  Object.setPrototypeOf(null);
  const merged = Object.assign(keyExtractor, obj);
  ({ onScroll, onScrollBeginDrag, onScrollEndDrag } = importDefault(dependencyMap[2])(merged, horizontal));
  obj = { estimatedListSize, horizontal };
  const items = [keyExtractor];
  const tmp3 = importDefault(dependencyMap[2])(merged, horizontal);
  const items1 = [horizontal, scrollIndicatorInsetEnd, scrollIndicatorInsetStart];
  const callback = importAllResult.useCallback((arg0, arg1, arg2) => {
    if (horizontal(scrollIndicatorInsetEnd[4]).FastListItemTypes.ITEM === arg0) {
      let tmp18Result;
      if (null != keyExtractor) {
        let num6 = -1;
        if (null != arg2) {
          num6 = arg2;
        }
        tmp18Result = keyExtractor(keyExtractor(scrollIndicatorInsetEnd[5]).ITEM, arg1, num6);
        const tmp18 = keyExtractor;
      }
      return tmp18Result;
    } else if (horizontal(scrollIndicatorInsetEnd[4]).FastListItemTypes.SECTION === arg0) {
      let tmp11;
      if (null != keyExtractor) {
        tmp11 = keyExtractor(keyExtractor(scrollIndicatorInsetEnd[5]).SECTION_HEADER, arg1, -1);
      }
      return tmp11;
    } else if (horizontal(scrollIndicatorInsetEnd[4]).FastListItemTypes.SECTION_FOOTER === arg0) {
      let tmp5;
      if (null != keyExtractor) {
        tmp5 = keyExtractor(keyExtractor(scrollIndicatorInsetEnd[5]).SECTION_FOOTER, arg1, -1);
      }
      return tmp5;
    }
  }, items);
  const memo = importAllResult.useMemo(() => {
    const obj = {};
    if (horizontal) {
      obj.left = tmp2;
      obj.right = scrollIndicatorInsetEnd;
    } else {
      obj.top = tmp2;
      obj.bottom = scrollIndicatorInsetEnd;
    }
  }, items1);
  if ("animatedCallbacks" === merged.scrollReporting) {
    let AnimatedFastList = ref(dependencyMap[4]).AnimatedFastList;
  } else {
    AnimatedFastList = importDefault(dependencyMap[4]);
  }
  obj = { accessibilityLabel, automaticallyAdjustsScrollIndicatorInsets: null == memo, batchesToRender: getBatchesToRender(renderAhead) };
  obj.chunkBase = importDefault(dependencyMap[3])(obj);
  let str = "disabled";
  if (sectionHeaderIsSticky) {
    str = "default";
  }
  obj.stickySectionsVariant = str;
  obj.footerSize = listFooterSize;
  obj.getRecyclerKey = callback;
  obj.headerSize = listHeaderSize;
  obj.horizontal = horizontal;
  obj.inActionSheet = inActionSheet;
  obj.insetStart = insetStart;
  obj.insetEnd = insetEnd;
  obj.itemSize = itemSize;
  obj.keyboardDismissMode = keyboardDismissMode;
  obj.keyboardShouldPersistTaps = keyboardShouldPersistTaps;
  obj.onLayout = onLayout;
  let tmp12;
  if ("animatedScrollPosition" !== merged.scrollReporting) {
    tmp12 = onScroll;
  }
  obj.onScroll = tmp12;
  obj.onScrollBeginDrag = onScrollBeginDrag;
  obj.onScrollEndDrag = onScrollEndDrag;
  obj.optimizeListItemRender = true;
  obj.ref = ref;
  obj.renderItem = renderItem;
  obj.renderFooter = renderListFooter;
  obj.renderHeader = renderListHeader;
  obj.renderSection = renderSectionHeader;
  obj.renderSectionFooter = renderSectionFooter;
  obj.scrollEventThrottle = scrollEventThrottle;
  obj.scrollIndicatorInsets = memo;
  let scrollPosition;
  if ("animatedScrollPosition" === merged.scrollReporting) {
    scrollPosition = merged.scrollPosition;
  }
  obj.scrollPosValue = scrollPosition;
  obj.sections = sections;
  obj.sectionSize = sectionHeaderSize;
  obj.sectionFooterSize = sectionFooterSize;
  obj.showsHorizontalScrollIndicator = showsHorizontalScrollIndicator;
  obj.showsVerticalScrollIndicator = showsVerticalScrollIndicator;
  if (!listHeaderAlwaysMounted) {
    listHeaderAlwaysMounted = listFooterAlwaysMounted;
  }
  obj.stickyHeaderFooter = listHeaderAlwaysMounted;
  obj.style = style;
  return <AnimatedFastList {...obj} />;
});
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/fastest_list/FastestList.ios.tsx");

export default forwardRefResult;
