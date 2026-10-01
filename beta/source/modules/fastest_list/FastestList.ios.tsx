// Module ID: 6492
// Function ID: 6493
// Name: fastest_list/FastestList
// Dependencies: [19, 17, 21, 6487, 6481, 6493, 6485, 2]

// Module 6492 (fastest_list/FastestList)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import FastestListItemTypeDefault from "FastestListItemType" /* 6485 */;
import FastList from "FastList" /* 6493 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let inActionSheet;

function noop() {

}
const RefreshControl = react_native.RefreshControl;
const jsx = Fragment.jsx;
const forwardRefResult = react.forwardRef((inActionSheet, ref) => {
  let AnimatedFastList;
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
  let num;
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
  let scrollPosition;
  let sectionFooterSize;
  let sectionHeaderIsSticky;
  let sectionHeaderSize;
  let sections;
  let showsHorizontalScrollIndicator;
  let showsVerticalScrollIndicator;
  let str3;
  let style;
  let tmp12;
  let tmp13;
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
  const onContentLengthChange = inActionSheet.onContentLengthChange;
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
  ({ sectionFooterSize, sections, showsHorizontalScrollIndicator, showsVerticalScrollIndicator, style } = inActionSheet);
  const merged = Object.assign(inActionSheet, Object.assign({ accessibilityLabel: 0, enabled: 0, estimatedListSize: 0, horizontal: 0, inActionSheet: 0, insetStart: 0, insetEnd: 0, itemSize: 0, keyboardDismissMode: 0, keyboardShouldPersistTaps: 0, keyExtractor: 0, listFooterSize: 0, listFooterAlwaysMounted: 0, listHeaderSize: 0, listHeaderAlwaysMounted: 0, onContentLengthChange: 0, onLayout: 0, preventNativeModalDismiss: 0, renderAhead: 0, renderItem: 0, renderListFooter: 0, renderListHeader: 0, renderSectionHeader: 0, renderSectionFooter: 0, scrollEventThrottle: 0, scrollIndicatorInsetEnd: 0, scrollIndicatorInsetStart: 0, sectionHeaderSize: 0, sectionHeaderIsSticky: 0, sectionFooterSize: 0, sections: 0, showsHorizontalScrollIndicator: 0, showsVerticalScrollIndicator: 0, style: 0 }));
  let tmp3 = keyExtractor;
  let tmp2 = inActionSheet;
  let tmp4 = inActionSheet(keyExtractor[3])(merged, horizontal);
  ({ onScroll, onScrollBeginDrag, onScrollEndDrag } = tmp4);
  const items = [keyExtractor];
  const items1 = [horizontal, scrollIndicatorInsetEnd, scrollIndicatorInsetStart];
  const tmp5 = inActionSheet(keyExtractor[4])({ estimatedListSize, horizontal });
  const callback = onContentLengthChange.useCallback((arg0, arg1, arg2) => {
    if (FastList.FastListItemTypes.ITEM === arg0) {
      let tmp11Result;
      if (keyExtractor != null) {
        let num3 = arg2;
        const ITEM = FastestListItemTypeDefault.ITEM;
        if (arg2 == null) {
          num3 = -1;
        }
        tmp11Result = tmp11(ITEM, arg1, num3);
      }
      return tmp11Result;
    } else if (FastList.FastListItemTypes.SECTION === arg0) {
      let tmp7Result;
      if (keyExtractor != null) {
        tmp7Result = tmp7(FastestListItemTypeDefault.SECTION_HEADER, arg1, -1);
      }
      return tmp7Result;
    } else if (FastList.FastListItemTypes.SECTION_FOOTER === arg0) {
      let tmp3Result;
      if (keyExtractor != null) {
        tmp3Result = tmp3(FastestListItemTypeDefault.SECTION_FOOTER, arg1, -1);
      }
      return tmp3Result;
    }
  }, items);
  const memo = onContentLengthChange.useMemo(() => {
    let tmp3;
    if (null != scrollIndicatorInsetStart) {
      let rect1;
      const tmp4 = horizontal;
      if (tmp4) {
        const rect = { left: scrollIndicatorInsetStart, right: scrollIndicatorInsetEnd };
        rect1 = rect;
      } else {
        rect1 = { top: scrollIndicatorInsetStart, bottom: scrollIndicatorInsetEnd };
      }
      tmp3 = rect1;
    }
    return tmp3;
  }, items1);
  const items2 = [preventNativeModalDismiss, inActionSheet];
  const memo1 = onContentLengthChange.useMemo(() => {
    let tmp;
    if (true === preventNativeModalDismiss) {
      if (true === inActionSheet) {
        tmp = <RefreshControl refreshing={false} onRefresh={noop} tintColor="transparent" />;
      }
    }
    return tmp;
  }, items2);
  const obj = onContentLengthChange;
  if ("animatedCallbacks" === merged.scrollReporting) {
    AnimatedFastList = horizontal(tmp3[5]).AnimatedFastList;
  } else {
    AnimatedFastList = tmp2(tmp3[5]);
  }
  const items3 = [horizontal, onContentLengthChange];
  const obj2 = { accessibilityLabel, automaticallyAdjustsScrollIndicatorInsets: null == memo, batchesToRender: num, refreshControl: memo1, chunkBase: tmp5, stickySectionsVariant: str3, footerSize: listFooterSize, getRecyclerKey: callback, headerSize: listHeaderSize, horizontal, inActionSheet, insetStart, insetEnd, itemSize, keyboardDismissMode, keyboardShouldPersistTaps, onContentSizeChange: tmp12, onLayout, onScroll: tmp13, onScrollBeginDrag, onScrollEndDrag, optimizeListItemRender: true, ref, renderItem, renderFooter: renderListFooter, renderHeader: renderListHeader, renderSection: renderSectionHeader, renderSectionFooter, scrollEventThrottle, scrollIndicatorInsets: memo, scrollPosValue: scrollPosition, sections, sectionSize: sectionHeaderSize, sectionFooterSize, showsHorizontalScrollIndicator, showsVerticalScrollIndicator, stickyHeaderFooter: listHeaderAlwaysMounted, style };
  const callback1 = obj.useCallback((arg0, arg1) => {
    if (onContentLengthChange != null) {
      let tmp2 = arg1;
      const tmp3 = horizontal;
      if (tmp3) {
        tmp2 = arg0;
      }
      tmp(tmp2);
    }
  }, items3);
  const tmp11 = scrollIndicatorInsetEnd;
  if ("nominal" !== renderAhead) {
    if ("half" === renderAhead) {
      num = 14;
    } else {
      num = 16;
    }
  }
  str3 = "disabled";
  if (sectionHeaderIsSticky) {
    str3 = "default";
  }
  tmp12 = undefined;
  if (null != onContentLengthChange) {
    tmp12 = callback1;
  }
  tmp13 = undefined;
  if ("animatedScrollPosition" !== merged.scrollReporting) {
    tmp13 = onScroll;
  }
  scrollPosition = undefined;
  if ("animatedScrollPosition" === merged.scrollReporting) {
    scrollPosition = merged.scrollPosition;
  }
  if (!listHeaderAlwaysMounted) {
    listHeaderAlwaysMounted = listFooterAlwaysMounted;
  }
  return tmp11(AnimatedFastList, obj2);
});
const result = size.fileFinishedImporting("modules/fastest_list/FastestList.ios.tsx");

export default forwardRefResult;
