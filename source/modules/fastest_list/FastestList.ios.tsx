// Module ID: 9188
// Function ID: 72046
// Name: getBatchesToRender
// Dependencies: [31, 27, 33, 9183, 9178, 7619, 9181, 2]

// Module 9188 (getBatchesToRender)
import importAllResult from "result";
import { RefreshControl } from "get ActivityIndicator";
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
function noop() {

}
const forwardRefResult = importAllResult.forwardRef((inActionSheet, ref) => {
  let accessibilityLabel;
  let enabled;
  let estimatedListSize;
  let horizontal;
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
  ({ enabled, horizontal } = inActionSheet);
  ({ accessibilityLabel, estimatedListSize } = inActionSheet);
  if (horizontal === undefined) {
    horizontal = false;
  }
  inActionSheet = inActionSheet.inActionSheet;
  const keyExtractor = inActionSheet.keyExtractor;
  ({ listFooterAlwaysMounted, insetStart, insetEnd, itemSize, keyboardDismissMode, keyboardShouldPersistTaps, listFooterSize } = inActionSheet);
  if (listFooterAlwaysMounted === undefined) {
    listFooterAlwaysMounted = false;
  }
  ({ listHeaderAlwaysMounted, listHeaderSize } = inActionSheet);
  if (listHeaderAlwaysMounted === undefined) {
    listHeaderAlwaysMounted = false;
  }
  const preventNativeModalDismiss = inActionSheet.preventNativeModalDismiss;
  ({ renderAhead, onLayout } = inActionSheet);
  if (renderAhead === undefined) {
    renderAhead = "nominal";
  }
  const scrollIndicatorInsetEnd = inActionSheet.scrollIndicatorInsetEnd;
  const scrollIndicatorInsetStart = inActionSheet.scrollIndicatorInsetStart;
  ({ sectionHeaderIsSticky, renderItem, renderListFooter, renderListHeader, renderSectionHeader, renderSectionFooter, scrollEventThrottle, sectionHeaderSize } = inActionSheet);
  if (sectionHeaderIsSticky === undefined) {
    sectionHeaderIsSticky = true;
  }
  let obj = { accessibilityLabel: 0, enabled: 0, estimatedListSize: 0, horizontal: 0, inActionSheet: 0, insetStart: 0, insetEnd: 0, itemSize: 0, keyboardDismissMode: 0, keyboardShouldPersistTaps: 0, keyExtractor: 0, listFooterSize: 0, listFooterAlwaysMounted: 0, listHeaderSize: 0, listHeaderAlwaysMounted: 0, onLayout: 0, preventNativeModalDismiss: 0, renderAhead: 0, renderItem: 0, renderListFooter: 0, renderListHeader: 0, renderSectionHeader: 0, renderSectionFooter: 0, scrollEventThrottle: 0, scrollIndicatorInsetEnd: 0, scrollIndicatorInsetStart: 0, sectionHeaderSize: 0, sectionHeaderIsSticky: 0, sectionFooterSize: 0, sections: 0, showsHorizontalScrollIndicator: 0, showsVerticalScrollIndicator: 0, style: 0 };
  ({ sectionFooterSize, sections, showsHorizontalScrollIndicator, showsVerticalScrollIndicator, style } = inActionSheet);
  Object.setPrototypeOf(null);
  const merged = Object.assign(inActionSheet, obj);
  ({ onScroll, onScrollBeginDrag, onScrollEndDrag } = inActionSheet(keyExtractor[3])(merged, horizontal));
  obj = { estimatedListSize, horizontal };
  const items = [keyExtractor];
  const tmp3 = inActionSheet(keyExtractor[3])(merged, horizontal);
  const items1 = [horizontal, scrollIndicatorInsetEnd, scrollIndicatorInsetStart];
  const callback = preventNativeModalDismiss.useCallback((arg0, arg1, arg2) => {
    if (horizontal(keyExtractor[5]).FastListItemTypes.ITEM === arg0) {
      let tmp18Result;
      if (null != keyExtractor) {
        let num6 = -1;
        if (null != arg2) {
          num6 = arg2;
        }
        tmp18Result = keyExtractor(inActionSheet(keyExtractor[6]).ITEM, arg1, num6);
        const tmp18 = keyExtractor;
      }
      return tmp18Result;
    } else if (horizontal(keyExtractor[5]).FastListItemTypes.SECTION === arg0) {
      let tmp11;
      if (null != keyExtractor) {
        tmp11 = keyExtractor(inActionSheet(keyExtractor[6]).SECTION_HEADER, arg1, -1);
      }
      return tmp11;
    } else if (horizontal(keyExtractor[5]).FastListItemTypes.SECTION_FOOTER === arg0) {
      let tmp5;
      if (null != keyExtractor) {
        tmp5 = keyExtractor(inActionSheet(keyExtractor[6]).SECTION_FOOTER, arg1, -1);
      }
      return tmp5;
    }
  }, items);
  const memo = preventNativeModalDismiss.useMemo(() => {
    const obj = {};
    if (horizontal) {
      obj.left = tmp2;
      obj.right = scrollIndicatorInsetEnd;
    } else {
      obj.top = tmp2;
      obj.bottom = scrollIndicatorInsetEnd;
    }
  }, items1);
  const items2 = [preventNativeModalDismiss, inActionSheet];
  const memo1 = preventNativeModalDismiss.useMemo(() => {
    let tmp;
    if (true === preventNativeModalDismiss) {
      if (true === inActionSheet) {
        const obj = { refreshing: false, onRefresh: outer1_6, tintColor: "transparent" };
        tmp = scrollIndicatorInsetStart(scrollIndicatorInsetEnd, obj);
      }
    }
    return tmp;
  }, items2);
  if ("animatedCallbacks" === merged.scrollReporting) {
    let AnimatedFastList = horizontal(keyExtractor[5]).AnimatedFastList;
  } else {
    AnimatedFastList = inActionSheet(keyExtractor[5]);
  }
  obj = { accessibilityLabel, automaticallyAdjustsScrollIndicatorInsets: null == memo, batchesToRender: getBatchesToRender(renderAhead), refreshControl: memo1 };
  obj.chunkBase = inActionSheet(keyExtractor[4])(obj);
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
  let tmp13;
  if ("animatedScrollPosition" !== merged.scrollReporting) {
    tmp13 = onScroll;
  }
  obj.onScroll = tmp13;
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
  return scrollIndicatorInsetStart(AnimatedFastList, obj);
});
const result = require("jsxProd").fileFinishedImporting("modules/fastest_list/FastestList.ios.tsx");

export default forwardRefResult;
