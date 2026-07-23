// Module ID: 9259
// Function ID: 72350
// Name: getBatchesToRender
// Dependencies: [31, 33, 9254, 9249, 7588, 9252, 2]

// Module 9259 (getBatchesToRender)
import importAllResult from "result";
import { jsx } from "jsxProd";

const require = arg1;
function getBatchesToRender(renderAhead) {
  if ("nominal" !== renderAhead) {
    if ("half" === renderAhead) {
      return 14;
    } else if ("full" === renderAhead) {
      return 16;
    }
  }
}
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
  keyExtractor = keyExtractor.keyExtractor;
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
  const scrollIndicatorInsetStart = keyExtractor.scrollIndicatorInsetStart;
  ({ sectionHeaderIsSticky, renderItem, renderListFooter, renderListHeader, renderSectionHeader, renderSectionFooter, scrollEventThrottle, sectionHeaderSize } = keyExtractor);
  if (sectionHeaderIsSticky === undefined) {
    sectionHeaderIsSticky = true;
  }
  let obj = { accessibilityLabel: 0, enabled: 0, estimatedListSize: 0, horizontal: 0, inActionSheet: 0, insetStart: 0, insetEnd: 0, itemSize: 0, keyboardDismissMode: 0, keyboardShouldPersistTaps: 0, keyExtractor: 0, listFooterSize: 0, listFooterAlwaysMounted: 0, listHeaderSize: 0, listHeaderAlwaysMounted: 0, onLayout: 0, renderAhead: 0, renderItem: 0, renderListFooter: 0, renderListHeader: 0, renderSectionHeader: 0, renderSectionFooter: 0, scrollEventThrottle: 0, scrollIndicatorInsetEnd: 0, scrollIndicatorInsetStart: 0, sectionHeaderSize: 0, sectionHeaderIsSticky: 0, sectionFooterSize: 0, sections: 0, showsHorizontalScrollIndicator: 0, showsVerticalScrollIndicator: 0, style: 0 };
  ({ sectionFooterSize, sections, showsHorizontalScrollIndicator, showsVerticalScrollIndicator, style } = keyExtractor);
  Object.setPrototypeOf(null);
  const merged = Object.assign(keyExtractor, obj);
  ({ onScroll, onScrollBeginDrag, onScrollEndDrag } = keyExtractor(scrollIndicatorInsetEnd[2])(merged, horizontal));
  obj = { estimatedListSize, horizontal };
  const items = [keyExtractor];
  const tmp3 = keyExtractor(scrollIndicatorInsetEnd[2])(merged, horizontal);
  const items1 = [horizontal, scrollIndicatorInsetEnd, scrollIndicatorInsetStart];
  const callback = scrollIndicatorInsetStart.useCallback((arg0, arg1, arg2) => {
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
  const memo = scrollIndicatorInsetStart.useMemo(() => {
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
    let AnimatedFastList = horizontal(scrollIndicatorInsetEnd[4]).AnimatedFastList;
  } else {
    AnimatedFastList = keyExtractor(scrollIndicatorInsetEnd[4]);
  }
  obj = { accessibilityLabel, automaticallyAdjustsScrollIndicatorInsets: null == memo, batchesToRender: getBatchesToRender(renderAhead) };
  obj.chunkBase = keyExtractor(scrollIndicatorInsetEnd[3])(obj);
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
  return <AnimatedFastList accessibilityLabel={accessibilityLabel} automaticallyAdjustsScrollIndicatorInsets={null == memo} batchesToRender={getBatchesToRender(renderAhead)} />;
});
const result = require("useFastestListPropsScrollReporting").fileFinishedImporting("modules/fastest_list/FastestList.ios.tsx");

export default forwardRefResult;
